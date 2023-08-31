grammar SelectStatement;

/** 语法规则 begin */
program: selectStatement? EOF;
// 声明 语句的匹配规则
selectStatement: KW_SELECT columnGroup KW_FROM tablePath SEMICOLON?;
// 声明 语句中字段部分的匹配规则，字段部分可能为 col1, col2 的形式
columnGroup: columnPath (COMMA columnPath)*;
// 声明 字段名匹配规则，字段名有可能为 db.table.col 或者 * 的形式
columnPath: dot_id | OP_STAR; 
// 声明 表名匹配规则，表名有可能为 db.table 的形式
tablePath: dot_id; 
// 匹配 id.id 形式的标识符号
dot_id: IDENTIFIER_LITERAL (DOT IDENTIFIER_LITERAL)*; 

/** 语法规则 end */ 

/** 词法规则 begin */
KW_SELECT:          'SELECT'; // 匹配 SELECT 关键字
KW_FROM:            'FROM'; // 匹配 FROM 关键字
OP_STAR:            '*'; // 匹配 * 
DOT:                '.'; // 匹配 .
COMMA:              ','; // 匹配 ,
SEMICOLON:          ';'; // 匹配 ;
IDENTIFIER_LITERAL: [A-Z_a-z][A-Z_0-9a-z]*; // 匹配标识符

WS:                 [ \t\n\r]+ -> skip ; // 忽略空格换行等字符
/** 词法规则 end */