/**
 * Number Guessing Game
 * A simple game where the player tries to guess a random number between 1 and 100.
 */

// Game variables
let randomNumber;
let attempts = 0;
let gameOver = false;

// DOM elements
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attemptsCount');
const guessList = document.getElementById('guessList');
const restartButton = document.getElementById('restartButton');

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
 * Initializes the game state
 */
function initGame() {
    randomNumber = getRandomNumber(1, 100);
    attempts = 0;
    gameOver = false;
    
    // Reset UI elements
    attemptsCount.textContent = '0';
    message.textContent = "Let's start guessing!";
    guessList.innerHTML = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitGuess.disabled = false;
    
    // Focus on input field for better UX
    guessInput.focus();
    
    console.log("Game initialized! Target number:", randomNumber);
}

/**
 * Checks the player's guess against the random number
 * @param {number} guess - The player's guessed number
 */
function checkGuess(guess) {
    // Increment attempts
    attempts++;
    attemptsCount.textContent = attempts;
    
    // Add to guess history
    const listItem = document.createElement('li');
    listItem.textContent = `Guess #${attempts}: ${guess}`;
    guessList.appendChild(listItem);
    
    // Check if guess is correct
    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        message.className = 'success';
        endGame(true);
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.';
        message.className = 'hint';
    } else {
        message.textContent = 'Too high! Try a lower number.';
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
    
    if (isWin) {
        console.log(`Game over! Player won in ${attempts} attempts.`);
    } else {
        console.log("Game over!");
    }
}

/**
 * Handles submit guess button click
 */
function handleGuessSubmit() {
    if (gameOver) return;
    
    const guess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
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

// Initialize game on page load
document.addEventListener('DOMContentLoaded', initGame);
