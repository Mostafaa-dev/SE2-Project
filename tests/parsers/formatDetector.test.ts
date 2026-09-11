import { detectFormat } from "../../src/parsers/formatDetector";

describe("detectFormat", () => {
  test("detects csv, json, and xml from the file extension", () => {
    expect(detectFormat("orders.csv")).toBe("csv");
    expect(detectFormat("orders.json")).toBe("json");
    expect(detectFormat("orders.xml")).toBe("xml");
  });

  test("ignores extension case", () => {
    expect(detectFormat("C:/data/Cake Orders.CSV")).toBe("csv");
    expect(detectFormat("book orders.JSON")).toBe("json");
    expect(detectFormat("toy orders.XML")).toBe("xml");
  });

  test("uses the last extension in a nested path", () => {
    expect(detectFormat("src/data/book orders.json")).toBe("json");
  });

  test("throws for an unsupported extension", () => {
    expect(() => detectFormat("orders.txt")).toThrow(
      "Unsupported file format: .txt",
    );
  });

  test("throws when the path has no extension", () => {
    expect(() => detectFormat("orders")).toThrow("Unsupported file format: ");
  });
});
