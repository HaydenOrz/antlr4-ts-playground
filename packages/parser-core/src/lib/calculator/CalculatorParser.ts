// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/src/grammar/calculator/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CalculatorListener } from "./CalculatorListener";
import { CalculatorVisitor } from "./CalculatorVisitor";


export class CalculatorParser extends Parser {
	public static readonly MUL = 1;
	public static readonly ADD = 2;
	public static readonly INT = 3;
	public static readonly NEWLINE = 4;
	public static readonly WS = 5;
	public static readonly RULE_cal = 0;
	public static readonly RULE_expr = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cal", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'+'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MUL", "ADD", "INT", "NEWLINE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalculatorParser._LITERAL_NAMES, CalculatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalculatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalculatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalculatorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalculatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public cal(): CalContext {
		let _localctx: CalContext = new CalContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalculatorParser.RULE_cal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.expr(0);
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CalculatorParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new IntContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 7;
			this.match(CalculatorParser.INT);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 17;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 15;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						_localctx = new MulContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expr);
						this.state = 9;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 10;
						this.match(CalculatorParser.MUL);
						this.state = 11;
						this.expr(4);
						}
						break;

					case 2:
						{
						_localctx = new AddContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expr);
						this.state = 12;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 13;
						this.match(CalculatorParser.ADD);
						this.state = 14;
						this.expr(3);
						}
						break;
					}
					}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07\x17\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x12\n\x03\f\x03\x0E\x03\x15" +
		"\v\x03\x03\x03\x02\x02\x03\x04\x04\x02\x02\x04\x02\x02\x02\x02\x16\x02" +
		"\x06\x03\x02\x02\x02\x04\b\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07" +
		"\x03\x03\x02\x02\x02\b\t\b\x03\x01\x02\t\n\x07\x05\x02\x02\n\x13\x03\x02" +
		"\x02\x02\v\f\f\x05\x02\x02\f\r\x07\x03\x02\x02\r\x12\x05\x04\x03\x06\x0E" +
		"\x0F\f\x04\x02\x02\x0F\x10\x07\x04\x02\x02\x10\x12\x05\x04\x03\x05\x11" +
		"\v\x03\x02\x02\x02\x11\x0E\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13" +
		"\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x05\x03\x02\x02\x02\x15" +
		"\x13\x03\x02\x02\x02\x04\x11\x13";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculatorParser.__ATN) {
			CalculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculatorParser._serializedATN));
		}

		return CalculatorParser.__ATN;
	}

}

export class CalContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_cal; }
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCal) {
			listener.enterCal(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCal) {
			listener.exitCal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCal) {
			return visitor.visitCal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class MulContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(CalculatorParser.MUL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMul) {
			listener.enterMul(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMul) {
			listener.exitMul(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(CalculatorParser.ADD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(CalculatorParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


