
export enum TokenType {
  Plus = 'Plus', //+
  Minus = 'Minus', //-
  Star = 'Star', //*
  Slash = 'Slash', // /

  GE = 'GE',
  GT = 'GT',
  EQ = 'EQ',
  LT = 'LT',
  LE = 'LE',
  SemiColon = 'SemiColon', //;
  LeftParen = 'LeftParen', //(
  RightParen = 'RightParen', //)

  Assignment = 'Assignment', //=
  If = 'If',
  Else = 'Else',
  
  Int = 'Int',
  
  Identifier = 'Identifier', //标识符

  IntLiteral = 'IntLiteral', //整型字面量
  StringLiteral = 'StringLiteral', //字符串字面量

  None = 'None'

}



export interface Token {
  getType(): TokenType;
  getText(): string
}


export interface TokenReader {
  read(): Token | null
  peek(): Token | null
  unread():void;
  getPosition(): number;
  setPosition(pos: number):void
}



export enum DfaState {
  Initial,

  If, Id_if1, Id_if2, Else, Id_else1, Id_else2, Id_else3, Id_else4, 
  Int, Id_int1, Id_int2, Id_int3, Id, 

  GT, GE,

  Assignment,

  Plus, Minus, Star, Slash,

  SemiColon,
  LeftParen,
  RightParen,

  IntLiteral
}


export enum ASTNodeType {
  Program = 'Program',
  IntDeclaration = 'IntDeclaration', // 整形声明语句
  ExpressionStmt = 'ExpressionStmt', //表达式语句
  AssignmentStmt = 'AssignmentStmt', //赋值语句
  Primary = 'Primary',//基础表达式
  Multiplicative = 'Multiplicative', //乘法表达式
  Additive = 'Additive', //加法
  Identifier = 'Identifier', 
  IntLiteral = 'IntLiteral'
}

export interface ASTNode {
  getParent(): ASTNode | null;
  getChildren(): Array<ASTNode>;
  getType(): ASTNodeType;
  getText():string;
}
