grammar Rows;

@parser::members {
  col?:number
}


file: (row NL)+;

row
locals [i:number = 0]
  : (STUFF {
      $i++;
      if ($i === this.col) console.log($STUFF.text);
    })+
  ;

TAB    : '\t' -> skip;
NL     : '\r'? '\n';
STUFF  : ~[\t\r\n]+;
