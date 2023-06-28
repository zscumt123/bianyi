// Generated from ./src/chapter2/script/PlayScript.g4 by ANTLR 4.13.0
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
import PlayScriptListener from "./PlayScriptListener.js";
import PlayScriptVisitor from "./PlayScriptVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class PlayScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly BOOLEAN = 4;
	public static readonly BREAK = 5;
	public static readonly BYTE = 6;
	public static readonly CASE = 7;
	public static readonly CATCH = 8;
	public static readonly CHAR = 9;
	public static readonly CLASS = 10;
	public static readonly CONST = 11;
	public static readonly CONTINUE = 12;
	public static readonly DEFAULT = 13;
	public static readonly DO = 14;
	public static readonly DOUBLE = 15;
	public static readonly ELSE = 16;
	public static readonly ENUM = 17;
	public static readonly EXTENDS = 18;
	public static readonly FINAL = 19;
	public static readonly FINALLY = 20;
	public static readonly FLOAT = 21;
	public static readonly FOR = 22;
	public static readonly IF = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly SUPER = 38;
	public static readonly SWITCH = 39;
	public static readonly THIS = 40;
	public static readonly VOID = 41;
	public static readonly WHILE = 42;
	public static readonly IntegerLiteral = 43;
	public static readonly FloatingPointLiteral = 44;
	public static readonly BooleanLiteral = 45;
	public static readonly CharacterLiteral = 46;
	public static readonly StringLiteral = 47;
	public static readonly NullLiteral = 48;
	public static readonly LPAREN = 49;
	public static readonly RPAREN = 50;
	public static readonly LBRACE = 51;
	public static readonly RBRACE = 52;
	public static readonly LBRACK = 53;
	public static readonly RBRACK = 54;
	public static readonly SEMI = 55;
	public static readonly COMMA = 56;
	public static readonly DOT = 57;
	public static readonly ELLIPSIS = 58;
	public static readonly AT = 59;
	public static readonly COLONCOLON = 60;
	public static readonly ASSIGN = 61;
	public static readonly GT = 62;
	public static readonly LT = 63;
	public static readonly BANG = 64;
	public static readonly TILDE = 65;
	public static readonly QUESTION = 66;
	public static readonly COLON = 67;
	public static readonly ARROW = 68;
	public static readonly EQUAL = 69;
	public static readonly LE = 70;
	public static readonly GE = 71;
	public static readonly NOTEQUAL = 72;
	public static readonly AND = 73;
	public static readonly OR = 74;
	public static readonly INC = 75;
	public static readonly DEC = 76;
	public static readonly ADD = 77;
	public static readonly SUB = 78;
	public static readonly MUL = 79;
	public static readonly DIV = 80;
	public static readonly BITAND = 81;
	public static readonly BITOR = 82;
	public static readonly CARET = 83;
	public static readonly MOD = 84;
	public static readonly ADD_ASSIGN = 85;
	public static readonly SUB_ASSIGN = 86;
	public static readonly MUL_ASSIGN = 87;
	public static readonly DIV_ASSIGN = 88;
	public static readonly AND_ASSIGN = 89;
	public static readonly OR_ASSIGN = 90;
	public static readonly XOR_ASSIGN = 91;
	public static readonly MOD_ASSIGN = 92;
	public static readonly LSHIFT_ASSIGN = 93;
	public static readonly RSHIFT_ASSIGN = 94;
	public static readonly URSHIFT_ASSIGN = 95;
	public static readonly Identifier = 96;
	public static readonly WS = 97;
	public static readonly COMMENT = 98;
	public static readonly LINE_COMMENT = 99;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_literal = 0;
	public static readonly RULE_primitiveType = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_expressionStatement = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_initializer = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_assignmentExpression = 7;
	public static readonly RULE_assignmentOperator = 8;
	public static readonly RULE_additiveExpression = 9;
	public static readonly RULE_multiplicativeExpression = 10;
	public static readonly RULE_primaryExpression = 11;
	public static readonly RULE_argumentExpressionList = 12;
	public static readonly RULE_compoundStatement = 13;
	public static readonly RULE_blockItemList = 14;
	public static readonly RULE_blockItem = 15;
	public static readonly literalNames: (string | null)[] = [ null, "'Number'", 
                                                            "'String'", 
                                                            "'var'", "'boolean'", 
                                                            "'break'", "'byte'", 
                                                            "'case'", "'catch'", 
                                                            "'char'", "'class'", 
                                                            "'const'", "'continue'", 
                                                            "'default'", 
                                                            "'do'", "'double'", 
                                                            "'else'", "'enum'", 
                                                            "'extends'", 
                                                            "'final'", "'finally'", 
                                                            "'float'", "'for'", 
                                                            "'if'", "'implements'", 
                                                            "'import'", 
                                                            "'instanceof'", 
                                                            "'int'", "'interface'", 
                                                            "'long'", "'native'", 
                                                            "'new'", "'package'", 
                                                            "'private'", 
                                                            "'protected'", 
                                                            "'public'", 
                                                            "'return'", 
                                                            "'short'", "'super'", 
                                                            "'switch'", 
                                                            "'this'", "'void'", 
                                                            "'while'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'null'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "';'", 
                                                            "','", "'.'", 
                                                            "'...'", "'@'", 
                                                            "'::'", "'='", 
                                                            "'>'", "'<'", 
                                                            "'!'", "'~'", 
                                                            "'?'", "':'", 
                                                            "'->'", "'=='", 
                                                            "'<='", "'>='", 
                                                            "'!='", "'&&'", 
                                                            "'||'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'&'", 
                                                            "'|'", "'^'", 
                                                            "'%'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'%='", "'<<='", 
                                                            "'>>='", "'>>>='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "BOOLEAN", 
                                                             "BREAK", "BYTE", 
                                                             "CASE", "CATCH", 
                                                             "CHAR", "CLASS", 
                                                             "CONST", "CONTINUE", 
                                                             "DEFAULT", 
                                                             "DO", "DOUBLE", 
                                                             "ELSE", "ENUM", 
                                                             "EXTENDS", 
                                                             "FINAL", "FINALLY", 
                                                             "FLOAT", "FOR", 
                                                             "IF", "IMPLEMENTS", 
                                                             "IMPORT", "INSTANCEOF", 
                                                             "INT", "INTERFACE", 
                                                             "LONG", "NATIVE", 
                                                             "NEW", "PACKAGE", 
                                                             "PRIVATE", 
                                                             "PROTECTED", 
                                                             "PUBLIC", "RETURN", 
                                                             "SHORT", "SUPER", 
                                                             "SWITCH", "THIS", 
                                                             "VOID", "WHILE", 
                                                             "IntegerLiteral", 
                                                             "FloatingPointLiteral", 
                                                             "BooleanLiteral", 
                                                             "CharacterLiteral", 
                                                             "StringLiteral", 
                                                             "NullLiteral", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "LBRACK", "RBRACK", 
                                                             "SEMI", "COMMA", 
                                                             "DOT", "ELLIPSIS", 
                                                             "AT", "COLONCOLON", 
                                                             "ASSIGN", "GT", 
                                                             "LT", "BANG", 
                                                             "TILDE", "QUESTION", 
                                                             "COLON", "ARROW", 
                                                             "EQUAL", "LE", 
                                                             "GE", "NOTEQUAL", 
                                                             "AND", "OR", 
                                                             "INC", "DEC", 
                                                             "ADD", "SUB", 
                                                             "MUL", "DIV", 
                                                             "BITAND", "BITOR", 
                                                             "CARET", "MOD", 
                                                             "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MUL_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "LSHIFT_ASSIGN", 
                                                             "RSHIFT_ASSIGN", 
                                                             "URSHIFT_ASSIGN", 
                                                             "Identifier", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"literal", "primitiveType", "statement", "expressionStatement", "declaration", 
		"initializer", "expression", "assignmentExpression", "assignmentOperator", 
		"additiveExpression", "multiplicativeExpression", "primaryExpression", 
		"argumentExpressionList", "compoundStatement", "blockItemList", "blockItem",
	];
	public get grammarFileName(): string { return "PlayScript.g4"; }
	public get literalNames(): (string | null)[] { return PlayScriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return PlayScriptParser.symbolicNames; }
	public get ruleNames(): string[] { return PlayScriptParser.ruleNames; }
	public get serializedATN(): number[] { return PlayScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, PlayScriptParser._ATN, PlayScriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, PlayScriptParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, PlayScriptParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, PlayScriptParser.RULE_statement);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 55:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 36;
				this.expressionStatement();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 37;
				this.compoundStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, PlayScriptParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 127) !== 0) || _la===96) {
				{
				this.state = 40;
				this.expression(0);
				}
			}

			this.state = 43;
			this.match(PlayScriptParser.SEMI);
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
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, PlayScriptParser.RULE_declaration);
		try {
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 45;
				this.primitiveType();
				this.state = 46;
				this.match(PlayScriptParser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 48;
				this.primitiveType();
				this.state = 49;
				this.match(PlayScriptParser.Identifier);
				this.state = 50;
				this.initializer();
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
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let localctx: InitializerContext = new InitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, PlayScriptParser.RULE_initializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.assignmentOperator();
			this.state = 55;
			this.assignmentExpression();
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 12;
		this.enterRecursionRule(localctx, 12, PlayScriptParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 58;
			this.assignmentExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
					this.state = 60;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 61;
					this.match(PlayScriptParser.COMMA);
					this.state = 62;
					this.assignmentExpression();
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
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
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, PlayScriptParser.RULE_assignmentExpression);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 68;
				this.additiveExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 69;
				this.match(PlayScriptParser.Identifier);
				this.state = 70;
				this.assignmentOperator();
				this.state = 71;
				this.additiveExpression(0);
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
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, PlayScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			_la = this._input.LA(1);
			if(!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 4278190081) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
			this.exitRule();
		}
		return localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, PlayScriptParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 78;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 86;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_additiveExpression);
						this.state = 80;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 81;
						this.match(PlayScriptParser.ADD);
						this.state = 82;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_additiveExpression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 84;
						this.match(PlayScriptParser.SUB);
						this.state = 85;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = localctx;
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, PlayScriptParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 92;
			this.primaryExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 103;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
						this.state = 94;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 95;
						this.match(PlayScriptParser.MUL);
						this.state = 96;
						this.primaryExpression();
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
						this.state = 97;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 98;
						this.match(PlayScriptParser.DIV);
						this.state = 99;
						this.primaryExpression();
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_multiplicativeExpression);
						this.state = 100;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 101;
						this.match(PlayScriptParser.MOD);
						this.state = 102;
						this.primaryExpression();
						}
						break;
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, PlayScriptParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 108;
				this.match(PlayScriptParser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 109;
				this.literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 110;
				this.match(PlayScriptParser.Identifier);
				this.state = 111;
				this.match(PlayScriptParser.LPAREN);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 127) !== 0) || _la===96) {
					{
					this.state = 112;
					this.argumentExpressionList(0);
					}
				}

				this.state = 115;
				this.match(PlayScriptParser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 116;
				this.match(PlayScriptParser.LPAREN);
				this.state = 117;
				this.expression(0);
				this.state = 118;
				this.match(PlayScriptParser.RPAREN);
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

	public argumentExpressionList(): ArgumentExpressionListContext;
	public argumentExpressionList(_p: number): ArgumentExpressionListContext;
	// @RuleVersion(0)
	public argumentExpressionList(_p?: number): ArgumentExpressionListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this, this._ctx, _parentState);
		let _prevctx: ArgumentExpressionListContext = localctx;
		let _startState: number = 24;
		this.enterRecursionRule(localctx, 24, PlayScriptParser.RULE_argumentExpressionList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 123;
			this.assignmentExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 130;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ArgumentExpressionListContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_argumentExpressionList);
					this.state = 125;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 126;
					this.match(PlayScriptParser.COMMA);
					this.state = 127;
					this.assignmentExpression();
					}
					}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
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
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let localctx: CompoundStatementContext = new CompoundStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, PlayScriptParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(PlayScriptParser.LBRACE);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 4479) !== 0) || _la===96) {
				{
				this.state = 134;
				this.blockItemList(0);
				}
			}

			this.state = 137;
			this.match(PlayScriptParser.RBRACE);
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

	public blockItemList(): BlockItemListContext;
	public blockItemList(_p: number): BlockItemListContext;
	// @RuleVersion(0)
	public blockItemList(_p?: number): BlockItemListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: BlockItemListContext = new BlockItemListContext(this, this._ctx, _parentState);
		let _prevctx: BlockItemListContext = localctx;
		let _startState: number = 28;
		this.enterRecursionRule(localctx, 28, PlayScriptParser.RULE_blockItemList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 140;
			this.blockItem();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new BlockItemListContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_blockItemList);
					this.state = 142;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 143;
					this.blockItem();
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
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
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let localctx: BlockItemContext = new BlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, PlayScriptParser.RULE_blockItem);
		try {
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 51:
			case 55:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 149;
				this.statement();
				}
				break;
			case 1:
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 150;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		case 9:
			return this.additiveExpression_sempred(localctx as AdditiveExpressionContext, predIndex);
		case 10:
			return this.multiplicativeExpression_sempred(localctx as MultiplicativeExpressionContext, predIndex);
		case 12:
			return this.argumentExpressionList_sempred(localctx as ArgumentExpressionListContext, predIndex);
		case 14:
			return this.blockItemList_sempred(localctx as BlockItemListContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private argumentExpressionList_sempred(localctx: ArgumentExpressionListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private blockItemList_sempred(localctx: BlockItemListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,99,154,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,1,
	1,1,2,1,2,3,2,39,8,2,1,3,3,3,42,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	3,4,53,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,64,8,6,10,6,12,6,67,
	9,6,1,7,1,7,1,7,1,7,1,7,3,7,74,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,5,9,87,8,9,10,9,12,9,90,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,5,10,104,8,10,10,10,12,10,107,9,10,1,11,1,11,1,
	11,1,11,1,11,3,11,114,8,11,1,11,1,11,1,11,1,11,1,11,3,11,121,8,11,1,12,
	1,12,1,12,1,12,1,12,1,12,5,12,129,8,12,10,12,12,12,132,9,12,1,13,1,13,3,
	13,136,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,5,14,145,8,14,10,14,12,14,
	148,9,14,1,15,1,15,3,15,152,8,15,1,15,0,5,12,18,20,24,28,16,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,0,3,1,0,43,48,1,0,1,3,2,0,61,61,85,95,155,
	0,32,1,0,0,0,2,34,1,0,0,0,4,38,1,0,0,0,6,41,1,0,0,0,8,52,1,0,0,0,10,54,
	1,0,0,0,12,57,1,0,0,0,14,73,1,0,0,0,16,75,1,0,0,0,18,77,1,0,0,0,20,91,1,
	0,0,0,22,120,1,0,0,0,24,122,1,0,0,0,26,133,1,0,0,0,28,139,1,0,0,0,30,151,
	1,0,0,0,32,33,7,0,0,0,33,1,1,0,0,0,34,35,7,1,0,0,35,3,1,0,0,0,36,39,3,6,
	3,0,37,39,3,26,13,0,38,36,1,0,0,0,38,37,1,0,0,0,39,5,1,0,0,0,40,42,3,12,
	6,0,41,40,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,55,0,0,44,7,1,0,0,
	0,45,46,3,2,1,0,46,47,5,96,0,0,47,53,1,0,0,0,48,49,3,2,1,0,49,50,5,96,0,
	0,50,51,3,10,5,0,51,53,1,0,0,0,52,45,1,0,0,0,52,48,1,0,0,0,53,9,1,0,0,0,
	54,55,3,16,8,0,55,56,3,14,7,0,56,11,1,0,0,0,57,58,6,6,-1,0,58,59,3,14,7,
	0,59,65,1,0,0,0,60,61,10,1,0,0,61,62,5,56,0,0,62,64,3,14,7,0,63,60,1,0,
	0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,13,1,0,0,0,67,65,1,0,0,
	0,68,74,3,18,9,0,69,70,5,96,0,0,70,71,3,16,8,0,71,72,3,18,9,0,72,74,1,0,
	0,0,73,68,1,0,0,0,73,69,1,0,0,0,74,15,1,0,0,0,75,76,7,2,0,0,76,17,1,0,0,
	0,77,78,6,9,-1,0,78,79,3,20,10,0,79,88,1,0,0,0,80,81,10,2,0,0,81,82,5,77,
	0,0,82,87,3,20,10,0,83,84,10,1,0,0,84,85,5,78,0,0,85,87,3,20,10,0,86,80,
	1,0,0,0,86,83,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,19,1,
	0,0,0,90,88,1,0,0,0,91,92,6,10,-1,0,92,93,3,22,11,0,93,105,1,0,0,0,94,95,
	10,3,0,0,95,96,5,79,0,0,96,104,3,22,11,0,97,98,10,2,0,0,98,99,5,80,0,0,
	99,104,3,22,11,0,100,101,10,1,0,0,101,102,5,84,0,0,102,104,3,22,11,0,103,
	94,1,0,0,0,103,97,1,0,0,0,103,100,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,
	0,105,106,1,0,0,0,106,21,1,0,0,0,107,105,1,0,0,0,108,121,5,96,0,0,109,121,
	3,0,0,0,110,111,5,96,0,0,111,113,5,49,0,0,112,114,3,24,12,0,113,112,1,0,
	0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,121,5,50,0,0,116,117,5,49,0,0,117,
	118,3,12,6,0,118,119,5,50,0,0,119,121,1,0,0,0,120,108,1,0,0,0,120,109,1,
	0,0,0,120,110,1,0,0,0,120,116,1,0,0,0,121,23,1,0,0,0,122,123,6,12,-1,0,
	123,124,3,14,7,0,124,130,1,0,0,0,125,126,10,1,0,0,126,127,5,56,0,0,127,
	129,3,14,7,0,128,125,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,
	0,0,0,131,25,1,0,0,0,132,130,1,0,0,0,133,135,5,51,0,0,134,136,3,28,14,0,
	135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,52,0,0,138,27,
	1,0,0,0,139,140,6,14,-1,0,140,141,3,30,15,0,141,146,1,0,0,0,142,143,10,
	1,0,0,143,145,3,30,15,0,144,142,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,
	146,147,1,0,0,0,147,29,1,0,0,0,148,146,1,0,0,0,149,152,3,4,2,0,150,152,
	3,8,4,0,151,149,1,0,0,0,151,150,1,0,0,0,152,31,1,0,0,0,15,38,41,52,65,73,
	86,88,103,105,113,120,130,135,146,151];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PlayScriptParser.__ATN) {
			PlayScriptParser.__ATN = new ATNDeserializer().deserialize(PlayScriptParser._serializedATN);
		}

		return PlayScriptParser.__ATN;
	}


	static DecisionsToDFA = PlayScriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class LiteralContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IntegerLiteral(): TerminalNode {
		return this.getToken(PlayScriptParser.IntegerLiteral, 0);
	}
	public FloatingPointLiteral(): TerminalNode {
		return this.getToken(PlayScriptParser.FloatingPointLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(PlayScriptParser.BooleanLiteral, 0);
	}
	public CharacterLiteral(): TerminalNode {
		return this.getToken(PlayScriptParser.CharacterLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(PlayScriptParser.StringLiteral, 0);
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(PlayScriptParser.NullLiteral, 0);
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_literal;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_primitiveType;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getTypedRuleContext(CompoundStatementContext, 0) as CompoundStatementContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_statement;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(PlayScriptParser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_expressionStatement;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(PlayScriptParser.Identifier, 0);
	}
	public initializer(): InitializerContext {
		return this.getTypedRuleContext(InitializerContext, 0) as InitializerContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_declaration;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_initializer;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterInitializer) {
	 		listener.enterInitializer(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitInitializer) {
	 		listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PlayScriptParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_expression;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(PlayScriptParser.Identifier, 0);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_assignmentExpression;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.ASSIGN, 0);
	}
	public MUL_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.MUL_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.DIV_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.MOD_ASSIGN, 0);
	}
	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.ADD_ASSIGN, 0);
	}
	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.SUB_ASSIGN, 0);
	}
	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.LSHIFT_ASSIGN, 0);
	}
	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.RSHIFT_ASSIGN, 0);
	}
	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.URSHIFT_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.AND_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.XOR_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(PlayScriptParser.OR_ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_assignmentOperator;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(PlayScriptParser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(PlayScriptParser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_additiveExpression;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(PlayScriptParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(PlayScriptParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(PlayScriptParser.MOD, 0);
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(PlayScriptParser.Identifier, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(PlayScriptParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(PlayScriptParser.RPAREN, 0);
	}
	public argumentExpressionList(): ArgumentExpressionListContext {
		return this.getTypedRuleContext(ArgumentExpressionListContext, 0) as ArgumentExpressionListContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_primaryExpression;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
	public argumentExpressionList(): ArgumentExpressionListContext {
		return this.getTypedRuleContext(ArgumentExpressionListContext, 0) as ArgumentExpressionListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(PlayScriptParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_argumentExpressionList;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterArgumentExpressionList) {
	 		listener.enterArgumentExpressionList(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitArgumentExpressionList) {
	 		listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(PlayScriptParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(PlayScriptParser.RBRACE, 0);
	}
	public blockItemList(): BlockItemListContext {
		return this.getTypedRuleContext(BlockItemListContext, 0) as BlockItemListContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_compoundStatement;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterCompoundStatement) {
	 		listener.enterCompoundStatement(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitCompoundStatement) {
	 		listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockItem(): BlockItemContext {
		return this.getTypedRuleContext(BlockItemContext, 0) as BlockItemContext;
	}
	public blockItemList(): BlockItemListContext {
		return this.getTypedRuleContext(BlockItemListContext, 0) as BlockItemListContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_blockItemList;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterBlockItemList) {
	 		listener.enterBlockItemList(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitBlockItemList) {
	 		listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	constructor(parser?: PlayScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return PlayScriptParser.RULE_blockItem;
	}
	public enterRule(listener: PlayScriptListener): void {
	    if(listener.enterBlockItem) {
	 		listener.enterBlockItem(this);
		}
	}
	public exitRule(listener: PlayScriptListener): void {
	    if(listener.exitBlockItem) {
	 		listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlayScriptVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
