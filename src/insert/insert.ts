import Antlr, { CharStream, CommonTokenStream, ParseTreeWalker, TokenStream }  from 'antlr4'
import JavaLexer from './JavaLexer';
import JavaParserListener from './JavaParserListener';
import JavaParser, { ClassBodyContext, ClassBodyDeclarationContext } from './JavaParser';

let input = `
  import java.util.list;
  import java.util.Map;

  public class Demo {
    void f(int x, String y) {}
    int[] g() { return null; }
    List<Map<String, Integer>>[] h() { return null; }
    
  }

`;

const chars = new CharStream(input)

const lexer = new JavaLexer(chars)
let tokens = new CommonTokenStream(lexer)
let parser = new JavaParser(tokens)

let tree = parser.compilationUnit()
class RewriteListener extends JavaParserListener {
  rewriter: Antlr.TokenStreamRewriter
  constructor(tokens: CommonTokenStream) {
    super()
    this.rewriter = new Antlr.TokenStreamRewriter(tokens)

  }
  enterClassBody = (ctx: ClassBodyContext) => {
    let field = '\npublic static id = 1;';
    this.rewriter.insertAfter(ctx.start, field)
    console.log(this.rewriter.getText())
  }
  // enterClassBodyDeclaration = (ctx: ClassBodyDeclarationContext) => {
  //   console.log(ctx.start)
  //   let field = 'public static id = 1';
  //   this.rewriter.insertAfter(ctx.start, field)
  //   console.log(this.rewriter.getText())
  // }
}
let walker = new RewriteListener(tokens)
ParseTreeWalker.DEFAULT.walk(walker, tree)
