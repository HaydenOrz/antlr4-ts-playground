import { JsonParser } from "../parser/jsonParser"
import { json1 } from "./samples/jsonSample";

const resXml = `
<id>1<id>
<name>Li<name>
<scores>
<Chinese>95<Chinese>
<English>85<English>
<scores>
<array>
<element>1.2<element>
<element>2.0e1<element>
<element>-3<element>
<array>
`

describe('Json Parser Tests', () => {
    const jsonParser = new JsonParser();

    test('Translate Json to XML', () => {
        const xml = jsonParser.translate2Xml(json1)
        expect(xml).toBe(resXml);
    });

});