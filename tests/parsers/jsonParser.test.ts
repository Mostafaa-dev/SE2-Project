import { parseJSON } from "../../src/parsers/jsonParser";

describe("parseJSON", () => {
  test("parses a JSON array of objects", () => {
    const json = `[
      { "Order ID": "2001", "Book Title": "Edge of Eternity", "Price": "12" },
      { "Order ID": "2002", "Book Title": "Beneath the Stars", "Price": "48" }
    ]`;

    expect(parseJSON(json)).toEqual([
      { "Order ID": "2001", "Book Title": "Edge of Eternity", Price: "12" },
      { "Order ID": "2002", "Book Title": "Beneath the Stars", Price: "48" },
    ]);
  });

  test("parses a JSON object", () => {
    expect(parseJSON('{"id":1,"title":"Book A"}')).toEqual({
      id: 1,
      title: "Book A",
    });
  });

  test("parses nested JSON objects and arrays", () => {
    const json = `{
      "user": {
        "name": "John",
        "orders": [
          { "id": 1, "price": 20 },
          { "id": 2, "price": 30 }
        ]
      }
    }`;

    expect(parseJSON(json)).toEqual({
      user: {
        name: "John",
        orders: [
          { id: 1, price: 20 },
          { id: 2, price: 30 },
        ],
      },
    });
  });

  test("parses primitive JSON values", () => {
    expect(parseJSON('"hello"')).toBe("hello");
    expect(parseJSON("42")).toBe(42);
    expect(parseJSON("true")).toBe(true);
    expect(parseJSON("null")).toBeNull();
  });

  test("throws Invalid JSON file for malformed JSON", () => {
    expect(() => parseJSON("{")).toThrow("Invalid JSON file");
  });

  test("throws Invalid JSON file for empty content", () => {
    expect(() => parseJSON("")).toThrow("Invalid JSON file");
  });

  test("throws Invalid JSON file for trailing commas", () => {
    expect(() => parseJSON(`{ "id": 1, "title": "Book A", }`)).toThrow(
      "Invalid JSON file",
    );
  });
});
