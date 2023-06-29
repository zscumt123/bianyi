lexer grammar XMLLexer;

OPEN         : '<'                      -> pushMode(INSIDE);
COMMENT      : '<!--' .*? '-->'         -> skip;
EntityRef    : '&' [a-z]+ ';';
TEXT         : ~('<'|'&')+;


mode INSIDE;

CLOSE        : '>'                      -> popMode;
SLASH_CLOSE  : '/>'                     -> popMode;
EQUALS       : '=';
STRING       : '"' .*? '"';
SlashName    : '/' NAME;
NAME         : ALPHA (ALPHA | DIGIT)*;
S            : [ \t\r\n]                -> skip;

fragment
ALPHA        : [a-zA-Z];

fragment
DIGIT        : [0-9];
