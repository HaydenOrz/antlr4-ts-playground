import { ANTLRInputStream, CommonTokenStream, Lexer } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { JsonLexer } from '../lib/json/JsonLexer';
import { JsonParser, JsonContext, EmptyArrayContext, AtomContext } from '../lib/json/JsonParser';
import { JsonListener } from '../lib/json/JsonListener';


export class JSON2XMLListener implements JsonListener {
    xmlMap = new Map();

    setXml(node, value) {
        this.xmlMap.set(node, value);
    }
    getXml(node) {
        this.xmlMap.get(node);
        return this.xmlMap.get(node);
    }

    stripQuotes(s: string) {
        if (!s || s[0] !== '"') return s;
        return s.substring(1, s.length - 1);
    }

    exitJson(ctx: JsonContext) {
        this.setXml(ctx, this.getXml(ctx.getChild(0)));
    }

    exitAnObject(ctx) {
        let str = '\n';
        ctx.pair().forEach((pairContext) => {
            str += this.xmlMap.get(pairContext);
        });
        this.setXml(ctx, str);
    }

    exitEmptyObject(ctx) {
        this.setXml(ctx, '');
    }

    exitPair(ctx) {
        const tag = this.stripQuotes(ctx.STRING().text);
        const res = `
        <${tag}>${this.getXml(ctx.value())}<${tag}>`;

        this.setXml(ctx, res);
    }

    exitArrayOfValues(ctx) {
        let res = '\n';
        ctx.value().forEach(valueContext => {
            res += '<element>';
            res += this.getXml(valueContext);
            res += '<element>';
            res += '\n';
        });
        this.setXml(ctx, res);
    }

    exitEmptyArray(ctx: EmptyArrayContext) {
        this.setXml(ctx, '');
    }

    exitString(ctx) {
        this.setXml(ctx, this.stripQuotes(ctx.text));
    }

    exitAtom(ctx: AtomContext) {
        console.log(ctx.text);
        this.setXml(ctx, ctx.text);
    }

    exitObjectValue(ctx) {
        this.setXml(ctx, this.getXml(ctx.object()));
    }

    exitArrayValue(ctx) {
        this.setXml(ctx, this.getXml(ctx.array()));
    }
};

function main(jsonStr) {
    const input = new ANTLRInputStream(jsonStr);
    const lexer = <unknown> new JsonLexer(input) as Lexer;
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

