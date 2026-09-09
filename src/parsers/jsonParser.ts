export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export function parseJSON(content: string): JSONValue {
  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error("Invalid JSON file");
  }
}
