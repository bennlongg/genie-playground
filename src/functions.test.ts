import { describe, it, expect } from 'vitest';
import { spreadsheetAnalyzer } from './functions';

describe('spreadsheetAnalyzer', () => {
  it('should return correct metadata for a valid spreadsheet file', async () => {
    const filePath = 'path/to/sample.xlsx'; // hypothetical path for testing
    const result = await spreadsheetAnalyzer(filePath);
    expect(result).toHaveProperty('lineCount');
    expect(result.lineCount).toBeGreaterThan(0); // assuming the sample has at least 1 line
  });

  it('should throw an error for non-existent file', async () => {
    const filePath = 'path/to/nonexistent.xlsx';
    await expect(spreadsheetAnalyzer(filePath)).rejects.toThrow();
  });

  it('should return line count as 0 for an empty spreadsheet', async () => {
    const filePath = 'path/to/empty.xlsx'; // hypothetical path for an empty sheet
    const result = await spreadsheetAnalyzer(filePath);
    expect(result.lineCount).toBe(0);
  });
});
