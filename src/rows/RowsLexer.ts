// Generated from ./src/rows/Rows.g4 by ANTLR 4.13.0
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
export default class RowsLexer extends Lexer {
	public static readonly TAB = 1;
	public static readonly NL = 2;
	public static readonly STUFF = 3;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'\\t'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TAB", 
                                                             "NL", "STUFF" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"TAB", "NL", "STUFF",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, RowsLexer._ATN, RowsLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Rows.g4"; }

	public get literalNames(): (string | null)[] { return RowsLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return RowsLexer.symbolicNames; }
	public get ruleNames(): string[] { return RowsLexer.ruleNames; }

	public get serializedATN(): number[] { return RowsLexer._serializedATN; }

	public get channelNames(): string[] { return RowsLexer.channelNames; }

	public get modeNames(): string[] { return RowsLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,3,21,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,0,1,1,3,1,13,8,1,1,1,1,1,1,2,4,2,18,8,2,
	11,2,12,2,19,0,0,3,1,1,3,2,5,3,1,0,1,2,0,9,10,13,13,22,0,1,1,0,0,0,0,3,
	1,0,0,0,0,5,1,0,0,0,1,7,1,0,0,0,3,12,1,0,0,0,5,17,1,0,0,0,7,8,5,9,0,0,8,
	9,1,0,0,0,9,10,6,0,0,0,10,2,1,0,0,0,11,13,5,13,0,0,12,11,1,0,0,0,12,13,
	1,0,0,0,13,14,1,0,0,0,14,15,5,10,0,0,15,4,1,0,0,0,16,18,8,0,0,0,17,16,1,
	0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,6,1,0,0,0,3,0,12,19,
	1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RowsLexer.__ATN) {
			RowsLexer.__ATN = new ATNDeserializer().deserialize(RowsLexer._serializedATN);
		}

		return RowsLexer.__ATN;
	}


	static DecisionsToDFA = RowsLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}