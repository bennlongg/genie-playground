// ASCII Art Generator Script
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const inputText = document.getElementById('inputText');
    const fontSelect = document.getElementById('fontSelect');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const asciiOutput = document.getElementById('asciiOutput');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const outputContainer = document.querySelector('.output-container');

    // Set initial state
    let figletLoaded = false;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    generateBtn.disabled = true;

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        asciiOutput.classList.add('dark-mode');
        outputContainer?.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Function to load the FIGlet library with error handling
    function loadFigletLibrary() {
        return new Promise((resolve, reject) => {
            // Try multiple CDN sources for better reliability
            const cdnSources = [
                'https://cdn.jsdelivr.net/npm/figlet@1.5.2/lib/figlet.min.js',
                'https://unpkg.com/figlet@1.5.2/lib/figlet.js',
                'https://cdnjs.cloudflare.com/ajax/libs/figlet/1.5.2/figlet.min.js'
            ];
            
            // Try each source until one succeeds
            function tryLoadScript(index) {
                if (index >= cdnSources.length) {
                    reject(new Error("Failed to load FIGlet from all sources"));
                    return;
                }
                
                const figletScript = document.createElement('script');
                figletScript.src = cdnSources[index];
                
                figletScript.onload = function() {
                    console.log('FIGlet library loaded successfully from', cdnSources[index]);
                    resolve();
                };
                
                figletScript.onerror = function() {
                    console.warn(`Failed to load FIGlet from ${cdnSources[index]}, trying next source...`);
                    // Try next source
                    tryLoadScript(index + 1);
                };
                
                document.head.appendChild(figletScript);
            }
            
            // Start with the first source
            tryLoadScript(0);
        });
    }

    // Load the FIGlet library
    loadFigletLibrary()
        .then(() => {
            figletLoaded = true;
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate ASCII Art';
            
            // Pre-load fonts to avoid fetch issues later
            if (typeof figlet !== 'undefined') {
                try {
                    // Preload standard font
                    figlet.defaults({ fontPath: 'https://unpkg.com/figlet/importable-fonts/' });
                    figlet.preloadFonts(['Standard'], function() {
                        console.log('Standard font preloaded successfully');
                    });
                } catch (e) {
                    console.warn('Could not preload fonts:', e);
                }
            }
        })
        .catch((error) => {
            console.error('Error loading FIGlet library:', error);
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate ASCII Art (Simple Mode)';
        });

    // Font mapping for FIGlet
    const fontMap = {
        'standard': 'Standard',
        'shadow': 'Shadow',
        'thinkertoy': 'Thinkertoy',
        'block': 'Block',
        'banner': 'Banner'
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
        
        // Check if figlet is available in the global scope
        if (figletLoaded && typeof figlet !== 'undefined') {
            // Use FIGlet for ASCII art generation with proper error handling
            try {
                // Set the path for font loading to avoid "Failed to fetch" errors
                figlet.defaults({
                    fontPath: 'https://unpkg.com/figlet/importable-fonts/'
                });
                
                // Generate ASCII art with the selected font
                figlet.text(text, {
                    font: fontMap[selectedFont],
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }, function(err, result) {
                    if (err) {
                        console.error("FIGlet error:", err);
                        const simpleResult = createSimpleASCII(text, selectedFont);
                        displayResult(simpleResult);
                    } else if (!result || result.trim() === '') {
                        console.warn("FIGlet returned empty result");
                        const simpleResult = createSimpleASCII(text, selectedFont);
                        displayResult(simpleResult);
                    } else {
                        // Success! Display the result
                        displayResult(result);
                    }
                });
            } catch (figletError) {
                console.error("Error using FIGlet:", figletError);
                const simpleResult = createSimpleASCII(text, selectedFont);
                displayResult(simpleResult);
            }
        } else {
            // FIGlet not available, use simple converter
            console.warn("FIGlet library not available, using simple ASCII converter");
            const simpleResult = createSimpleASCII(text, selectedFont);
            displayResult(simpleResult);
        }
    }

    // Simple ASCII art generator as fallback
    function createSimpleASCII(text, fontStyle) {
        const chars = {
            'standard': { border: '*', fill: ' ' },
            'shadow': { border: '#', fill: '.' },
            'thinkertoy': { border: 'o', fill: '-' },
            'block': { border: '█', fill: '▒' },
            'banner': { border: '=', fill: '#' }
        };
        
        const style = chars[fontStyle] || chars['standard'];
        const padding = 2;
        const borderLength = text.length + (padding * 2) + 2; // +2 for left and right borders
        
        // Create top border
        let result = style.border.repeat(borderLength) + '\n';
        
        // Create middle section with text
        result += style.border + style.fill.repeat(padding) + text + style.fill.repeat(padding) + style.border + '\n';
        
        // Create bottom border
        result += style.border.repeat(borderLength);
        
        return result;
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
        
        // Apply dark mode to elements
        document.body.classList.toggle('dark-mode', isDarkMode);
        asciiOutput.classList.toggle('dark-mode', isDarkMode);
        
        // Also apply to output container if it exists
        if (outputContainer) {
            outputContainer.classList.toggle('dark-mode', isDarkMode);
        }
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
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
   _    ___  ___ ___ ___    _   ___ _____    ___ ___ _  _ ___ ___  _ _____ ___  ___ 
  /_\\  / __||_ _|_ _|_ _|  /_\\ | _ \\_   _|  / __| __| \\| | __| _ \\/_\\_   _/ _ \\| _ \\
 / _ \\ \\__ \\ | | | | | |  / _ \\|   / | |   | (_ | _|| .\\| _|| /  / _ \\| || (_) |   /
/_/ \\_\\|___/|___|___|___\\/_/ \\_\\_|_\\ |_|    \\___|___|_|\\_|___|_|_/_/ \\_\\_| \\___/|_|_\\
                                                                                     
Enter your text and click Generate to create your ASCII art!
`;
});
