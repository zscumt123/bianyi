import { Token, TokenReader, TokenType, DfaState } from './token';

function isAlpha(str: string): boolean {
  return /[A-Za-z]/.test(str);
}
function isDigit(str: string): boolean {
  return /\d/.test(str);
}

function isBlank(str: string): boolean {
  return str === ' ' || str === '\n' || str === '\t';
}

class SimpleToken implements Token {
  type: TokenType = TokenType.None;
  text: string = '';
  getType(): TokenType {
    return this.type;
  }
  getText(): string {
    return this.text;
  }
}

export class SimpleLexer {
  private tokenText: string = '';
  private token: SimpleToken = new SimpleToken();
  private tokens: Array<Token> = [];

  private initToken(ch: string): DfaState {
    // process  prev tokens, clear
    if (this.tokenText.length) {
      this.token.text = this.tokenText;
      this.tokens.push(this.token);
      this.token = new SimpleToken();
      this.tokenText = '';
    }

    //initial state
    let newState = DfaState.Initial;

    if (isAlpha(ch)) {
      if (ch === 'i') {
        newState = DfaState.Id_int1;
      } else {
        newState = DfaState.Id;
      }
      this.token.type = TokenType.Identifier;
      this.tokenText += ch;
    } else if (isDigit(ch)) {
      newState = DfaState.IntLiteral;
      this.token.type = TokenType.IntLiteral;
      this.tokenText += ch;
    } else if (ch === '>') {
      newState = DfaState.GT;
      this.token.type = TokenType.GT;
      this.tokenText += ch;
    } else if (ch === '+') {
      newState = DfaState.Plus;
      this.token.type = TokenType.Plus;
      this.tokenText += ch;
    } else if (ch === '-') {
      newState = DfaState.Minus;
      this.token.type = TokenType.Minus;
      this.tokenText += ch;
    } else if (ch === '*') {
      newState = DfaState.Star;
      this.token.type = TokenType.Star;
      this.tokenText += ch;
    } else if (ch === '/') {
      newState = DfaState.Slash;
      this.token.type = TokenType.Slash;
      this.tokenText += ch;
    } else if (ch === ';') {
      newState = DfaState.SemiColon;
      this.token.type = TokenType.SemiColon;
      this.tokenText += ch;
    } else if (ch === '(') {
      newState = DfaState.LeftParen;
      this.token.type = TokenType.LeftParen;
      this.tokenText += ch;
    } else if (ch === ')') {
      newState = DfaState.RightParen;
      this.token.type = TokenType.RightParen;
      this.tokenText += ch;
    } else if (ch === '=') {
      newState = DfaState.Assignment;
      this.token.type = TokenType.Assignment;
      this.tokenText += ch;
    } else {
      newState = DfaState.Initial;
    }
    return newState;
  }

  public tokenize(code: string) {
    let i = 0;
    let state = DfaState.Initial;
    this.tokens = [];
    this.token = new SimpleToken();
    this.tokenText = '';
    while (i < code.length) {
      let ch = code[i];
      switch (state) {
        case DfaState.Initial:
          state = this.initToken(ch);
          break;
        case DfaState.Id:
          if (isAlpha(ch) || isDigit(ch)) {
            this.tokenText += ch;
          } else {
            state = this.initToken(ch);
          }
          break;
        case DfaState.GT:
          if (ch === '=') {
            this.token.type = TokenType.GE;
            state = DfaState.GE;
            this.tokenText += ch;
          } else {
            state = this.initToken(ch);
          }
          break;
        case DfaState.GE:
        case DfaState.Assignment:
        case DfaState.Plus:
        case DfaState.Minus:
        case DfaState.Star:
        case DfaState.Slash:
        case DfaState.SemiColon:
        case DfaState.LeftParen:
        case DfaState.RightParen:
          state = this.initToken(ch);
          break;
        case DfaState.IntLiteral:
          if (isDigit(ch)) {
            this.tokenText += ch;
          } else {
            state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int1:
          if (ch === 'n') {
            state = DfaState.Id_int2;
            this.tokenText += ch;
          } else if (isDigit(ch) || isAlpha(ch)) {
            state = DfaState.Id;
            this.tokenText += ch;
          } else {
            state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int2:
          if (ch === 't') {
            state = DfaState.Id_int3;
            this.tokenText += ch;
          } else if (isDigit(ch) || isAlpha(ch)) {
            state = DfaState.Id;
            this.tokenText += ch;
          } else {
            state = this.initToken(ch);
          }
        break;
        case DfaState.Id_int3:
          console.log('3')
          if (isBlank(ch)) {
            this.token.type = TokenType.Int;
            state = this.initToken(ch);
          } else {
            state = DfaState.Id;
            this.tokenText += ch;
          }
          break;
        default:
          break;
      }
      i++;
    }
    if (this.tokenText) {
      this.initToken('');
    }
    return new SimpleTokenReader(this.tokens);
  }

  public dump(tokenReader: SimpleTokenReader) {
    console.log('text\ttype');
    let token: Token | null = null;
    while (tokenReader.peek()) {
      token = tokenReader.read() as Token;
      console.log(`${token.getText()}\t${token.getType()}`);
    }
  }
}

class SimpleTokenReader implements TokenReader {
  pos: number = 0;
  constructor(public tokens: Array<Token>) {}

  read(): Token | null {
    if (this.pos < this.tokens.length) {
      return this.tokens[this.pos++];
    }
    return null;
  }
  peek(): Token | null {
    if (this.pos < this.tokens.length) {
      return this.tokens[this.pos];
    }
    return null;
  }
  unread(): void {
    if (this.pos > 0) {
      this.pos--;
    }
  }
  getPosition(): number {
    return this.pos;
  }
  setPosition(pos: number): void {
    if (pos >= 0 && pos < this.tokens.length) {
      this.pos = pos;
    }
  }
}
