// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/packages/parser-core/src/grammar/calculator/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `addOperation`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOperation?: (ctx: AddOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `subOperation`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubOperation?: (ctx: SubOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `termItem`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermItem?: (ctx: TermItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulOperation`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulOperation?: (ctx: MulOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `divOperation`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivOperation?: (ctx: DivOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `factorItem`
	 * labeled alternative in `CalculatorParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactorItem?: (ctx: FactorItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitFactor`
	 * labeled alternative in `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitFactor?: (ctx: DigitFactorContext) => Result;

	/**
	 * Visit a parse tree produced by the `compoundFactor`
	 * labeled alternative in `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundFactor?: (ctx: CompoundFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.cal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCal?: (ctx: CalContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;
}

