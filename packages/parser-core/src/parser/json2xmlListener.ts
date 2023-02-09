import { 
    JsonContext,
    EmptyArrayContext,
    AtomContext,
    AnObjectContext,
    ArrayOfValuesContext,
    ArrayValueContext,
    EmptyObjectContext,
    PairContext,
    StringContext,
    ObjectValueContext
} from '../lib/json/JsonParser';
import { JsonListener } from '../lib/json/JsonListener';
import { ParseTree } from 'antlr4ts/tree';

export class JSON2XMLListener implements JsonListener {
    xmlMap = new Map();

    setXml(node: ParseTree, value) {
        this.xmlMap.set(node, value);
    }
    getXml(node: ParseTree) {
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

    exitAnObject(ctx: AnObjectContext) {
        let str = '\n';
        ctx.pair().forEach((pairContext) => {
            str += this.xmlMap.get(pairContext);
        });
        this.setXml(ctx, str);
    }

    exitEmptyObject(ctx: EmptyObjectContext) {
        this.setXml(ctx, '');
    }

    exitPair(ctx: PairContext) {
        const tag = this.stripQuotes(ctx.STRING().text);
        const res = `<${tag}>${this.getXml(ctx.value())}<${tag}>\n`;

        this.setXml(ctx, res);
    }

    exitArrayOfValues(ctx: ArrayOfValuesContext) {
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

    exitString(ctx: StringContext) {
        this.setXml(ctx, this.stripQuotes(ctx.text));
    }

    exitAtom(ctx: AtomContext) {
        this.setXml(ctx, ctx.text);
    }

    exitObjectValue(ctx: ObjectValueContext) {
        this.setXml(ctx, this.getXml(ctx.object()));
    }

    exitArrayValue(ctx: ArrayValueContext) {
        this.setXml(ctx, this.getXml(ctx.array()));
    }
};
