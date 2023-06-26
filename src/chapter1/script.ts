import * as readline from 'node:readline/promises';
import { stdout as output, stdin as input } from 'node:process';
import { ASTNode, ASTNodeType } from './token';
import { SimpleParser } from './simpleParser'

const args = process.argv.slice(2);
console.log(args);

export class SimpleScript {
  public variables: Map<string, number | undefined> = new Map();
  static verbose: boolean = false;


  public async init() {
    if(args.length && args[0] === '-v') {
      SimpleScript.verbose = true
      console.log('verbose mode')
    }
    console.log('Simple script language!')
    let parser = new SimpleParser()
    let scriptCls = new SimpleScript()
    let rl = readline.createInterface({
      input,
      output
    })
    let scriptText = ''

    try {
      for await (let item of rl) {
        let line = item.trim()
        if(line === 'exit();') {
          console.log('bye')
          break;
        }
        scriptText += line + '\n';
        if(line.endsWith(';')) {
          let tree = parser.parse(scriptText)
          if(SimpleScript.verbose) {
            parser.dumpAST(tree, "")
          }
          scriptCls.evaluate(tree, "")
          scriptText = "";
          
        }
      }
    } catch (e) {
      console.log(e)
    }
    

  }
  private evaluate(node: ASTNode, indent: string): number |null {
    let result: number | null = null;
    if (SimpleScript.verbose) {
      console.log(indent + 'Calculating: ' + node.getType());
    }
    switch (node.getType()) {
      case ASTNodeType.Program:
        for (let item of node.getChildren()) {
          result = this.evaluate(item, indent);
        }
        break;
      case ASTNodeType.Additive: {
        let child1 = node.getChildren()[0];
        let value1 = this.evaluate(child1, indent + '\t') as number
        let child2 = node.getChildren()[1];
        let value2 = this.evaluate(child2, indent + '\t') as number
        if (node.getText() === '+') {
          result = value1 + value2;
        } else {
          result = value1 - value2;
        }
        break;
      }
      case ASTNodeType.Multiplicative: {
        let child1 = node.getChildren()[0];
        let value1 = this.evaluate(child1, indent + '\t') as number
        let child2 = node.getChildren()[1];
        let value2 = this.evaluate(child2, indent + '\t') as number
        if (node.getText() === '*') {
          result = value1 * value2;
        } else {
          result = value1 / value2;
        }
        break;
      }
      case ASTNodeType.IntLiteral:
        result = Number(node.getText());
        break;
      case ASTNodeType.Identifier: {
        let varName = node.getText();
        if (this.variables.has(varName)) {
          let value = this.variables.get(varName);
          if (value !== undefined) {
            result = value;
          } else {
            throw new Error(
              'variable ' + varName + ' has not been set any value'
            );
          }
        } else {
          throw new Error('unknown variable: ' + varName);
        }
        break;
      }
      case ASTNodeType.AssignmentStmt: {
        let varName = node.getText();
        if (!this.variables.has(varName)) {
          throw new Error('unknown variable: ' + varName);
        } //接着执行下面的代码
      }
      case ASTNodeType.IntDeclaration: {
        let varName = node.getText();
        let value: number | undefined = undefined;
        if (node.getChildren().length) {
          let child = node.getChildren()[0];
          result = this.evaluate(child, indent + '\t') as number
          value = result;
        }
        this.variables.set(varName, value);
        break;
      }
      default:
    }
    if (SimpleScript.verbose) {
      console.log(indent + 'Result: ' + result);
    } else if (indent === '') {
      if (
        node.getType() == ASTNodeType.IntDeclaration ||
        node.getType() == ASTNodeType.AssignmentStmt
      ) {
        console.log(node.getText() + ': ' + result);
      } else if (node.getType() != ASTNodeType.Program) {
        console.log(result);
      }
    }
    return result
  }
}
