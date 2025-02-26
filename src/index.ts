/**
 * Main entry point for the application.
 * Initializes the color picker UI component.
 */
import { createColorPickerUI } from './ui/colorPickerUI';

/**
 * Initialize the application when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Create container for color picker if it doesn't exist
  let container = document.getElementById('color-picker-container');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'color-picker-container';
    document.body.appendChild(container);
  }
  
  // Initialize the color picker UI
  const cleanupColorPicker = createColorPickerUI('color-picker-container', '#3498db', 7);
  
  // Clean up event listeners when window unloads
  window.addEventListener('unload', () => {
    cleanupColorPicker();
  });
  
  console.log('Color Picker UI initialized successfully');
});

// Export any functions or objects that need to be accessible from outside
export { createColorPickerUI } from './ui/colorPickerUI';
export { generateShadesFromHex } from './utils/colorUtils';
