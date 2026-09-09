import { parseCSV } from "../../src/parsers/csvParser";

describe("parseCSV", () => {
  test("parses CSV rows as objects keyed by the header", () => {
    const csv = `id,name,price
1,Cake,10
2,Cookie,5`;

    const result = parseCSV(csv);

    expect(result).toEqual([
      { id: "1", name: "Cake", price: "10" },
      { id: "2", name: "Cookie", price: "5" },
    ]);
  });

  test("skips empty lines", () => {
    const csv = `id,name

1,Cake

`;

    expect(parseCSV(csv)).toEqual([{ id: "1", name: "Cake" }]);
  });

  test("should return an empty array for empty content", () => {
    expect(parseCSV("")).toEqual([]);
  });

  test("returns an empty array when there is only a header row", () => {
    expect(parseCSV("id,name,price")).toEqual([]);
  });

  test("keeps quoted commas inside a field", () => {
    const csv = `id,name
1,"Cake, Chocolate"`;

    expect(parseCSV(csv)).toEqual([{ id: "1", name: "Cake, Chocolate" }]);
  });

  test("should throw an error for malformed CSV", () => {
    const csv = `name,age
  John,21
  Mike,"25,
  `;

    expect(() => parseCSV(csv)).toThrow("Invalid CSV file");
  });

  test("parses a single-column CSV", () => {
    const csv = `name
John
Mike`;

    expect(parseCSV(csv)).toEqual([{ name: "John" }, { name: "Mike" }]);
  });
});
