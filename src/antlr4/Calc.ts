import { CharStream, CommonTokenStream } from 'antlr4';
import LibExprLexer from './LibExprLexer';
import LibExprParser, { AddSubContext, AssignContext, ClearContext, IdContext, IntContext, MulDivContext, ParensContext, PrintExprContext } from './LibExprParser';
import LibExprVisitor from './LibExprVisitor';
let input = `
  193
  a = 5
  b = 6
  a+b*2
  (1+2)*3
  clear
`
let chars = new CharStream(input);
let lexer = new LibExprLexer(chars)
let tokens = new CommonTokenStream(lexer)
let parser = new LibExprParser(tokens)


let tree = parser.prog()



class EvalVisitor extends LibExprVisitor<number> {
  memory:Map<string, number> = new Map()
  visitAssign = (ctx: AssignContext) => {
    let id = ctx.ID().getText();
    let value = this.visit(ctx.expr())
    this.memory.set(id, value)
    return value
  }
  visitPrintExpr = (ctx: PrintExprContext) => {
    let value = this.visit(ctx.expr())
    console.log(value)
    return value
  }
  visitInt = (ctx: IntContext) => {
    let value = ctx.INT().getText()
    return Number(value)
  }
  visitId = (ctx: IdContext) => {
    let id = ctx.ID().getText()
    if(this.memory.has(id)) {
      return this.memory.get(id) as number
    }
    return 0
  }
  visitMulDiv = (ctx: MulDivContext) => {
    let left = this.visit(ctx.expr(0))
    let right = this.visit(ctx.expr(1))
    if(ctx._op.type === LibExprParser.MUL) {
      return left * right
    }
    return left / right
  }
  visitAddSub = (ctx: AddSubContext) => {
    let left = this.visit(ctx.expr(0))
    let right = this.visit(ctx.expr(1))
    if(ctx._op.type === LibExprParser.ADD) {
      return left + right
    }
    return left - right
  }
  visitParens =  (ctx: ParensContext) => {
    return this.visit(ctx.expr())
    
  }
  visitClear = (ctx: ClearContext) => {
    this.memory.clear()
    console.log(this.memory)
    return 0
  }

}
tree.accept(new EvalVisitor())
