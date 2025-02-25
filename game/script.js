/**
 * Enhanced Number Guessing Game
 * A game where the player tries to guess a random number with difficulty levels, timer, and scoring.
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

// Initialize game on page load
document.addEventListener('DOMContentLoaded', initGame);
