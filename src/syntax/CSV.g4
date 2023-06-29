grammar CSV;


file: (row '\n')*;
row: field (',' field)*;
field: INT | STRING;


vector: '[' INT+ ']';



INT: [0-9];
STRING: '"' (ESC | .)*? '"';


FLOAT: DIGIT+ '.' DIGIT* | '.' DIGIT+;

fragment
DIGIT: [0-9];

fragment
ESC: '\\"' | '\\\\';
