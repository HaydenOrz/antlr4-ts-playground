// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/src/grammar/json/Json.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JsonListener } from "./JsonListener";
import { JsonVisitor } from "./JsonVisitor";


export class JsonParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly STRING = 10;
	public static readonly NUMBER = 11;
	public static readonly WS = 12;
	public static readonly RULE_json = 0;
	public static readonly RULE_object = 1;
	public static readonly RULE_pair = 2;
	public static readonly RULE_array = 3;
	public static readonly RULE_value = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"json", "object", "pair", "array", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", "'false'", 
		"'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JsonParser._LITERAL_NAMES, JsonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JsonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Json.g4"; }

	// @Override
	public get ruleNames(): string[] { return JsonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JsonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JsonParser._ATN, this);
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JsonParser.RULE_json);
		try {
			this.state = 16;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JsonParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.object();
				this.state = 11;
				this.match(JsonParser.EOF);
				}
				break;
			case JsonParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 13;
				this.array();
				this.state = 14;
				this.match(JsonParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JsonParser.RULE_object);
		let _la: number;
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				_localctx = new AnObjectContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.match(JsonParser.T__0);
				this.state = 19;
				this.pair();
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JsonParser.T__1) {
					{
					{
					this.state = 20;
					this.match(JsonParser.T__1);
					this.state = 21;
					this.pair();
					}
					}
					this.state = 26;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 27;
				this.match(JsonParser.T__2);
				}
				break;

			case 2:
				_localctx = new EmptyObjectContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 29;
				this.match(JsonParser.T__0);
				this.state = 30;
				this.match(JsonParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JsonParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.match(JsonParser.STRING);
			this.state = 34;
			this.match(JsonParser.T__3);
			this.state = 35;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JsonParser.RULE_array);
		let _la: number;
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new ArrayOfValuesContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.match(JsonParser.T__4);
				this.state = 38;
				this.value();
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JsonParser.T__1) {
					{
					{
					this.state = 39;
					this.match(JsonParser.T__1);
					this.state = 40;
					this.value();
					}
					}
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 46;
				this.match(JsonParser.T__5);
				}
				break;

			case 2:
				_localctx = new EmptyArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.match(JsonParser.T__4);
				this.state = 49;
				this.match(JsonParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JsonParser.RULE_value);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JsonParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(JsonParser.STRING);
				}
				break;
			case JsonParser.NUMBER:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.match(JsonParser.NUMBER);
				}
				break;
			case JsonParser.T__6:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.match(JsonParser.T__6);
				}
				break;
			case JsonParser.T__7:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 55;
				this.match(JsonParser.T__7);
				}
				break;
			case JsonParser.T__8:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 56;
				this.match(JsonParser.T__8);
				}
				break;
			case JsonParser.T__0:
				_localctx = new ObjectValueContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 57;
				this.object();
				}
				break;
			case JsonParser.T__4:
				_localctx = new ArrayValueContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 58;
				this.array();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E@\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x13\n\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03\x19\n\x03\f\x03\x0E\x03\x1C\v\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05,\n\x05\f\x05\x0E\x05/\v\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x055\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06>\n\x06\x03\x06\x02\x02\x02\x07\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02E\x02\x12\x03\x02\x02\x02" +
		"\x04!\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b4\x03\x02\x02\x02\n=\x03\x02" +
		"\x02\x02\f\r\x05\x04\x03\x02\r\x0E\x07\x02\x02\x03\x0E\x13\x03\x02\x02" +
		"\x02\x0F\x10\x05\b\x05\x02\x10\x11\x07\x02\x02\x03\x11\x13\x03\x02\x02" +
		"\x02\x12\f\x03\x02\x02\x02\x12\x0F\x03\x02\x02\x02\x13\x03\x03\x02\x02" +
		"\x02\x14\x15\x07\x03\x02\x02\x15\x1A\x05\x06\x04\x02\x16\x17\x07\x04\x02" +
		"\x02\x17\x19\x05\x06\x04\x02\x18\x16\x03\x02\x02\x02\x19\x1C\x03\x02\x02" +
		"\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1D\x03\x02\x02" +
		"\x02\x1C\x1A\x03\x02\x02\x02\x1D\x1E\x07\x05\x02\x02\x1E\"\x03\x02\x02" +
		"\x02\x1F \x07\x03\x02\x02 \"\x07\x05\x02\x02!\x14\x03\x02\x02\x02!\x1F" +
		"\x03\x02\x02\x02\"\x05\x03\x02\x02\x02#$\x07\f\x02\x02$%\x07\x06\x02\x02" +
		"%&\x05\n\x06\x02&\x07\x03\x02\x02\x02\'(\x07\x07\x02\x02(-\x05\n\x06\x02" +
		")*\x07\x04\x02\x02*,\x05\n\x06\x02+)\x03\x02\x02\x02,/\x03\x02\x02\x02" +
		"-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02/-\x03\x02\x02\x02" +
		"01\x07\b\x02\x0215\x03\x02\x02\x0223\x07\x07\x02\x0235\x07\b\x02\x024" +
		"\'\x03\x02\x02\x0242\x03\x02\x02\x025\t\x03\x02\x02\x026>\x07\f\x02\x02" +
		"7>\x07\r\x02\x028>\x07\t\x02\x029>\x07\n\x02\x02:>\x07\v\x02\x02;>\x05" +
		"\x04\x03\x02<>\x05\b\x05\x02=6\x03\x02\x02\x02=7\x03\x02\x02\x02=8\x03" +
		"\x02\x02\x02=9\x03\x02\x02\x02=:\x03\x02\x02\x02=;\x03\x02\x02\x02=<\x03" +
		"\x02\x02\x02>\v\x03\x02\x02\x02\b\x12\x1A!-4=";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JsonParser.__ATN) {
			JsonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JsonParser._serializedATN));
		}

		return JsonParser.__ATN;
	}

}

export class JsonContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public EOF(): TerminalNode { return this.getToken(JsonParser.EOF, 0); }
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_json; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitJson) {
			return visitor.visitJson(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_object; }
	public copyFrom(ctx: ObjectContext): void {
		super.copyFrom(ctx);
	}
}
export class AnObjectContext extends ObjectContext {
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(ctx: ObjectContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterAnObject) {
			listener.enterAnObject(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitAnObject) {
			listener.exitAnObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitAnObject) {
			return visitor.visitAnObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyObjectContext extends ObjectContext {
	constructor(ctx: ObjectContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterEmptyObject) {
			listener.enterEmptyObject(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitEmptyObject) {
			listener.exitEmptyObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitEmptyObject) {
			return visitor.visitEmptyObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(JsonParser.STRING, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_pair; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_array; }
	public copyFrom(ctx: ArrayContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrayOfValuesContext extends ArrayContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(ctx: ArrayContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterArrayOfValues) {
			listener.enterArrayOfValues(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitArrayOfValues) {
			listener.exitArrayOfValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitArrayOfValues) {
			return visitor.visitArrayOfValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyArrayContext extends ArrayContext {
	constructor(ctx: ArrayContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterEmptyArray) {
			listener.enterEmptyArray(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitEmptyArray) {
			listener.exitEmptyArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitEmptyArray) {
			return visitor.visitEmptyArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringContext extends ValueContext {
	public STRING(): TerminalNode { return this.getToken(JsonParser.STRING, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtomContext extends ValueContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JsonParser.NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectValueContext extends ValueContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterObjectValue) {
			listener.enterObjectValue(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitObjectValue) {
			listener.exitObjectValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitObjectValue) {
			return visitor.visitObjectValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayValueContext extends ValueContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterArrayValue) {
			listener.enterArrayValue(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitArrayValue) {
			listener.exitArrayValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JsonVisitor<Result>): Result {
		if (visitor.visitArrayValue) {
			return visitor.visitArrayValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


