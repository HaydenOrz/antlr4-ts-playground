// // Derived from https://www.json.org/json-zh.html
grammar Json;
/**
 * 每次尝试解析整个输入文件时，都应在输入规则末尾包含明确的EOF。
 * 如果你不包含EOF，这意味着你没有试图解析整个输入，并且如果它意味着避免语法错误，只解析一部分输入是可以接受的。
 */

/**
 * JSON建构于两种结构：
 * 1. “名称/值”对的集合（A collection of name/value pairs）。不同的语言中，它被理解为对象（object），纪录（record），结构（struct），字典（dictionary），哈希表（hash table），有键列表（keyed list），或者关联数组 （associative array）。
 * 2. 值的有序列表（An ordered list of values）。在大部分语言中，它被理解为数组（array）。
 */
json : object EOF
    | array EOF;

/**
 * “名称/值”对的集合语法规则 / 对象语法规则
 * 对象是一个无序的“‘名称/值’对”集合。一个对象以 {左括号 开始， }右括号 结束。每个“名称”后跟一个 :冒号 ；“‘名称/值’ 对”之间使用 ,逗号 分隔。
 */
object : '{' pair (',' pair)* '}' #AnObject
    | '{' '}' #EmptyObject
    ;

/**
 * “‘名称/值’对” 语法规则
 */
pair : STRING ':' value;

/**
 * 数组语法规则
 * 数组是值（value）的有序集合。一个数组以 [左中括号 开始， ]右中括号 结束。值之间使用 ,逗号 分隔。
 */
array : '[' value (',' value)* ']'  #ArrayOfValues
      | '[' ']' #EmptyArray                
      ;

/*
 * 值语法规则
 * 值（value）可以是双引号括起来的字符串（string）、数值(number)、true、false、 null、对象（object）或者数组（array）。这些结构可以嵌套。
 */
value: STRING #String
    | NUMBER #Atom
    | 'true' #Atom
    | 'false' #Atom
    | 'null' #Atom
    | object #ObjectValue
    | array #ArrayValue
    ;

/**
 * 字符串词法规则
 * 字符串（string）是由双引号包围的任意数量Unicode字符的集合，使用反斜线转义。一个字符（character）即一个单独的字符串（character string）。
 * 分为两部分，一部分是匹配需要转译的字符，另一部分是普通字符
 */
STRING : '"'(ESC | ~["\\])* '"';
/**
 * ESC 词法规则，匹配所有的转译字符
 * 分为两部分，一部分是固定的转译字符换行/空格等，另一部分是unicode字符
 */
fragment ESC : '\\' (["\\/bfnrt] | UNICODE);
/**
 * unicode 词法规则
 */
fragment UNICODE : 'u' HEX HEX HEX HEX;
/**
 * unicode 词法规则
 */
fragment HEX : [0-9a-fA-F];

/**
 * 数字词法规则
 * 包含正负数，整数，浮点数，科学计数法
 */
NUMBER
    :   '-'? INT '.' [0-9]+ EXP? // 1.35, 1.35E-9, 0.3, -4.5
    |   '-'? INT EXP             // 1e10 -3e4
    |   '-'? INT                 // -3, 45
    ;
fragment INT :   '0' | [1-9] [0-9]* ; // 除零外的数字不允许以0开始
fragment EXP :   [Ee] [+\-]? INT ; // \- 是对-的转义，因为[...]中的-用于表示“范围”

WS  :   [ \t\n\r]+ -> skip ;
