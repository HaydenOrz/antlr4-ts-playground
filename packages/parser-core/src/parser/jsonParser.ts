import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { ParseTreeWalker, ParseTreeListener } from 'antlr4ts/tree';
import { JsonLexer } from '../lib/json/JsonLexer';
import { JsonParser as JsonBaseParser } from '../lib/json/JsonParser';
import { JSON2XMLListener } from './helpers/json2xmlListener';


export class JsonParser  {
    private _lexer: JsonLexer = null;
    private _parser: JsonBaseParser = null;

    private createLexer(input: string) {
        const inputStream = CharStreams.fromString(input);
        const lexer = new JsonLexer(inputStream);
        this._lexer = lexer
        return lexer
    }

    createParser (input: string) {
        const lexer = this.createLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new JsonBaseParser(tokens);
        this._parser = parser
        return this.parser
    }

    get lexer () {
        return this._lexer
    }

    get parser () {
        return this._parser
    }

    translate2Xml (json: string) {
        const parser = this.createParser(json)
        const tree = parser.json()
        const walker = new ParseTreeWalker();
        const listener = new JSON2XMLListener();
        walker.walk(listener as ParseTreeListener, tree);
        const xml = listener.getXml(tree);
        return xml
    }
}