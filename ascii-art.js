// Load FIGlet.js library
document.addEventListener('DOMContentLoaded', function() {
    // Dynamically load the FIGlet library
    const figletScript = document.createElement('script');
    figletScript.src = 'https://unpkg.com/figlet@1.5.2/lib/figlet.js';
    document.head.appendChild(figletScript);

    figletScript.onload = function() {
        console.log('FIGlet library loaded successfully');
    };

    // DOM Elements
    const inputText = document.getElementById('inputText');
    const fontSelect = document.getElementById('fontSelect');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const asciiOutput = document.getElementById('asciiOutput');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Font mapping for FIGlet
    const fontMap = {
        'standard': 'Standard',
        'shadow': 'Shadow',
        'thinkertoy': 'Thinkertoy',
        'block': 'Block',
        'banner': 'Banner'
    };

    // ASCII Art Sample Database for quick demonstration
    const asciiSamples = {
        'standard': {
            'Hello': `  _   _      _ _       
 | | | | ___| | | ___  
 | |_| |/ _ \\ | |/ _ \\ 
 |  _  |  __/ | | (_) |
 |_| |_|\\___|_|_|\\___/ 
                       `,
            'ASCII': `    _    ____   ____ ___ ___ 
   / \\  / ___| / ___|_ _|_ _|
  / _ \\ \\___ \\| |    | | | | 
 / ___ \\ ___) | |___ | | | | 
/_/   \\_\\____/ \\____|___|___|
                             `
        },
        'shadow': {
            'Hello': `      _    _          _   _          
     | |  | |        | | | |         
     | |__| |   ___  | | | |   ___   
     |  __  |  / _ \\ | | | |  / _ \\  
     | |  | | |  __/ | | | | | (_) | 
     |_|  |_|  \\___| |_| |_|  \\___/  
                                     
                                     `,
            'ASCII': `                                    
    /\\    ___   ___  ___  ___ 
   /  \\  / __| / __||_ _||_ _|
  / /\\ \\ \\__ \\| (__  | |  | | 
 /_/  \\_\\|___/ \\___||___||___|
                              `
        },
        'thinkertoy': {
            'Hello': `
 o   o     o  o      
 |   |     |  |      
 O--OO-o-o |  | o--o 
 |   ||    |  | |  | 
 o   Oo    o--o o--O 
                   | 
                o--o  `,
            'ASCII': `
    o                    
   / \\   o-o   o-o o o-o 
  /___\\  |  | |    | |  |
 /     \\ |  |  o-o | |  |
                          `
        },
        'block': {
            'Hello': `
 _               _     _          
| |             | |   | |         
| |__     ___   | |   | |    ___  
|  _ \\   / _ \\  | |   | |   / _ \\ 
| | | | |  __/  | |   | |  | (_) |
|_| |_|  \\___|  |_|   |_|   \\___/ 
                                  `,
            'ASCII': `
    _       ____     ____   _____   _____  
   / \\     / ___|   / ___|  |_ _|  |_ _|  
  / _ \\    \\___ \\  | |       | |    | |   
 / ___ \\    ___) | | |___    | |    | |   
/_/   \\_\\  |____/   \\____|  |___|  |___|  
                                          `
        },
        'banner': {
            'Hello': `
 #     #                                 
 #     # ###### #      #       ####  
 #     # #      #      #      #    # 
 ####### #####  #      #      #    # 
 #     # #      #      #      #    # 
 #     # #      #      #      #    # 
 #     # ###### ###### ######  ####  `,
            'ASCII': `
    #     #####   #####  ### ### 
   # #   #     # #     #  #   #  
  #   #  #       #        #   #  
 #     #  #####  #        #   #  
 #######       # #        #   #  
 #     # #     # #     #  #   #  
 #     #  #####   #####  ### ### `
        }
    };

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
            // First try to use the FIGlet library if it's loaded
            if (typeof figlet !== 'undefined') {
                figlet.text(text, {
                    font: fontMap[selectedFont],
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }, function(err, result) {
                    if (err) {
                        fallbackToSamples(text, selectedFont);
                        console.error("Something went wrong with FIGlet:", err);
                        return;
                    }
                    displayResult(result);
                });
            } else {
                // Fallback to samples if FIGlet is not loaded
                fallbackToSamples(text, selectedFont);
            }
        } catch (error) {
            showError("Error generating ASCII art: " + error.message);
            console.error(error);
        }
    }

    // Fallback to pre-defined samples for demo purposes
    function fallbackToSamples(text, font) {
        // For demo, we'll use "Hello" or "ASCII" samples based on input similarity
        let result;
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes('hello') || lowerText.includes('hi')) {
            result = asciiSamples[font]['Hello'];
        } else {
            result = asciiSamples[font]['ASCII'];
        }
        
        displayResult(result);
    }

    // Display the generated ASCII art
    function displayResult(result) {
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
