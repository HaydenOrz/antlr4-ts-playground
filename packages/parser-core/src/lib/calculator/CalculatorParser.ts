// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/packages/parser-core/src/grammar/calculator/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly ADD = 1;
	public static readonly SUB = 2;
	public static readonly MUL = 3;
	public static readonly DIV = 4;
	public static readonly L_BRACKET = 5;
	public static readonly R_BRACKET = 6;
	public static readonly DIGIT = 7;
	public static readonly NEWLINE = 8;
	public static readonly WS = 9;
	public static readonly RULE_cal = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_term = 2;
	public static readonly RULE_factor = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cal", "expr", "term", "factor",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+'", "'-'", "'*'", "'/'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "SUB", "MUL", "DIV", "L_BRACKET", "R_BRACKET", "DIGIT", 
		"NEWLINE", "WS",
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
			this.state = 8;
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
			_localctx = new TermItemContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 11;
			this.term(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 21;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 19;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						_localctx = new AddOperationContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expr);
						this.state = 13;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 14;
						this.match(CalculatorParser.ADD);
						this.state = 15;
						this.term(0);
						}
						break;

					case 2:
						{
						_localctx = new SubOperationContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expr);
						this.state = 16;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 17;
						this.match(CalculatorParser.SUB);
						this.state = 18;
						this.term(0);
						}
						break;
					}
					}
				}
				this.state = 23;
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

	public term(): TermContext;
	public term(_p: number): TermContext;
	// @RuleVersion(0)
	public term(_p?: number): TermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TermContext = new TermContext(this._ctx, _parentState);
		let _prevctx: TermContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CalculatorParser.RULE_term, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new FactorItemContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 25;
			this.factor();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 33;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new MulOperationContext(new TermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_term);
						this.state = 27;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 28;
						this.match(CalculatorParser.MUL);
						this.state = 29;
						this.factor();
						}
						break;

					case 2:
						{
						_localctx = new DivOperationContext(new TermContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_term);
						this.state = 30;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 31;
						this.match(CalculatorParser.DIV);
						this.state = 32;
						this.factor();
						}
						break;
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalculatorParser.RULE_factor);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalculatorParser.DIGIT:
				_localctx = new DigitFactorContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 38;
				this.match(CalculatorParser.DIGIT);
				}
				break;
			case CalculatorParser.L_BRACKET:
				_localctx = new CompoundFactorContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.match(CalculatorParser.L_BRACKET);
				this.state = 40;
				this.expr(0);
				this.state = 41;
				this.match(CalculatorParser.R_BRACKET);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);

		case 2:
			return this.term_sempred(_localctx as TermContext, predIndex);
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
	private term_sempred(_localctx: TermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v0\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"\x16\n\x03\f\x03\x0E\x03\x19\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04$\n\x04\f\x04\x0E\x04\'\v" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05.\n\x05\x03\x05\x02" +
		"\x02\x04\x04\x06\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x02\x020\x02\n" +
		"\x03\x02\x02\x02\x04\f\x03\x02\x02\x02\x06\x1A\x03\x02\x02\x02\b-\x03" +
		"\x02\x02\x02\n\v\x05\x04\x03\x02\v\x03\x03\x02\x02\x02\f\r\b\x03\x01\x02" +
		"\r\x0E\x05\x06\x04\x02\x0E\x17\x03\x02\x02\x02\x0F\x10\f\x05\x02\x02\x10" +
		"\x11\x07\x03\x02\x02\x11\x16\x05\x06\x04\x02\x12\x13\f\x04\x02\x02\x13" +
		"\x14\x07\x04\x02\x02\x14\x16\x05\x06\x04\x02\x15\x0F\x03\x02\x02\x02\x15" +
		"\x12\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17" +
		"\x18\x03\x02\x02\x02\x18\x05\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x1A" +
		"\x1B\b\x04\x01\x02\x1B\x1C\x05\b\x05\x02\x1C%\x03\x02\x02\x02\x1D\x1E" +
		"\f\x05\x02\x02\x1E\x1F\x07\x05\x02\x02\x1F$\x05\b\x05\x02 !\f\x04\x02" +
		"\x02!\"\x07\x06\x02\x02\"$\x05\b\x05\x02#\x1D\x03\x02\x02\x02# \x03\x02" +
		"\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x07\x03" +
		"\x02\x02\x02\'%\x03\x02\x02\x02(.\x07\t\x02\x02)*\x07\x07\x02\x02*+\x05" +
		"\x04\x03\x02+,\x07\b\x02\x02,.\x03\x02\x02\x02-(\x03\x02\x02\x02-)\x03" +
		"\x02\x02\x02.\t\x03\x02\x02\x02\x07\x15\x17#%-";
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
export class AddOperationContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ADD(): TerminalNode { return this.getToken(CalculatorParser.ADD, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterAddOperation) {
			listener.enterAddOperation(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitAddOperation) {
			listener.exitAddOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitAddOperation) {
			return visitor.visitAddOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubOperationContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SUB(): TerminalNode { return this.getToken(CalculatorParser.SUB, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterSubOperation) {
			listener.enterSubOperation(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitSubOperation) {
			listener.exitSubOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitSubOperation) {
			return visitor.visitSubOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TermItemContext extends ExprContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterTermItem) {
			listener.enterTermItem(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitTermItem) {
			listener.exitTermItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitTermItem) {
			return visitor.visitTermItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_term; }
	public copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class MulOperationContext extends TermContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public MUL(): TerminalNode { return this.getToken(CalculatorParser.MUL, 0); }
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMulOperation) {
			listener.enterMulOperation(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMulOperation) {
			listener.exitMulOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMulOperation) {
			return visitor.visitMulOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivOperationContext extends TermContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public DIV(): TerminalNode { return this.getToken(CalculatorParser.DIV, 0); }
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterDivOperation) {
			listener.enterDivOperation(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitDivOperation) {
			listener.exitDivOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitDivOperation) {
			return visitor.visitDivOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FactorItemContext extends TermContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterFactorItem) {
			listener.enterFactorItem(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitFactorItem) {
			listener.exitFactorItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitFactorItem) {
			return visitor.visitFactorItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_factor; }
	public copyFrom(ctx: FactorContext): void {
		super.copyFrom(ctx);
	}
}
export class DigitFactorContext extends FactorContext {
	public DIGIT(): TerminalNode { return this.getToken(CalculatorParser.DIGIT, 0); }
	constructor(ctx: FactorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterDigitFactor) {
			listener.enterDigitFactor(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitDigitFactor) {
			listener.exitDigitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitDigitFactor) {
			return visitor.visitDigitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompoundFactorContext extends FactorContext {
	public L_BRACKET(): TerminalNode { return this.getToken(CalculatorParser.L_BRACKET, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public R_BRACKET(): TerminalNode { return this.getToken(CalculatorParser.R_BRACKET, 0); }
	constructor(ctx: FactorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCompoundFactor) {
			listener.enterCompoundFactor(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCompoundFactor) {
			listener.exitCompoundFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCompoundFactor) {
			return visitor.visitCompoundFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


