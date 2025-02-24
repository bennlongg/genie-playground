import fs from 'fs-extra';
import * as XLSX from 'xlsx';

export async function spreadsheetAnalyzer(filePath: string): Promise<{ lineCount: number }> {
  try {
    const fileData: Buffer = await fs.readFile(filePath);
    const workbook: XLSX.WorkBook = XLSX.read(fileData, { type: 'buffer' });
    const sheetName: string = workbook.SheetNames[0];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1:A1'); // Assuming a table range
    const lineCount = range.e.r - range.s.r + 1;

    return { lineCount };
  } catch (error) {
    throw new Error('Unable to analyze spreadsheet: ' + error.message);
  }
}
