import { XMLParser, XMLValidator } from "fast-xml-parser";

const parser = new XMLParser({
  ignoreDeclaration: true,
  ignoreAttributes: false,
});

export function parseXML(content: string): Record<string, unknown> {
  const validation = XMLValidator.validate(content);

  if (validation !== true) {
    throw new Error(`Invalid XML: ${validation.err.msg}`);
  }

  return parser.parse(content);
}
