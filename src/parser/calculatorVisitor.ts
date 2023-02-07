import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { MulContext, IntContext, AddContext } from '../lib/calculator/CalculatorParser';
import { CalculatorVisitor } from '../lib/calculator/CalculatorVisitor';

export default class CalculateByVisitor extends AbstractParseTreeVisitor<number> implements CalculatorVisitor<number> {
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


