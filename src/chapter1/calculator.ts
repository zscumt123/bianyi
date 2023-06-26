import { SimpleParser } from './simpleParser';
import { ASTNode, ASTNodeType } from './token';

export function calc(code: string) {
  let parser = new SimpleParser();
  let node = parser.calcParse(code);
  return evaluate(node, '');
}

export function evaluate(node: ASTNode, indent: string): number {
  let result = 0;
  console.log(indent + 'Calculating: ' + node.getType());
  switch (node.getType()) {
    case ASTNodeType.Program:
      for (let item of node.getChildren()) {
        result = evaluate(item, indent + '\t');
      }
      break;

    case ASTNodeType.Additive: {
      let child1 = node.getChildren()[0];
      let value1 = evaluate(child1, indent + '\t');
      let child2 = node.getChildren()[1];
      let value2 = evaluate(child2, indent + '\t');
      if (node.getText() === '+') {
        result = value1 + value2;
      } else {
        result = value1 - value2;
      }
      break;
    }
    case ASTNodeType.Multiplicative: {
      let child1 = node.getChildren()[0];
      let value1 = evaluate(child1, indent + '\t');
      let child2 = node.getChildren()[1];
      let value2 = evaluate(child2, indent + '\t');
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
    default:
  }
  console.log(indent + 'Result: ' + result);
  return result;
}
