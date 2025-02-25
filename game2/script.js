/**
 * Cat Ball Game
 * A game where the player controls a cat to catch yarn balls while avoiding obstacles.
 */

// Global constants
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const CAT_WIDTH = 80;
const CAT_HEIGHT = 60;
const BALL_RADIUS = 15;
const BALL_TYPES = {
    YARN: 'yarn',
    OBSTACLE: 'obstacle'
};
const DIFFICULTY = {
    EASY: { ballSpeed: 2, obstacleFrequency: 0.2, scoreMultiplier: 1 },
    MEDIUM: { ballSpeed: 3, obstacleFrequency: 0.3, scoreMultiplier: 1.5 },
    HARD: { ballSpeed: 4, obstacleFrequency: 0.4, scoreMultiplier: 2 }
};
const CAT_COLORS = ['orange', 'black', 'calico'];
const YARN_COLORS = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a06cd5', '#ff9a3c'];

// Game state
let canvas;
let ctx;
let cat;
let balls = [];
let lastBallSpawn = 0;
let ballSpawnRate = 1500; // in milliseconds
let score = 0;
let lives = 9;
let gameActive = false;
let gamePaused = false;
let gameTime = 0;
let gameTimeInterval;
let lastFrameTime = 0;
let ballsCaught = 0;
let highScore = localStorage.getItem('catGameHighScore') || 0;
let selectedDifficulty = 'MEDIUM';
let selectedCat = 'orange';
let difficultySettings;
let keyState = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// DOM Elements
let scoreElement;
let livesElement;
let ballsCaughtElement;
let highScoreElement;
let timePlayedElement;
let finalScoreElement;
let gameOverScreen;
let startScreen;
let pauseButton;
let resumeButton;
let stopButton;
let startButton;
let restartButton;
let mobileControls;

/**
 * Cat class representing the player-controlled character
 */
class Cat {
    constructor(color) {
        this.width = CAT_WIDTH;
        this.height = CAT_HEIGHT;
        this.x = CANVAS_WIDTH / 2 - this.width / 2;
        this.y = CANVAS_HEIGHT - this.height - 20;
        this.speed = 5;
        this.color = color;
        this.direction = 1; // 1 for right, -1 for left
        this.frameCount = 0;
        this.currentFrame = 0;
        this.animationSpeed = 10; // frames per animation change
        
        // Create cat image
        this.image = new Image();
        this.loadCatImage();
    }

    loadCatImage() {
        // In a real game, we'd load actual cat sprites
        // For this simplified version, we'll just set a color
        this.image.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" viewBox="0 0 80 60"><rect width="80" height="60" fill="${this.color === 'orange' ? 'orange' : (this.color === 'black' ? 'black' : '#f4a460')}" rx="15"/><circle cx="25" cy="25" r="5" fill="white"/><circle cx="55" cy="25" r="5" fill="white"/><circle cx="25" cy="25" r="2" fill="black"/><circle cx="55" cy="25" r="2" fill="black"/><path d="M35 35 Q40 45 45 35" stroke="white" stroke-width="2" fill="none"/></svg>`;
    }

    update(deltaTime) {
        // Update animation frame
        this.frameCount++;
        if (this.frameCount >= this.animationSpeed) {
            this.frameCount = 0;
            this.currentFrame = (this.currentFrame + 1) % 4; // Assuming 4 animation frames
        }

        // Handle movement based on key state
        if (keyState.ArrowLeft) {
            this.x = Math.max(0, this.x - this.speed);
            this.direction = -1;
        }
        if (keyState.ArrowRight) {
            this.x = Math.min(CANVAS_WIDTH - this.width, this.x + this.speed);
            this.direction = 1;
        }
        if (keyState.ArrowUp) {
            this.y = Math.max(0, this.y - this.speed);
        }
        if (keyState.ArrowDown) {
            this.y = Math.min(CANVAS_HEIGHT - this.height, this.y + this.speed);
        }
    }

    draw() {
        // Draw the cat
        if (this.image.complete) {
            ctx.save();
            if (this.direction === -1) {
                // Flip the image horizontally if facing left
                ctx.translate(this.x + this.width, this.y);
                ctx.scale(-1, 1);
                ctx.drawImage(this.image, 0, 0, this.width, this.height);
            } else {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            }
            ctx.restore();
        } else {
            // Fallback if image isn't loaded
            ctx.fillStyle = this.color === 'orange' ? 'orange' : (this.color === 'black' ? 'black' : '#f4a460');
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    reset() {
        this.x = CANVAS_WIDTH / 2 - this.width / 2;
        this.y = CANVAS_HEIGHT - this.height - 20;
    }
}

/**
 * Ball class for both yarn balls and obstacles
 */
class Ball {
    constructor(type) {
        this.radius = BALL_RADIUS;
        this.x = Math.random() * (CANVAS_WIDTH - this.radius * 2) + this.radius;
        this.y = -this.radius; // Start above the canvas
        this.type = type;
        
        if (this.type === BALL_TYPES.YARN) {
            this.color = YARN_COLORS[Math.floor(Math.random() * YARN_COLORS.length)];
            this.speed = difficultySettings.ballSpeed;
            this.points = 10 * difficultySettings.scoreMultiplier;
        } else {
            this.color = '#333';
            this.speed = difficultySettings.ballSpeed * 1.2; // Obstacles are faster
            this.points = -1; // Obstacles cost lives, not points
        }
        
        // Add some horizontal movement
        this.vx = (Math.random() - 0.5) * 2;
    }

    update(deltaTime) {
        this.y += this.speed;
        this.x += this.vx;
        
        // Bounce off walls
        if (this.x - this.radius < 0 || this.x + this.radius > CANVAS_WIDTH) {
            this.vx = -this.vx;
        }
        
        return this.y - this.radius > CANVAS_HEIGHT; // Return true if ball is off screen
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        if (this.type === BALL_TYPES.YARN) {
            // Add yarn details
            ctx.beginPath();
            ctx.moveTo(this.x - this.radius/2, this.y);
            ctx.lineTo(this.x + this.radius/2, this.y);
            ctx.moveTo(this.x, this.y - this.radius/2);
            ctx.lineTo(this.x, this.y + this.radius/2);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    checkCollision(cat) {
        // Simple rectangle-circle collision detection
        const catCenterX = cat.x + cat.width / 2;
        const catCenterY = cat.y + cat.height / 2;
        
        // Find the closest point on the rectangle to the circle
        let closestX = Math.max(cat.x, Math.min(catCenterX, this.x));
        let closestY = Math.max(cat.y, Math.min(cat.y + cat.height, this.y));
        
        // Calculate the distance between the closest point and the center of the circle
        const distanceX = this.x - closestX;
        const distanceY = this.y - closestY;
        const distanceSquared = distanceX * distanceX + distanceY * distanceY;
        
        return distanceSquared < (this.radius * this.radius);
    }
}

/**
 * Initialize the game
 */
function init() {
    // Get canvas context
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // Get DOM elements
    scoreElement = document.getElementById('score');
    livesElement = document.getElementById('lives');
    ballsCaughtElement = document.getElementById('ballsCaught');
    highScoreElement = document.getElementById('highScore');
    timePlayedElement = document.getElementById('timePlayed');
    finalScoreElement = document.getElementById('finalScore');
    gameOverScreen = document.getElementById('gameOverScreen');
    startScreen = document.getElementById('startScreen');
    pauseButton = document.getElementById('pauseButton');
    resumeButton = document.getElementById('resumeButton');
    stopButton = document.getElementById('stopButton');
    startButton = document.getElementById('startButton');
    restartButton = document.getElementById('restartButton');
    mobileControls = document.getElementById('mobileControls');
    
    // Set initial high score
    highScoreElement.textContent = highScore;
    
    // Add event listeners
    setupEventListeners();
    
    // Show start screen
    showStartScreen();
}

/**
 * Set up all event listeners for the game
 */
function setupEventListeners() {
    // Keyboard controls
    window.addEventListener('keydown', (e) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            keyState[e.key] = true;
            e.preventDefault(); // Prevent scrolling with arrow keys
        }
        
        // Pause/resume with 'p' key
        if (e.key.toLowerCase() === 'p' && gameActive) {
            togglePause();
        }
    });
    
    window.addEventListener('keyup', (e) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            keyState[e.key] = false;
        }
    });
    
    // Button controls
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
    pauseButton.addEventListener('click', () => togglePause(true));
    resumeButton.addEventListener('click', () => togglePause(false));
    stopButton.addEventListener('click', stopGame);
    
    // Mobile controls
    document.getElementById('upBtn').addEventListener('mousedown', () => { keyState.ArrowUp = true; });
    document.getElementById('downBtn').addEventListener('mousedown', () => { keyState.ArrowDown = true; });
    document.getElementById('leftBtn').addEventListener('mousedown', () => { keyState.ArrowLeft = true; });
    document.getElementById('rightBtn').addEventListener('mousedown', () => { keyState.ArrowRight = true; });
    
    document.getElementById('upBtn').addEventListener('mouseup', () => { keyState.ArrowUp = false; });
    document.getElementById('downBtn').addEventListener('mouseup', () => { keyState.ArrowDown = false; });
    document.getElementById('leftBtn').addEventListener('mouseup', () => { keyState.ArrowLeft = false; });
    document.getElementById('rightBtn').addEventListener('mouseup', () => { keyState.ArrowRight = false; });
    
    // Touch events for mobile controls
    document.getElementById('upBtn').addEventListener('touchstart', (e) => { keyState.ArrowUp = true; e.preventDefault(); });
    document.getElementById('downBtn').addEventListener('touchstart', (e) => { keyState.ArrowDown = true; e.preventDefault(); });
    document.getElementById('leftBtn').addEventListener('touchstart', (e) => { keyState.ArrowLeft = true; e.preventDefault(); });
    document.getElementById('rightBtn').addEventListener('touchstart', (e) => { keyState.ArrowRight = true; e.preventDefault(); });
    
    document.getElementById('upBtn').addEventListener('touchend', (e) => { keyState.ArrowUp = false; e.preventDefault(); });
    document.getElementById('downBtn').addEventListener('touchend', (e) => { keyState.ArrowDown = false; e.preventDefault(); });
    document.getElementById('leftBtn').addEventListener('touchend', (e) => { keyState.ArrowLeft = false; e.preventDefault(); });
    document.getElementById('rightBtn').addEventListener('touchend', (e) => { keyState.ArrowRight = false; e.preventDefault(); });
    
    // Difficulty selection
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            difficultyButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            selectedDifficulty = e.target.dataset.difficulty.toUpperCase();
        });
    });
    
    // Cat selection
    const catOptions = document.querySelectorAll('.cat-option');
    catOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            // Remove active class from all options
            catOptions.forEach(o => o.classList.remove('active'));
            // Add active class to clicked option
            const clickedOption = e.target.closest('.cat-option');
            clickedOption.classList.add('active');
            selectedCat = clickedOption.dataset.cat;
        });
    });
    
    // Check for mobile devices and show mobile controls if needed
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobileControls.classList.remove('hidden');
    }
}

/**
 * Show the start screen
 */
function showStartScreen() {
    startScreen.classList.remove('hidden');
    gameOverScreen.classList.add('hidden');
    
    // Set default selections
    document.querySelector(`[data-difficulty="medium"]`).classList.add('active');
    document.querySelector(`[data-cat="orange"]`).classList.add('active');
}

/**
 * Start the game
 */
function startGame() {
    // Hide start screen
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    
    // Set difficulty
    difficultySettings = DIFFICULTY[selectedDifficulty];
    
    // Create cat
    cat = new Cat(selectedCat);
    
    // Reset game state
    balls = [];
    lastBallSpawn = 0;
    score = 0;
    lives = 9;
    ballsCaught = 0;
    gameTime = 0;
    lastFrameTime = 0;
    
    // Update UI
    scoreElement.textContent = score;
    livesElement.textContent = lives;
    ballsCaughtElement.textContent = ballsCaught;
    
    // Enable game controls
    pauseButton.disabled = false;
    stopButton.disabled = false;
    resumeButton.disabled = true;
    
    // Start game timer
    gameTimeInterval = setInterval(() => {
        if (!gamePaused && gameActive) {
            gameTime++;
            updateTimeDisplay();
        }
    }, 1000);
    
    // Set game state
    gameActive = true;
    gamePaused = false;
    
    // Start game loop
    requestAnimationFrame(gameLoop);
}

/**
 * Restart the game after game over
 */
function restartGame() {
    gameOverScreen.classList.add('hidden');
    startGame();
}

/**
 * Stop the game
 */
function stopGame() {
    gameActive = false;
    clearInterval(gameTimeInterval);
    
    // Disable game controls
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    stopButton.disabled = true;
    
    // Show start screen
    showStartScreen();
}

/**
 * Toggle pause state
 */
function togglePause(pause = null) {
    if (pause !== null) {
        gamePaused = pause;
    } else {
        gamePaused = !gamePaused;
    }
    
    pauseButton.disabled = gamePaused;
    resumeButton.disabled = !gamePaused;
}

/**
 * Update time display in MM:SS format
 */
function updateTimeDisplay() {
    const minutes = Math.floor(gameTime / 60).toString().padStart(2, '0');
    const seconds = (gameTime % 60).toString().padStart(2, '0');
    timePlayedElement.textContent = `${minutes}:${seconds}`;
}

/**
 * Spawn a new ball based on difficulty and time
 */
function spawnBall(currentTime) {
    if (currentTime - lastBallSpawn >= ballSpawnRate) {
        // Determine if this should be an obstacle
        const isObstacle = Math.random() < difficultySettings.obstacleFrequency;
        const type = isObstacle ? BALL_TYPES.OBSTACLE : BALL_TYPES.YARN;
        
        balls.push(new Ball(type));
        lastBallSpawn = currentTime;
    }
}

/**
 * Check for collisions between cat and all balls
 */
function checkCollisions() {
    for (let i = balls.length - 1; i >= 0; i--) {
        const ball = balls[i];
        if (ball.checkCollision(cat)) {
            // Handle collision
            if (ball.type === BALL_TYPES.YARN) {
                score += ball.points;
                ballsCaught++;
                
                // Update UI
                scoreElement.textContent = score;
                ballsCaughtElement.textContent = ballsCaught;
                
                // Check for high score
                if (score > highScore) {
                    highScore = score;
                    highScoreElement.textContent = highScore;
                    localStorage.setItem('catGameHighScore', highScore);
                }
            } else {
                // Obstacle hit
                lives--;
                livesElement.textContent = lives;
                
                // Check for game over
                if (lives <= 0) {
                    gameOver();
                }
            }
            
            // Remove the ball
            balls.splice(i, 1);
        }
    }
}

/**
 * Game over handling
 */
function gameOver() {
    gameActive = false;
    clearInterval(gameTimeInterval);
    
    // Update final score
    finalScoreElement.textContent = score;
    
    // Show game over screen
    gameOverScreen.classList.remove('hidden');
    
    // Disable game controls
    pauseButton.disabled = true;
    resumeButton.disabled = true;
    stopButton.disabled = true;
}

/**
 * Main game loop
 */
function gameLoop(timestamp) {
    if (!gameActive) return;
    
    // Calculate delta time for smooth animations
    const deltaTime = timestamp - lastFrameTime;
    lastFrameTime = timestamp;
    
    // If game is paused, just redraw and continue the loop
    if (gamePaused) {
        // Draw pause message
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = 'white';
        ctx.font = '36px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        
        requestAnimationFrame(gameLoop);
        return;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Spawn new balls
    spawnBall(timestamp);
    
    // Update and draw cat
    cat.update(deltaTime);
    cat.draw();
    
    // Update and draw balls, remove those that are off-screen
    for (let i = balls.length - 1; i >= 0; i--) {
        const ball = balls[i];
        const isOffScreen = ball.update(deltaTime);
        
        if (isOffScreen) {
            balls.splice(i, 1);
        } else {
            ball.draw();
        }
    }
    
    // Check for collisions
    checkCollisions();
    
    // Continue the game loop
    requestAnimationFrame(gameLoop);
}

// Initialize game when page loads
window.addEventListener('load', init);
