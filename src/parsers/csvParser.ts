import Papa from "papaparse";

export function parseCSV(content: string): Record<string, string>[] {
  if (!content.trim()) {
    return [];
  }

  const result = Papa.parse<Record<string, string>>(content, {
    header: true,
    skipEmptyLines: true,
  });

  if (
    result.errors.length > 0 &&
    result.errors[0].code !== "UndetectableDelimiter"
  ) {
    throw new Error("Invalid CSV file");
  }

  return result.data;
}
