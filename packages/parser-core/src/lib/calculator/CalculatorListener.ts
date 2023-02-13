// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/packages/parser-core/src/grammar/calculator/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MulContext } from "./CalculatorParser";
import { AddContext } from "./CalculatorParser";
import { IntContext } from "./CalculatorParser";
import { CalContext } from "./CalculatorParser";
import { ExprContext } from "./CalculatorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalculatorParser`.
 */
export interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Mul`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMul?: (ctx: MulContext) => void;
	/**
	 * Exit a parse tree produced by the `Mul`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMul?: (ctx: MulContext) => void;

	/**
	 * Enter a parse tree produced by the `Add`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by the `Add`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by the `Int`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `Int`
	 * labeled alternative in `CalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

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
}

