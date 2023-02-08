// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/src/grammar/json/Json.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ArrayOfValuesContext } from "./JsonParser";
import { EmptyArrayContext } from "./JsonParser";
import { StringContext } from "./JsonParser";
import { AtomContext } from "./JsonParser";
import { ObjectValueContext } from "./JsonParser";
import { ArrayValueContext } from "./JsonParser";
import { AnObjectContext } from "./JsonParser";
import { EmptyObjectContext } from "./JsonParser";
import { JsonContext } from "./JsonParser";
import { ObjectContext } from "./JsonParser";
import { PairContext } from "./JsonParser";
import { ArrayContext } from "./JsonParser";
import { ValueContext } from "./JsonParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JsonParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JsonVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ArrayOfValues`
	 * labeled alternative in `JsonParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayOfValues?: (ctx: ArrayOfValuesContext) => Result;

	/**
	 * Visit a parse tree produced by the `EmptyArray`
	 * labeled alternative in `JsonParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyArray?: (ctx: EmptyArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `Atom`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectValue`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectValue?: (ctx: ObjectValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayValue`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayValue?: (ctx: ArrayValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `AnObject`
	 * labeled alternative in `JsonParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnObject?: (ctx: AnObjectContext) => Result;

	/**
	 * Visit a parse tree produced by the `EmptyObject`
	 * labeled alternative in `JsonParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyObject?: (ctx: EmptyObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

