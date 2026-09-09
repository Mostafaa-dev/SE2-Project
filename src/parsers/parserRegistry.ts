import { parseCSV } from "./csvParser";
import { FileFormat } from "./formatDetector";
import { parseJSON } from "./jsonParser";
import { parseXML } from "./xmlParser";

type ParserMap = {
  csv: typeof parseCSV;
  json: typeof parseJSON;
  xml: typeof parseXML;
};

const parsers: ParserMap = {
  csv: parseCSV,
  json: parseJSON,
  xml: parseXML,
};

export function getParser<F extends FileFormat>(format: F): ParserMap[F] {
  return parsers[format];
}
