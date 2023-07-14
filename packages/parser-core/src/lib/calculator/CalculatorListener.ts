// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/packages/parser-core/src/grammar/calculator/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AddOperationContext } from "./CalculatorParser";
import { SubOperationContext } from "./CalculatorParser";
import { TermItemContext } from "./CalculatorParser";
import { MulOperationContext } from "./CalculatorParser";
import { DivOperationContext } from "./CalculatorParser";
import { FactorItemContext } from "./CalculatorParser";
import { DigitFactorContext } from "./CalculatorParser";
import { CompoundFactorContext } from "./CalculatorParser";
import { CalContext } from "./CalculatorParser";
import { ExprContext } from "./CalculatorParser";
import { TermContext } from "./CalculatorParser";
import { FactorContext } from "./CalculatorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalculatorParser`.
 */
export interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `addOperation`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddOperation?: (ctx: AddOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `addOperation`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddOperation?: (ctx: AddOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `subOperation`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSubOperation?: (ctx: SubOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `subOperation`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSubOperation?: (ctx: SubOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `termItem`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTermItem?: (ctx: TermItemContext) => void;
	/**
	 * Exit a parse tree produced by the `termItem`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTermItem?: (ctx: TermItemContext) => void;

	/**
	 * Enter a parse tree produced by the `mulOperation`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	enterMulOperation?: (ctx: MulOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `mulOperation`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	exitMulOperation?: (ctx: MulOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `divOperation`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	enterDivOperation?: (ctx: DivOperationContext) => void;
	/**
	 * Exit a parse tree produced by the `divOperation`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	exitDivOperation?: (ctx: DivOperationContext) => void;

	/**
	 * Enter a parse tree produced by the `factorItem`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	enterFactorItem?: (ctx: FactorItemContext) => void;
	/**
	 * Exit a parse tree produced by the `factorItem`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	exitFactorItem?: (ctx: FactorItemContext) => void;

	/**
	 * Enter a parse tree produced by the `digitFactor`
	 * labeled alternative in `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 */
	enterDigitFactor?: (ctx: DigitFactorContext) => void;
	/**
	 * Exit a parse tree produced by the `digitFactor`
	 * labeled alternative in `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 */
	exitDigitFactor?: (ctx: DigitFactorContext) => void;

	/**
	 * Enter a parse tree produced by the `compoundFactor`
	 * labeled alternative in `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 */
	enterCompoundFactor?: (ctx: CompoundFactorContext) => void;
	/**
	 * Exit a parse tree produced by the `compoundFactor`
	 * labeled alternative in `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 */
	exitCompoundFactor?: (ctx: CompoundFactorContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.cal`.
	 * @param ctx the parse tree
	 */
	enterCal?: (ctx: CalContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.cal`.
	 * @param ctx the parse tree
	 */
	exitCal?: (ctx: CalContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;
}

