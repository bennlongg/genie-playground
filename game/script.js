/**
 * Enhanced Number Guessing Game with Leaderboard
 * A game where the player tries to guess a random number with difficulty levels, timer, scoring, and leaderboard.
 */

// Game variables
let randomNumber;
let attempts = 0;
let gameOver = false;
let timerInterval;
let timeRemaining = 45; // Default to medium difficulty
let maxTime = 45;
let minNumber = 1;
let maxNumber = 100;
let currentScore = 0;
let difficultyMultiplier = 1;
let hintUsed = false;
let playerName = '';
let highScores = [];
const MAX_LEADERBOARD_ENTRIES = 5;

// DOM elements
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attemptsCount');
const guessList = document.getElementById('guessList');
const restartButton = document.getElementById('restartButton');
const difficultyLevel = document.getElementById('difficultyLevel');
const timerDisplay = document.getElementById('timer');
const timerBar = document.getElementById('timerBar');
const scoreDisplay = document.getElementById('score');
const gameDescription = document.getElementById('gameDescription');
const hintButton = document.getElementById('hintButton');
const hintText = document.getElementById('hintText');
const leaderboardList = document.getElementById('leaderboardList');
const leaderboardContainer = document.getElementById('leaderboardContainer');
const playerNameInput = document.getElementById('playerNameInput');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const highScoreModal = document.getElementById('highScoreModal');
const closeModalBtn = document.getElementById('closeModalBtn');

/**
 * Generates a random number between min and max (inclusive)
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} A random integer between min and max
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Updates game parameters based on selected difficulty
 */
function setDifficultyParameters() {
    const difficulty = difficultyLevel.value;
    
    switch(difficulty) {
        case 'easy':
            minNumber = 1;
            maxNumber = 50;
            maxTime = 60;
            difficultyMultiplier = 0.8;
            gameDescription.textContent = `Guess a number between ${minNumber} and ${maxNumber} in ${maxTime} seconds!`;
            break;
        case 'medium':
            minNumber = 1;
            maxNumber = 100;
            maxTime = 45;
            difficultyMultiplier = 1;
            gameDescription.textContent = `Guess a number between ${minNumber} and ${maxNumber} in ${maxTime} seconds!`;
            break;
        case 'hard':
            minNumber = 1;
            maxNumber = 200;
            maxTime = 30;
            difficultyMultiplier = 1.5;
            gameDescription.textContent = `Guess a number between ${minNumber} and ${maxNumber} in ${maxTime} seconds!`;
            break;
    }
    
    // Update input attributes based on range
    guessInput.min = minNumber;
    guessInput.max = maxNumber;
    guessInput.placeholder = `Enter a number (${minNumber}-${maxNumber})`;
}

/**
 * Retrieves high scores from localStorage
 */
function retrieveHighScores() {
    const storedScores = localStorage.getItem('numberGameHighScores');
    if (storedScores) {
        highScores = JSON.parse(storedScores);
    } else {
        highScores = [];
    }
    updateLeaderboard();
}

/**
 * Saves high scores to localStorage
 */
function saveHighScores() {
    localStorage.setItem('numberGameHighScores', JSON.stringify(highScores));
}

/**
 * Updates the high scores list with a new score if it qualifies
 * @param {string} name - Player name
 * @param {number} score - Player score
 * @param {string} difficulty - Difficulty level
 * @returns {boolean} Whether the score was high enough to be added
 */
function updateHighScores(name, score, difficulty) {
    // Don't add scores of 0
    if (score <= 0) return false;
    
    const newEntry = {
        name: name.trim() || 'Anonymous',
        score: score,
        difficulty: difficulty,
        date: new Date().toLocaleDateString()
    };
    
    // Add the new score
    highScores.push(newEntry);
    
    // Sort high scores (highest first)
    highScores.sort((a, b) => b.score - a.score);
    
    // Keep only the top MAX_LEADERBOARD_ENTRIES scores
    if (highScores.length > MAX_LEADERBOARD_ENTRIES) {
        highScores = highScores.slice(0, MAX_LEADERBOARD_ENTRIES);
    }
    
    // Save to localStorage
    saveHighScores();
    
    // Update the leaderboard display
    updateLeaderboard();
    
    // Check if this score made it to the leaderboard
    return highScores.some(entry => entry.name === newEntry.name && entry.score === newEntry.score);
}

/**
 * Updates the leaderboard display in the DOM
 */
function updateLeaderboard() {
    // Clear the current leaderboard
    leaderboardList.innerHTML = '';
    
    // If no high scores yet, show a message
    if (highScores.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.textContent = 'No high scores yet. Be the first!';
        emptyItem.className = 'empty-leaderboard';
        leaderboardList.appendChild(emptyItem);
        return;
    }
    
    // Add each high score to the leaderboard
    highScores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'leaderboard-entry';
        
        // Add crown icon for top score
        const rankDisplay = index === 0 ? '👑 1' : (index + 1).toString();
        
        listItem.innerHTML = `
            <span class="rank">${rankDisplay}</span>
            <span class="name">${entry.name}</span>
            <span class="score">${entry.score}</span>
            <span class="difficulty">${entry.difficulty}</span>
            <span class="date">${entry.date}</span>
        `;
        
        // Highlight current player's scores
        if (entry.name === playerName && playerName !== '') {
            listItem.classList.add('current-player');
        }
        
        leaderboardList.appendChild(listItem);
    });
}

/**
 * Shows the high score form modal
 */
function showHighScoreForm() {
    highScoreModal.style.display = 'flex';
    playerNameInput.focus();
    // Pre-fill with previous name if available
    if (playerName) {
        playerNameInput.value = playerName;
    }
}

/**
 * Hides the high score form modal
 */
function hideHighScoreForm() {
    highScoreModal.style.display = 'none';
}

/**
 * Handles saving a new high score
 */
function handleSaveScore() {
    playerName = playerNameInput.value.trim() || 'Anonymous';
    const isHighScore = updateHighScores(playerName, currentScore, difficultyLevel.value);
    
    hideHighScoreForm();
    
    // Show a confirmation message
    if (isHighScore) {
        message.textContent = `Congratulations! Your score of ${currentScore} has been added to the leaderboard!`;
        message.className = 'success';
        
        // Scroll the leaderboard into view
        leaderboardContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Starts the game timer
 */
function startTimer() {
    // Clear any existing interval
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timeRemaining = maxTime;
    timerDisplay.textContent = timeRemaining;
    timerBar.style.width = '100%';
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;
        
        // Update progress bar
        const percentRemaining = (timeRemaining / maxTime) * 100;
        timerBar.style.width = `${percentRemaining}%`;
        
        // Change color based on time remaining
        if (percentRemaining < 25) {
            timerBar.style.backgroundColor = '#ff4d4d'; // Red
        } else if (percentRemaining < 50) {
            timerBar.style.backgroundColor = '#ffad33'; // Orange
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            message.textContent = `Time's up! The number was ${randomNumber}.`;
            message.className = 'error';
            endGame(false);
        }
    }, 1000);
}

/**
 * Calculates the score based on difficulty, time remaining, and attempts
 * @returns {number} The calculated score
 */
function calculateScore() {
    // Base score calculation
    const timeBonus = Math.floor(timeRemaining * 2);
    const attemptPenalty = Math.max(0, attempts * 5);
    const difficultyBonus = Math.floor(50 * difficultyMultiplier);
    
    // Calculate final score
    let finalScore = difficultyBonus + timeBonus - attemptPenalty;
    
    // Minimum score of 10 for winning (unless hints were used)
    if (hintUsed) {
        finalScore = Math.max(5, finalScore - 10);
    } else {
        finalScore = Math.max(10, finalScore);
    }
    
    return finalScore;
}

/**
 * Provides a hint about the target number
 */
function provideHint() {
    if (gameOver || currentScore < 10) return;
    
    // Deduct points for using a hint
    currentScore -= 10;
    scoreDisplay.textContent = currentScore;
    hintUsed = true;
    
    // Generate a helpful hint
    let hintMessage = '';
    const isEven = randomNumber % 2 === 0;
    const nearestTen = Math.floor(randomNumber / 10) * 10;
    
    // Different types of hints
    const hintType = getRandomNumber(1, 4);
    
    switch(hintType) {
        case 1:
            hintMessage = `The number is ${isEven ? 'even' : 'odd'}.`;
            break;
        case 2:
            hintMessage = `The number is ${randomNumber > (minNumber + maxNumber) / 2 ? 'greater' : 'less'} than ${Math.floor((minNumber + maxNumber) / 2)}.`;
            break;
        case 3:
            hintMessage = `The number is close to ${nearestTen}.`;
            break;
        case 4:
            const lastDigit = randomNumber % 10;
            hintMessage = `The last digit of the number is ${lastDigit}.`;
            break;
    }
    
    hintText.textContent = hintMessage;
    hintText.classList.add('active');
}

/**
 * Initializes the game state
 */
function initGame() {
    // Set parameters based on difficulty
    setDifficultyParameters();
    
    // Generate random number within range
    randomNumber = getRandomNumber(minNumber, maxNumber);
    
    // Reset game state
    attempts = 0;
    gameOver = false;
    hintUsed = false;
    currentScore = 50; // Starting score
    
    // Reset UI elements
    attemptsCount.textContent = '0';
    message.textContent = "Start guessing!";
    message.className = 'message';
    guessList.innerHTML = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitGuess.disabled = false;
    hintText.textContent = '';
    hintText.classList.remove('active');
    
    // Hide high score form if visible
    hideHighScoreForm();
    
    // Update score display
    scoreDisplay.textContent = currentScore;
    
    // Start timer
    startTimer();
    
    // Focus on input field for better UX
    guessInput.focus();
    
    console.log(`Game initialized! Target: ${randomNumber}, Difficulty: ${difficultyLevel.value}`);
}

/**
 * Checks the player's guess against the random number
 * @param {number} guess - The player's guessed number
 */
function checkGuess(guess) {
    // Increment attempts
    attempts++;
    attemptsCount.textContent = attempts;
    
    // Deduct a small score for each attempt
    currentScore = Math.max(0, currentScore - 2);
    scoreDisplay.textContent = currentScore;
    
    // Add to guess history
    const listItem = document.createElement('li');
    let distance = Math.abs(guess - randomNumber);
    let feedbackClass = '';
    
    // Add visual feedback to history items
    if (distance === 0) {
        feedbackClass = 'correct';
    } else if (distance <= 5) {
        feedbackClass = 'very-close';
    } else if (distance <= 15) {
        feedbackClass = 'close';
    } else {
        feedbackClass = 'far';
    }
    
    listItem.textContent = `Guess #${attempts}: ${guess}`;
    listItem.className = feedbackClass;
    guessList.appendChild(listItem);
    
    // Check if guess is correct
    if (guess === randomNumber) {
        // Calculate final score when won
        const finalScore = calculateScore();
        currentScore = finalScore;
        scoreDisplay.textContent = currentScore;
        
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts! Final score: ${finalScore}`;
        message.className = 'success';
        endGame(true);
    } else {
        // Provide feedback
        let feedbackMessage = '';
        
        if (guess < randomNumber) {
            feedbackMessage = 'Too low! ';
            if (randomNumber - guess <= 5) {
                feedbackMessage += "You're VERY close!";
            } else if (randomNumber - guess <= 15) {
                feedbackMessage += "You're getting closer!";
            }
        } else {
            feedbackMessage = 'Too high! ';
            if (guess - randomNumber <= 5) {
                feedbackMessage += "You're VERY close!";
            } else if (guess - randomNumber <= 15) {
                feedbackMessage += "You're getting closer!";
            }
        }
        
        message.textContent = feedbackMessage;
        message.className = 'hint';
    }
    
    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

/**
 * Ends the current game
 * @param {boolean} isWin - Whether the player won the game
 */
function endGame(isWin) {
    gameOver = true;
    guessInput.disabled = true;
    submitGuess.disabled = true;
    
    // Stop the timer
    clearInterval(timerInterval);
    
    if (isWin) {
        console.log(`Game over! Player won in ${attempts} attempts with score ${currentScore}`);
        
        // Check if score is potentially a high score
        if (currentScore > 0) {
            // If there are fewer than MAX_LEADERBOARD_ENTRIES high scores, or if this score is higher than the lowest one
            const lowestHighScore = highScores.length < MAX_LEADERBOARD_ENTRIES ? 0 : highScores[highScores.length - 1].score;
            
            if (highScores.length < MAX_LEADERBOARD_ENTRIES || currentScore > lowestHighScore) {
                // Show high score form
                showHighScoreForm();
            }
        }
    } else {
        console.log("Game over! Player lost.");
    }
}

/**
 * Handles submit guess button click
 */
function handleGuessSubmit() {
    if (gameOver) return;
    
    const guess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        message.textContent = `Please enter a valid number between ${minNumber} and ${maxNumber}.`;
        message.className = 'error';
        return;
    }
    
    checkGuess(guess);
}

// Event listeners
submitGuess.addEventListener('click', handleGuessSubmit);

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuessSubmit();
    }
});

restartButton.addEventListener('click', initGame);

difficultyLevel.addEventListener('change', function() {
    if (!gameOver) {
        // If game is in progress, confirm before changing
        if (confirm('Changing difficulty will restart the game. Continue?')) {
            initGame();
        } else {
            // Revert to previous selection
            this.value = this.dataset.lastValue || 'medium';
        }
    } else {
        initGame();
    }
    
    // Store last value for reverting if needed
    this.dataset.lastValue = this.value;
});

hintButton.addEventListener('click', provideHint);

// High score form event listeners
saveScoreBtn.addEventListener('click', handleSaveScore);
closeModalBtn.addEventListener('click', hideHighScoreForm);

// Allow pressing Enter in the name input to save score
playerNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSaveScore();
    }
});

// Initialize high scores and game on page load
document.addEventListener('DOMContentLoaded', function() {
    retrieveHighScores();
    initGame();
});
