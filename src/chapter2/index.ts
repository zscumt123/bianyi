import {CharStream, CommonTokenStream} from 'antlr4'
import HelloLexer from './hello'

let code = `
int age = 45;
if (age >= 17+8+20){ 
  printf("Hello old man!");
}
`;
const chars = new CharStream(code)

let lexer = new HelloLexer(chars)
// const tokens = new CommonTokenStream(lexer);
const tokens = lexer.getAllTokens()
for(let item of tokens) {
  console.log(`text:${item.text},type: ${item.type},line: ${item.line},column:${item.column},start:${item.start},end: ${item.stop}`)
}

