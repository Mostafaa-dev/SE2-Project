import { parseCSV } from "../../src/parsers/csvParser";
import { parseJSON } from "../../src/parsers/jsonParser";
import { parseXML } from "../../src/parsers/xmlParser";
import { getParser } from "../../src/parsers/parserRegistry";

describe("getParser", () => {
  test("returns parseCSV for csv", () => {
    expect(getParser("csv")).toBe(parseCSV);
  });

  test("returns parseJSON for json", () => {
    expect(getParser("json")).toBe(parseJSON);
  });

  test("returns parseXML for xml", () => {
    expect(getParser("xml")).toBe(parseXML);
  });
});
