import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4'
import JavaLexer from './JavaLexer';
import JavaParserListener from './JavaParserListener';
import JavaParser, { ClassDeclarationContext, MethodDeclarationContext } from './JavaParser';

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
class MyLister extends JavaParserListener {
  constructor(public parser: JavaParser) {
    super()
  }
  enterClassDeclaration = (ctx: ClassDeclarationContext) => {
    console.log(`interface I${ctx.identifier().getText()} {`)
  }
  exitClassDeclaration = (ctx: ClassDeclarationContext) => {
    console.log('}')
  }
  enterMethodDeclaration = (ctx: MethodDeclarationContext) => {
    let type = ctx.typeTypeOrVoid().getText()
    let args = ctx.formalParameters().formalParameterList()
    let tokens = this.parser.getTokenStream()
    let result = '()'
    if(args) {
      let len = args.getChildCount() - 1
      let current = Array.from({length: len}, (v,i) => {
        return `${args.formalParameter(i).typeType().getText()} ${args.formalParameter(i).variableDeclaratorId().getText()}`
      }).join(',')
      result = '(' +  current + ')'
    }
    console.log(`${type} ${ctx.identifier().getText()}${result}`)

  }
}

let walker = new MyLister(parser)

ParseTreeWalker.DEFAULT.walk(walker, tree)
