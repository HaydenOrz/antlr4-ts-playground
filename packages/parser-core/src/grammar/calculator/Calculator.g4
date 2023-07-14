grammar Calculator;
 
cal : expr;
 
expr : expr ADD term    # addOperation
     | expr SUB term    # subOperation
     | term             # termItem
     ;

term : term MUL factor  # mulOperation
     | term DIV factor  # divOperation
     | factor           # factorItem
     ;

factor : DIGIT                  # digitFactor
     | L_BRACKET expr R_BRACKET # compoundFactor
     ;

ADD : '+';
SUB : '-';
MUL : '*';
DIV : '/';

L_BRACKET : '(';
R_BRACKET : ')';

 
DIGIT : '0' | [1-9][0-9]*;
NEWLINE : '\r'?'\n' -> channel(HIDDEN);
 
WS : [ \t\n] -> channel(HIDDEN);