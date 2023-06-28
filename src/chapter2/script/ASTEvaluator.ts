import { AdditiveExpressionContext, LiteralContext, MultiplicativeExpressionContext, PrimaryExpressionContext } from "./PlayScriptParser";
import PlayScriptVisitor from "./PlayScriptVisitor";

export default class ASTEvaluator extends PlayScriptVisitor<number> {
  visitAdditiveExpression =  (ctx: AdditiveExpressionContext):number => {
    if(ctx.ADD() || ctx.SUB()) {
      let left = this.visitAdditiveExpression(ctx.additiveExpression())
      let right = this.visitMultiplicativeExpression(ctx.multiplicativeExpression())
      if(ctx.ADD()) {
        return left + right
      } else {
        return left - right
      }
    } else {
      return this.visitMultiplicativeExpression(ctx.multiplicativeExpression())
    }
  }
  visitMultiplicativeExpression = (ctx: MultiplicativeExpressionContext):number => {
    if(ctx.DIV() || ctx.MOD() || ctx.MUL()) {
      let left = this.visitMultiplicativeExpression(ctx.multiplicativeExpression())
      let right = this.visitPrimaryExpression(ctx.primaryExpression())
      if(ctx.DIV()) {
        return left / right
      } else if(ctx.MOD()) {
        return left % right
      } else {
        return left * right
      }
    } else {
      return this.visitPrimaryExpression(ctx.primaryExpression())
    }
  }

  visitPrimaryExpression =  (ctx: PrimaryExpressionContext) => {
    if(ctx.literal() !== null) {
      return this.visitLiteral(ctx.literal())
    }
    return 0
  }
  visitLiteral = (ctx: LiteralContext) => {
    if(ctx.IntegerLiteral() !== null) {
      return Number(ctx.IntegerLiteral().getText())
    }
    return 0
  }

}
