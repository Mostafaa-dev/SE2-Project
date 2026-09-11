import * as path from "path";

export type FileFormat = "csv" | "json" | "xml";

export function detectFormat(filePath: string): FileFormat {
  const extension = path.extname(filePath).toLowerCase();

  if (extension === ".csv") return "csv";
  if (extension === ".json") return "json";
  if (extension === ".xml") return "xml";

  throw new Error(`Unsupported file format: ${extension}`);
}
