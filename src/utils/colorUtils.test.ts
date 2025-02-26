import { generateShadesFromHex } from './colorUtils';

describe('colorUtils', () => {
  describe('generateShadesFromHex', () => {
    test('should generate default 5 shades for a valid hex code', () => {
      const shades = generateShadesFromHex('#3498db');
      
      // Should return 5 shades by default
      expect(shades).toHaveLength(5);
      
      // All returned values should be valid hex codes
      const hexRegex = /^#[0-9A-Fa-f]{6}$/;
      shades.forEach(shade => {
        expect(shade).toMatch(hexRegex);
      });
      
      // The middle shade should be the original color
      expect(shades[2].toLowerCase()).toBe('#3498db');
      
      // First shade should be darker, last shade should be lighter
      expect(shades[0]).not.toBe(shades[4]);
    });
    
    test('should generate the requested number of shades', () => {
      const shades = generateShadesFromHex('#3498db', 7);
      
      expect(shades).toHaveLength(7);
      
      // The middle shade (index 3) should be the original color in a 7-shade array
      expect(shades[3].toLowerCase()).toBe('#3498db');
    });
    
    test('should handle hex codes without the # prefix', () => {
      const shades = generateShadesFromHex('3498db');
      
      expect(shades).toHaveLength(5);
      expect(shades[2].toLowerCase()).toBe('#3498db');
    });
    
    test('should handle shorthand hex codes', () => {
      const shades = generateShadesFromHex('#f00');
      
      expect(shades).toHaveLength(5);
      expect(shades[2].toLowerCase()).toBe('#ff0000');
    });
    
    test('should throw an error for invalid hex codes', () => {
      expect(() => generateShadesFromHex('not-a-hex-code')).toThrow();
      expect(() => generateShadesFromHex('#XYZ')).toThrow();
      expect(() => generateShadesFromHex('#12')).toThrow();
    });
    
    test('should throw an error for empty input', () => {
      expect(() => generateShadesFromHex('')).toThrow();
    });
    
    test('should throw an error for non-string input', () => {
      // @ts-expect-error: Testing invalid input type
      expect(() => generateShadesFromHex(123)).toThrow();
    });
    
    test('should generate white-to-black shades for grayscale colors', () => {
      const shades = generateShadesFromHex('#808080', 5); // Medium gray
      
      expect(shades).toHaveLength(5);
      
      // Verify that first shade is darker and last shade is lighter
      const firstColorValue = parseInt(shades[0].substring(1), 16);
      const lastColorValue = parseInt(shades[4].substring(1), 16);
      
      expect(firstColorValue).toBeLessThan(parseInt('808080', 16));
      expect(lastColorValue).toBeGreaterThan(parseInt('808080', 16));
    });
    
    test('should maintain color hue while adjusting lightness', () => {
      // Test with a known red color
      const redShades = generateShadesFromHex('#ff0000', 3);
      
      // All shades should have more red than green or blue
      for (const shade of redShades) {
        const r = parseInt(shade.substring(1, 3), 16);
        const g = parseInt(shade.substring(3, 5), 16);
        const b = parseInt(shade.substring(5, 7), 16);
        
        // For a red color, red channel should be dominant even in shades
        expect(r).toBeGreaterThan(g);
        expect(r).toBeGreaterThan(b);
      }
    });
    
    test('should generate proper shades for black', () => {
      const shades = generateShadesFromHex('#000000');
      
      // Should still return 5 values from black to lighter grays
      expect(shades).toHaveLength(5);
      
      // First should be black, rest should be increasingly lighter
      expect(shades[0].toLowerCase()).toBe('#000000');
      
      for (let i = 1; i < shades.length; i++) {
        const current = parseInt(shades[i].substring(1), 16);
        const previous = parseInt(shades[i-1].substring(1), 16);
        expect(current).toBeGreaterThan(previous);
      }
    });
    
    test('should generate proper shades for white', () => {
      const shades = generateShadesFromHex('#ffffff');
      
      // Should still return 5 values from darker grays to white
      expect(shades).toHaveLength(5);
      
      // Last should be white, rest should be increasingly darker
      expect(shades[4].toLowerCase()).toBe('#ffffff');
      
      for (let i = 0; i < shades.length - 1; i++) {
        const current = parseInt(shades[i].substring(1), 16);
        const next = parseInt(shades[i+1].substring(1), 16);
        expect(current).toBeLessThan(next);
      }
    });
  });
});
