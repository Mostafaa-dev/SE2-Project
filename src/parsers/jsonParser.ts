export function parseJSON(content: string): Record<string, string>[] {
  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error("Invalid JSON file");
  }
}
