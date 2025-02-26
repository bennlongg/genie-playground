/**
 * Color utility functions for generating shades from hexadecimal color codes.
 */

/**
 * Generates an array of color shades from a given hexadecimal color code.
 * @param hexCode The hexadecimal color code (with or without # prefix)
 * @param count The number of shades to generate (default: 5)
 * @returns An array of hexadecimal color codes representing different shades
 * @throws Error if the provided hex code is invalid
 */
export function generateShadesFromHex(hexCode: string, count = 5): string[] {
  // Input validation
  if (typeof hexCode !== 'string') {
    throw new Error('Hex code must be a string');
  }
  
  if (!hexCode) {
    throw new Error('Hex code cannot be empty');
  }
  
  // Normalize hex code format
  let normalizedHex = hexCode.startsWith('#') ? hexCode : `#${hexCode}`;
  
  // Handle shorthand hex (#RGB instead of #RRGGBB)
  if (normalizedHex.length === 4) {
    normalizedHex = `#${normalizedHex[1]}${normalizedHex[1]}${normalizedHex[2]}${normalizedHex[2]}${normalizedHex[3]}${normalizedHex[3]}`;
  }
  
  // Validate hex code format
  const hexRegex = /^#[0-9A-Fa-f]{6}$/;
  if (!hexRegex.test(normalizedHex)) {
    throw new Error('Invalid hex code format');
  }
  
  // Convert hex to RGB
  const rgb = hexToRgb(normalizedHex);
  
  // Generate shades
  const shades: string[] = [];
  
  // Calculate the step size for generating shades
  const darkStep = 1 / (count - 1);
  
  // Generate shades from darkest to lightest
  for (let i = 0; i < count; i++) {
    // Calculate the blend factor (from 0 to 1)
    // 0 means darkest, 0.5 means original color, 1 means lightest
    const blendFactor = i * darkStep;
    
    // Generate shade
    const shade = generateShade(rgb, blendFactor);
    
    // Convert back to hex and add to result
    shades.push(rgbToHex(shade));
  }
  
  return shades;
}

/**
 * Converts a hexadecimal color code to RGB values.
 * @param hex The hexadecimal color code
 * @returns An object containing r, g, b values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove the # prefix if present
  const cleanHex = hex.startsWith('#') ? hex.substring(1) : hex;
  
  // Parse the hex values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return { r, g, b };
}

/**
 * Converts RGB values to a hexadecimal color code.
 * @param rgb The RGB values
 * @returns The hexadecimal color code with # prefix
 */
function rgbToHex(rgb: { r: number; g: number; b: number }): string {
  // Ensure values are within valid range (0-255)
  const r = Math.max(0, Math.min(255, Math.round(rgb.r)));
  const g = Math.max(0, Math.min(255, Math.round(rgb.g)));
  const b = Math.max(0, Math.min(255, Math.round(rgb.b)));
  
  // Convert to hex and ensure 2 digits
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  
  return `#${hexR}${hexG}${hexB}`;
}

/**
 * Generates a shade of a color by blending with black or white.
 * @param rgb The RGB values of the original color
 * @param blendFactor A value between 0 and 1, where 0 is darkest, 0.5 is original, and 1 is lightest
 * @returns The RGB values of the generated shade
 */
function generateShade(
  rgb: { r: number; g: number; b: number },
  blendFactor: number
): { r: number; g: number; b: number } {
  // Ensure blend factor is between 0 and 1
  const factor = Math.max(0, Math.min(1, blendFactor));
  
  if (factor < 0.5) {
    // Blend with black for darker shades
    // Remap 0-0.5 to 0-1 for blending calculation
    const darkFactor = factor * 2;
    
    return {
      r: rgb.r * darkFactor,
      g: rgb.g * darkFactor,
      b: rgb.b * darkFactor
    };
  } else {
    // Blend with white for lighter shades
    // Remap 0.5-1 to 0-1 for blending calculation
    const lightFactor = (factor - 0.5) * 2;
    
    return {
      r: rgb.r + (255 - rgb.r) * lightFactor,
      g: rgb.g + (255 - rgb.g) * lightFactor,
      b: rgb.b + (255 - rgb.b) * lightFactor
    };
  }
}
