// Load FIGlet.js library
document.addEventListener('DOMContentLoaded', function() {
    // Dynamically load the FIGlet library
    const figletScript = document.createElement('script');
    figletScript.src = 'https://unpkg.com/figlet@1.5.2/lib/figlet.js';
    document.head.appendChild(figletScript);

    // Track if FIGlet is loaded
    let figletLoaded = false;

    figletScript.onload = function() {
        console.log('FIGlet library loaded successfully');
        figletLoaded = true;
        // Enable generate button once library is loaded
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate ASCII Art';
    };

    figletScript.onerror = function() {
        console.error('Failed to load FIGlet library');
        showError("Failed to load ASCII art library. Please refresh the page or try again later.");
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate ASCII Art (Limited Mode)';
    };

    // DOM Elements
    const inputText = document.getElementById('inputText');
    const fontSelect = document.getElementById('fontSelect');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const asciiOutput = document.getElementById('asciiOutput');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Set initial state of generate button
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    generateBtn.disabled = true;

    // Font mapping for FIGlet
    const fontMap = {
        'standard': 'Standard',
        'shadow': 'Shadow',
        'thinkertoy': 'Thinkertoy',
        'block': 'Block',
        'banner': 'Banner'
    };

    // Simplified ASCII art function for cases when FIGlet fails
    function simpleASCII(text, style) {
        // Very basic ASCII art converter as a last resort
        let output = '';
        const chars = {
            'standard': {
                border: '*',
                spacing: ' '
            },
            'shadow': {
                border: '#',
                spacing: ' '
            },
            'thinkertoy': {
                border: 'o',
                spacing: '-'
            },
            'block': {
                border: '█',
                spacing: ' '
            },
            'banner': {
                border: '#',
                spacing: '='
            }
        };
        
        const styleChars = chars[style] || chars['standard'];
        
        // Create a basic bordered ASCII art
        const padding = 2;
        const textLine = styleChars.border + styleChars.spacing.repeat(padding) + 
                        text + styleChars.spacing.repeat(padding) + styleChars.border;
        const borderLine = styleChars.border.repeat(textLine.length);
        
        output = borderLine + '\n' + textLine + '\n' + borderLine;
        return output;
    }

    // Generate ASCII Art
    function generateASCII() {
        const text = inputText.value.trim();
        
        if (!text) {
            showError("Please enter some text first!");
            return;
        }
        
        const selectedFont = fontSelect.value;
        
        // Show loading state
        asciiOutput.textContent = "Generating...";
        copyBtn.disabled = true;
        
        try {
            // Check if FIGlet library is loaded and available
            if (figletLoaded && typeof figlet !== 'undefined') {
                try {
                    // Use FIGlet for ASCII art generation
                    figlet.text(text, {
                        font: fontMap[selectedFont],
                        horizontalLayout: 'default',
                        verticalLayout: 'default'
                    }, function(err, result) {
                        if (err) {
                            console.error("FIGlet error:", err);
                            // Try simplified ASCII art as backup
                            const backupResult = simpleASCII(text, selectedFont);
                            displayResult(backupResult);
                        } else if (!result || result.trim() === '') {
                            console.warn("FIGlet returned empty result");
                            // Try simplified ASCII art as backup
                            const backupResult = simpleASCII(text, selectedFont);
                            displayResult(backupResult);
                        } else {
                            // Success! Display the result
                            displayResult(result);
                        }
                    });
                } catch (figletError) {
                    console.error("Error using FIGlet:", figletError);
                    // Try simplified ASCII art as backup
                    const backupResult = simpleASCII(text, selectedFont);
                    displayResult(backupResult);
                }
            } else {
                // FIGlet not available, use simplified converter
                console.warn("FIGlet library not available, using simplified converter");
                const backupResult = simpleASCII(text, selectedFont);
                displayResult(backupResult);
            }
        } catch (error) {
            showError("Error generating ASCII art: " + error.message);
            console.error("General error in ASCII art generation:", error);
        }
    }

    // Display the generated ASCII art
    function displayResult(result) {
        if (!result || result.trim() === '') {
            showError("Failed to generate ASCII art. Please try different text or font.");
            return;
        }
        
        asciiOutput.textContent = result;
        copyBtn.disabled = false;
    }

    // Show error message
    function showError(message) {
        asciiOutput.textContent = `Error: ${message}`;
        asciiOutput.classList.add('error');
        setTimeout(() => {
            asciiOutput.classList.remove('error');
        }, 3000);
    }

    // Copy to clipboard functionality
    function copyToClipboard() {
        const textToCopy = asciiOutput.textContent;
        
        if (!textToCopy || textToCopy.includes('Error:') || textToCopy === 'Generating...') {
            return;
        }
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Show success feedback
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            })
            .catch(err => {
                showError("Failed to copy: " + err.message);
            });
    }

    // Toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = darkModeToggle.checked;
        document.body.classList.toggle('dark-mode', isDarkMode);
        asciiOutput.classList.toggle('dark-mode', isDarkMode);
    }

    // Event Listeners
    generateBtn.addEventListener('click', generateASCII);
    copyBtn.addEventListener('click', copyToClipboard);
    darkModeToggle.addEventListener('change', toggleDarkMode);
    
    // Generate ASCII art on Enter key press
    inputText.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            generateASCII();
        }
    });

    // Initialize with a welcome message
    asciiOutput.textContent = `
    __    __    ___  _        ___   ___   __  __  ___ 
   / /\\  / /\\  / __\\/ \\      |_ _| |_ _| / / / / / __\\
  / /  \\/ /  \\/ /   | |       | |   | | / / / / / /   
 / /\\__/ /\\__/ /____| |___    | |   | |/ /_/ / / /___ 
/_/\\__/_/\\__/\\____/\\_____/   |___|___|\\_____/\\____/  
                                                      
  ___   ___  _  _  ___  ___     _   _____  ___   ___ 
 / __\\ / __\\/ \\/ \\/ __\\/ _ \\   /_\\ /__   \\/ _ \\ / __\\
/ /   / /   | |\\/| |  _|| (_) | //_\\\\  / /\\/ /_\\// /   
\\ \\___\\ \\___| |  | | /__|\\__, |/  _  \\/ / / /_\\\\/ /___ 
 \\____/\\____\\_/  \\_\\____/  /_/\\_/ \\_/\\/  \\____/\\____/ 
                                                      
Type some text and click Generate to start!`;
});
