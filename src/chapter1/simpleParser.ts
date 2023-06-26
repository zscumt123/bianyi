import { ASTNode, ASTNodeType, TokenReader, TokenType, Token } from './token';
import { SimpleLexer } from './simpleLexer'
export class SimpleParser {

  parse(code: string): ASTNode {
    let lexer = new SimpleLexer()
    let tokens = lexer.tokenize(code)
    return this.prog(tokens)
  }
  calcParse(code: string):ASTNode {
    let lexer = new SimpleLexer()
    let tokens = lexer.tokenize(code)
    return this.calcProg(tokens)
  }
  calcProg(tokens: TokenReader): SimpleASTNode {
    let node = new SimpleASTNode(ASTNodeType.Program, 'Calculator');
    let child = this.additive(tokens)
    if(child) {
      node.addChild(child)
    }
    return node
  }
  prog(tokens: TokenReader): SimpleASTNode {
    let node = new SimpleASTNode(ASTNodeType.Program, 'pwc');
    while (tokens.peek()) {
      let child = this.intDeclare(tokens);
      if (!child) {
        child = this.expressionStatement(tokens);
      }
      if (!child) {
        child = this.assignmentStatement(tokens);
      }
      if (child != null) {
        node.addChild(child);
      } else {
        throw new Error('unknown statement');
      }
    }
    return node;
  }

  intDeclare(tokens: TokenReader): SimpleASTNode | null {
    let node: SimpleASTNode | null = null;
    let token = tokens.peek();
    if (token && token.getType() === TokenType.Int) {
      token = tokens.read() as Token;
      if (tokens.peek()?.getType() === TokenType.Identifier) {
        token = tokens.read() as Token;
        node = new SimpleASTNode(ASTNodeType.IntDeclaration, token.getText());
        token = tokens.peek();
        if (token && token.getType() === TokenType.Assignment) {
          tokens.read(); //取出等号
          let child = this.additive(tokens);
          if (child === null) {
            throw new Error(
              'invalide variable initialization, expecting an expression'
            );
          } else {
            node.addChild(child);
          }
        }
      } else {
        throw new Error('variable name expected');
      }

      if (node) {
        token = tokens.peek();
        if (token != null && token.getType() == TokenType.SemiColon) {
          tokens.read();
        } else {
          throw new Error('invalid statement, expecting semicolon');
        }
      }
    }
    return node;
  }
  expressionStatement(tokens: TokenReader): SimpleASTNode | null {
    let pos = tokens.getPosition();
    let node = this.additive(tokens);
    if (node) {
      let token = tokens.peek();
      if (token && token.getType() === TokenType.SemiColon) {
        tokens.read();
      } else {
        node = null;
        tokens.setPosition(pos); //回溯
      }
    }
    return node;
  }
  assignmentStatement(tokens: TokenReader): SimpleASTNode | null {
    let node: SimpleASTNode | null = null;
    let token = tokens.peek();
    if (token && token.getType() === TokenType.Identifier) {
      token = tokens.read() as Token;
      node = new SimpleASTNode(ASTNodeType.AssignmentStmt, token.getText());
      token = tokens.peek();
      if (token && token.getType() === TokenType.Assignment) {
        tokens.read();
        let child = this.additive(tokens);
        if (!child) {
          //出错，等号右面没有一个合法的表达式
          throw new Error(
            'invalid assignment statement, expecting an expression'
          );
        } else {
          node.addChild(child);
          token = tokens.peek();
          if (token != null && token.getType() == TokenType.SemiColon) {
            tokens.read(); //消耗掉这个分号
          } else {
            //报错，缺少分号
            throw new Error('invalid statement, expecting semicolon');
          }
        }
      } else {
        //吐出之前的标识符
        tokens.unread();
        node = null;
      }
    }
    return node;
  }

  additive(tokens: TokenReader): SimpleASTNode | null {
    let child1 = this.multiplicative(tokens);
    let node = child1;
    if (child1) {
      while (true) {
        let token = tokens.peek();
        if (
          token &&
          (token.getType() === TokenType.Plus ||
            token.getType() === TokenType.Minus)
        ) {
          token = tokens.read() as Token;
          let child2 = this.multiplicative(tokens);
          if (child2) {
            node = new SimpleASTNode(ASTNodeType.Additive, token.getText());
            node.addChild(child1);
            node.addChild(child2);
            child1 = node;
          } else {
            throw new Error(
              'invalid additive expression, expecting the right part.'
            );
          }
        } else {
          break;
        }
      }
    }

    return node;
  }

  multiplicative(tokens: TokenReader): SimpleASTNode | null {
    let child1 = this.primary(tokens) as SimpleASTNode;
    let node = child1;
    while (true) {
      let token = tokens.peek();
      if (
        token &&
        (token.getType() === TokenType.Star ||
          token.getType() === TokenType.Slash)
      ) {
        token = tokens.read() as Token;
        let child2 = this.primary(tokens);
        if (child2) {
          node = new SimpleASTNode(
            ASTNodeType.Multiplicative,
            token.getText()
          );
          node.addChild(child1);
          node.addChild(child2);
          child1 = node;
        } else {
          throw new Error(
            'invalid multiplicative expression, expecting the right part.'
          );
        }
      } else {
        break;
      }
    }
    return node;
  }
  primary(tokens: TokenReader): SimpleASTNode | null {
    let node: SimpleASTNode | null = null;
    let token = tokens.peek();
    if (token) {
      if (token.getType() === TokenType.IntLiteral) {
        token = tokens.read() as Token;
        node = new SimpleASTNode(ASTNodeType.IntLiteral, token.getText());
      } else if (token.getType() === TokenType.Identifier) {
        token = tokens.read() as Token;
        node = new SimpleASTNode(ASTNodeType.Identifier, token.getText());
      } else if (token.getType() === TokenType.LeftParen) {
        tokens.read();
        node = this.additive(tokens);
        if (node) {
          token = tokens.peek();
          if (token && token.getType() == TokenType.RightParen) {
            tokens.read();
          } else {
            throw new Error('expecting right parenthesis');
          }
        } else {
          throw new Error(
            'expecting an additive expression inside parenthesis'
          );
        }
      }
    }
    return node;
  }

  dumpAST(node: ASTNode, indent: string) {
    console.log(`${indent}${node.getType()} ${node.getText()}`);
    for (let item of node.getChildren()) {
      this.dumpAST(item, indent + '\t');
    }
  }
}

class SimpleASTNode implements ASTNode {
  parent: SimpleASTNode | null = null;
  children: Array<ASTNode> = [];

  constructor(public nodeType: ASTNodeType, public text: string) {}

  getParent(): ASTNode | null {
    return this.parent;
  }
  getChildren(): ASTNode[] {
    return this.children;
  }
  getType(): ASTNodeType {
    return this.nodeType;
  }
  getText(): string {
    return this.text;
  }

  public addChild(child: SimpleASTNode) {
    this.children.push(child);
    child.parent = this;
  }
}
