import { JsonParser } from "../parser/jsonParser"
import { json1 } from "../sqlSample/jsonSample";

const jsonParser = new JsonParser();

const xml = jsonParser.translate2Xml(json1)

console.log(xml);
