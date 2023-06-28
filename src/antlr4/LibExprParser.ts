// Generated from .\src\antlr4\LibExpr.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LibExprListener from "./LibExprListener.js";
import LibExprVisitor from "./LibExprVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LibExprParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly MUL = 4;
	public static readonly DIV = 5;
	public static readonly ADD = 6;
	public static readonly SUB = 7;
	public static readonly CLEAR = 8;
	public static readonly ID = 9;
	public static readonly INT = 10;
	public static readonly NEWLINE = 11;
	public static readonly WS = 12;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_expr = 2;
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "'('", "')'", 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'", 
                                                            "'clear'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "MUL", "DIV", 
                                                             "ADD", "SUB", 
                                                             "CLEAR", "ID", 
                                                             "INT", "NEWLINE", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "expr",
	];
	public get grammarFileName(): string { return "LibExpr.g4"; }
	public get literalNames(): (string | null)[] { return LibExprParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LibExprParser.symbolicNames; }
	public get ruleNames(): string[] { return LibExprParser.ruleNames; }
	public get serializedATN(): number[] { return LibExprParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LibExprParser._ATN, LibExprParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LibExprParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 6;
				this.stat();
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3844) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LibExprParser.RULE_stat);
		try {
			this.state = 21;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				localctx = new PrintExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 11;
				this.expr(0);
				this.state = 12;
				this.match(LibExprParser.NEWLINE);
				}
				break;
			case 2:
				localctx = new AssignContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 14;
				this.match(LibExprParser.ID);
				this.state = 15;
				this.match(LibExprParser.T__0);
				this.state = 16;
				this.expr(0);
				this.state = 17;
				this.match(LibExprParser.NEWLINE);
				}
				break;
			case 3:
				localctx = new BlankContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 19;
				this.match(LibExprParser.NEWLINE);
				}
				break;
			case 4:
				localctx = new ClearContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 20;
				this.match(LibExprParser.CLEAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, LibExprParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				{
				localctx = new IntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 24;
				this.match(LibExprParser.INT);
				}
				break;
			case 9:
				{
				localctx = new IdContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 25;
				this.match(LibExprParser.ID);
				}
				break;
			case 2:
				{
				localctx = new ParensContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 26;
				this.match(LibExprParser.T__1);
				this.state = 27;
				this.expr(0);
				this.state = 28;
				this.match(LibExprParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 40;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 38;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LibExprParser.RULE_expr);
						this.state = 32;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 33;
						(localctx as MulDivContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===4 || _la===5)) {
						    (localctx as MulDivContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 34;
						this.expr(6);
						}
						break;
					case 2:
						{
						localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, LibExprParser.RULE_expr);
						this.state = 35;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 36;
						(localctx as AddSubContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===6 || _la===7)) {
						    (localctx as AddSubContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 37;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,12,44,2,0,7,0,2,
	1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,0,12,0,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,3,1,22,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,31,8,2,1,2,1,2,1,2,1,
	2,1,2,1,2,5,2,39,8,2,10,2,12,2,42,9,2,1,2,0,1,4,3,0,2,4,0,2,1,0,4,5,1,0,
	6,7,48,0,7,1,0,0,0,2,21,1,0,0,0,4,30,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,
	9,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,12,3,4,2,0,12,13,5,11,
	0,0,13,22,1,0,0,0,14,15,5,9,0,0,15,16,5,1,0,0,16,17,3,4,2,0,17,18,5,11,
	0,0,18,22,1,0,0,0,19,22,5,11,0,0,20,22,5,8,0,0,21,11,1,0,0,0,21,14,1,0,
	0,0,21,19,1,0,0,0,21,20,1,0,0,0,22,3,1,0,0,0,23,24,6,2,-1,0,24,31,5,10,
	0,0,25,31,5,9,0,0,26,27,5,2,0,0,27,28,3,4,2,0,28,29,5,3,0,0,29,31,1,0,0,
	0,30,23,1,0,0,0,30,25,1,0,0,0,30,26,1,0,0,0,31,40,1,0,0,0,32,33,10,5,0,
	0,33,34,7,0,0,0,34,39,3,4,2,6,35,36,10,4,0,0,36,37,7,1,0,0,37,39,3,4,2,
	5,38,32,1,0,0,0,38,35,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,
	41,5,1,0,0,0,42,40,1,0,0,0,5,9,21,30,38,40];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LibExprParser.__ATN) {
			LibExprParser.__ATN = new ATNDeserializer().deserialize(LibExprParser._serializedATN);
		}

		return LibExprParser.__ATN;
	}


	static DecisionsToDFA = LibExprParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: LibExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
    public get ruleIndex(): number {
    	return LibExprParser.RULE_prog;
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: LibExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LibExprParser.RULE_stat;
	}
	public copyFrom(ctx: StatContext): void {
		super.copyFrom(ctx);
	}
}
export class BlankContext extends StatContext {
	constructor(parser: LibExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LibExprParser.NEWLINE, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterBlank) {
	 		listener.enterBlank(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitBlank) {
	 		listener.exitBlank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitBlank) {
			return visitor.visitBlank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClearContext extends StatContext {
	constructor(parser: LibExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CLEAR(): TerminalNode {
		return this.getToken(LibExprParser.CLEAR, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterClear) {
	 		listener.enterClear(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitClear) {
	 		listener.exitClear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitClear) {
			return visitor.visitClear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintExprContext extends StatContext {
	constructor(parser: LibExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LibExprParser.NEWLINE, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterPrintExpr) {
	 		listener.enterPrintExpr(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitPrintExpr) {
	 		listener.exitPrintExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitPrintExpr) {
			return visitor.visitPrintExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignContext extends StatContext {
	constructor(parser: LibExprParser, ctx: StatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(LibExprParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LibExprParser.NEWLINE, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: LibExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LibExprParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ParensContext extends ExprContext {
	constructor(parser: LibExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterParens) {
	 		listener.enterParens(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitParens) {
	 		listener.exitParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitParens) {
			return visitor.visitParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivContext extends ExprContext {
	public _op!: Token;
	constructor(parser: LibExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(LibExprParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(LibExprParser.DIV, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterMulDiv) {
	 		listener.enterMulDiv(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitMulDiv) {
	 		listener.exitMulDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitMulDiv) {
			return visitor.visitMulDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubContext extends ExprContext {
	public _op!: Token;
	constructor(parser: LibExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(LibExprParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(LibExprParser.SUB, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterAddSub) {
	 		listener.enterAddSub(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitAddSub) {
	 		listener.exitAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitAddSub) {
			return visitor.visitAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdContext extends ExprContext {
	constructor(parser: LibExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(LibExprParser.ID, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends ExprContext {
	constructor(parser: LibExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT(): TerminalNode {
		return this.getToken(LibExprParser.INT, 0);
	}
	public enterRule(listener: LibExprListener): void {
	    if(listener.enterInt) {
	 		listener.enterInt(this);
		}
	}
	public exitRule(listener: LibExprListener): void {
	    if(listener.exitInt) {
	 		listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LibExprVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
