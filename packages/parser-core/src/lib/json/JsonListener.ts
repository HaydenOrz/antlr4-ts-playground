// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/packages/parser-core/src/grammar/json/Json.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `JsonParser`.
 */
export interface JsonListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ArrayOfValues`
	 * labeled alternative in `JsonParser.array`.
	 * @param ctx the parse tree
	 */
	enterArrayOfValues?: (ctx: ArrayOfValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayOfValues`
	 * labeled alternative in `JsonParser.array`.
	 * @param ctx the parse tree
	 */
	exitArrayOfValues?: (ctx: ArrayOfValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `EmptyArray`
	 * labeled alternative in `JsonParser.array`.
	 * @param ctx the parse tree
	 */
	enterEmptyArray?: (ctx: EmptyArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyArray`
	 * labeled alternative in `JsonParser.array`.
	 * @param ctx the parse tree
	 */
	exitEmptyArray?: (ctx: EmptyArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `Atom`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by the `Atom`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectValue`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	enterObjectValue?: (ctx: ObjectValueContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectValue`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	exitObjectValue?: (ctx: ObjectValueContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayValue`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	enterArrayValue?: (ctx: ArrayValueContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayValue`
	 * labeled alternative in `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	exitArrayValue?: (ctx: ArrayValueContext) => void;

	/**
	 * Enter a parse tree produced by the `AnObject`
	 * labeled alternative in `JsonParser.object`.
	 * @param ctx the parse tree
	 */
	enterAnObject?: (ctx: AnObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `AnObject`
	 * labeled alternative in `JsonParser.object`.
	 * @param ctx the parse tree
	 */
	exitAnObject?: (ctx: AnObjectContext) => void;

	/**
	 * Enter a parse tree produced by the `EmptyObject`
	 * labeled alternative in `JsonParser.object`.
	 * @param ctx the parse tree
	 */
	enterEmptyObject?: (ctx: EmptyObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyObject`
	 * labeled alternative in `JsonParser.object`.
	 * @param ctx the parse tree
	 */
	exitEmptyObject?: (ctx: EmptyObjectContext) => void;

	/**
	 * Enter a parse tree produced by `JsonParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `JsonParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `JsonParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `JsonParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `JsonParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `JsonParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `JsonParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `JsonParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

