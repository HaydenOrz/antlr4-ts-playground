import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { JsonLexer } from '@/lib/json/JsonLexer';
import { JsonParser } from '@/lib/json/JsonParser';
import JSON2XMLListener from '@/parser/json2xmlListener';

function main(jsonStr) {
    const input = new ANTLRInputStream(jsonStr);
    const lexer = new JsonLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new JsonParser(tokens);
    const parseTree: any = parser.json();


    const walker = new ParseTreeWalker();
    const listener: any = new JSON2XMLListener();
    walker.walk(listener, parseTree);

    const xml = listener.getXml(parseTree);
    console.log(xml);
}

main(`
{
    "id" : 1,
    "name" : "Li",
    "scores" : {
        "Chinese" : "95",
        "English" : "85"
    },
    "array" : [1.2, 2.0e1, -3] 
}
`);

