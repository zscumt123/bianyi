import { CharStream, CommonTokenStream, TokenStream } from 'antlr4'
import RowsLexer from "./RowsLexer";
import RowsParser from './RowsParser';


class MyParser extends RowsParser {
  constructor(input: TokenStream, public col: number) {
    super(input)
  }
}


const input = `Apple\tBanana\tOrange\nCar\tBus\tBike\n`;
let chars = new CharStream(input)
let lexer = new RowsLexer(chars)
let tokens = new CommonTokenStream(lexer)

let parser = new MyParser(tokens, 1);
parser.file()

