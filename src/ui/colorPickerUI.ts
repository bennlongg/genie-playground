/**
 * UI component for picking a color and displaying its shades.
 */
import { generateShadesFromHex } from '../utils/colorUtils';

/**
 * Creates and renders a color picker UI element with shade display.
 * @param containerId - The ID of the container element where the UI will be rendered
 * @param initialColor - The initial color to display (default: '#3498db')
 * @param shadeCount - The number of shades to generate (default: 5)
 * @returns A function to clean up event listeners
 */
export function createColorPickerUI(
  containerId: string,
  initialColor = '#3498db',
  shadeCount = 5
): () => void {
  // Find the container element
  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Container element with ID "${containerId}" not found`);
  }

  // Create UI elements
  const heading = createElement('h2', {
    textContent: 'Color Shade Generator',
    className: 'color-picker-heading'
  });
  
  const description = createElement('p', {
    textContent: 'Select a color to generate different shades:',
    className: 'color-picker-description'
  });
  
  const pickerContainer = createElement('div', {
    className: 'color-picker-input-container'
  });

  const colorInput = createElement('input', {
    type: 'color',
    value: initialColor,
    id: 'color-picker-input',
    className: 'color-picker-input'
  }) as HTMLInputElement;
  
  const colorValue = createElement('span', {
    textContent: initialColor.toUpperCase(),
    className: 'color-value-display'
  });
  
  const shadesContainer = createElement('div', {
    className: 'color-shades-container'
  });

  // Append elements to their containers
  pickerContainer.appendChild(colorInput);
  pickerContainer.appendChild(colorValue);
  
  container.appendChild(heading);
  container.appendChild(description);
  container.appendChild(pickerContainer);
  container.appendChild(shadesContainer);

  // Function to update the displayed shades
  const updateShades = (hexColor: string) => {
    try {
      // Update the displayed color value
      colorValue.textContent = hexColor.toUpperCase();
      
      // Clear previous shades
      shadesContainer.innerHTML = '';
      
      // Generate new shades
      const shades = generateShadesFromHex(hexColor, shadeCount);
      
      // Create and append elements for each shade
      shades.forEach((shade, index) => {
        const shadeElement = createElement('div', {
          className: 'color-shade-item',
          title: shade
        });
        
        // Set background color to the shade
        shadeElement.style.backgroundColor = shade;
        
        // Create label for the shade
        const labelElement = createElement('div', {
          className: 'color-shade-label',
          textContent: shade
        });
        
        // Adjust label color for visibility based on shade brightness
        const rgb = hexToRgb(shade);
        const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        labelElement.style.color = brightness > 128 ? '#000000' : '#FFFFFF';
        
        shadeElement.appendChild(labelElement);
        shadesContainer.appendChild(shadeElement);
      });
      
      // Add CSS to the shades container
      applyStyles();
    } catch (error) {
      console.error('Error updating shades:', error);
      // Display error message
      shadesContainer.innerHTML = `<div class="error-message">Error: ${error instanceof Error ? error.message : 'Failed to generate shades'}</div>`;
    }
  };

  // Handle color input changes
  const handleColorChange = () => {
    updateShades(colorInput.value);
  };

  // Add event listener
  colorInput.addEventListener('input', handleColorChange);
  
  // Initial render
  updateShades(initialColor);
  
  // Return cleanup function
  return () => {
    colorInput.removeEventListener('input', handleColorChange);
  };
}

/**
 * Helper function to create a DOM element with given properties
 * @param tagName - The HTML tag name
 * @param props - Properties to set on the element
 * @returns The created DOM element
 */
function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props: Partial<HTMLElementTagNameMap[K]> & Record<string, any>
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'textContent') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  
  return element;
}

/**
 * Convert hex color to RGB
 * @param hex - Hex color code
 * @returns RGB color values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.startsWith('#') ? hex.substring(1) : hex;
  
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16)
  };
}

/**
 * Apply CSS styles to the color picker UI
 */
function applyStyles(): void {
  // Create a style element if it doesn't exist
  let styleElement = document.getElementById('color-picker-styles');
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'color-picker-styles';
    document.head.appendChild(styleElement);
    
    styleElement.textContent = `
      .color-picker-heading {
        margin-bottom: 16px;
        color: #333;
      }
      
      .color-picker-description {
        margin-bottom: 20px;
        color: #666;
      }
      
      .color-picker-input-container {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
      }
      
      .color-picker-input {
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 12px;
      }
      
      .color-value-display {
        font-family: monospace;
        font-size: 16px;
        padding: 4px 8px;
        background-color: #f0f0f0;
        border-radius: 4px;
      }
      
      .color-shades-container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-top: 24px;
      }
      
      .color-shade-item {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
      }
      
      .color-shade-item:hover {
        transform: scale(1.05);
      }
      
      .color-shade-label {
        padding: 4px 8px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.2);
        font-family: monospace;
        font-size: 12px;
        text-align: center;
      }
      
      .error-message {
        color: #d9534f;
        padding: 12px;
        background-color: #f9f2f2;
        border-radius: 4px;
        border-left: 4px solid #d9534f;
      }
    `;
  }
}
