// Generated from ./src/rows/Rows.g4 by ANTLR 4.13.0
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
import RowsListener from "./RowsListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class RowsParser extends Parser {
	public static readonly TAB = 1;
	public static readonly NL = 2;
	public static readonly STUFF = 3;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_row = 1;
	public static readonly literalNames: (string | null)[] = [ null, "'\\t'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TAB", 
                                                             "NL", "STUFF" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "row",
	];
	public get grammarFileName(): string { return "Rows.g4"; }
	public get literalNames(): (string | null)[] { return RowsParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return RowsParser.symbolicNames; }
	public get ruleNames(): string[] { return RowsParser.ruleNames; }
	public get serializedATN(): number[] { return RowsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	  col?:number

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, RowsParser._ATN, RowsParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, RowsParser.RULE_file);
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
				this.state = 4;
				this.row();
				this.state = 5;
				this.match(RowsParser.NL);
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===3);
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
	public row(): RowContext {
		let localctx: RowContext = new RowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, RowsParser.RULE_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 11;
				localctx._STUFF = this.match(RowsParser.STUFF);

				      localctx.i++;
				      if (localctx.i === this.col) console.log((localctx._STUFF != null ? localctx._STUFF.text : undefined));
				    
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===3);
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

	public static readonly _serializedATN: number[] = [4,1,3,18,2,0,7,0,2,1,
	7,1,1,0,1,0,1,0,4,0,8,8,0,11,0,12,0,9,1,1,1,1,4,1,14,8,1,11,1,12,1,15,1,
	1,0,0,2,0,2,0,0,17,0,7,1,0,0,0,2,13,1,0,0,0,4,5,3,2,1,0,5,6,5,2,0,0,6,8,
	1,0,0,0,7,4,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,
	12,5,3,0,0,12,14,6,1,-1,0,13,11,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,
	16,1,0,0,0,16,3,1,0,0,0,2,9,15];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RowsParser.__ATN) {
			RowsParser.__ATN = new ATNDeserializer().deserialize(RowsParser._serializedATN);
		}

		return RowsParser.__ATN;
	}


	static DecisionsToDFA = RowsParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: RowsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public row_list(): RowContext[] {
		return this.getTypedRuleContexts(RowContext) as RowContext[];
	}
	public row(i: number): RowContext {
		return this.getTypedRuleContext(RowContext, i) as RowContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(RowsParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(RowsParser.NL, i);
	}
    public get ruleIndex(): number {
    	return RowsParser.RULE_file;
	}
	public enterRule(listener: RowsListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: RowsListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
}


export class RowContext extends ParserRuleContext {
	public i: number = 0;
	public _STUFF!: Token;
	constructor(parser?: RowsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STUFF_list(): TerminalNode[] {
	    	return this.getTokens(RowsParser.STUFF);
	}
	public STUFF(i: number): TerminalNode {
		return this.getToken(RowsParser.STUFF, i);
	}
    public get ruleIndex(): number {
    	return RowsParser.RULE_row;
	}
	public enterRule(listener: RowsListener): void {
	    if(listener.enterRow) {
	 		listener.enterRow(this);
		}
	}
	public exitRule(listener: RowsListener): void {
	    if(listener.exitRow) {
	 		listener.exitRow(this);
		}
	}
}
