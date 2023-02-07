import { ANTLRInputStream, CommonTokenStream, Lexer } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { CalculatorLexer } from '../lib/calculator/CalculatorLexer';
import { CalculatorParser, MulContext, IntContext, AddContext } from '../lib/calculator/CalculatorParser';
import { CalculatorVisitor } from '../lib/calculator/CalculatorVisitor';

export class CalculateByVisitor extends AbstractParseTreeVisitor<number> implements CalculatorVisitor<number> {
    visitAdd(ctx: AddContext) {
        return this.visit(ctx.expr(0)) + this.visit(ctx.expr(1));
    }
    visitMul(ctx: MulContext) {
        return this.visit(ctx.expr(0)) * this.visit(ctx.expr(1));
    }
    visitInt(ctx: IntContext) {
        return Number(ctx.text);
    }
    protected defaultResult(): number {
        return 0;
    }
}


function main() {
    function run(expr: string) {
        const input = new ANTLRInputStream(expr);
        const lexer = <unknown> new CalculatorLexer(input) as Lexer;
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalculatorParser(tokens);
        const tree = parser.cal();
        const visitor = new CalculateByVisitor();
        const res = visitor.visit(tree);
        console.log('======= result ====');
        console.log(res);
        console.log('******** end ******');
    }
    run(`1+2*3 + 4+6+7`);
};

main();

