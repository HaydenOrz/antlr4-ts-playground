grammar Calculator;
 
cal : expr;
 
expr : expr MUL expr    # Mul
     | expr ADD expr    # Add
     | INT              # Int
     ;
MUL : '*';
ADD : '+';
 
INT : '0' | [1-9][0-9]*;
NEWLINE : '\r'?'\n';
 
WS : [ \t\n] -> skip;