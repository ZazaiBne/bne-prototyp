import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportResponsesToExcel(responses) {
  const worksheetData = [
    responses.reduce((obj, value, index) => {
      obj[`Frage${String(index + 1).padStart(2, "0")}`] = value;
      return obj;
    }, {}),
  ];

  const worksheet = XLSX.utils.json_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Antworten");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: "application/octet-stream" });

  saveAs(data, "BNE_Antworten.xlsx");
}
