import { XMLParser, XMLValidator } from "fast-xml-parser";

export type XMLRow = {
  OrderID: string;
  Type: string;
  AgeGroup: string;
  Brand: string;
  Material: string;
  BatteryRequired: string;
  Educational: string;
  Price: number;
  Quantity: number;
};

export type XMLData = {
  data: {
    row: XMLRow[];
  };
};

const parser = new XMLParser({
  ignoreDeclaration: true,
  ignoreAttributes: false,
});

export function parseXML(content: string): XMLData {
  const validation = XMLValidator.validate(content);

  if (validation !== true) {
    throw new Error(`Invalid XML: ${validation.err.msg}`);
  }

  return parser.parse(content);
}
