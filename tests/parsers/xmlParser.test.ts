import { parseXML } from "../../src/parsers/xmlParser";

describe("parseXML", () => {
  test("parses valid XML and ignores the declaration", () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<data>
  <row>
    <OrderID>5001</OrderID>
    <Type>Plush Toy</Type>
    <AgeGroup>13+</AgeGroup>
    <Brand>FunTime</Brand>
    <Material>Fabric</Material>
    <BatteryRequired>Yes</BatteryRequired>
    <Educational>Yes</Educational>
    <Price>247</Price>
    <Quantity>7</Quantity>
  </row>
  <row>
    <OrderID>5002</OrderID>
    <Type>Board Game</Type>
    <AgeGroup>8+</AgeGroup>
    <Brand>GameZone</Brand>
    <Material>Cardboard</Material>
    <BatteryRequired>No</BatteryRequired>
    <Educational>No</Educational>
    <Price>35</Price>
    <Quantity>15</Quantity>
  </row>
</data>`;

    expect(parseXML(xml)).toEqual({
      data: {
        row: [
          {
            OrderID: 5001,
            Type: "Plush Toy",
            AgeGroup: "13+",
            Brand: "FunTime",
            Material: "Fabric",
            BatteryRequired: "Yes",
            Educational: "Yes",
            Price: 247,
            Quantity: 7,
          },
          {
            OrderID: 5002,
            Type: "Board Game",
            AgeGroup: "8+",
            Brand: "GameZone",
            Material: "Cardboard",
            BatteryRequired: "No",
            Educational: "No",
            Price: 35,
            Quantity: 15,
          },
        ],
      },
    });
  });

  test("returns a single row as an object instead of an array", () => {
    const xml = `<data><row><OrderID>5001</OrderID><Type>Doll</Type></row></data>`;

    expect(parseXML(xml)).toEqual({
      data: {
        row: {
          OrderID: 5001,
          Type: "Doll",
        },
      },
    });
  });

  test("throws for malformed XML", () => {
    const malformed = `
      <data>
        <row>
          <OrderID>5001</OrderID>
      </data>
    `;

    expect(() => parseXML(malformed)).toThrow(/Invalid XML:/);
  });

  test("throws for empty XML", () => {
    expect(() => parseXML("")).toThrow(/Invalid XML:/);
  });

  test("preserves XML attributes", () => {
    const xml = `<user id="007"><name>John</name></user>`;

    expect(parseXML(xml)).toEqual({
      user: {
        "@_id": "007",
        name: "John",
      },
    });
  });
});
