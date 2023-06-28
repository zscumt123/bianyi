// Generated from .\src\antlr4\LibExpr.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LibExprLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "MUL", "DIV", "ADD", "SUB", "CLEAR", "ID", "INT", 
		"NEWLINE", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LibExprLexer._ATN, LibExprLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LibExpr.g4"; }

	public get literalNames(): (string | null)[] { return LibExprLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LibExprLexer.symbolicNames; }
	public get ruleNames(): string[] { return LibExprLexer.ruleNames; }

	public get serializedATN(): number[] { return LibExprLexer._serializedATN; }

	public get channelNames(): string[] { return LibExprLexer.channelNames; }

	public get modeNames(): string[] { return LibExprLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,12,67,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
	6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,4,8,47,8,8,11,8,12,8,48,1,9,4,9,52,8,
	9,11,9,12,9,53,1,10,3,10,57,8,10,1,10,1,10,1,11,4,11,62,8,11,11,11,12,11,
	63,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,
	23,12,1,0,3,2,0,65,90,97,122,1,0,48,57,2,0,9,9,32,32,70,0,1,1,0,0,0,0,3,
	1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,
	15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,
	0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,0,13,
	37,1,0,0,0,15,39,1,0,0,0,17,46,1,0,0,0,19,51,1,0,0,0,21,56,1,0,0,0,23,61,
	1,0,0,0,25,26,5,61,0,0,26,2,1,0,0,0,27,28,5,40,0,0,28,4,1,0,0,0,29,30,5,
	41,0,0,30,6,1,0,0,0,31,32,5,42,0,0,32,8,1,0,0,0,33,34,5,47,0,0,34,10,1,
	0,0,0,35,36,5,43,0,0,36,12,1,0,0,0,37,38,5,45,0,0,38,14,1,0,0,0,39,40,5,
	99,0,0,40,41,5,108,0,0,41,42,5,101,0,0,42,43,5,97,0,0,43,44,5,114,0,0,44,
	16,1,0,0,0,45,47,7,0,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,
	1,0,0,0,49,18,1,0,0,0,50,52,7,1,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,
	0,0,0,53,54,1,0,0,0,54,20,1,0,0,0,55,57,5,13,0,0,56,55,1,0,0,0,56,57,1,
	0,0,0,57,58,1,0,0,0,58,59,5,10,0,0,59,22,1,0,0,0,60,62,7,2,0,0,61,60,1,
	0,0,0,62,63,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,6,11,
	0,0,66,24,1,0,0,0,5,0,48,53,56,63,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LibExprLexer.__ATN) {
			LibExprLexer.__ATN = new ATNDeserializer().deserialize(LibExprLexer._serializedATN);
		}

		return LibExprLexer.__ATN;
	}


	static DecisionsToDFA = LibExprLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}