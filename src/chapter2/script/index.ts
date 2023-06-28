import { CharStream, CommonTokenStream,ParseTreeWalker } from 'antlr4';
import PlayScriptLexer from './PlayScriptLexer';
import PlayScriptParser, { MultiplicativeExpressionContext } from './PlayScriptParser';
import PlayScriptListener from './PlayScriptListener';

let code = 'age + 10 * 2 + 10'
const chars = new CharStream(code)
const lexer = new PlayScriptLexer(chars)
const tokens = new CommonTokenStream(lexer)
const parser = new PlayScriptParser(tokens)


const tree = parser.multiplicativeExpression()
class TreeWalker extends PlayScriptListener {
  enterMultiplicativeExpression = (ctx: MultiplicativeExpressionContext) => {
    console.log('mul enter')
    console.log(ctx.MOD())
  }
  exitMultiplicativeExpression = (ctx: MultiplicativeExpressionContext) => {
    console.log('mul exit')
    console.log(ctx.MUL())
  }
}

const walker = new TreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);
