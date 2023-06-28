import { CharStream, CommonTokenStream,ParseTreeWalker } from 'antlr4';
import PlayScriptLexer from './PlayScriptLexer';
import PlayScriptParser from './PlayScriptParser';
import ASTEvaluator from './ASTEvaluator';

let code = '2 + 6 / 3'
const chars = new CharStream(code)
const lexer = new PlayScriptLexer(chars)
const tokens = new CommonTokenStream(lexer)
const parser = new PlayScriptParser(tokens)

const tree = parser.additiveExpression()

console.log(tree.toStringTree(null, parser))
let visitor = new ASTEvaluator()
let result = visitor.visit(tree)
console.log(result)
