// Generated from src/chapter2/hello.g4 by ANTLR 4.13.0
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
export default class hello extends Lexer {
	public static readonly If = 1;
	public static readonly Int = 2;
	public static readonly IntLiteral = 3;
	public static readonly StringLiteral = 4;
	public static readonly AssignmentOP = 5;
	public static readonly RelationalOP = 6;
	public static readonly Star = 7;
	public static readonly Plus = 8;
	public static readonly Sharp = 9;
	public static readonly SemiColon = 10;
	public static readonly Dot = 11;
	public static readonly Comm = 12;
	public static readonly LeftBracket = 13;
	public static readonly RightBracket = 14;
	public static readonly LeftBrace = 15;
	public static readonly RightBrace = 16;
	public static readonly LeftParen = 17;
	public static readonly RightParen = 18;
	public static readonly Id = 19;
	public static readonly Whitespace = 20;
	public static readonly Newline = 21;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'int'", null, 
                                                            null, "'='", 
                                                            null, "'*'", 
                                                            "'+'", "'#'", 
                                                            "';'", "'.'", 
                                                            "','", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "If", 
                                                             "Int", "IntLiteral", 
                                                             "StringLiteral", 
                                                             "AssignmentOP", 
                                                             "RelationalOP", 
                                                             "Star", "Plus", 
                                                             "Sharp", "SemiColon", 
                                                             "Dot", "Comm", 
                                                             "LeftBracket", 
                                                             "RightBracket", 
                                                             "LeftBrace", 
                                                             "RightBrace", 
                                                             "LeftParen", 
                                                             "RightParen", 
                                                             "Id", "Whitespace", 
                                                             "Newline" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"If", "Int", "IntLiteral", "StringLiteral", "AssignmentOP", "RelationalOP", 
		"Star", "Plus", "Sharp", "SemiColon", "Dot", "Comm", "LeftBracket", "RightBracket", 
		"LeftBrace", "RightBrace", "LeftParen", "RightParen", "Id", "Whitespace", 
		"Newline",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, hello._ATN, hello.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "hello.g4"; }

	public get literalNames(): (string | null)[] { return hello.literalNames; }
	public get symbolicNames(): (string | null)[] { return hello.symbolicNames; }
	public get ruleNames(): string[] { return hello.ruleNames; }

	public get serializedATN(): number[] { return hello._serializedATN; }

	public get channelNames(): string[] { return hello.channelNames; }

	public get modeNames(): string[] { return hello.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,21,126,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,1,0,1,0,1,0,1,0,3,0,48,8,0,1,
	1,1,1,1,1,1,1,1,2,4,2,55,8,2,11,2,12,2,56,1,3,1,3,5,3,61,8,3,10,3,12,3,
	64,9,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,78,8,5,1,6,1,
	6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,
	1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,5,18,106,8,18,10,18,12,18,
	109,9,18,1,19,4,19,112,8,19,11,19,12,19,113,1,19,1,19,1,20,1,20,3,20,120,
	8,20,1,20,3,20,123,8,20,1,20,1,20,1,62,0,21,1,1,3,2,5,3,7,4,9,5,11,6,13,
	7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,
	39,20,41,21,1,0,4,1,0,48,57,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,
	97,122,2,0,9,9,32,32,136,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
	0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,
	1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,
	0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
	1,0,0,0,1,47,1,0,0,0,3,49,1,0,0,0,5,54,1,0,0,0,7,58,1,0,0,0,9,67,1,0,0,
	0,11,77,1,0,0,0,13,79,1,0,0,0,15,81,1,0,0,0,17,83,1,0,0,0,19,85,1,0,0,0,
	21,87,1,0,0,0,23,89,1,0,0,0,25,91,1,0,0,0,27,93,1,0,0,0,29,95,1,0,0,0,31,
	97,1,0,0,0,33,99,1,0,0,0,35,101,1,0,0,0,37,103,1,0,0,0,39,111,1,0,0,0,41,
	122,1,0,0,0,43,44,5,105,0,0,44,48,5,102,0,0,45,46,5,22914,0,0,46,48,5,26524,
	0,0,47,43,1,0,0,0,47,45,1,0,0,0,48,2,1,0,0,0,49,50,5,105,0,0,50,51,5,110,
	0,0,51,52,5,116,0,0,52,4,1,0,0,0,53,55,7,0,0,0,54,53,1,0,0,0,55,56,1,0,
	0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,6,1,0,0,0,58,62,5,34,0,0,59,61,9,0,0,
	0,60,59,1,0,0,0,61,64,1,0,0,0,62,63,1,0,0,0,62,60,1,0,0,0,63,65,1,0,0,0,
	64,62,1,0,0,0,65,66,5,34,0,0,66,8,1,0,0,0,67,68,5,61,0,0,68,10,1,0,0,0,
	69,70,5,61,0,0,70,78,5,61,0,0,71,78,5,62,0,0,72,73,5,62,0,0,73,78,5,61,
	0,0,74,78,5,60,0,0,75,76,5,60,0,0,76,78,5,61,0,0,77,69,1,0,0,0,77,71,1,
	0,0,0,77,72,1,0,0,0,77,74,1,0,0,0,77,75,1,0,0,0,78,12,1,0,0,0,79,80,5,42,
	0,0,80,14,1,0,0,0,81,82,5,43,0,0,82,16,1,0,0,0,83,84,5,35,0,0,84,18,1,0,
	0,0,85,86,5,59,0,0,86,20,1,0,0,0,87,88,5,46,0,0,88,22,1,0,0,0,89,90,5,44,
	0,0,90,24,1,0,0,0,91,92,5,91,0,0,92,26,1,0,0,0,93,94,5,93,0,0,94,28,1,0,
	0,0,95,96,5,123,0,0,96,30,1,0,0,0,97,98,5,125,0,0,98,32,1,0,0,0,99,100,
	5,40,0,0,100,34,1,0,0,0,101,102,5,41,0,0,102,36,1,0,0,0,103,107,7,1,0,0,
	104,106,7,2,0,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,
	1,0,0,0,108,38,1,0,0,0,109,107,1,0,0,0,110,112,7,3,0,0,111,110,1,0,0,0,
	112,113,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,
	6,19,0,0,116,40,1,0,0,0,117,119,5,13,0,0,118,120,5,10,0,0,119,118,1,0,0,
	0,119,120,1,0,0,0,120,123,1,0,0,0,121,123,5,10,0,0,122,117,1,0,0,0,122,
	121,1,0,0,0,123,124,1,0,0,0,124,125,6,20,0,0,125,42,1,0,0,0,10,0,47,56,
	62,77,105,107,113,119,122,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!hello.__ATN) {
			hello.__ATN = new ATNDeserializer().deserialize(hello._serializedATN);
		}

		return hello.__ATN;
	}


	static DecisionsToDFA = hello._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}