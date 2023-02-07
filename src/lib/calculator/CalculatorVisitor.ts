// Generated from /Users/hayden/Desktop/antlr/antlr4-parser-demo/src/grammar/calculator/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MulContext } from "./CalculatorParser";
import { AddContext } from "./CalculatorParser";
import { IntContext } from "./CalculatorParser";
import { CalContext } from "./CalculatorParser";
import { ExprContext } from "./CalculatorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Mul`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by the `Add`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by the `Int`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

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
}

