import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { AddOperationContext, CompoundFactorContext, DigitFactorContext, DivOperationContext, FactorItemContext, MulOperationContext, SubOperationContext, TermItemContext } from '../../lib/calculator/CalculatorParser';
import { CalculatorVisitor } from '../../lib/calculator/CalculatorVisitor';

export class CalculateByVisitor extends AbstractParseTreeVisitor<number> implements CalculatorVisitor<number> {

    visitAddOperation= (ctx: AddOperationContext) => {
        return this.visit(ctx.expr()) + this.visit(ctx.term());
    };

    visitSubOperation = (ctx: SubOperationContext) => {
        return this.visit(ctx.expr()) - this.visit(ctx.term());
    };

    visitTermItem = (ctx: TermItemContext) => {
        return this.visit(ctx.term());
    };

    visitMulOperation = (ctx: MulOperationContext) => {
        return this.visit(ctx.term()) * this.visit(ctx.factor());
    };

    visitDivOperation = (ctx: DivOperationContext) => {
        return this.visit(ctx.term()) / this.visit(ctx.factor());
    };

    visitFactorItem = (ctx: FactorItemContext) => {
        return this.visit(ctx.factor());
    };

    visitCompoundFactor = (ctx: CompoundFactorContext) => {
        return this.visit(ctx.expr());
    };

    visitDigitFactor = (ctx: DigitFactorContext) => {
        return Number.parseInt(ctx.text);
    };

    protected defaultResult(): number {
        return 0;
    }
}


