// Generated from /Users/hayden/Desktop/antlr/antlr4-parser-demo/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FlinkSqlParserListener } from "./FlinkSqlParserListener";
import { FlinkSqlParserVisitor } from "./FlinkSqlParserVisitor";


export class FlinkSqlParser extends Parser {
	public static readonly SPACE = 1;
	public static readonly COMMENT_INPUT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly SELECT = 4;
	public static readonly FROM = 5;
	public static readonly ADD = 6;
	public static readonly AS = 7;
	public static readonly ALL = 8;
	public static readonly ANY = 9;
	public static readonly DISTINCT = 10;
	public static readonly WHERE = 11;
	public static readonly GROUP = 12;
	public static readonly BY = 13;
	public static readonly GROUPING = 14;
	public static readonly SETS = 15;
	public static readonly CUBE = 16;
	public static readonly ROLLUP = 17;
	public static readonly ORDER = 18;
	public static readonly HAVING = 19;
	public static readonly LIMIT = 20;
	public static readonly AT = 21;
	public static readonly OR = 22;
	public static readonly AND = 23;
	public static readonly IN = 24;
	public static readonly NOT = 25;
	public static readonly NO = 26;
	public static readonly EXISTS = 27;
	public static readonly BETWEEN = 28;
	public static readonly LIKE = 29;
	public static readonly RLIKE = 30;
	public static readonly IS = 31;
	public static readonly TRUE = 32;
	public static readonly FALSE = 33;
	public static readonly NULLS = 34;
	public static readonly ASC = 35;
	public static readonly DESC = 36;
	public static readonly FOR = 37;
	public static readonly INTERVAL = 38;
	public static readonly CASE = 39;
	public static readonly WHEN = 40;
	public static readonly THEN = 41;
	public static readonly ELSE = 42;
	public static readonly END = 43;
	public static readonly JOIN = 44;
	public static readonly CROSS = 45;
	public static readonly OUTER = 46;
	public static readonly INNER = 47;
	public static readonly LEFT = 48;
	public static readonly SEMI = 49;
	public static readonly RIGHT = 50;
	public static readonly FULL = 51;
	public static readonly NATURAL = 52;
	public static readonly ON = 53;
	public static readonly PIVOT = 54;
	public static readonly LATERAL = 55;
	public static readonly WINDOW = 56;
	public static readonly OVER = 57;
	public static readonly PARTITION = 58;
	public static readonly RANGE = 59;
	public static readonly ROWS = 60;
	public static readonly UNBOUNDED = 61;
	public static readonly PRECEDING = 62;
	public static readonly FOLLOWING = 63;
	public static readonly CURRENT = 64;
	public static readonly FIRST = 65;
	public static readonly AFTER = 66;
	public static readonly LAST = 67;
	public static readonly WITH = 68;
	public static readonly VALUES = 69;
	public static readonly CREATE = 70;
	public static readonly TABLE = 71;
	public static readonly DIRECTORY = 72;
	public static readonly VIEW = 73;
	public static readonly REPLACE = 74;
	public static readonly INSERT = 75;
	public static readonly DELETE = 76;
	public static readonly INTO = 77;
	public static readonly DESCRIBE = 78;
	public static readonly EXPLAIN = 79;
	public static readonly FORMAT = 80;
	public static readonly LOGICAL = 81;
	public static readonly CODEGEN = 82;
	public static readonly COST = 83;
	public static readonly CAST = 84;
	public static readonly SHOW = 85;
	public static readonly TABLES = 86;
	public static readonly COLUMNS = 87;
	public static readonly COLUMN = 88;
	public static readonly USE = 89;
	public static readonly PARTITIONS = 90;
	public static readonly FUNCTIONS = 91;
	public static readonly DROP = 92;
	public static readonly UNION = 93;
	public static readonly EXCEPT = 94;
	public static readonly SETMINUS = 95;
	public static readonly INTERSECT = 96;
	public static readonly TO = 97;
	public static readonly TABLESAMPLE = 98;
	public static readonly STRATIFY = 99;
	public static readonly ALTER = 100;
	public static readonly RENAME = 101;
	public static readonly STRUCT = 102;
	public static readonly COMMENT = 103;
	public static readonly SET = 104;
	public static readonly RESET = 105;
	public static readonly DATA = 106;
	public static readonly START = 107;
	public static readonly TRANSACTION = 108;
	public static readonly COMMIT = 109;
	public static readonly ROLLBACK = 110;
	public static readonly MACRO = 111;
	public static readonly IGNORE = 112;
	public static readonly BOTH = 113;
	public static readonly LEADING = 114;
	public static readonly TRAILING = 115;
	public static readonly IF = 116;
	public static readonly POSITION = 117;
	public static readonly EXTRACT = 118;
	public static readonly MINUS = 119;
	public static readonly DIV = 120;
	public static readonly PERCENTLIT = 121;
	public static readonly BUCKET = 122;
	public static readonly OUT = 123;
	public static readonly OF = 124;
	public static readonly SORT = 125;
	public static readonly CLUSTER = 126;
	public static readonly DISTRIBUTE = 127;
	public static readonly OVERWRITE = 128;
	public static readonly TRANSFORM = 129;
	public static readonly REDUCE = 130;
	public static readonly USING = 131;
	public static readonly SERDE = 132;
	public static readonly SERDEPROPERTIES = 133;
	public static readonly RECORDREADER = 134;
	public static readonly RECORDWRITER = 135;
	public static readonly DELIMITED = 136;
	public static readonly FIELDS = 137;
	public static readonly TERMINATED = 138;
	public static readonly COLLECTION = 139;
	public static readonly ITEMS = 140;
	public static readonly KEYS = 141;
	public static readonly ESCAPED = 142;
	public static readonly LINES = 143;
	public static readonly SEPARATED = 144;
	public static readonly FUNCTION = 145;
	public static readonly EXTENDED = 146;
	public static readonly REFRESH = 147;
	public static readonly CLEAR = 148;
	public static readonly CACHE = 149;
	public static readonly UNCACHE = 150;
	public static readonly LAZY = 151;
	public static readonly FORMATTED = 152;
	public static readonly GLOBAL = 153;
	public static readonly TEMPORARY = 154;
	public static readonly OPTIONS = 155;
	public static readonly UNSET = 156;
	public static readonly TBLPROPERTIES = 157;
	public static readonly DBPROPERTIES = 158;
	public static readonly BUCKETS = 159;
	public static readonly SKEWED = 160;
	public static readonly STORED = 161;
	public static readonly DIRECTORIES = 162;
	public static readonly LOCATION = 163;
	public static readonly EXCHANGE = 164;
	public static readonly ARCHIVE = 165;
	public static readonly UNARCHIVE = 166;
	public static readonly FILEFORMAT = 167;
	public static readonly TOUCH = 168;
	public static readonly COMPACT = 169;
	public static readonly CONCATENATE = 170;
	public static readonly CHANGE = 171;
	public static readonly CASCADE = 172;
	public static readonly CONSTRAINT = 173;
	public static readonly RESTRICT = 174;
	public static readonly CLUSTERED = 175;
	public static readonly SORTED = 176;
	public static readonly PURGE = 177;
	public static readonly INPUTFORMAT = 178;
	public static readonly OUTPUTFORMAT = 179;
	public static readonly DATABASE = 180;
	public static readonly DATABASES = 181;
	public static readonly DFS = 182;
	public static readonly TRUNCATE = 183;
	public static readonly ANALYZE = 184;
	public static readonly COMPUTE = 185;
	public static readonly LIST = 186;
	public static readonly STATISTICS = 187;
	public static readonly PARTITIONED = 188;
	public static readonly EXTERNAL = 189;
	public static readonly DEFINED = 190;
	public static readonly REVOKE = 191;
	public static readonly GRANT = 192;
	public static readonly LOCK = 193;
	public static readonly UNLOCK = 194;
	public static readonly MSCK = 195;
	public static readonly REPAIR = 196;
	public static readonly RECOVER = 197;
	public static readonly EXPORT = 198;
	public static readonly IMPORT = 199;
	public static readonly LOAD = 200;
	public static readonly ROLE = 201;
	public static readonly ROLES = 202;
	public static readonly COMPACTIONS = 203;
	public static readonly PRINCIPALS = 204;
	public static readonly TRANSACTIONS = 205;
	public static readonly INDEX = 206;
	public static readonly INDEXES = 207;
	public static readonly LOCKS = 208;
	public static readonly OPTION = 209;
	public static readonly ANTI = 210;
	public static readonly LOCAL = 211;
	public static readonly INPATH = 212;
	public static readonly WATERMARK = 213;
	public static readonly UNNEST = 214;
	public static readonly MATCH = 215;
	public static readonly NEXT = 216;
	public static readonly WITHIN = 217;
	public static readonly WS = 218;
	public static readonly SYSTEM = 219;
	public static readonly INCLUDING = 220;
	public static readonly EXCLUDING = 221;
	public static readonly CONSTRAINTS = 222;
	public static readonly GENERATED = 223;
	public static readonly CATALOG = 224;
	public static readonly LANGUAGE = 225;
	public static readonly CATALOGS = 226;
	public static readonly VIEWS = 227;
	public static readonly PRIMARY = 228;
	public static readonly KEY = 229;
	public static readonly PERIOD = 230;
	public static readonly SYSTEM_TIME = 231;
	public static readonly STRING = 232;
	public static readonly ARRAY = 233;
	public static readonly MAP = 234;
	public static readonly CHAR = 235;
	public static readonly VARCHAR = 236;
	public static readonly BINARY = 237;
	public static readonly VARBINARY = 238;
	public static readonly BYTES = 239;
	public static readonly DECIMAL = 240;
	public static readonly TINYINT = 241;
	public static readonly SMALLINT = 242;
	public static readonly INT = 243;
	public static readonly BIGINT = 244;
	public static readonly FLOAT = 245;
	public static readonly DOUBLE = 246;
	public static readonly DATE = 247;
	public static readonly TIME = 248;
	public static readonly TIMESTAMP = 249;
	public static readonly MULTISET = 250;
	public static readonly BOOLEAN = 251;
	public static readonly RAW = 252;
	public static readonly ROW = 253;
	public static readonly NULL = 254;
	public static readonly DATETIME = 255;
	public static readonly EQUAL_SYMBOL = 256;
	public static readonly GREATER_SYMBOL = 257;
	public static readonly LESS_SYMBOL = 258;
	public static readonly EXCLAMATION_SYMBOL = 259;
	public static readonly BIT_NOT_OP = 260;
	public static readonly BIT_OR_OP = 261;
	public static readonly BIT_AND_OP = 262;
	public static readonly BIT_XOR_OP = 263;
	public static readonly DOT = 264;
	public static readonly LS_BRACKET = 265;
	public static readonly RS_BRACKET = 266;
	public static readonly LR_BRACKET = 267;
	public static readonly RR_BRACKET = 268;
	public static readonly COMMA = 269;
	public static readonly SEMICOLON = 270;
	public static readonly AT_SIGN = 271;
	public static readonly SINGLE_QUOTE_SYMB = 272;
	public static readonly DOUBLE_QUOTE_SYMB = 273;
	public static readonly REVERSE_QUOTE_SYMB = 274;
	public static readonly COLON_SYMB = 275;
	public static readonly ASTERISK_SIGN = 276;
	public static readonly UNDERLINE_SIGN = 277;
	public static readonly HYPNEN_SIGN = 278;
	public static readonly ADD_SIGN = 279;
	public static readonly PENCENT_SIGN = 280;
	public static readonly DOUBLE_VERTICAL_SIGN = 281;
	public static readonly DOUBLE_HYPNEN_SIGN = 282;
	public static readonly SLASH_SIGN = 283;
	public static readonly DOT_ID = 284;
	public static readonly PLUS_DOT_ID = 285;
	public static readonly STRING_LITERAL = 286;
	public static readonly DIG_LITERAL = 287;
	public static readonly REAL_LITERAL = 288;
	public static readonly BIT_STRING = 289;
	public static readonly ID_LITERAL = 290;
	public static readonly PLUS_ID_LITERAL = 291;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_sqlStatements = 2;
	public static readonly RULE_sqlStatement = 3;
	public static readonly RULE_emptyStatement = 4;
	public static readonly RULE_ddlStatement = 5;
	public static readonly RULE_dmlStatement = 6;
	public static readonly RULE_describeStatement = 7;
	public static readonly RULE_explainStatement = 8;
	public static readonly RULE_useStatement = 9;
	public static readonly RULE_showStatememt = 10;
	public static readonly RULE_createTable = 11;
	public static readonly RULE_columnOptionDefinition = 12;
	public static readonly RULE_columnName = 13;
	public static readonly RULE_columnNameList = 14;
	public static readonly RULE_columnType = 15;
	public static readonly RULE_lengthOneDimension = 16;
	public static readonly RULE_commentSpec = 17;
	public static readonly RULE_watermarkDefinition = 18;
	public static readonly RULE_tableConstraint = 19;
	public static readonly RULE_selfDefinitionClause = 20;
	public static readonly RULE_partitionDefinition = 21;
	public static readonly RULE_transformList = 22;
	public static readonly RULE_transform = 23;
	public static readonly RULE_transformArgument = 24;
	public static readonly RULE_likeDefinition = 25;
	public static readonly RULE_likeOption = 26;
	public static readonly RULE_createCatalog = 27;
	public static readonly RULE_createDatabase = 28;
	public static readonly RULE_createView = 29;
	public static readonly RULE_createFunction = 30;
	public static readonly RULE_alterTable = 31;
	public static readonly RULE_renameDefinition = 32;
	public static readonly RULE_setKeyValueDefinition = 33;
	public static readonly RULE_alterDatabase = 34;
	public static readonly RULE_alterFunction = 35;
	public static readonly RULE_dropTable = 36;
	public static readonly RULE_dropDatabase = 37;
	public static readonly RULE_dropView = 38;
	public static readonly RULE_dropFunction = 39;
	public static readonly RULE_insertStatement = 40;
	public static readonly RULE_insertPartitionDefinition = 41;
	public static readonly RULE_valuesDefinition = 42;
	public static readonly RULE_valuesRowDefinition = 43;
	public static readonly RULE_queryStatement = 44;
	public static readonly RULE_valuesCaluse = 45;
	public static readonly RULE_selectStatement = 46;
	public static readonly RULE_selectClause = 47;
	public static readonly RULE_projectItemDefinition = 48;
	public static readonly RULE_fromClause = 49;
	public static readonly RULE_tableExpression = 50;
	public static readonly RULE_tableReference = 51;
	public static readonly RULE_tablePrimary = 52;
	public static readonly RULE_joinCondition = 53;
	public static readonly RULE_whereClause = 54;
	public static readonly RULE_groupByClause = 55;
	public static readonly RULE_groupItemDefinition = 56;
	public static readonly RULE_havingClause = 57;
	public static readonly RULE_orderByCaluse = 58;
	public static readonly RULE_orderItemDefition = 59;
	public static readonly RULE_limitClause = 60;
	public static readonly RULE_windowClause = 61;
	public static readonly RULE_namedWindow = 62;
	public static readonly RULE_windowSpec = 63;
	public static readonly RULE_sortItem = 64;
	public static readonly RULE_windowFrame = 65;
	public static readonly RULE_frameBound = 66;
	public static readonly RULE_expression = 67;
	public static readonly RULE_booleanExpression = 68;
	public static readonly RULE_predicate = 69;
	public static readonly RULE_valueExpression = 70;
	public static readonly RULE_primaryExpression = 71;
	public static readonly RULE_functionName = 72;
	public static readonly RULE_dereferenceDefinition = 73;
	public static readonly RULE_qualifiedName = 74;
	public static readonly RULE_interval = 75;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 76;
	public static readonly RULE_multiUnitsInterval = 77;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 78;
	public static readonly RULE_unitToUnitInterval = 79;
	public static readonly RULE_intervalValue = 80;
	public static readonly RULE_columnAlias = 81;
	public static readonly RULE_tableAlias = 82;
	public static readonly RULE_errorCapturingIdentifier = 83;
	public static readonly RULE_errorCapturingIdentifierExtra = 84;
	public static readonly RULE_identifierList = 85;
	public static readonly RULE_identifierSeq = 86;
	public static readonly RULE_identifier = 87;
	public static readonly RULE_strictIdentifier = 88;
	public static readonly RULE_unquotedIdentifier = 89;
	public static readonly RULE_quotedIdentifier = 90;
	public static readonly RULE_whenClause = 91;
	public static readonly RULE_uidList = 92;
	public static readonly RULE_uid = 93;
	public static readonly RULE_plusUid = 94;
	public static readonly RULE_withOption = 95;
	public static readonly RULE_ifNotExists = 96;
	public static readonly RULE_ifExists = 97;
	public static readonly RULE_tablePropertyList = 98;
	public static readonly RULE_tableProperty = 99;
	public static readonly RULE_tablePropertyKey = 100;
	public static readonly RULE_tablePropertyValue = 101;
	public static readonly RULE_logicalOperator = 102;
	public static readonly RULE_comparisonOperator = 103;
	public static readonly RULE_bitOperator = 104;
	public static readonly RULE_mathOperator = 105;
	public static readonly RULE_unaryOperator = 106;
	public static readonly RULE_fullColumnName = 107;
	public static readonly RULE_constant = 108;
	public static readonly RULE_stringLiteral = 109;
	public static readonly RULE_decimalLiteral = 110;
	public static readonly RULE_booleanLiteral = 111;
	public static readonly RULE_setQuantifier = 112;
	public static readonly RULE_ansiNonReserved = 113;
	public static readonly RULE_strictNonReserved = 114;
	public static readonly RULE_nonReserved = 115;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"useStatement", "showStatememt", "createTable", "columnOptionDefinition", 
		"columnName", "columnNameList", "columnType", "lengthOneDimension", "commentSpec", 
		"watermarkDefinition", "tableConstraint", "selfDefinitionClause", "partitionDefinition", 
		"transformList", "transform", "transformArgument", "likeDefinition", "likeOption", 
		"createCatalog", "createDatabase", "createView", "createFunction", "alterTable", 
		"renameDefinition", "setKeyValueDefinition", "alterDatabase", "alterFunction", 
		"dropTable", "dropDatabase", "dropView", "dropFunction", "insertStatement", 
		"insertPartitionDefinition", "valuesDefinition", "valuesRowDefinition", 
		"queryStatement", "valuesCaluse", "selectStatement", "selectClause", "projectItemDefinition", 
		"fromClause", "tableExpression", "tableReference", "tablePrimary", "joinCondition", 
		"whereClause", "groupByClause", "groupItemDefinition", "havingClause", 
		"orderByCaluse", "orderItemDefition", "limitClause", "windowClause", "namedWindow", 
		"windowSpec", "sortItem", "windowFrame", "frameBound", "expression", "booleanExpression", 
		"predicate", "valueExpression", "primaryExpression", "functionName", "dereferenceDefinition", 
		"qualifiedName", "interval", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
		"errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
		"columnAlias", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
		"identifierList", "identifierSeq", "identifier", "strictIdentifier", "unquotedIdentifier", 
		"quotedIdentifier", "whenClause", "uidList", "uid", "plusUid", "withOption", 
		"ifNotExists", "ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey", 
		"tablePropertyValue", "logicalOperator", "comparisonOperator", "bitOperator", 
		"mathOperator", "unaryOperator", "fullColumnName", "constant", "stringLiteral", 
		"decimalLiteral", "booleanLiteral", "setQuantifier", "ansiNonReserved", 
		"strictNonReserved", "nonReserved",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'SELECT'", "'FROM'", "'ADD'", 
		"'AS'", "'ALL'", "'ANY'", "'DISTINCT'", "'WHERE'", "'GROUP'", "'BY'", 
		"'GROUPING'", "'SETS'", "'CUBE'", "'ROLLUP'", "'ORDER'", "'HAVING'", "'LIMIT'", 
		"'AT'", "'OR'", "'AND'", "'IN'", "'NOT'", "'NO'", "'EXISTS'", "'BETWEEN'", 
		"'LIKE'", "'RLIKE'", "'IS'", "'TRUE'", "'FALSE'", "'NULLS'", "'ASC'", 
		"'DESC'", "'FOR'", "'INTERVAL'", "'CASE'", "'WHEN'", "'THEN'", "'ELSE'", 
		"'END'", "'JOIN'", "'CROSS'", "'OUTER'", "'INNER'", "'LEFT'", "'SEMI'", 
		"'RIGHT'", "'FULL'", "'NATURAL'", "'ON'", "'PIVOT'", "'LATERAL'", "'WINDOW'", 
		"'OVER'", "'PARTITION'", "'RANGE'", "'ROWS'", "'UNBOUNDED'", "'PRECEDING'", 
		"'FOLLOWING'", "'CURRENT'", "'FIRST'", "'AFTER'", "'LAST'", "'WITH'", 
		"'VALUES'", "'CREATE'", "'TABLE'", "'DIRECTORY'", "'VIEW'", "'REPLACE'", 
		"'INSERT'", "'DELETE'", "'INTO'", "'DESCRIBE'", "'EXPLAIN'", "'FORMAT'", 
		"'LOGICAL'", "'CODEGEN'", "'COST'", "'CAST'", "'SHOW'", "'TABLES'", "'COLUMNS'", 
		"'COLUMN'", "'USE'", "'PARTITIONS'", "'FUNCTIONS'", "'DROP'", "'UNION'", 
		"'EXCEPT'", "'SETMINUS'", "'INTERSECT'", "'TO'", "'TABLESAMPLE'", "'STRATIFY'", 
		"'ALTER'", "'RENAME'", "'STRUCT'", "'COMMENT'", "'SET'", "'RESET'", "'DATA'", 
		"'START'", "'TRANSACTION'", "'COMMIT'", "'ROLLBACK'", "'MACRO'", "'IGNORE'", 
		"'BOTH'", "'LEADING'", "'TRAILING'", "'IF'", "'POSITION'", "'EXTRACT'", 
		"'MINUS'", "'DIV'", "'PERCENTLIT'", "'BUCKET'", "'OUT'", "'OF'", "'SORT'", 
		"'CLUSTER'", "'DISTRIBUTE'", "'OVERWRITE'", "'TRANSFORM'", "'REDUCE'", 
		"'USING'", "'SERDE'", "'SERDEPROPERTIES'", "'RECORDREADER'", "'RECORDWRITER'", 
		"'DELIMITED'", "'FIELDS'", "'TERMINATED'", "'COLLECTION'", "'ITEMS'", 
		"'KEYS'", "'ESCAPED'", "'LINES'", "'SEPARATED'", "'FUNCTION'", "'EXTENDED'", 
		"'REFRESH'", "'CLEAR'", "'CACHE'", "'UNCACHE'", "'LAZY'", "'FORMATTED'", 
		"'GLOBAL'", "'TEMPORARY'", "'OPTIONS'", "'UNSET'", "'TBLPROPERTIES'", 
		"'DBPROPERTIES'", "'BUCKETS'", "'SKEWED'", "'STORED'", "'DIRECTORIES'", 
		"'LOCATION'", "'EXCHANGE'", "'ARCHIVE'", "'UNARCHIVE'", "'FILEFORMAT'", 
		"'TOUCH'", "'COMPACT'", "'CONCATENATE'", "'CHANGE'", "'CASCADE'", "'CONSTRAINT'", 
		"'RESTRICT'", "'CLUSTERED'", "'SORTED'", "'PURGE'", "'INPUTFORMAT'", "'OUTPUTFORMAT'", 
		"'DATABASE'", "'DATABASES'", "'DFS'", "'TRUNCATE'", "'ANALYZE'", "'COMPUTE'", 
		"'LIST'", "'STATISTICS'", "'PARTITIONED'", "'EXTERNAL'", "'DEFINED'", 
		"'REVOKE'", "'GRANT'", "'LOCK'", "'UNLOCK'", "'MSCK'", "'REPAIR'", "'RECOVER'", 
		"'EXPORT'", "'IMPORT'", "'LOAD'", "'ROLE'", "'ROLES'", "'COMPACTIONS'", 
		"'PRINCIPALS'", "'TRANSACTIONS'", "'INDEX'", "'INDEXES'", "'LOCKS'", "'OPTION'", 
		"'ANTI'", "'LOCAL'", "'INPATH'", "'WATERMARK'", "'UNNEST'", "'MATCH'", 
		"'NEXT'", "'WITHIN'", "'WS'", "'SYSTEM'", "'INCLUDING'", "'EXCLUDING'", 
		"'CONSTRAINTS'", "'GENERATED'", "'CATALOG'", "'LANGUAGE'", "'CATALOGS'", 
		"'VIEWS'", "'PRIMARY'", "'KEY'", "'PERIOD'", "'SYSTEM_TIME'", "'STRING'", 
		"'ARRAY'", "'MAP'", "'CHAR'", "'VARCHAR'", "'BINARY'", "'VARBINARY'", 
		"'BYTES'", "'DECIMAL'", "'TINYINT'", "'SMALLINT'", "'INT'", "'BIGINT'", 
		"'FLOAT'", "'DOUBLE'", "'DATE'", "'TIME'", "'TIMESTAMP'", "'MULTISET'", 
		"'BOOLEAN'", "'RAW'", "'ROW'", "'NULL'", "'DATETIME'", "'='", "'>'", "'<'", 
		"'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'['", "']'", "'('", "')'", 
		"','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", 
		"'+'", "'%'", "'||'", "'--'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "SELECT", "FROM", 
		"ADD", "AS", "ALL", "ANY", "DISTINCT", "WHERE", "GROUP", "BY", "GROUPING", 
		"SETS", "CUBE", "ROLLUP", "ORDER", "HAVING", "LIMIT", "AT", "OR", "AND", 
		"IN", "NOT", "NO", "EXISTS", "BETWEEN", "LIKE", "RLIKE", "IS", "TRUE", 
		"FALSE", "NULLS", "ASC", "DESC", "FOR", "INTERVAL", "CASE", "WHEN", "THEN", 
		"ELSE", "END", "JOIN", "CROSS", "OUTER", "INNER", "LEFT", "SEMI", "RIGHT", 
		"FULL", "NATURAL", "ON", "PIVOT", "LATERAL", "WINDOW", "OVER", "PARTITION", 
		"RANGE", "ROWS", "UNBOUNDED", "PRECEDING", "FOLLOWING", "CURRENT", "FIRST", 
		"AFTER", "LAST", "WITH", "VALUES", "CREATE", "TABLE", "DIRECTORY", "VIEW", 
		"REPLACE", "INSERT", "DELETE", "INTO", "DESCRIBE", "EXPLAIN", "FORMAT", 
		"LOGICAL", "CODEGEN", "COST", "CAST", "SHOW", "TABLES", "COLUMNS", "COLUMN", 
		"USE", "PARTITIONS", "FUNCTIONS", "DROP", "UNION", "EXCEPT", "SETMINUS", 
		"INTERSECT", "TO", "TABLESAMPLE", "STRATIFY", "ALTER", "RENAME", "STRUCT", 
		"COMMENT", "SET", "RESET", "DATA", "START", "TRANSACTION", "COMMIT", "ROLLBACK", 
		"MACRO", "IGNORE", "BOTH", "LEADING", "TRAILING", "IF", "POSITION", "EXTRACT", 
		"MINUS", "DIV", "PERCENTLIT", "BUCKET", "OUT", "OF", "SORT", "CLUSTER", 
		"DISTRIBUTE", "OVERWRITE", "TRANSFORM", "REDUCE", "USING", "SERDE", "SERDEPROPERTIES", 
		"RECORDREADER", "RECORDWRITER", "DELIMITED", "FIELDS", "TERMINATED", "COLLECTION", 
		"ITEMS", "KEYS", "ESCAPED", "LINES", "SEPARATED", "FUNCTION", "EXTENDED", 
		"REFRESH", "CLEAR", "CACHE", "UNCACHE", "LAZY", "FORMATTED", "GLOBAL", 
		"TEMPORARY", "OPTIONS", "UNSET", "TBLPROPERTIES", "DBPROPERTIES", "BUCKETS", 
		"SKEWED", "STORED", "DIRECTORIES", "LOCATION", "EXCHANGE", "ARCHIVE", 
		"UNARCHIVE", "FILEFORMAT", "TOUCH", "COMPACT", "CONCATENATE", "CHANGE", 
		"CASCADE", "CONSTRAINT", "RESTRICT", "CLUSTERED", "SORTED", "PURGE", "INPUTFORMAT", 
		"OUTPUTFORMAT", "DATABASE", "DATABASES", "DFS", "TRUNCATE", "ANALYZE", 
		"COMPUTE", "LIST", "STATISTICS", "PARTITIONED", "EXTERNAL", "DEFINED", 
		"REVOKE", "GRANT", "LOCK", "UNLOCK", "MSCK", "REPAIR", "RECOVER", "EXPORT", 
		"IMPORT", "LOAD", "ROLE", "ROLES", "COMPACTIONS", "PRINCIPALS", "TRANSACTIONS", 
		"INDEX", "INDEXES", "LOCKS", "OPTION", "ANTI", "LOCAL", "INPATH", "WATERMARK", 
		"UNNEST", "MATCH", "NEXT", "WITHIN", "WS", "SYSTEM", "INCLUDING", "EXCLUDING", 
		"CONSTRAINTS", "GENERATED", "CATALOG", "LANGUAGE", "CATALOGS", "VIEWS", 
		"PRIMARY", "KEY", "PERIOD", "SYSTEM_TIME", "STRING", "ARRAY", "MAP", "CHAR", 
		"VARCHAR", "BINARY", "VARBINARY", "BYTES", "DECIMAL", "TINYINT", "SMALLINT", 
		"INT", "BIGINT", "FLOAT", "DOUBLE", "DATE", "TIME", "TIMESTAMP", "MULTISET", 
		"BOOLEAN", "RAW", "ROW", "NULL", "DATETIME", "EQUAL_SYMBOL", "GREATER_SYMBOL", 
		"LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", 
		"BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", 
		"COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
		"REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
		"HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
		"SLASH_SIGN", "DOT_ID", "PLUS_DOT_ID", "STRING_LITERAL", "DIG_LITERAL", 
		"REAL_LITERAL", "BIT_STRING", "ID_LITERAL", "PLUS_ID_LITERAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FlinkSqlParser._LITERAL_NAMES, FlinkSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FlinkSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FlinkSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FlinkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FlinkSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FlinkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.statement();
			this.state = 233;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FlinkSqlParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.sqlStatements();
			this.state = 236;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let _localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FlinkSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.SELECT || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (FlinkSqlParser.VALUES - 69)) | (1 << (FlinkSqlParser.CREATE - 69)) | (1 << (FlinkSqlParser.INSERT - 69)) | (1 << (FlinkSqlParser.DESCRIBE - 69)) | (1 << (FlinkSqlParser.EXPLAIN - 69)) | (1 << (FlinkSqlParser.SHOW - 69)) | (1 << (FlinkSqlParser.USE - 69)) | (1 << (FlinkSqlParser.DROP - 69)) | (1 << (FlinkSqlParser.ALTER - 69)))) !== 0) || _la === FlinkSqlParser.LR_BRACKET || _la === FlinkSqlParser.SEMICOLON) {
				{
				this.state = 243;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSqlParser.SELECT:
				case FlinkSqlParser.VALUES:
				case FlinkSqlParser.CREATE:
				case FlinkSqlParser.INSERT:
				case FlinkSqlParser.DESCRIBE:
				case FlinkSqlParser.EXPLAIN:
				case FlinkSqlParser.SHOW:
				case FlinkSqlParser.USE:
				case FlinkSqlParser.DROP:
				case FlinkSqlParser.ALTER:
				case FlinkSqlParser.LR_BRACKET:
					{
					this.state = 238;
					this.sqlStatement();
					this.state = 240;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 239;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case FlinkSqlParser.SEMICOLON:
					{
					this.state = 242;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FlinkSqlParser.RULE_sqlStatement);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.CREATE:
			case FlinkSqlParser.DROP:
			case FlinkSqlParser.ALTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 248;
				this.ddlStatement();
				}
				break;
			case FlinkSqlParser.SELECT:
			case FlinkSqlParser.VALUES:
			case FlinkSqlParser.INSERT:
			case FlinkSqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.dmlStatement();
				}
				break;
			case FlinkSqlParser.DESCRIBE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				this.describeStatement();
				}
				break;
			case FlinkSqlParser.EXPLAIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 251;
				this.explainStatement();
				}
				break;
			case FlinkSqlParser.USE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 252;
				this.useStatement();
				}
				break;
			case FlinkSqlParser.SHOW:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 253;
				this.showStatememt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlinkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(FlinkSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ddlStatement(): DdlStatementContext {
		let _localctx: DdlStatementContext = new DdlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FlinkSqlParser.RULE_ddlStatement);
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.createDatabase();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 260;
				this.createView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 261;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 262;
				this.createCatalog();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 263;
				this.alterTable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 264;
				this.alterDatabase();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 265;
				this.alterFunction();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 266;
				this.dropTable();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 267;
				this.dropDatabase();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 268;
				this.dropView();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 269;
				this.dropFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dmlStatement(): DmlStatementContext {
		let _localctx: DmlStatementContext = new DmlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FlinkSqlParser.RULE_dmlStatement);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.SELECT:
			case FlinkSqlParser.VALUES:
			case FlinkSqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.queryStatement(0);
				}
				break;
			case FlinkSqlParser.INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.insertStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeStatement(): DescribeStatementContext {
		let _localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FlinkSqlParser.RULE_describeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(FlinkSqlParser.DESCRIBE);
			this.state = 277;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainStatement(): ExplainStatementContext {
		let _localctx: ExplainStatementContext = new ExplainStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FlinkSqlParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(FlinkSqlParser.EXPLAIN);
			this.state = 280;
			this.identifier();
			this.state = 281;
			this.match(FlinkSqlParser.FOR);
			this.state = 282;
			this.dmlStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FlinkSqlParser.RULE_useStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(FlinkSqlParser.USE);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.CATALOG) {
				{
				this.state = 285;
				this.match(FlinkSqlParser.CATALOG);
				}
			}

			this.state = 288;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showStatememt(): ShowStatememtContext {
		let _localctx: ShowStatememtContext = new ShowStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FlinkSqlParser.RULE_showStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(FlinkSqlParser.SHOW);
			this.state = 291;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.TABLES || _la === FlinkSqlParser.FUNCTIONS || _la === FlinkSqlParser.DATABASES || _la === FlinkSqlParser.CATALOGS || _la === FlinkSqlParser.VIEWS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FlinkSqlParser.RULE_createTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(FlinkSqlParser.CREATE);
			this.state = 294;
			this.match(FlinkSqlParser.TABLE);
			this.state = 295;
			this.uid();
			this.state = 296;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 297;
			this.columnOptionDefinition();
			this.state = 302;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 298;
					this.match(FlinkSqlParser.COMMA);
					this.state = 299;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.match(FlinkSqlParser.COMMA);
				this.state = 306;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.match(FlinkSqlParser.COMMA);
				this.state = 310;
				this.tableConstraint();
				}
				break;
			}
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 313;
				this.match(FlinkSqlParser.COMMA);
				this.state = 314;
				this.selfDefinitionClause();
				}
			}

			this.state = 317;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMENT) {
				{
				this.state = 318;
				this.commentSpec();
				}
			}

			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.PARTITIONED) {
				{
				this.state = 321;
				this.partitionDefinition();
				}
			}

			this.state = 324;
			this.withOption();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LIKE) {
				{
				this.state = 325;
				this.likeDefinition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let _localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FlinkSqlParser.RULE_columnOptionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.columnName();
			this.state = 329;
			this.columnType();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 330;
				this.lengthOneDimension();
				}
			}

			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.SELECT) | (1 << FlinkSqlParser.FROM) | (1 << FlinkSqlParser.ADD) | (1 << FlinkSqlParser.AS) | (1 << FlinkSqlParser.ALL) | (1 << FlinkSqlParser.ANY) | (1 << FlinkSqlParser.DISTINCT) | (1 << FlinkSqlParser.WHERE) | (1 << FlinkSqlParser.GROUP) | (1 << FlinkSqlParser.BY) | (1 << FlinkSqlParser.GROUPING) | (1 << FlinkSqlParser.SETS) | (1 << FlinkSqlParser.CUBE) | (1 << FlinkSqlParser.ROLLUP) | (1 << FlinkSqlParser.ORDER) | (1 << FlinkSqlParser.HAVING) | (1 << FlinkSqlParser.LIMIT) | (1 << FlinkSqlParser.AT) | (1 << FlinkSqlParser.OR) | (1 << FlinkSqlParser.AND) | (1 << FlinkSqlParser.IN) | (1 << FlinkSqlParser.NOT) | (1 << FlinkSqlParser.NO) | (1 << FlinkSqlParser.EXISTS) | (1 << FlinkSqlParser.BETWEEN) | (1 << FlinkSqlParser.LIKE) | (1 << FlinkSqlParser.RLIKE) | (1 << FlinkSqlParser.IS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.TRUE - 32)) | (1 << (FlinkSqlParser.FALSE - 32)) | (1 << (FlinkSqlParser.NULLS - 32)) | (1 << (FlinkSqlParser.ASC - 32)) | (1 << (FlinkSqlParser.DESC - 32)) | (1 << (FlinkSqlParser.FOR - 32)) | (1 << (FlinkSqlParser.INTERVAL - 32)) | (1 << (FlinkSqlParser.CASE - 32)) | (1 << (FlinkSqlParser.WHEN - 32)) | (1 << (FlinkSqlParser.THEN - 32)) | (1 << (FlinkSqlParser.ELSE - 32)) | (1 << (FlinkSqlParser.END - 32)) | (1 << (FlinkSqlParser.OUTER - 32)) | (1 << (FlinkSqlParser.SEMI - 32)) | (1 << (FlinkSqlParser.PIVOT - 32)) | (1 << (FlinkSqlParser.LATERAL - 32)) | (1 << (FlinkSqlParser.WINDOW - 32)) | (1 << (FlinkSqlParser.OVER - 32)) | (1 << (FlinkSqlParser.PARTITION - 32)) | (1 << (FlinkSqlParser.RANGE - 32)) | (1 << (FlinkSqlParser.ROWS - 32)) | (1 << (FlinkSqlParser.UNBOUNDED - 32)) | (1 << (FlinkSqlParser.PRECEDING - 32)) | (1 << (FlinkSqlParser.FOLLOWING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.CURRENT - 64)) | (1 << (FlinkSqlParser.FIRST - 64)) | (1 << (FlinkSqlParser.AFTER - 64)) | (1 << (FlinkSqlParser.LAST - 64)) | (1 << (FlinkSqlParser.WITH - 64)) | (1 << (FlinkSqlParser.VALUES - 64)) | (1 << (FlinkSqlParser.CREATE - 64)) | (1 << (FlinkSqlParser.TABLE - 64)) | (1 << (FlinkSqlParser.DIRECTORY - 64)) | (1 << (FlinkSqlParser.VIEW - 64)) | (1 << (FlinkSqlParser.REPLACE - 64)) | (1 << (FlinkSqlParser.INSERT - 64)) | (1 << (FlinkSqlParser.DELETE - 64)) | (1 << (FlinkSqlParser.INTO - 64)) | (1 << (FlinkSqlParser.DESCRIBE - 64)) | (1 << (FlinkSqlParser.EXPLAIN - 64)) | (1 << (FlinkSqlParser.FORMAT - 64)) | (1 << (FlinkSqlParser.LOGICAL - 64)) | (1 << (FlinkSqlParser.CODEGEN - 64)) | (1 << (FlinkSqlParser.COST - 64)) | (1 << (FlinkSqlParser.CAST - 64)) | (1 << (FlinkSqlParser.SHOW - 64)) | (1 << (FlinkSqlParser.TABLES - 64)) | (1 << (FlinkSqlParser.COLUMNS - 64)) | (1 << (FlinkSqlParser.COLUMN - 64)) | (1 << (FlinkSqlParser.USE - 64)) | (1 << (FlinkSqlParser.PARTITIONS - 64)) | (1 << (FlinkSqlParser.FUNCTIONS - 64)) | (1 << (FlinkSqlParser.DROP - 64)) | (1 << (FlinkSqlParser.SETMINUS - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (FlinkSqlParser.TO - 97)) | (1 << (FlinkSqlParser.TABLESAMPLE - 97)) | (1 << (FlinkSqlParser.STRATIFY - 97)) | (1 << (FlinkSqlParser.ALTER - 97)) | (1 << (FlinkSqlParser.RENAME - 97)) | (1 << (FlinkSqlParser.STRUCT - 97)) | (1 << (FlinkSqlParser.COMMENT - 97)) | (1 << (FlinkSqlParser.SET - 97)) | (1 << (FlinkSqlParser.RESET - 97)) | (1 << (FlinkSqlParser.DATA - 97)) | (1 << (FlinkSqlParser.START - 97)) | (1 << (FlinkSqlParser.TRANSACTION - 97)) | (1 << (FlinkSqlParser.COMMIT - 97)) | (1 << (FlinkSqlParser.ROLLBACK - 97)) | (1 << (FlinkSqlParser.MACRO - 97)) | (1 << (FlinkSqlParser.IGNORE - 97)) | (1 << (FlinkSqlParser.BOTH - 97)) | (1 << (FlinkSqlParser.LEADING - 97)) | (1 << (FlinkSqlParser.TRAILING - 97)) | (1 << (FlinkSqlParser.IF - 97)) | (1 << (FlinkSqlParser.POSITION - 97)) | (1 << (FlinkSqlParser.EXTRACT - 97)) | (1 << (FlinkSqlParser.MINUS - 97)) | (1 << (FlinkSqlParser.DIV - 97)) | (1 << (FlinkSqlParser.PERCENTLIT - 97)) | (1 << (FlinkSqlParser.BUCKET - 97)) | (1 << (FlinkSqlParser.OUT - 97)) | (1 << (FlinkSqlParser.OF - 97)) | (1 << (FlinkSqlParser.SORT - 97)) | (1 << (FlinkSqlParser.CLUSTER - 97)) | (1 << (FlinkSqlParser.DISTRIBUTE - 97)) | (1 << (FlinkSqlParser.OVERWRITE - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (FlinkSqlParser.TRANSFORM - 129)) | (1 << (FlinkSqlParser.REDUCE - 129)) | (1 << (FlinkSqlParser.SERDE - 129)) | (1 << (FlinkSqlParser.SERDEPROPERTIES - 129)) | (1 << (FlinkSqlParser.RECORDREADER - 129)) | (1 << (FlinkSqlParser.RECORDWRITER - 129)) | (1 << (FlinkSqlParser.DELIMITED - 129)) | (1 << (FlinkSqlParser.FIELDS - 129)) | (1 << (FlinkSqlParser.TERMINATED - 129)) | (1 << (FlinkSqlParser.COLLECTION - 129)) | (1 << (FlinkSqlParser.ITEMS - 129)) | (1 << (FlinkSqlParser.KEYS - 129)) | (1 << (FlinkSqlParser.ESCAPED - 129)) | (1 << (FlinkSqlParser.LINES - 129)) | (1 << (FlinkSqlParser.SEPARATED - 129)) | (1 << (FlinkSqlParser.FUNCTION - 129)) | (1 << (FlinkSqlParser.EXTENDED - 129)) | (1 << (FlinkSqlParser.REFRESH - 129)) | (1 << (FlinkSqlParser.CLEAR - 129)) | (1 << (FlinkSqlParser.CACHE - 129)) | (1 << (FlinkSqlParser.UNCACHE - 129)) | (1 << (FlinkSqlParser.LAZY - 129)) | (1 << (FlinkSqlParser.FORMATTED - 129)) | (1 << (FlinkSqlParser.GLOBAL - 129)) | (1 << (FlinkSqlParser.TEMPORARY - 129)) | (1 << (FlinkSqlParser.OPTIONS - 129)) | (1 << (FlinkSqlParser.UNSET - 129)) | (1 << (FlinkSqlParser.TBLPROPERTIES - 129)) | (1 << (FlinkSqlParser.DBPROPERTIES - 129)) | (1 << (FlinkSqlParser.BUCKETS - 129)) | (1 << (FlinkSqlParser.SKEWED - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (FlinkSqlParser.STORED - 161)) | (1 << (FlinkSqlParser.DIRECTORIES - 161)) | (1 << (FlinkSqlParser.LOCATION - 161)) | (1 << (FlinkSqlParser.EXCHANGE - 161)) | (1 << (FlinkSqlParser.ARCHIVE - 161)) | (1 << (FlinkSqlParser.UNARCHIVE - 161)) | (1 << (FlinkSqlParser.FILEFORMAT - 161)) | (1 << (FlinkSqlParser.TOUCH - 161)) | (1 << (FlinkSqlParser.COMPACT - 161)) | (1 << (FlinkSqlParser.CONCATENATE - 161)) | (1 << (FlinkSqlParser.CHANGE - 161)) | (1 << (FlinkSqlParser.CASCADE - 161)) | (1 << (FlinkSqlParser.CONSTRAINT - 161)) | (1 << (FlinkSqlParser.RESTRICT - 161)) | (1 << (FlinkSqlParser.CLUSTERED - 161)) | (1 << (FlinkSqlParser.SORTED - 161)) | (1 << (FlinkSqlParser.PURGE - 161)) | (1 << (FlinkSqlParser.INPUTFORMAT - 161)) | (1 << (FlinkSqlParser.OUTPUTFORMAT - 161)) | (1 << (FlinkSqlParser.DATABASE - 161)) | (1 << (FlinkSqlParser.DATABASES - 161)) | (1 << (FlinkSqlParser.DFS - 161)) | (1 << (FlinkSqlParser.TRUNCATE - 161)) | (1 << (FlinkSqlParser.ANALYZE - 161)) | (1 << (FlinkSqlParser.COMPUTE - 161)) | (1 << (FlinkSqlParser.LIST - 161)) | (1 << (FlinkSqlParser.STATISTICS - 161)) | (1 << (FlinkSqlParser.PARTITIONED - 161)) | (1 << (FlinkSqlParser.EXTERNAL - 161)) | (1 << (FlinkSqlParser.DEFINED - 161)) | (1 << (FlinkSqlParser.REVOKE - 161)) | (1 << (FlinkSqlParser.GRANT - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (FlinkSqlParser.LOCK - 193)) | (1 << (FlinkSqlParser.UNLOCK - 193)) | (1 << (FlinkSqlParser.MSCK - 193)) | (1 << (FlinkSqlParser.REPAIR - 193)) | (1 << (FlinkSqlParser.RECOVER - 193)) | (1 << (FlinkSqlParser.EXPORT - 193)) | (1 << (FlinkSqlParser.IMPORT - 193)) | (1 << (FlinkSqlParser.LOAD - 193)) | (1 << (FlinkSqlParser.ROLE - 193)) | (1 << (FlinkSqlParser.ROLES - 193)) | (1 << (FlinkSqlParser.COMPACTIONS - 193)) | (1 << (FlinkSqlParser.PRINCIPALS - 193)) | (1 << (FlinkSqlParser.TRANSACTIONS - 193)) | (1 << (FlinkSqlParser.INDEX - 193)) | (1 << (FlinkSqlParser.INDEXES - 193)) | (1 << (FlinkSqlParser.LOCKS - 193)) | (1 << (FlinkSqlParser.OPTION - 193)) | (1 << (FlinkSqlParser.ANTI - 193)) | (1 << (FlinkSqlParser.LOCAL - 193)) | (1 << (FlinkSqlParser.INPATH - 193)) | (1 << (FlinkSqlParser.WATERMARK - 193)) | (1 << (FlinkSqlParser.UNNEST - 193)) | (1 << (FlinkSqlParser.MATCH - 193)) | (1 << (FlinkSqlParser.NEXT - 193)) | (1 << (FlinkSqlParser.WITHIN - 193)) | (1 << (FlinkSqlParser.WS - 193)) | (1 << (FlinkSqlParser.SYSTEM - 193)) | (1 << (FlinkSqlParser.INCLUDING - 193)) | (1 << (FlinkSqlParser.EXCLUDING - 193)) | (1 << (FlinkSqlParser.CONSTRAINTS - 193)) | (1 << (FlinkSqlParser.GENERATED - 193)) | (1 << (FlinkSqlParser.CATALOG - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (FlinkSqlParser.LANGUAGE - 225)) | (1 << (FlinkSqlParser.CATALOGS - 225)) | (1 << (FlinkSqlParser.VIEWS - 225)) | (1 << (FlinkSqlParser.PRIMARY - 225)) | (1 << (FlinkSqlParser.KEY - 225)) | (1 << (FlinkSqlParser.PERIOD - 225)) | (1 << (FlinkSqlParser.SYSTEM_TIME - 225)) | (1 << (FlinkSqlParser.STRING - 225)) | (1 << (FlinkSqlParser.ARRAY - 225)) | (1 << (FlinkSqlParser.MAP - 225)) | (1 << (FlinkSqlParser.CHAR - 225)) | (1 << (FlinkSqlParser.VARCHAR - 225)) | (1 << (FlinkSqlParser.BINARY - 225)) | (1 << (FlinkSqlParser.VARBINARY - 225)) | (1 << (FlinkSqlParser.BYTES - 225)) | (1 << (FlinkSqlParser.DECIMAL - 225)) | (1 << (FlinkSqlParser.TINYINT - 225)) | (1 << (FlinkSqlParser.SMALLINT - 225)) | (1 << (FlinkSqlParser.INT - 225)) | (1 << (FlinkSqlParser.BIGINT - 225)) | (1 << (FlinkSqlParser.FLOAT - 225)) | (1 << (FlinkSqlParser.DOUBLE - 225)) | (1 << (FlinkSqlParser.DATE - 225)) | (1 << (FlinkSqlParser.TIME - 225)) | (1 << (FlinkSqlParser.TIMESTAMP - 225)) | (1 << (FlinkSqlParser.MULTISET - 225)) | (1 << (FlinkSqlParser.BOOLEAN - 225)) | (1 << (FlinkSqlParser.RAW - 225)) | (1 << (FlinkSqlParser.ROW - 225)) | (1 << (FlinkSqlParser.NULL - 225)) | (1 << (FlinkSqlParser.DATETIME - 225)))) !== 0) || ((((_la - 286)) & ~0x1F) === 0 && ((1 << (_la - 286)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 286)) | (1 << (FlinkSqlParser.DIG_LITERAL - 286)) | (1 << (FlinkSqlParser.ID_LITERAL - 286)))) !== 0)) {
				{
				this.state = 333;
				this.columnAlias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 336;
				this.plusUid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 337;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnNameList(): ColumnNameListContext {
		let _localctx: ColumnNameListContext = new ColumnNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.columnName();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 341;
				this.match(FlinkSqlParser.COMMA);
				this.state = 342;
				this.columnName();
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnType(): ColumnTypeContext {
		let _localctx: ColumnTypeContext = new ColumnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			_localctx._typeName = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (FlinkSqlParser.STRING - 232)) | (1 << (FlinkSqlParser.ARRAY - 232)) | (1 << (FlinkSqlParser.MAP - 232)) | (1 << (FlinkSqlParser.CHAR - 232)) | (1 << (FlinkSqlParser.VARCHAR - 232)) | (1 << (FlinkSqlParser.BINARY - 232)) | (1 << (FlinkSqlParser.VARBINARY - 232)) | (1 << (FlinkSqlParser.BYTES - 232)) | (1 << (FlinkSqlParser.DECIMAL - 232)) | (1 << (FlinkSqlParser.TINYINT - 232)) | (1 << (FlinkSqlParser.SMALLINT - 232)) | (1 << (FlinkSqlParser.INT - 232)) | (1 << (FlinkSqlParser.BIGINT - 232)) | (1 << (FlinkSqlParser.FLOAT - 232)) | (1 << (FlinkSqlParser.DOUBLE - 232)) | (1 << (FlinkSqlParser.DATE - 232)) | (1 << (FlinkSqlParser.TIME - 232)) | (1 << (FlinkSqlParser.TIMESTAMP - 232)) | (1 << (FlinkSqlParser.MULTISET - 232)) | (1 << (FlinkSqlParser.BOOLEAN - 232)) | (1 << (FlinkSqlParser.RAW - 232)) | (1 << (FlinkSqlParser.ROW - 232)) | (1 << (FlinkSqlParser.NULL - 232)) | (1 << (FlinkSqlParser.DATETIME - 232)))) !== 0))) {
				_localctx._typeName = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthOneDimension(): LengthOneDimensionContext {
		let _localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 351;
			this.decimalLiteral();
			this.state = 352;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commentSpec(): CommentSpecContext {
		let _localctx: CommentSpecContext = new CommentSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(FlinkSqlParser.COMMENT);
			this.state = 355;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public watermarkDefinition(): WatermarkDefinitionContext {
		let _localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(FlinkSqlParser.WATERMARK);
			this.state = 358;
			this.match(FlinkSqlParser.FOR);
			this.state = 359;
			this.expression();
			this.state = 360;
			this.match(FlinkSqlParser.AS);
			this.state = 361;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.CONSTRAINT) {
				{
				this.state = 363;
				this.match(FlinkSqlParser.CONSTRAINT);
				this.state = 364;
				this.identifier();
				}
			}

			this.state = 367;
			this.match(FlinkSqlParser.PRIMARY);
			this.state = 368;
			this.match(FlinkSqlParser.KEY);
			this.state = 369;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 370;
			this.columnNameList();
			this.state = 371;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		let _localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(FlinkSqlParser.PERIOD);
			this.state = 374;
			this.match(FlinkSqlParser.FOR);
			this.state = 375;
			this.match(FlinkSqlParser.SYSTEM_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionDefinition(): PartitionDefinitionContext {
		let _localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(FlinkSqlParser.PARTITIONED);
			this.state = 378;
			this.match(FlinkSqlParser.BY);
			this.state = 379;
			this.transformList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformList(): TransformListContext {
		let _localctx: TransformListContext = new TransformListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 382;
			this.transform();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 383;
				this.match(FlinkSqlParser.COMMA);
				this.state = 384;
				this.transform();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 390;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let _localctx: TransformContext = new TransformContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 394;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 395;
				this.transformArgument();
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 396;
					this.match(FlinkSqlParser.COMMA);
					this.state = 397;
					this.transformArgument();
					}
					}
					this.state = 402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 403;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformArgument(): TransformArgumentContext {
		let _localctx: TransformArgumentContext = new TransformArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 407;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 408;
				this.constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeDefinition(): LikeDefinitionContext {
		let _localctx: LikeDefinitionContext = new LikeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FlinkSqlParser.RULE_likeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(FlinkSqlParser.LIKE);
			this.state = 412;
			this.identifier();
			this.state = 413;
			this.likeOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeOption(): LikeOptionContext {
		let _localctx: LikeOptionContext = new LikeOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 415;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.INCLUDING || _la === FlinkSqlParser.EXCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 416;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.ALL || _la === FlinkSqlParser.CONSTRAINTS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 417;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.INCLUDING || _la === FlinkSqlParser.EXCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 418;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.OPTIONS || _la === FlinkSqlParser.GENERATED)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createCatalog(): CreateCatalogContext {
		let _localctx: CreateCatalogContext = new CreateCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FlinkSqlParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(FlinkSqlParser.CREATE);
			this.state = 422;
			this.match(FlinkSqlParser.CATALOG);
			this.state = 423;
			this.uid();
			this.state = 424;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let _localctx: CreateDatabaseContext = new CreateDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FlinkSqlParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(FlinkSqlParser.CREATE);
			this.state = 427;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 428;
				this.ifNotExists();
				}
			}

			this.state = 431;
			this.uid();
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMENT) {
				{
				this.state = 432;
				this.commentSpec();
				}
			}

			this.state = 435;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createView(): CreateViewContext {
		let _localctx: CreateViewContext = new CreateViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FlinkSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(FlinkSqlParser.CREATE);
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.TEMPORARY) {
				{
				this.state = 438;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 441;
			this.match(FlinkSqlParser.VIEW);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 442;
				this.ifNotExists();
				}
			}

			this.state = 445;
			this.uid();
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 446;
				this.columnNameList();
				}
				break;
			}
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMENT) {
				{
				this.state = 449;
				this.commentSpec();
				}
			}

			this.state = 452;
			this.match(FlinkSqlParser.AS);
			this.state = 453;
			this.queryStatement(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let _localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FlinkSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(FlinkSqlParser.CREATE);
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 457;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 458;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 461;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 462;
				this.ifNotExists();
				}
			}

			this.state = 465;
			this.uid();
			this.state = 466;
			this.match(FlinkSqlParser.AS);
			this.state = 467;
			this.identifier();
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LANGUAGE) {
				{
				this.state = 468;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 469;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterTable(): AlterTableContext {
		let _localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FlinkSqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(FlinkSqlParser.ALTER);
			this.state = 473;
			this.match(FlinkSqlParser.TABLE);
			this.state = 474;
			this.uid();
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.RENAME:
				{
				this.state = 475;
				this.renameDefinition();
				}
				break;
			case FlinkSqlParser.SET:
				{
				this.state = 476;
				this.setKeyValueDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameDefinition(): RenameDefinitionContext {
		let _localctx: RenameDefinitionContext = new RenameDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FlinkSqlParser.RULE_renameDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(FlinkSqlParser.RENAME);
			this.state = 480;
			this.match(FlinkSqlParser.TO);
			this.state = 481;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		let _localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FlinkSqlParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(FlinkSqlParser.SET);
			this.state = 484;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterDatabase(): AlterDatabaseContext {
		let _localctx: AlterDatabaseContext = new AlterDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(FlinkSqlParser.ALTER);
			this.state = 487;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 488;
			this.uid();
			this.state = 489;
			this.setKeyValueDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterFunction(): AlterFunctionContext {
		let _localctx: AlterFunctionContext = new AlterFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(FlinkSqlParser.ALTER);
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 492;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 493;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 494;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 497;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 498;
				this.ifExists();
				}
			}

			this.state = 501;
			this.uid();
			this.state = 502;
			this.match(FlinkSqlParser.AS);
			this.state = 503;
			this.identifier();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LANGUAGE) {
				{
				this.state = 504;
				this.match(FlinkSqlParser.LANGUAGE);
				this.state = 505;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(FlinkSqlParser.DROP);
			this.state = 509;
			this.match(FlinkSqlParser.TABLE);
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 510;
				this.ifExists();
				}
			}

			this.state = 513;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let _localctx: DropDatabaseContext = new DropDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(FlinkSqlParser.DROP);
			this.state = 516;
			this.match(FlinkSqlParser.DATABASE);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 517;
				this.ifExists();
				}
			}

			this.state = 520;
			this.uid();
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.CASCADE || _la === FlinkSqlParser.RESTRICT) {
				{
				this.state = 521;
				_localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.CASCADE || _la === FlinkSqlParser.RESTRICT)) {
					_localctx._dropType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropView(): DropViewContext {
		let _localctx: DropViewContext = new DropViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(FlinkSqlParser.DROP);
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.TEMPORARY) {
				{
				this.state = 525;
				this.match(FlinkSqlParser.TEMPORARY);
				}
			}

			this.state = 528;
			this.match(FlinkSqlParser.VIEW);
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 529;
				this.ifExists();
				}
			}

			this.state = 532;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let _localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FlinkSqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(FlinkSqlParser.DROP);
			this.state = 538;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 535;
				this.match(FlinkSqlParser.TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 536;
				this.match(FlinkSqlParser.TEMPORARY);
				this.state = 537;
				this.match(FlinkSqlParser.SYSTEM);
				}
				break;
			}
			this.state = 540;
			this.match(FlinkSqlParser.FUNCTION);
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.IF) {
				{
				this.state = 541;
				this.ifExists();
				}
			}

			this.state = 544;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(FlinkSqlParser.INSERT);
			this.state = 547;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.INTO || _la === FlinkSqlParser.OVERWRITE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 548;
			this.uid();
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.PARTITION) {
					{
					this.state = 549;
					this.insertPartitionDefinition();
					}
				}

				this.state = 552;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 553;
				this.valuesDefinition();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		let _localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.match(FlinkSqlParser.PARTITION);
			this.state = 557;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesDefinition(): ValuesDefinitionContext {
		let _localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.match(FlinkSqlParser.VALUES);
			this.state = 560;
			this.valuesRowDefinition();
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 561;
				this.match(FlinkSqlParser.COMMA);
				this.state = 562;
				this.valuesRowDefinition();
				}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesRowDefinition(): ValuesRowDefinitionContext {
		let _localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 569;
			this.constant();
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 570;
				this.match(FlinkSqlParser.COMMA);
				this.state = 571;
				this.constant();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 577;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public queryStatement(): QueryStatementContext;
	public queryStatement(_p: number): QueryStatementContext;
	// @RuleVersion(0)
	public queryStatement(_p?: number): QueryStatementContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryStatementContext = new QueryStatementContext(this._ctx, _parentState);
		let _prevctx: QueryStatementContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 580;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 581;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 582;
				this.queryStatement(0);
				this.state = 583;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				this.state = 585;
				this.selectClause();
				this.state = 587;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 586;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 590;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 589;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 4:
				{
				this.state = 592;
				this.selectStatement();
				this.state = 594;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
				case 1:
					{
					this.state = 593;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 597;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 596;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 615;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new QueryStatementContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_queryStatement);
					this.state = 601;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 602;
					_localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (FlinkSqlParser.UNION - 93)) | (1 << (FlinkSqlParser.EXCEPT - 93)) | (1 << (FlinkSqlParser.INTERSECT - 93)))) !== 0))) {
						_localctx._operator = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.ALL) {
						{
						this.state = 603;
						this.match(FlinkSqlParser.ALL);
						}
					}

					this.state = 606;
					_localctx._right = this.queryStatement(0);
					this.state = 608;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						this.state = 607;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 611;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
					case 1:
						{
						this.state = 610;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 617;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesCaluse(): ValuesCaluseContext {
		let _localctx: ValuesCaluseContext = new ValuesCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.match(FlinkSqlParser.VALUES);
			this.state = 619;
			this.expression();
			this.state = 624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 620;
					this.match(FlinkSqlParser.COMMA);
					this.state = 621;
					this.expression();
					}
					}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectStatement(): SelectStatementContext {
		let _localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, FlinkSqlParser.RULE_selectStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.selectClause();
			this.state = 628;
			this.fromClause();
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 629;
				this.whereClause();
				}
				break;
			}
			this.state = 633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.groupByClause();
				}
				break;
			}
			this.state = 636;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 635;
				this.havingClause();
				}
				break;
			}
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 638;
				this.windowClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectClause(): SelectClauseContext {
		let _localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, FlinkSqlParser.RULE_selectClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(FlinkSqlParser.SELECT);
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 642;
				this.setQuantifier();
				}
				break;
			}
			this.state = 654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 645;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 646;
				this.projectItemDefinition();
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 647;
						this.match(FlinkSqlParser.COMMA);
						this.state = 648;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 653;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectItemDefinition(): ProjectItemDefinitionContext {
		let _localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, FlinkSqlParser.RULE_projectItemDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.expression();
			this.state = 661;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 658;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 657;
					this.match(FlinkSqlParser.AS);
					}
					break;
				}
				this.state = 660;
				this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromClause(): FromClauseContext {
		let _localctx: FromClauseContext = new FromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.match(FlinkSqlParser.FROM);
			this.state = 664;
			this.tableExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public tableExpression(): TableExpressionContext;
	public tableExpression(_p: number): TableExpressionContext;
	// @RuleVersion(0)
	public tableExpression(_p?: number): TableExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TableExpressionContext = new TableExpressionContext(this._ctx, _parentState);
		let _prevctx: TableExpressionContext = _localctx;
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 667;
			this.tableReference();
			this.state = 672;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this.match(FlinkSqlParser.COMMA);
					this.state = 669;
					this.tableReference();
					}
					}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 689;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TableExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
					this.state = 675;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 677;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.NATURAL) {
						{
						this.state = 676;
						this.match(FlinkSqlParser.NATURAL);
						}
					}

					this.state = 680;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (FlinkSqlParser.INNER - 47)) | (1 << (FlinkSqlParser.LEFT - 47)) | (1 << (FlinkSqlParser.RIGHT - 47)) | (1 << (FlinkSqlParser.FULL - 47)))) !== 0)) {
						{
						this.state = 679;
						_la = this._input.LA(1);
						if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (FlinkSqlParser.INNER - 47)) | (1 << (FlinkSqlParser.LEFT - 47)) | (1 << (FlinkSqlParser.RIGHT - 47)) | (1 << (FlinkSqlParser.FULL - 47)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
					}

					this.state = 682;
					this.match(FlinkSqlParser.JOIN);
					this.state = 683;
					this.tableExpression(0);
					this.state = 685;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						this.state = 684;
						this.joinCondition();
						}
						break;
					}
					}
					}
				}
				this.state = 691;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableReference(): TableReferenceContext {
		let _localctx: TableReferenceContext = new TableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.tablePrimary();
			this.state = 694;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 693;
				this.tableAlias();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePrimary(): TablePrimaryContext {
		let _localctx: TablePrimaryContext = new TablePrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 697;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 696;
					this.match(FlinkSqlParser.TABLE);
					}
					break;
				}
				this.state = 699;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 700;
				this.match(FlinkSqlParser.LATERAL);
				this.state = 701;
				this.match(FlinkSqlParser.TABLE);
				this.state = 702;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 703;
				this.uid();
				this.state = 704;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 705;
				this.expression();
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 706;
					this.match(FlinkSqlParser.COMMA);
					this.state = 707;
					this.expression();
					}
					}
					this.state = 712;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 713;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 714;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 716;
				this.match(FlinkSqlParser.UNNEST);
				this.state = 717;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 718;
				this.expression();
				this.state = 719;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let _localctx: JoinConditionContext = new JoinConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 723;
				this.match(FlinkSqlParser.ON);
				this.state = 724;
				this.booleanExpression(0);
				}
				break;
			case FlinkSqlParser.USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 725;
				this.match(FlinkSqlParser.USING);
				this.state = 726;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 727;
				this.uid();
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 728;
					this.match(FlinkSqlParser.COMMA);
					this.state = 729;
					this.uid();
					}
					}
					this.state = 734;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 735;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.match(FlinkSqlParser.WHERE);
			this.state = 740;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.match(FlinkSqlParser.GROUP);
			this.state = 743;
			this.match(FlinkSqlParser.BY);
			this.state = 744;
			this.groupItemDefinition();
			this.state = 749;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 745;
					this.match(FlinkSqlParser.COMMA);
					this.state = 746;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 751;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupItemDefinition(): GroupItemDefinitionContext {
		let _localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 752;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 753;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 754;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 755;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 756;
				this.expression();
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 757;
					this.match(FlinkSqlParser.COMMA);
					this.state = 758;
					this.expression();
					}
					}
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 764;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 766;
				this.match(FlinkSqlParser.CUBE);
				this.state = 767;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 768;
				this.expression();
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 769;
					this.match(FlinkSqlParser.COMMA);
					this.state = 770;
					this.expression();
					}
					}
					this.state = 775;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 776;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 778;
				this.match(FlinkSqlParser.ROLLUP);
				this.state = 779;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 780;
				this.expression();
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 781;
					this.match(FlinkSqlParser.COMMA);
					this.state = 782;
					this.expression();
					}
					}
					this.state = 787;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 788;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 790;
				this.match(FlinkSqlParser.GROUPING);
				this.state = 791;
				this.match(FlinkSqlParser.SETS);
				this.state = 792;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 793;
				this.groupItemDefinition();
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 794;
					this.match(FlinkSqlParser.COMMA);
					this.state = 795;
					this.groupItemDefinition();
					}
					}
					this.state = 800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 801;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(FlinkSqlParser.HAVING);
			this.state = 806;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByCaluse(): OrderByCaluseContext {
		let _localctx: OrderByCaluseContext = new OrderByCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 808;
			this.match(FlinkSqlParser.ORDER);
			this.state = 809;
			this.match(FlinkSqlParser.BY);
			this.state = 810;
			this.orderItemDefition();
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 811;
					this.match(FlinkSqlParser.COMMA);
					this.state = 812;
					this.orderItemDefition();
					}
					}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderItemDefition(): OrderItemDefitionContext {
		let _localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.expression();
			this.state = 820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 819;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.ASC || _la === FlinkSqlParser.DESC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(FlinkSqlParser.LIMIT);
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 823;
				this.match(FlinkSqlParser.ALL);
				}
				break;

			case 2:
				{
				this.state = 824;
				_localctx._limit = this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowClause(): WindowClauseContext {
		let _localctx: WindowClauseContext = new WindowClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(FlinkSqlParser.WINDOW);
			this.state = 828;
			this.namedWindow();
			this.state = 833;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 829;
					this.match(FlinkSqlParser.COMMA);
					this.state = 830;
					this.namedWindow();
					}
					}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedWindow(): NamedWindowContext {
		let _localctx: NamedWindowContext = new NamedWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 837;
			this.match(FlinkSqlParser.AS);
			this.state = 838;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let _localctx: WindowSpecContext = new WindowSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.SELECT) | (1 << FlinkSqlParser.FROM) | (1 << FlinkSqlParser.ADD) | (1 << FlinkSqlParser.AS) | (1 << FlinkSqlParser.ALL) | (1 << FlinkSqlParser.ANY) | (1 << FlinkSqlParser.DISTINCT) | (1 << FlinkSqlParser.WHERE) | (1 << FlinkSqlParser.GROUP) | (1 << FlinkSqlParser.BY) | (1 << FlinkSqlParser.GROUPING) | (1 << FlinkSqlParser.SETS) | (1 << FlinkSqlParser.CUBE) | (1 << FlinkSqlParser.ROLLUP) | (1 << FlinkSqlParser.ORDER) | (1 << FlinkSqlParser.HAVING) | (1 << FlinkSqlParser.LIMIT) | (1 << FlinkSqlParser.AT) | (1 << FlinkSqlParser.OR) | (1 << FlinkSqlParser.AND) | (1 << FlinkSqlParser.IN) | (1 << FlinkSqlParser.NOT) | (1 << FlinkSqlParser.NO) | (1 << FlinkSqlParser.EXISTS) | (1 << FlinkSqlParser.BETWEEN) | (1 << FlinkSqlParser.LIKE) | (1 << FlinkSqlParser.RLIKE) | (1 << FlinkSqlParser.IS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.TRUE - 32)) | (1 << (FlinkSqlParser.FALSE - 32)) | (1 << (FlinkSqlParser.NULLS - 32)) | (1 << (FlinkSqlParser.ASC - 32)) | (1 << (FlinkSqlParser.DESC - 32)) | (1 << (FlinkSqlParser.FOR - 32)) | (1 << (FlinkSqlParser.INTERVAL - 32)) | (1 << (FlinkSqlParser.CASE - 32)) | (1 << (FlinkSqlParser.WHEN - 32)) | (1 << (FlinkSqlParser.THEN - 32)) | (1 << (FlinkSqlParser.ELSE - 32)) | (1 << (FlinkSqlParser.END - 32)) | (1 << (FlinkSqlParser.JOIN - 32)) | (1 << (FlinkSqlParser.CROSS - 32)) | (1 << (FlinkSqlParser.OUTER - 32)) | (1 << (FlinkSqlParser.INNER - 32)) | (1 << (FlinkSqlParser.LEFT - 32)) | (1 << (FlinkSqlParser.SEMI - 32)) | (1 << (FlinkSqlParser.RIGHT - 32)) | (1 << (FlinkSqlParser.FULL - 32)) | (1 << (FlinkSqlParser.NATURAL - 32)) | (1 << (FlinkSqlParser.ON - 32)) | (1 << (FlinkSqlParser.PIVOT - 32)) | (1 << (FlinkSqlParser.LATERAL - 32)) | (1 << (FlinkSqlParser.WINDOW - 32)) | (1 << (FlinkSqlParser.OVER - 32)) | (1 << (FlinkSqlParser.PARTITION - 32)) | (1 << (FlinkSqlParser.RANGE - 32)) | (1 << (FlinkSqlParser.ROWS - 32)) | (1 << (FlinkSqlParser.UNBOUNDED - 32)) | (1 << (FlinkSqlParser.PRECEDING - 32)) | (1 << (FlinkSqlParser.FOLLOWING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.CURRENT - 64)) | (1 << (FlinkSqlParser.FIRST - 64)) | (1 << (FlinkSqlParser.AFTER - 64)) | (1 << (FlinkSqlParser.LAST - 64)) | (1 << (FlinkSqlParser.WITH - 64)) | (1 << (FlinkSqlParser.VALUES - 64)) | (1 << (FlinkSqlParser.CREATE - 64)) | (1 << (FlinkSqlParser.TABLE - 64)) | (1 << (FlinkSqlParser.DIRECTORY - 64)) | (1 << (FlinkSqlParser.VIEW - 64)) | (1 << (FlinkSqlParser.REPLACE - 64)) | (1 << (FlinkSqlParser.INSERT - 64)) | (1 << (FlinkSqlParser.DELETE - 64)) | (1 << (FlinkSqlParser.INTO - 64)) | (1 << (FlinkSqlParser.DESCRIBE - 64)) | (1 << (FlinkSqlParser.EXPLAIN - 64)) | (1 << (FlinkSqlParser.FORMAT - 64)) | (1 << (FlinkSqlParser.LOGICAL - 64)) | (1 << (FlinkSqlParser.CODEGEN - 64)) | (1 << (FlinkSqlParser.COST - 64)) | (1 << (FlinkSqlParser.CAST - 64)) | (1 << (FlinkSqlParser.SHOW - 64)) | (1 << (FlinkSqlParser.TABLES - 64)) | (1 << (FlinkSqlParser.COLUMNS - 64)) | (1 << (FlinkSqlParser.COLUMN - 64)) | (1 << (FlinkSqlParser.USE - 64)) | (1 << (FlinkSqlParser.PARTITIONS - 64)) | (1 << (FlinkSqlParser.FUNCTIONS - 64)) | (1 << (FlinkSqlParser.DROP - 64)) | (1 << (FlinkSqlParser.UNION - 64)) | (1 << (FlinkSqlParser.EXCEPT - 64)) | (1 << (FlinkSqlParser.SETMINUS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.INTERSECT - 96)) | (1 << (FlinkSqlParser.TO - 96)) | (1 << (FlinkSqlParser.TABLESAMPLE - 96)) | (1 << (FlinkSqlParser.STRATIFY - 96)) | (1 << (FlinkSqlParser.ALTER - 96)) | (1 << (FlinkSqlParser.RENAME - 96)) | (1 << (FlinkSqlParser.STRUCT - 96)) | (1 << (FlinkSqlParser.COMMENT - 96)) | (1 << (FlinkSqlParser.SET - 96)) | (1 << (FlinkSqlParser.RESET - 96)) | (1 << (FlinkSqlParser.DATA - 96)) | (1 << (FlinkSqlParser.START - 96)) | (1 << (FlinkSqlParser.TRANSACTION - 96)) | (1 << (FlinkSqlParser.COMMIT - 96)) | (1 << (FlinkSqlParser.ROLLBACK - 96)) | (1 << (FlinkSqlParser.MACRO - 96)) | (1 << (FlinkSqlParser.IGNORE - 96)) | (1 << (FlinkSqlParser.BOTH - 96)) | (1 << (FlinkSqlParser.LEADING - 96)) | (1 << (FlinkSqlParser.TRAILING - 96)) | (1 << (FlinkSqlParser.IF - 96)) | (1 << (FlinkSqlParser.POSITION - 96)) | (1 << (FlinkSqlParser.EXTRACT - 96)) | (1 << (FlinkSqlParser.MINUS - 96)) | (1 << (FlinkSqlParser.DIV - 96)) | (1 << (FlinkSqlParser.PERCENTLIT - 96)) | (1 << (FlinkSqlParser.BUCKET - 96)) | (1 << (FlinkSqlParser.OUT - 96)) | (1 << (FlinkSqlParser.OF - 96)) | (1 << (FlinkSqlParser.SORT - 96)) | (1 << (FlinkSqlParser.CLUSTER - 96)) | (1 << (FlinkSqlParser.DISTRIBUTE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.OVERWRITE - 128)) | (1 << (FlinkSqlParser.TRANSFORM - 128)) | (1 << (FlinkSqlParser.REDUCE - 128)) | (1 << (FlinkSqlParser.USING - 128)) | (1 << (FlinkSqlParser.SERDE - 128)) | (1 << (FlinkSqlParser.SERDEPROPERTIES - 128)) | (1 << (FlinkSqlParser.RECORDREADER - 128)) | (1 << (FlinkSqlParser.RECORDWRITER - 128)) | (1 << (FlinkSqlParser.DELIMITED - 128)) | (1 << (FlinkSqlParser.FIELDS - 128)) | (1 << (FlinkSqlParser.TERMINATED - 128)) | (1 << (FlinkSqlParser.COLLECTION - 128)) | (1 << (FlinkSqlParser.ITEMS - 128)) | (1 << (FlinkSqlParser.KEYS - 128)) | (1 << (FlinkSqlParser.ESCAPED - 128)) | (1 << (FlinkSqlParser.LINES - 128)) | (1 << (FlinkSqlParser.SEPARATED - 128)) | (1 << (FlinkSqlParser.FUNCTION - 128)) | (1 << (FlinkSqlParser.EXTENDED - 128)) | (1 << (FlinkSqlParser.REFRESH - 128)) | (1 << (FlinkSqlParser.CLEAR - 128)) | (1 << (FlinkSqlParser.CACHE - 128)) | (1 << (FlinkSqlParser.UNCACHE - 128)) | (1 << (FlinkSqlParser.LAZY - 128)) | (1 << (FlinkSqlParser.FORMATTED - 128)) | (1 << (FlinkSqlParser.GLOBAL - 128)) | (1 << (FlinkSqlParser.TEMPORARY - 128)) | (1 << (FlinkSqlParser.OPTIONS - 128)) | (1 << (FlinkSqlParser.UNSET - 128)) | (1 << (FlinkSqlParser.TBLPROPERTIES - 128)) | (1 << (FlinkSqlParser.DBPROPERTIES - 128)) | (1 << (FlinkSqlParser.BUCKETS - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.SKEWED - 160)) | (1 << (FlinkSqlParser.STORED - 160)) | (1 << (FlinkSqlParser.DIRECTORIES - 160)) | (1 << (FlinkSqlParser.LOCATION - 160)) | (1 << (FlinkSqlParser.EXCHANGE - 160)) | (1 << (FlinkSqlParser.ARCHIVE - 160)) | (1 << (FlinkSqlParser.UNARCHIVE - 160)) | (1 << (FlinkSqlParser.FILEFORMAT - 160)) | (1 << (FlinkSqlParser.TOUCH - 160)) | (1 << (FlinkSqlParser.COMPACT - 160)) | (1 << (FlinkSqlParser.CONCATENATE - 160)) | (1 << (FlinkSqlParser.CHANGE - 160)) | (1 << (FlinkSqlParser.CASCADE - 160)) | (1 << (FlinkSqlParser.CONSTRAINT - 160)) | (1 << (FlinkSqlParser.RESTRICT - 160)) | (1 << (FlinkSqlParser.CLUSTERED - 160)) | (1 << (FlinkSqlParser.SORTED - 160)) | (1 << (FlinkSqlParser.PURGE - 160)) | (1 << (FlinkSqlParser.INPUTFORMAT - 160)) | (1 << (FlinkSqlParser.OUTPUTFORMAT - 160)) | (1 << (FlinkSqlParser.DATABASE - 160)) | (1 << (FlinkSqlParser.DATABASES - 160)) | (1 << (FlinkSqlParser.DFS - 160)) | (1 << (FlinkSqlParser.TRUNCATE - 160)) | (1 << (FlinkSqlParser.ANALYZE - 160)) | (1 << (FlinkSqlParser.COMPUTE - 160)) | (1 << (FlinkSqlParser.LIST - 160)) | (1 << (FlinkSqlParser.STATISTICS - 160)) | (1 << (FlinkSqlParser.PARTITIONED - 160)) | (1 << (FlinkSqlParser.EXTERNAL - 160)) | (1 << (FlinkSqlParser.DEFINED - 160)) | (1 << (FlinkSqlParser.REVOKE - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (FlinkSqlParser.GRANT - 192)) | (1 << (FlinkSqlParser.LOCK - 192)) | (1 << (FlinkSqlParser.UNLOCK - 192)) | (1 << (FlinkSqlParser.MSCK - 192)) | (1 << (FlinkSqlParser.REPAIR - 192)) | (1 << (FlinkSqlParser.RECOVER - 192)) | (1 << (FlinkSqlParser.EXPORT - 192)) | (1 << (FlinkSqlParser.IMPORT - 192)) | (1 << (FlinkSqlParser.LOAD - 192)) | (1 << (FlinkSqlParser.ROLE - 192)) | (1 << (FlinkSqlParser.ROLES - 192)) | (1 << (FlinkSqlParser.COMPACTIONS - 192)) | (1 << (FlinkSqlParser.PRINCIPALS - 192)) | (1 << (FlinkSqlParser.TRANSACTIONS - 192)) | (1 << (FlinkSqlParser.INDEX - 192)) | (1 << (FlinkSqlParser.INDEXES - 192)) | (1 << (FlinkSqlParser.LOCKS - 192)) | (1 << (FlinkSqlParser.OPTION - 192)) | (1 << (FlinkSqlParser.ANTI - 192)) | (1 << (FlinkSqlParser.LOCAL - 192)) | (1 << (FlinkSqlParser.INPATH - 192)) | (1 << (FlinkSqlParser.WATERMARK - 192)) | (1 << (FlinkSqlParser.UNNEST - 192)) | (1 << (FlinkSqlParser.MATCH - 192)) | (1 << (FlinkSqlParser.NEXT - 192)) | (1 << (FlinkSqlParser.WITHIN - 192)) | (1 << (FlinkSqlParser.WS - 192)) | (1 << (FlinkSqlParser.SYSTEM - 192)) | (1 << (FlinkSqlParser.INCLUDING - 192)) | (1 << (FlinkSqlParser.EXCLUDING - 192)) | (1 << (FlinkSqlParser.CONSTRAINTS - 192)) | (1 << (FlinkSqlParser.GENERATED - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (FlinkSqlParser.CATALOG - 224)) | (1 << (FlinkSqlParser.LANGUAGE - 224)) | (1 << (FlinkSqlParser.CATALOGS - 224)) | (1 << (FlinkSqlParser.VIEWS - 224)) | (1 << (FlinkSqlParser.PRIMARY - 224)) | (1 << (FlinkSqlParser.KEY - 224)) | (1 << (FlinkSqlParser.PERIOD - 224)) | (1 << (FlinkSqlParser.SYSTEM_TIME - 224)) | (1 << (FlinkSqlParser.STRING - 224)) | (1 << (FlinkSqlParser.ARRAY - 224)) | (1 << (FlinkSqlParser.MAP - 224)) | (1 << (FlinkSqlParser.CHAR - 224)) | (1 << (FlinkSqlParser.VARCHAR - 224)) | (1 << (FlinkSqlParser.BINARY - 224)) | (1 << (FlinkSqlParser.VARBINARY - 224)) | (1 << (FlinkSqlParser.BYTES - 224)) | (1 << (FlinkSqlParser.DECIMAL - 224)) | (1 << (FlinkSqlParser.TINYINT - 224)) | (1 << (FlinkSqlParser.SMALLINT - 224)) | (1 << (FlinkSqlParser.INT - 224)) | (1 << (FlinkSqlParser.BIGINT - 224)) | (1 << (FlinkSqlParser.FLOAT - 224)) | (1 << (FlinkSqlParser.DOUBLE - 224)) | (1 << (FlinkSqlParser.DATE - 224)) | (1 << (FlinkSqlParser.TIME - 224)) | (1 << (FlinkSqlParser.TIMESTAMP - 224)) | (1 << (FlinkSqlParser.MULTISET - 224)) | (1 << (FlinkSqlParser.BOOLEAN - 224)) | (1 << (FlinkSqlParser.RAW - 224)) | (1 << (FlinkSqlParser.ROW - 224)) | (1 << (FlinkSqlParser.NULL - 224)) | (1 << (FlinkSqlParser.DATETIME - 224)))) !== 0) || ((((_la - 286)) & ~0x1F) === 0 && ((1 << (_la - 286)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 286)) | (1 << (FlinkSqlParser.DIG_LITERAL - 286)) | (1 << (FlinkSqlParser.ID_LITERAL - 286)))) !== 0)) {
				{
				this.state = 840;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 843;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.ORDER) {
				{
				this.state = 844;
				this.match(FlinkSqlParser.ORDER);
				this.state = 845;
				this.match(FlinkSqlParser.BY);
				this.state = 846;
				this.sortItem();
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 847;
					this.match(FlinkSqlParser.COMMA);
					this.state = 848;
					this.sortItem();
					}
					}
					this.state = 853;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.PARTITION) {
				{
				this.state = 856;
				this.match(FlinkSqlParser.PARTITION);
				this.state = 857;
				this.match(FlinkSqlParser.BY);
				this.state = 858;
				this.expression();
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 859;
					this.match(FlinkSqlParser.COMMA);
					this.state = 860;
					this.expression();
					}
					}
					this.state = 865;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.RANGE || _la === FlinkSqlParser.ROWS) {
				{
				this.state = 868;
				this.windowFrame();
				}
			}

			this.state = 871;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let _localctx: SortItemContext = new SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, FlinkSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.expression();
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.ASC || _la === FlinkSqlParser.DESC) {
				{
				this.state = 874;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.ASC || _la === FlinkSqlParser.DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.NULLS) {
				{
				this.state = 877;
				this.match(FlinkSqlParser.NULLS);
				this.state = 878;
				_localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.FIRST || _la === FlinkSqlParser.LAST)) {
					_localctx._nullOrder = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 881;
				this.match(FlinkSqlParser.RANGE);
				this.state = 882;
				this.frameBound();
				}
				break;
			case FlinkSqlParser.ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 883;
				this.match(FlinkSqlParser.ROWS);
				this.state = 884;
				this.frameBound();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 887;
			this.expression();
			this.state = 888;
			this.match(FlinkSqlParser.PRECEDING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 890;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, FlinkSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 893;
				this.match(FlinkSqlParser.NOT);
				this.state = 894;
				this.booleanExpression(5);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 895;
				this.match(FlinkSqlParser.EXISTS);
				this.state = 896;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 897;
				this.queryStatement(0);
				this.state = 898;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 900;
				this.valueExpression(0);
				this.state = 902;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
				case 1:
					{
					this.state = 901;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 914;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 912;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 906;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 907;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.AND);
						this.state = 908;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 909;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 910;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.OR);
						this.state = 911;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 916;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1000;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 917;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 920;
				_localctx._kind = this.match(FlinkSqlParser.BETWEEN);
				this.state = 921;
				_localctx._lower = this.valueExpression(0);
				this.state = 922;
				this.match(FlinkSqlParser.AND);
				this.state = 923;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 925;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 928;
				_localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 929;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 930;
				this.expression();
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 931;
					this.match(FlinkSqlParser.COMMA);
					this.state = 932;
					this.expression();
					}
					}
					this.state = 937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 938;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 940;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 943;
				_localctx._kind = this.match(FlinkSqlParser.IN);
				this.state = 944;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 945;
				this.queryStatement(0);
				this.state = 946;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 948;
				_localctx._kind = this.match(FlinkSqlParser.EXISTS);
				this.state = 949;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 950;
				this.queryStatement(0);
				this.state = 951;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 953;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 956;
				_localctx._kind = this.match(FlinkSqlParser.RLIKE);
				this.state = 957;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 958;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 961;
				_localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 962;
				_localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.ALL || _la === FlinkSqlParser.ANY)) {
					_localctx._quantifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 976;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 963;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 964;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 965;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 966;
					this.expression();
					this.state = 971;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 967;
						this.match(FlinkSqlParser.COMMA);
						this.state = 968;
						this.expression();
						}
						}
						this.state = 973;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 974;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 978;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 981;
				_localctx._kind = this.match(FlinkSqlParser.LIKE);
				this.state = 982;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 983;
				this.match(FlinkSqlParser.IS);
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 984;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 987;
				_localctx._kind = this.match(FlinkSqlParser.NULL);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 988;
				this.match(FlinkSqlParser.IS);
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 989;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 992;
				_localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.TRUE || _la === FlinkSqlParser.FALSE)) {
					_localctx._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 993;
				this.match(FlinkSqlParser.IS);
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 994;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 997;
				_localctx._kind = this.match(FlinkSqlParser.DISTINCT);
				this.state = 998;
				this.match(FlinkSqlParser.FROM);
				this.state = 999;
				_localctx._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 140;
		this.enterRecursionRule(_localctx, 140, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1003;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1004;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (FlinkSqlParser.BIT_NOT_OP - 260)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 260)) | (1 << (FlinkSqlParser.ADD_SIGN - 260)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1005;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1029;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1027;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1008;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1009;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSqlParser.DIV || ((((_la - 276)) & ~0x1F) === 0 && ((1 << (_la - 276)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 276)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 276)) | (1 << (FlinkSqlParser.SLASH_SIGN - 276)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1010;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1011;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1012;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 278)) & ~0x1F) === 0 && ((1 << (_la - 278)) & ((1 << (FlinkSqlParser.HYPNEN_SIGN - 278)) | (1 << (FlinkSqlParser.ADD_SIGN - 278)) | (1 << (FlinkSqlParser.DOUBLE_VERTICAL_SIGN - 278)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1013;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1014;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1015;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1016;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1017;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1018;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1019;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1020;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1021;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1022;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1023;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1024;
						this.comparisonOperator();
						this.state = 1025;
						(_localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1031;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 142;
		this.enterRecursionRule(_localctx, 142, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1033;
				this.match(FlinkSqlParser.CASE);
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1034;
					this.whenClause();
					}
					}
					this.state = 1037;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.WHEN);
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.ELSE) {
					{
					this.state = 1039;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1040;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1043;
				this.match(FlinkSqlParser.END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1045;
				this.match(FlinkSqlParser.CASE);
				this.state = 1046;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1047;
					this.whenClause();
					}
					}
					this.state = 1050;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.WHEN);
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.ELSE) {
					{
					this.state = 1052;
					this.match(FlinkSqlParser.ELSE);
					this.state = 1053;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1056;
				this.match(FlinkSqlParser.END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1058;
				this.match(FlinkSqlParser.CAST);
				this.state = 1059;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1060;
				this.expression();
				this.state = 1061;
				this.match(FlinkSqlParser.AS);
				this.state = 1062;
				this.columnType();
				this.state = 1063;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1065;
				this.match(FlinkSqlParser.FIRST);
				this.state = 1066;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1067;
				this.expression();
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.IGNORE) {
					{
					this.state = 1068;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1069;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1072;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1074;
				this.match(FlinkSqlParser.LAST);
				this.state = 1075;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1076;
				this.expression();
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.IGNORE) {
					{
					this.state = 1077;
					this.match(FlinkSqlParser.IGNORE);
					this.state = 1078;
					this.match(FlinkSqlParser.NULLS);
					}
				}

				this.state = 1081;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1083;
				this.match(FlinkSqlParser.POSITION);
				this.state = 1084;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1085;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1086;
				this.match(FlinkSqlParser.IN);
				this.state = 1087;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1088;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1090;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1091;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1092;
				this.uid();
				this.state = 1093;
				this.match(FlinkSqlParser.DOT);
				this.state = 1094;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1096;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1097;
				this.queryStatement(0);
				this.state = 1098;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1100;
				this.functionName();
				this.state = 1101;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.SELECT) | (1 << FlinkSqlParser.FROM) | (1 << FlinkSqlParser.ADD) | (1 << FlinkSqlParser.AS) | (1 << FlinkSqlParser.ALL) | (1 << FlinkSqlParser.ANY) | (1 << FlinkSqlParser.DISTINCT) | (1 << FlinkSqlParser.WHERE) | (1 << FlinkSqlParser.GROUP) | (1 << FlinkSqlParser.BY) | (1 << FlinkSqlParser.GROUPING) | (1 << FlinkSqlParser.SETS) | (1 << FlinkSqlParser.CUBE) | (1 << FlinkSqlParser.ROLLUP) | (1 << FlinkSqlParser.ORDER) | (1 << FlinkSqlParser.HAVING) | (1 << FlinkSqlParser.LIMIT) | (1 << FlinkSqlParser.AT) | (1 << FlinkSqlParser.OR) | (1 << FlinkSqlParser.AND) | (1 << FlinkSqlParser.IN) | (1 << FlinkSqlParser.NOT) | (1 << FlinkSqlParser.NO) | (1 << FlinkSqlParser.EXISTS) | (1 << FlinkSqlParser.BETWEEN) | (1 << FlinkSqlParser.LIKE) | (1 << FlinkSqlParser.RLIKE) | (1 << FlinkSqlParser.IS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.TRUE - 32)) | (1 << (FlinkSqlParser.FALSE - 32)) | (1 << (FlinkSqlParser.NULLS - 32)) | (1 << (FlinkSqlParser.ASC - 32)) | (1 << (FlinkSqlParser.DESC - 32)) | (1 << (FlinkSqlParser.FOR - 32)) | (1 << (FlinkSqlParser.INTERVAL - 32)) | (1 << (FlinkSqlParser.CASE - 32)) | (1 << (FlinkSqlParser.WHEN - 32)) | (1 << (FlinkSqlParser.THEN - 32)) | (1 << (FlinkSqlParser.ELSE - 32)) | (1 << (FlinkSqlParser.END - 32)) | (1 << (FlinkSqlParser.JOIN - 32)) | (1 << (FlinkSqlParser.CROSS - 32)) | (1 << (FlinkSqlParser.OUTER - 32)) | (1 << (FlinkSqlParser.INNER - 32)) | (1 << (FlinkSqlParser.LEFT - 32)) | (1 << (FlinkSqlParser.SEMI - 32)) | (1 << (FlinkSqlParser.RIGHT - 32)) | (1 << (FlinkSqlParser.FULL - 32)) | (1 << (FlinkSqlParser.NATURAL - 32)) | (1 << (FlinkSqlParser.ON - 32)) | (1 << (FlinkSqlParser.PIVOT - 32)) | (1 << (FlinkSqlParser.LATERAL - 32)) | (1 << (FlinkSqlParser.WINDOW - 32)) | (1 << (FlinkSqlParser.OVER - 32)) | (1 << (FlinkSqlParser.PARTITION - 32)) | (1 << (FlinkSqlParser.RANGE - 32)) | (1 << (FlinkSqlParser.ROWS - 32)) | (1 << (FlinkSqlParser.UNBOUNDED - 32)) | (1 << (FlinkSqlParser.PRECEDING - 32)) | (1 << (FlinkSqlParser.FOLLOWING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.CURRENT - 64)) | (1 << (FlinkSqlParser.FIRST - 64)) | (1 << (FlinkSqlParser.AFTER - 64)) | (1 << (FlinkSqlParser.LAST - 64)) | (1 << (FlinkSqlParser.WITH - 64)) | (1 << (FlinkSqlParser.VALUES - 64)) | (1 << (FlinkSqlParser.CREATE - 64)) | (1 << (FlinkSqlParser.TABLE - 64)) | (1 << (FlinkSqlParser.DIRECTORY - 64)) | (1 << (FlinkSqlParser.VIEW - 64)) | (1 << (FlinkSqlParser.REPLACE - 64)) | (1 << (FlinkSqlParser.INSERT - 64)) | (1 << (FlinkSqlParser.DELETE - 64)) | (1 << (FlinkSqlParser.INTO - 64)) | (1 << (FlinkSqlParser.DESCRIBE - 64)) | (1 << (FlinkSqlParser.EXPLAIN - 64)) | (1 << (FlinkSqlParser.FORMAT - 64)) | (1 << (FlinkSqlParser.LOGICAL - 64)) | (1 << (FlinkSqlParser.CODEGEN - 64)) | (1 << (FlinkSqlParser.COST - 64)) | (1 << (FlinkSqlParser.CAST - 64)) | (1 << (FlinkSqlParser.SHOW - 64)) | (1 << (FlinkSqlParser.TABLES - 64)) | (1 << (FlinkSqlParser.COLUMNS - 64)) | (1 << (FlinkSqlParser.COLUMN - 64)) | (1 << (FlinkSqlParser.USE - 64)) | (1 << (FlinkSqlParser.PARTITIONS - 64)) | (1 << (FlinkSqlParser.FUNCTIONS - 64)) | (1 << (FlinkSqlParser.DROP - 64)) | (1 << (FlinkSqlParser.UNION - 64)) | (1 << (FlinkSqlParser.EXCEPT - 64)) | (1 << (FlinkSqlParser.SETMINUS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.INTERSECT - 96)) | (1 << (FlinkSqlParser.TO - 96)) | (1 << (FlinkSqlParser.TABLESAMPLE - 96)) | (1 << (FlinkSqlParser.STRATIFY - 96)) | (1 << (FlinkSqlParser.ALTER - 96)) | (1 << (FlinkSqlParser.RENAME - 96)) | (1 << (FlinkSqlParser.STRUCT - 96)) | (1 << (FlinkSqlParser.COMMENT - 96)) | (1 << (FlinkSqlParser.SET - 96)) | (1 << (FlinkSqlParser.RESET - 96)) | (1 << (FlinkSqlParser.DATA - 96)) | (1 << (FlinkSqlParser.START - 96)) | (1 << (FlinkSqlParser.TRANSACTION - 96)) | (1 << (FlinkSqlParser.COMMIT - 96)) | (1 << (FlinkSqlParser.ROLLBACK - 96)) | (1 << (FlinkSqlParser.MACRO - 96)) | (1 << (FlinkSqlParser.IGNORE - 96)) | (1 << (FlinkSqlParser.BOTH - 96)) | (1 << (FlinkSqlParser.LEADING - 96)) | (1 << (FlinkSqlParser.TRAILING - 96)) | (1 << (FlinkSqlParser.IF - 96)) | (1 << (FlinkSqlParser.POSITION - 96)) | (1 << (FlinkSqlParser.EXTRACT - 96)) | (1 << (FlinkSqlParser.MINUS - 96)) | (1 << (FlinkSqlParser.DIV - 96)) | (1 << (FlinkSqlParser.PERCENTLIT - 96)) | (1 << (FlinkSqlParser.BUCKET - 96)) | (1 << (FlinkSqlParser.OUT - 96)) | (1 << (FlinkSqlParser.OF - 96)) | (1 << (FlinkSqlParser.SORT - 96)) | (1 << (FlinkSqlParser.CLUSTER - 96)) | (1 << (FlinkSqlParser.DISTRIBUTE - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.OVERWRITE - 128)) | (1 << (FlinkSqlParser.TRANSFORM - 128)) | (1 << (FlinkSqlParser.REDUCE - 128)) | (1 << (FlinkSqlParser.USING - 128)) | (1 << (FlinkSqlParser.SERDE - 128)) | (1 << (FlinkSqlParser.SERDEPROPERTIES - 128)) | (1 << (FlinkSqlParser.RECORDREADER - 128)) | (1 << (FlinkSqlParser.RECORDWRITER - 128)) | (1 << (FlinkSqlParser.DELIMITED - 128)) | (1 << (FlinkSqlParser.FIELDS - 128)) | (1 << (FlinkSqlParser.TERMINATED - 128)) | (1 << (FlinkSqlParser.COLLECTION - 128)) | (1 << (FlinkSqlParser.ITEMS - 128)) | (1 << (FlinkSqlParser.KEYS - 128)) | (1 << (FlinkSqlParser.ESCAPED - 128)) | (1 << (FlinkSqlParser.LINES - 128)) | (1 << (FlinkSqlParser.SEPARATED - 128)) | (1 << (FlinkSqlParser.FUNCTION - 128)) | (1 << (FlinkSqlParser.EXTENDED - 128)) | (1 << (FlinkSqlParser.REFRESH - 128)) | (1 << (FlinkSqlParser.CLEAR - 128)) | (1 << (FlinkSqlParser.CACHE - 128)) | (1 << (FlinkSqlParser.UNCACHE - 128)) | (1 << (FlinkSqlParser.LAZY - 128)) | (1 << (FlinkSqlParser.FORMATTED - 128)) | (1 << (FlinkSqlParser.GLOBAL - 128)) | (1 << (FlinkSqlParser.TEMPORARY - 128)) | (1 << (FlinkSqlParser.OPTIONS - 128)) | (1 << (FlinkSqlParser.UNSET - 128)) | (1 << (FlinkSqlParser.TBLPROPERTIES - 128)) | (1 << (FlinkSqlParser.DBPROPERTIES - 128)) | (1 << (FlinkSqlParser.BUCKETS - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.SKEWED - 160)) | (1 << (FlinkSqlParser.STORED - 160)) | (1 << (FlinkSqlParser.DIRECTORIES - 160)) | (1 << (FlinkSqlParser.LOCATION - 160)) | (1 << (FlinkSqlParser.EXCHANGE - 160)) | (1 << (FlinkSqlParser.ARCHIVE - 160)) | (1 << (FlinkSqlParser.UNARCHIVE - 160)) | (1 << (FlinkSqlParser.FILEFORMAT - 160)) | (1 << (FlinkSqlParser.TOUCH - 160)) | (1 << (FlinkSqlParser.COMPACT - 160)) | (1 << (FlinkSqlParser.CONCATENATE - 160)) | (1 << (FlinkSqlParser.CHANGE - 160)) | (1 << (FlinkSqlParser.CASCADE - 160)) | (1 << (FlinkSqlParser.CONSTRAINT - 160)) | (1 << (FlinkSqlParser.RESTRICT - 160)) | (1 << (FlinkSqlParser.CLUSTERED - 160)) | (1 << (FlinkSqlParser.SORTED - 160)) | (1 << (FlinkSqlParser.PURGE - 160)) | (1 << (FlinkSqlParser.INPUTFORMAT - 160)) | (1 << (FlinkSqlParser.OUTPUTFORMAT - 160)) | (1 << (FlinkSqlParser.DATABASE - 160)) | (1 << (FlinkSqlParser.DATABASES - 160)) | (1 << (FlinkSqlParser.DFS - 160)) | (1 << (FlinkSqlParser.TRUNCATE - 160)) | (1 << (FlinkSqlParser.ANALYZE - 160)) | (1 << (FlinkSqlParser.COMPUTE - 160)) | (1 << (FlinkSqlParser.LIST - 160)) | (1 << (FlinkSqlParser.STATISTICS - 160)) | (1 << (FlinkSqlParser.PARTITIONED - 160)) | (1 << (FlinkSqlParser.EXTERNAL - 160)) | (1 << (FlinkSqlParser.DEFINED - 160)) | (1 << (FlinkSqlParser.REVOKE - 160)))) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (FlinkSqlParser.GRANT - 192)) | (1 << (FlinkSqlParser.LOCK - 192)) | (1 << (FlinkSqlParser.UNLOCK - 192)) | (1 << (FlinkSqlParser.MSCK - 192)) | (1 << (FlinkSqlParser.REPAIR - 192)) | (1 << (FlinkSqlParser.RECOVER - 192)) | (1 << (FlinkSqlParser.EXPORT - 192)) | (1 << (FlinkSqlParser.IMPORT - 192)) | (1 << (FlinkSqlParser.LOAD - 192)) | (1 << (FlinkSqlParser.ROLE - 192)) | (1 << (FlinkSqlParser.ROLES - 192)) | (1 << (FlinkSqlParser.COMPACTIONS - 192)) | (1 << (FlinkSqlParser.PRINCIPALS - 192)) | (1 << (FlinkSqlParser.TRANSACTIONS - 192)) | (1 << (FlinkSqlParser.INDEX - 192)) | (1 << (FlinkSqlParser.INDEXES - 192)) | (1 << (FlinkSqlParser.LOCKS - 192)) | (1 << (FlinkSqlParser.OPTION - 192)) | (1 << (FlinkSqlParser.ANTI - 192)) | (1 << (FlinkSqlParser.LOCAL - 192)) | (1 << (FlinkSqlParser.INPATH - 192)) | (1 << (FlinkSqlParser.WATERMARK - 192)) | (1 << (FlinkSqlParser.UNNEST - 192)) | (1 << (FlinkSqlParser.MATCH - 192)) | (1 << (FlinkSqlParser.NEXT - 192)) | (1 << (FlinkSqlParser.WITHIN - 192)) | (1 << (FlinkSqlParser.WS - 192)) | (1 << (FlinkSqlParser.SYSTEM - 192)) | (1 << (FlinkSqlParser.INCLUDING - 192)) | (1 << (FlinkSqlParser.EXCLUDING - 192)) | (1 << (FlinkSqlParser.CONSTRAINTS - 192)) | (1 << (FlinkSqlParser.GENERATED - 192)))) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & ((1 << (FlinkSqlParser.CATALOG - 224)) | (1 << (FlinkSqlParser.LANGUAGE - 224)) | (1 << (FlinkSqlParser.CATALOGS - 224)) | (1 << (FlinkSqlParser.VIEWS - 224)) | (1 << (FlinkSqlParser.PRIMARY - 224)) | (1 << (FlinkSqlParser.KEY - 224)) | (1 << (FlinkSqlParser.PERIOD - 224)) | (1 << (FlinkSqlParser.SYSTEM_TIME - 224)) | (1 << (FlinkSqlParser.STRING - 224)) | (1 << (FlinkSqlParser.ARRAY - 224)) | (1 << (FlinkSqlParser.MAP - 224)) | (1 << (FlinkSqlParser.CHAR - 224)) | (1 << (FlinkSqlParser.VARCHAR - 224)) | (1 << (FlinkSqlParser.BINARY - 224)) | (1 << (FlinkSqlParser.VARBINARY - 224)) | (1 << (FlinkSqlParser.BYTES - 224)) | (1 << (FlinkSqlParser.DECIMAL - 224)) | (1 << (FlinkSqlParser.TINYINT - 224)) | (1 << (FlinkSqlParser.SMALLINT - 224)) | (1 << (FlinkSqlParser.INT - 224)) | (1 << (FlinkSqlParser.BIGINT - 224)) | (1 << (FlinkSqlParser.FLOAT - 224)) | (1 << (FlinkSqlParser.DOUBLE - 224)) | (1 << (FlinkSqlParser.DATE - 224)) | (1 << (FlinkSqlParser.TIME - 224)) | (1 << (FlinkSqlParser.TIMESTAMP - 224)) | (1 << (FlinkSqlParser.MULTISET - 224)) | (1 << (FlinkSqlParser.BOOLEAN - 224)) | (1 << (FlinkSqlParser.RAW - 224)) | (1 << (FlinkSqlParser.ROW - 224)) | (1 << (FlinkSqlParser.NULL - 224)) | (1 << (FlinkSqlParser.DATETIME - 224)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (FlinkSqlParser.BIT_NOT_OP - 260)) | (1 << (FlinkSqlParser.LR_BRACKET - 260)) | (1 << (FlinkSqlParser.ASTERISK_SIGN - 260)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 260)) | (1 << (FlinkSqlParser.ADD_SIGN - 260)) | (1 << (FlinkSqlParser.STRING_LITERAL - 260)) | (1 << (FlinkSqlParser.DIG_LITERAL - 260)) | (1 << (FlinkSqlParser.REAL_LITERAL - 260)) | (1 << (FlinkSqlParser.BIT_STRING - 260)) | (1 << (FlinkSqlParser.ID_LITERAL - 260)))) !== 0)) {
					{
					this.state = 1103;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
					case 1:
						{
						this.state = 1102;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1105;
					this.expression();
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1106;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1107;
						this.expression();
						}
						}
						this.state = 1112;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1115;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1117;
				this.identifier();
				}
				break;

			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1118;
				this.dereferenceDefinition();
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1119;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1120;
				this.expression();
				this.state = 1121;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1132;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					(_localctx as SubscriptContext)._value = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_primaryExpression);
					this.state = 1125;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1126;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1127;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1128;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1134;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, FlinkSqlParser.RULE_functionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let _localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1139;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1140;
				this.dereferenceDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, FlinkSqlParser.RULE_interval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			this.match(FlinkSqlParser.INTERVAL);
			this.state = 1146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1144;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1145;
				this.errorCapturingUnitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		let _localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1148;
			this.multiUnitsInterval();
			this.state = 1150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1149;
				this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		let _localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1155;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1152;
					this.intervalValue();
					this.state = 1153;
					this.identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1157;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		let _localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			_localctx._body = this.unitToUnitInterval();
			this.state = 1162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				{
				this.state = 1160;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1161;
				_localctx._error2 = this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		let _localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1164;
			_localctx._value = this.intervalValue();
			this.state = 1165;
			_localctx._from = this.identifier();
			this.state = 1166;
			this.match(FlinkSqlParser.TO);
			this.state = 1167;
			_localctx._to = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let _localctx: IntervalValueContext = new IntervalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.ADD_SIGN:
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN) {
					{
					this.state = 1169;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1172;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.REAL_LITERAL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1173;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnAlias(): ColumnAliasContext {
		let _localctx: ColumnAliasContext = new ColumnAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1176;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1179;
			this.strictIdentifier();
			this.state = 1181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 1180;
				this.identifierList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableAlias(): TableAliasContext {
		let _localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, FlinkSqlParser.RULE_tableAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				{
				this.state = 1183;
				this.match(FlinkSqlParser.AS);
				}
				break;
			}
			this.state = 1186;
			this.strictIdentifier();
			this.state = 1188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1187;
				this.identifierList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let _localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.identifier();
			this.state = 1191;
			this.errorCapturingIdentifierExtra();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		let _localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 1200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1193;
					this.match(FlinkSqlParser.MINUS);
					this.state = 1194;
					this.identifier();
					}
					}
					this.state = 1197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.MINUS);
				}
				break;
			case FlinkSqlParser.AS:
			case FlinkSqlParser.LR_BRACKET:
				_localctx = new RealIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1203;
			this.identifierSeq();
			this.state = 1204;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let _localctx: IdentifierSeqContext = new IdentifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.identifier();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1207;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1208;
				this.identifier();
				}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 1216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1214;
				this.strictIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1215;
				this.strictNonReserved();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strictIdentifier(): StrictIdentifierContext {
		let _localctx: StrictIdentifierContext = new StrictIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, FlinkSqlParser.RULE_strictIdentifier);
		try {
			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1218;
				this.unquotedIdentifier();
				}
				break;

			case 2:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1219;
				this.quotedIdentifier();
				}
				break;

			case 3:
				_localctx = new AnsiNonReservedKeywordsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1220;
				this.ansiNonReserved();
				}
				break;

			case 4:
				_localctx = new NonReservedKeywordsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1221;
				this.nonReserved();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unquotedIdentifier(): UnquotedIdentifierContext {
		let _localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.ID_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1228;
			this.match(FlinkSqlParser.WHEN);
			this.state = 1229;
			_localctx._condition = this.expression();
			this.state = 1230;
			this.match(FlinkSqlParser.THEN);
			this.state = 1231;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uidList(): UidListContext {
		let _localctx: UidListContext = new UidListContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, FlinkSqlParser.RULE_uidList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.uid();
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1234;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1235;
				this.uid();
				}
				}
				this.state = 1240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uid(): UidContext {
		let _localctx: UidContext = new UidContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			this.match(FlinkSqlParser.ID_LITERAL);
			this.state = 1245;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1242;
					this.match(FlinkSqlParser.DOT_ID);
					}
					}
				}
				this.state = 1247;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public plusUid(): PlusUidContext {
		let _localctx: PlusUidContext = new PlusUidContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, FlinkSqlParser.RULE_plusUid);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1248;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.ID_LITERAL || _la === FlinkSqlParser.PLUS_ID_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1249;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.DOT_ID || _la === FlinkSqlParser.PLUS_DOT_ID)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 1254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withOption(): WithOptionContext {
		let _localctx: WithOptionContext = new WithOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			this.match(FlinkSqlParser.WITH);
			this.state = 1256;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let _localctx: IfNotExistsContext = new IfNotExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(FlinkSqlParser.IF);
			this.state = 1259;
			this.match(FlinkSqlParser.NOT);
			this.state = 1260;
			this.match(FlinkSqlParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let _localctx: IfExistsContext = new IfExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.match(FlinkSqlParser.IF);
			this.state = 1263;
			this.match(FlinkSqlParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1266;
			this.tableProperty();
			this.state = 1271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1267;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1268;
				this.tableProperty();
				}
				}
				this.state = 1273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1274;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			_localctx._key = this.tablePropertyKey();
			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.TRUE || _la === FlinkSqlParser.FALSE || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (FlinkSqlParser.EQUAL_SYMBOL - 256)) | (1 << (FlinkSqlParser.STRING_LITERAL - 256)) | (1 << (FlinkSqlParser.DIG_LITERAL - 256)))) !== 0) || _la === FlinkSqlParser.REAL_LITERAL) {
				{
				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.EQUAL_SYMBOL) {
					{
					this.state = 1277;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 1280;
				_localctx._value = this.tablePropertyValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyKey(): TablePropertyKeyContext {
		let _localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 1286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1283;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1284;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1285;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyValue(): TablePropertyValueContext {
		let _localctx: TablePropertyValueContext = new TablePropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1288;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1289;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.TRUE:
			case FlinkSqlParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1290;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1291;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 1300;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1294;
				this.match(FlinkSqlParser.AND);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1295;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 1296;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1297;
				this.match(FlinkSqlParser.OR);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1298;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 1299;
				this.match(FlinkSqlParser.BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 1316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1302;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1303;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1304;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1305;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1306;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1307;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1308;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1309;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1310;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1311;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 1312;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1313;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1314;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 1315;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitOperator(): BitOperatorContext {
		let _localctx: BitOperatorContext = new BitOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 1325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1318;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 1319;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case FlinkSqlParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1320;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 1321;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1322;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1323;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1324;
				this.match(FlinkSqlParser.BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathOperator(): MathOperatorContext {
		let _localctx: MathOperatorContext = new MathOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1327;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.DIV || ((((_la - 276)) & ~0x1F) === 0 && ((1 << (_la - 276)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 276)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 276)) | (1 << (FlinkSqlParser.ADD_SIGN - 276)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 276)) | (1 << (FlinkSqlParser.DOUBLE_HYPNEN_SIGN - 276)) | (1 << (FlinkSqlParser.SLASH_SIGN - 276)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1329;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.NOT || ((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & ((1 << (FlinkSqlParser.EXCLAMATION_SYMBOL - 259)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 259)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 259)) | (1 << (FlinkSqlParser.ADD_SIGN - 259)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fullColumnName(): FullColumnNameContext {
		let _localctx: FullColumnNameContext = new FullColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, FlinkSqlParser.RULE_fullColumnName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 1345;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1333;
				this.stringLiteral();
				}
				break;
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1334;
				this.decimalLiteral();
				}
				break;
			case FlinkSqlParser.INTERVAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1335;
				this.interval();
				}
				break;
			case FlinkSqlParser.HYPNEN_SIGN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1336;
				this.match(FlinkSqlParser.HYPNEN_SIGN);
				this.state = 1337;
				this.decimalLiteral();
				}
				break;
			case FlinkSqlParser.TRUE:
			case FlinkSqlParser.FALSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1338;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1339;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1340;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case FlinkSqlParser.NOT:
			case FlinkSqlParser.NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.NOT) {
					{
					this.state = 1341;
					this.match(FlinkSqlParser.NOT);
					}
				}

				this.state = 1344;
				this.match(FlinkSqlParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1347;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimalLiteral(): DecimalLiteralContext {
		let _localctx: DecimalLiteralContext = new DecimalLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1349;
			this.match(FlinkSqlParser.DIG_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1351;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.TRUE || _la === FlinkSqlParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1353;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.ALL || _la === FlinkSqlParser.DISTINCT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ansiNonReserved(): AnsiNonReservedContext {
		let _localctx: AnsiNonReservedContext = new AnsiNonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, FlinkSqlParser.RULE_ansiNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.ADD) | (1 << FlinkSqlParser.BY) | (1 << FlinkSqlParser.GROUPING) | (1 << FlinkSqlParser.SETS) | (1 << FlinkSqlParser.CUBE) | (1 << FlinkSqlParser.ROLLUP) | (1 << FlinkSqlParser.LIMIT) | (1 << FlinkSqlParser.AT) | (1 << FlinkSqlParser.NO) | (1 << FlinkSqlParser.EXISTS) | (1 << FlinkSqlParser.BETWEEN) | (1 << FlinkSqlParser.LIKE) | (1 << FlinkSqlParser.RLIKE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.TRUE - 32)) | (1 << (FlinkSqlParser.NULLS - 32)) | (1 << (FlinkSqlParser.ASC - 32)) | (1 << (FlinkSqlParser.DESC - 32)) | (1 << (FlinkSqlParser.INTERVAL - 32)) | (1 << (FlinkSqlParser.SEMI - 32)) | (1 << (FlinkSqlParser.PIVOT - 32)) | (1 << (FlinkSqlParser.LATERAL - 32)) | (1 << (FlinkSqlParser.WINDOW - 32)) | (1 << (FlinkSqlParser.OVER - 32)) | (1 << (FlinkSqlParser.PARTITION - 32)) | (1 << (FlinkSqlParser.RANGE - 32)) | (1 << (FlinkSqlParser.ROWS - 32)) | (1 << (FlinkSqlParser.UNBOUNDED - 32)) | (1 << (FlinkSqlParser.PRECEDING - 32)) | (1 << (FlinkSqlParser.FOLLOWING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.CURRENT - 64)) | (1 << (FlinkSqlParser.FIRST - 64)) | (1 << (FlinkSqlParser.AFTER - 64)) | (1 << (FlinkSqlParser.LAST - 64)) | (1 << (FlinkSqlParser.VALUES - 64)) | (1 << (FlinkSqlParser.DIRECTORY - 64)) | (1 << (FlinkSqlParser.VIEW - 64)) | (1 << (FlinkSqlParser.REPLACE - 64)) | (1 << (FlinkSqlParser.INSERT - 64)) | (1 << (FlinkSqlParser.DELETE - 64)) | (1 << (FlinkSqlParser.DESCRIBE - 64)) | (1 << (FlinkSqlParser.EXPLAIN - 64)) | (1 << (FlinkSqlParser.FORMAT - 64)) | (1 << (FlinkSqlParser.LOGICAL - 64)) | (1 << (FlinkSqlParser.CODEGEN - 64)) | (1 << (FlinkSqlParser.COST - 64)) | (1 << (FlinkSqlParser.SHOW - 64)) | (1 << (FlinkSqlParser.TABLES - 64)) | (1 << (FlinkSqlParser.COLUMNS - 64)) | (1 << (FlinkSqlParser.USE - 64)) | (1 << (FlinkSqlParser.PARTITIONS - 64)) | (1 << (FlinkSqlParser.FUNCTIONS - 64)) | (1 << (FlinkSqlParser.DROP - 64)) | (1 << (FlinkSqlParser.SETMINUS - 64)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (FlinkSqlParser.TABLESAMPLE - 98)) | (1 << (FlinkSqlParser.STRATIFY - 98)) | (1 << (FlinkSqlParser.ALTER - 98)) | (1 << (FlinkSqlParser.RENAME - 98)) | (1 << (FlinkSqlParser.STRUCT - 98)) | (1 << (FlinkSqlParser.COMMENT - 98)) | (1 << (FlinkSqlParser.SET - 98)) | (1 << (FlinkSqlParser.RESET - 98)) | (1 << (FlinkSqlParser.DATA - 98)) | (1 << (FlinkSqlParser.START - 98)) | (1 << (FlinkSqlParser.TRANSACTION - 98)) | (1 << (FlinkSqlParser.COMMIT - 98)) | (1 << (FlinkSqlParser.ROLLBACK - 98)) | (1 << (FlinkSqlParser.MACRO - 98)) | (1 << (FlinkSqlParser.IGNORE - 98)) | (1 << (FlinkSqlParser.IF - 98)) | (1 << (FlinkSqlParser.POSITION - 98)) | (1 << (FlinkSqlParser.EXTRACT - 98)) | (1 << (FlinkSqlParser.MINUS - 98)) | (1 << (FlinkSqlParser.DIV - 98)) | (1 << (FlinkSqlParser.PERCENTLIT - 98)) | (1 << (FlinkSqlParser.BUCKET - 98)) | (1 << (FlinkSqlParser.OUT - 98)) | (1 << (FlinkSqlParser.OF - 98)) | (1 << (FlinkSqlParser.SORT - 98)) | (1 << (FlinkSqlParser.CLUSTER - 98)) | (1 << (FlinkSqlParser.DISTRIBUTE - 98)) | (1 << (FlinkSqlParser.OVERWRITE - 98)) | (1 << (FlinkSqlParser.TRANSFORM - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (FlinkSqlParser.REDUCE - 130)) | (1 << (FlinkSqlParser.SERDE - 130)) | (1 << (FlinkSqlParser.SERDEPROPERTIES - 130)) | (1 << (FlinkSqlParser.RECORDREADER - 130)) | (1 << (FlinkSqlParser.RECORDWRITER - 130)) | (1 << (FlinkSqlParser.DELIMITED - 130)) | (1 << (FlinkSqlParser.FIELDS - 130)) | (1 << (FlinkSqlParser.TERMINATED - 130)) | (1 << (FlinkSqlParser.COLLECTION - 130)) | (1 << (FlinkSqlParser.ITEMS - 130)) | (1 << (FlinkSqlParser.KEYS - 130)) | (1 << (FlinkSqlParser.ESCAPED - 130)) | (1 << (FlinkSqlParser.LINES - 130)) | (1 << (FlinkSqlParser.SEPARATED - 130)) | (1 << (FlinkSqlParser.FUNCTION - 130)) | (1 << (FlinkSqlParser.EXTENDED - 130)) | (1 << (FlinkSqlParser.REFRESH - 130)) | (1 << (FlinkSqlParser.CLEAR - 130)) | (1 << (FlinkSqlParser.CACHE - 130)) | (1 << (FlinkSqlParser.UNCACHE - 130)) | (1 << (FlinkSqlParser.LAZY - 130)) | (1 << (FlinkSqlParser.FORMATTED - 130)) | (1 << (FlinkSqlParser.GLOBAL - 130)) | (1 << (FlinkSqlParser.TEMPORARY - 130)) | (1 << (FlinkSqlParser.OPTIONS - 130)) | (1 << (FlinkSqlParser.UNSET - 130)) | (1 << (FlinkSqlParser.TBLPROPERTIES - 130)) | (1 << (FlinkSqlParser.DBPROPERTIES - 130)) | (1 << (FlinkSqlParser.BUCKETS - 130)) | (1 << (FlinkSqlParser.SKEWED - 130)) | (1 << (FlinkSqlParser.STORED - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (FlinkSqlParser.DIRECTORIES - 162)) | (1 << (FlinkSqlParser.LOCATION - 162)) | (1 << (FlinkSqlParser.EXCHANGE - 162)) | (1 << (FlinkSqlParser.ARCHIVE - 162)) | (1 << (FlinkSqlParser.UNARCHIVE - 162)) | (1 << (FlinkSqlParser.FILEFORMAT - 162)) | (1 << (FlinkSqlParser.TOUCH - 162)) | (1 << (FlinkSqlParser.COMPACT - 162)) | (1 << (FlinkSqlParser.CONCATENATE - 162)) | (1 << (FlinkSqlParser.CHANGE - 162)) | (1 << (FlinkSqlParser.CASCADE - 162)) | (1 << (FlinkSqlParser.RESTRICT - 162)) | (1 << (FlinkSqlParser.CLUSTERED - 162)) | (1 << (FlinkSqlParser.SORTED - 162)) | (1 << (FlinkSqlParser.PURGE - 162)) | (1 << (FlinkSqlParser.INPUTFORMAT - 162)) | (1 << (FlinkSqlParser.OUTPUTFORMAT - 162)) | (1 << (FlinkSqlParser.DATABASE - 162)) | (1 << (FlinkSqlParser.DATABASES - 162)) | (1 << (FlinkSqlParser.DFS - 162)) | (1 << (FlinkSqlParser.TRUNCATE - 162)) | (1 << (FlinkSqlParser.ANALYZE - 162)) | (1 << (FlinkSqlParser.COMPUTE - 162)) | (1 << (FlinkSqlParser.LIST - 162)) | (1 << (FlinkSqlParser.STATISTICS - 162)) | (1 << (FlinkSqlParser.PARTITIONED - 162)) | (1 << (FlinkSqlParser.EXTERNAL - 162)) | (1 << (FlinkSqlParser.DEFINED - 162)) | (1 << (FlinkSqlParser.REVOKE - 162)) | (1 << (FlinkSqlParser.LOCK - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (FlinkSqlParser.UNLOCK - 194)) | (1 << (FlinkSqlParser.MSCK - 194)) | (1 << (FlinkSqlParser.REPAIR - 194)) | (1 << (FlinkSqlParser.RECOVER - 194)) | (1 << (FlinkSqlParser.EXPORT - 194)) | (1 << (FlinkSqlParser.IMPORT - 194)) | (1 << (FlinkSqlParser.LOAD - 194)) | (1 << (FlinkSqlParser.ROLE - 194)) | (1 << (FlinkSqlParser.ROLES - 194)) | (1 << (FlinkSqlParser.COMPACTIONS - 194)) | (1 << (FlinkSqlParser.PRINCIPALS - 194)) | (1 << (FlinkSqlParser.TRANSACTIONS - 194)) | (1 << (FlinkSqlParser.INDEX - 194)) | (1 << (FlinkSqlParser.INDEXES - 194)) | (1 << (FlinkSqlParser.LOCKS - 194)) | (1 << (FlinkSqlParser.OPTION - 194)) | (1 << (FlinkSqlParser.ANTI - 194)) | (1 << (FlinkSqlParser.LOCAL - 194)) | (1 << (FlinkSqlParser.INPATH - 194)) | (1 << (FlinkSqlParser.WATERMARK - 194)) | (1 << (FlinkSqlParser.UNNEST - 194)) | (1 << (FlinkSqlParser.MATCH - 194)) | (1 << (FlinkSqlParser.NEXT - 194)) | (1 << (FlinkSqlParser.WITHIN - 194)) | (1 << (FlinkSqlParser.WS - 194)) | (1 << (FlinkSqlParser.SYSTEM - 194)) | (1 << (FlinkSqlParser.INCLUDING - 194)) | (1 << (FlinkSqlParser.EXCLUDING - 194)) | (1 << (FlinkSqlParser.CONSTRAINTS - 194)) | (1 << (FlinkSqlParser.GENERATED - 194)) | (1 << (FlinkSqlParser.CATALOG - 194)) | (1 << (FlinkSqlParser.LANGUAGE - 194)))) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (FlinkSqlParser.CATALOGS - 226)) | (1 << (FlinkSqlParser.VIEWS - 226)) | (1 << (FlinkSqlParser.KEY - 226)) | (1 << (FlinkSqlParser.PERIOD - 226)) | (1 << (FlinkSqlParser.SYSTEM_TIME - 226)) | (1 << (FlinkSqlParser.STRING - 226)) | (1 << (FlinkSqlParser.ARRAY - 226)) | (1 << (FlinkSqlParser.MAP - 226)) | (1 << (FlinkSqlParser.CHAR - 226)) | (1 << (FlinkSqlParser.VARCHAR - 226)) | (1 << (FlinkSqlParser.BINARY - 226)) | (1 << (FlinkSqlParser.VARBINARY - 226)) | (1 << (FlinkSqlParser.BYTES - 226)) | (1 << (FlinkSqlParser.DECIMAL - 226)) | (1 << (FlinkSqlParser.TINYINT - 226)) | (1 << (FlinkSqlParser.SMALLINT - 226)) | (1 << (FlinkSqlParser.INT - 226)) | (1 << (FlinkSqlParser.BIGINT - 226)) | (1 << (FlinkSqlParser.FLOAT - 226)) | (1 << (FlinkSqlParser.DOUBLE - 226)) | (1 << (FlinkSqlParser.DATE - 226)) | (1 << (FlinkSqlParser.TIME - 226)) | (1 << (FlinkSqlParser.TIMESTAMP - 226)) | (1 << (FlinkSqlParser.MULTISET - 226)) | (1 << (FlinkSqlParser.BOOLEAN - 226)) | (1 << (FlinkSqlParser.RAW - 226)) | (1 << (FlinkSqlParser.ROW - 226)) | (1 << (FlinkSqlParser.NULL - 226)) | (1 << (FlinkSqlParser.DATETIME - 226)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strictNonReserved(): StrictNonReservedContext {
		let _localctx: StrictNonReservedContext = new StrictNonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, FlinkSqlParser.RULE_strictNonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (FlinkSqlParser.JOIN - 44)) | (1 << (FlinkSqlParser.CROSS - 44)) | (1 << (FlinkSqlParser.INNER - 44)) | (1 << (FlinkSqlParser.LEFT - 44)) | (1 << (FlinkSqlParser.SEMI - 44)) | (1 << (FlinkSqlParser.RIGHT - 44)) | (1 << (FlinkSqlParser.FULL - 44)) | (1 << (FlinkSqlParser.NATURAL - 44)) | (1 << (FlinkSqlParser.ON - 44)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (FlinkSqlParser.UNION - 93)) | (1 << (FlinkSqlParser.EXCEPT - 93)) | (1 << (FlinkSqlParser.SETMINUS - 93)) | (1 << (FlinkSqlParser.INTERSECT - 93)))) !== 0) || _la === FlinkSqlParser.USING || _la === FlinkSqlParser.ANTI)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, FlinkSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.SELECT) | (1 << FlinkSqlParser.FROM) | (1 << FlinkSqlParser.ADD) | (1 << FlinkSqlParser.AS) | (1 << FlinkSqlParser.ALL) | (1 << FlinkSqlParser.ANY) | (1 << FlinkSqlParser.DISTINCT) | (1 << FlinkSqlParser.WHERE) | (1 << FlinkSqlParser.GROUP) | (1 << FlinkSqlParser.BY) | (1 << FlinkSqlParser.GROUPING) | (1 << FlinkSqlParser.SETS) | (1 << FlinkSqlParser.CUBE) | (1 << FlinkSqlParser.ROLLUP) | (1 << FlinkSqlParser.ORDER) | (1 << FlinkSqlParser.HAVING) | (1 << FlinkSqlParser.LIMIT) | (1 << FlinkSqlParser.AT) | (1 << FlinkSqlParser.OR) | (1 << FlinkSqlParser.AND) | (1 << FlinkSqlParser.IN) | (1 << FlinkSqlParser.NOT) | (1 << FlinkSqlParser.NO) | (1 << FlinkSqlParser.EXISTS) | (1 << FlinkSqlParser.BETWEEN) | (1 << FlinkSqlParser.LIKE) | (1 << FlinkSqlParser.RLIKE) | (1 << FlinkSqlParser.IS))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.TRUE - 32)) | (1 << (FlinkSqlParser.FALSE - 32)) | (1 << (FlinkSqlParser.NULLS - 32)) | (1 << (FlinkSqlParser.ASC - 32)) | (1 << (FlinkSqlParser.DESC - 32)) | (1 << (FlinkSqlParser.FOR - 32)) | (1 << (FlinkSqlParser.INTERVAL - 32)) | (1 << (FlinkSqlParser.CASE - 32)) | (1 << (FlinkSqlParser.WHEN - 32)) | (1 << (FlinkSqlParser.THEN - 32)) | (1 << (FlinkSqlParser.ELSE - 32)) | (1 << (FlinkSqlParser.END - 32)) | (1 << (FlinkSqlParser.OUTER - 32)) | (1 << (FlinkSqlParser.PIVOT - 32)) | (1 << (FlinkSqlParser.LATERAL - 32)) | (1 << (FlinkSqlParser.WINDOW - 32)) | (1 << (FlinkSqlParser.OVER - 32)) | (1 << (FlinkSqlParser.PARTITION - 32)) | (1 << (FlinkSqlParser.RANGE - 32)) | (1 << (FlinkSqlParser.ROWS - 32)) | (1 << (FlinkSqlParser.UNBOUNDED - 32)) | (1 << (FlinkSqlParser.PRECEDING - 32)) | (1 << (FlinkSqlParser.FOLLOWING - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.CURRENT - 64)) | (1 << (FlinkSqlParser.FIRST - 64)) | (1 << (FlinkSqlParser.AFTER - 64)) | (1 << (FlinkSqlParser.LAST - 64)) | (1 << (FlinkSqlParser.WITH - 64)) | (1 << (FlinkSqlParser.VALUES - 64)) | (1 << (FlinkSqlParser.CREATE - 64)) | (1 << (FlinkSqlParser.TABLE - 64)) | (1 << (FlinkSqlParser.DIRECTORY - 64)) | (1 << (FlinkSqlParser.VIEW - 64)) | (1 << (FlinkSqlParser.REPLACE - 64)) | (1 << (FlinkSqlParser.INSERT - 64)) | (1 << (FlinkSqlParser.DELETE - 64)) | (1 << (FlinkSqlParser.INTO - 64)) | (1 << (FlinkSqlParser.DESCRIBE - 64)) | (1 << (FlinkSqlParser.EXPLAIN - 64)) | (1 << (FlinkSqlParser.FORMAT - 64)) | (1 << (FlinkSqlParser.LOGICAL - 64)) | (1 << (FlinkSqlParser.CODEGEN - 64)) | (1 << (FlinkSqlParser.COST - 64)) | (1 << (FlinkSqlParser.CAST - 64)) | (1 << (FlinkSqlParser.SHOW - 64)) | (1 << (FlinkSqlParser.TABLES - 64)) | (1 << (FlinkSqlParser.COLUMNS - 64)) | (1 << (FlinkSqlParser.COLUMN - 64)) | (1 << (FlinkSqlParser.USE - 64)) | (1 << (FlinkSqlParser.PARTITIONS - 64)) | (1 << (FlinkSqlParser.FUNCTIONS - 64)) | (1 << (FlinkSqlParser.DROP - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (FlinkSqlParser.TO - 97)) | (1 << (FlinkSqlParser.TABLESAMPLE - 97)) | (1 << (FlinkSqlParser.STRATIFY - 97)) | (1 << (FlinkSqlParser.ALTER - 97)) | (1 << (FlinkSqlParser.RENAME - 97)) | (1 << (FlinkSqlParser.STRUCT - 97)) | (1 << (FlinkSqlParser.COMMENT - 97)) | (1 << (FlinkSqlParser.SET - 97)) | (1 << (FlinkSqlParser.RESET - 97)) | (1 << (FlinkSqlParser.DATA - 97)) | (1 << (FlinkSqlParser.START - 97)) | (1 << (FlinkSqlParser.TRANSACTION - 97)) | (1 << (FlinkSqlParser.COMMIT - 97)) | (1 << (FlinkSqlParser.ROLLBACK - 97)) | (1 << (FlinkSqlParser.MACRO - 97)) | (1 << (FlinkSqlParser.IGNORE - 97)) | (1 << (FlinkSqlParser.BOTH - 97)) | (1 << (FlinkSqlParser.LEADING - 97)) | (1 << (FlinkSqlParser.TRAILING - 97)) | (1 << (FlinkSqlParser.IF - 97)) | (1 << (FlinkSqlParser.POSITION - 97)) | (1 << (FlinkSqlParser.EXTRACT - 97)) | (1 << (FlinkSqlParser.MINUS - 97)) | (1 << (FlinkSqlParser.DIV - 97)) | (1 << (FlinkSqlParser.PERCENTLIT - 97)) | (1 << (FlinkSqlParser.BUCKET - 97)) | (1 << (FlinkSqlParser.OUT - 97)) | (1 << (FlinkSqlParser.OF - 97)) | (1 << (FlinkSqlParser.SORT - 97)) | (1 << (FlinkSqlParser.CLUSTER - 97)) | (1 << (FlinkSqlParser.DISTRIBUTE - 97)) | (1 << (FlinkSqlParser.OVERWRITE - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (FlinkSqlParser.TRANSFORM - 129)) | (1 << (FlinkSqlParser.REDUCE - 129)) | (1 << (FlinkSqlParser.SERDE - 129)) | (1 << (FlinkSqlParser.SERDEPROPERTIES - 129)) | (1 << (FlinkSqlParser.RECORDREADER - 129)) | (1 << (FlinkSqlParser.RECORDWRITER - 129)) | (1 << (FlinkSqlParser.DELIMITED - 129)) | (1 << (FlinkSqlParser.FIELDS - 129)) | (1 << (FlinkSqlParser.TERMINATED - 129)) | (1 << (FlinkSqlParser.COLLECTION - 129)) | (1 << (FlinkSqlParser.ITEMS - 129)) | (1 << (FlinkSqlParser.KEYS - 129)) | (1 << (FlinkSqlParser.ESCAPED - 129)) | (1 << (FlinkSqlParser.LINES - 129)) | (1 << (FlinkSqlParser.SEPARATED - 129)) | (1 << (FlinkSqlParser.FUNCTION - 129)) | (1 << (FlinkSqlParser.EXTENDED - 129)) | (1 << (FlinkSqlParser.REFRESH - 129)) | (1 << (FlinkSqlParser.CLEAR - 129)) | (1 << (FlinkSqlParser.CACHE - 129)) | (1 << (FlinkSqlParser.UNCACHE - 129)) | (1 << (FlinkSqlParser.LAZY - 129)) | (1 << (FlinkSqlParser.FORMATTED - 129)) | (1 << (FlinkSqlParser.GLOBAL - 129)) | (1 << (FlinkSqlParser.TEMPORARY - 129)) | (1 << (FlinkSqlParser.OPTIONS - 129)) | (1 << (FlinkSqlParser.UNSET - 129)) | (1 << (FlinkSqlParser.TBLPROPERTIES - 129)) | (1 << (FlinkSqlParser.DBPROPERTIES - 129)) | (1 << (FlinkSqlParser.BUCKETS - 129)) | (1 << (FlinkSqlParser.SKEWED - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (FlinkSqlParser.STORED - 161)) | (1 << (FlinkSqlParser.DIRECTORIES - 161)) | (1 << (FlinkSqlParser.LOCATION - 161)) | (1 << (FlinkSqlParser.EXCHANGE - 161)) | (1 << (FlinkSqlParser.UNARCHIVE - 161)) | (1 << (FlinkSqlParser.FILEFORMAT - 161)) | (1 << (FlinkSqlParser.TOUCH - 161)) | (1 << (FlinkSqlParser.COMPACT - 161)) | (1 << (FlinkSqlParser.CONCATENATE - 161)) | (1 << (FlinkSqlParser.CHANGE - 161)) | (1 << (FlinkSqlParser.CASCADE - 161)) | (1 << (FlinkSqlParser.CONSTRAINT - 161)) | (1 << (FlinkSqlParser.RESTRICT - 161)) | (1 << (FlinkSqlParser.CLUSTERED - 161)) | (1 << (FlinkSqlParser.SORTED - 161)) | (1 << (FlinkSqlParser.PURGE - 161)) | (1 << (FlinkSqlParser.INPUTFORMAT - 161)) | (1 << (FlinkSqlParser.OUTPUTFORMAT - 161)) | (1 << (FlinkSqlParser.DATABASE - 161)) | (1 << (FlinkSqlParser.DATABASES - 161)) | (1 << (FlinkSqlParser.DFS - 161)) | (1 << (FlinkSqlParser.TRUNCATE - 161)) | (1 << (FlinkSqlParser.ANALYZE - 161)) | (1 << (FlinkSqlParser.COMPUTE - 161)) | (1 << (FlinkSqlParser.LIST - 161)) | (1 << (FlinkSqlParser.STATISTICS - 161)) | (1 << (FlinkSqlParser.PARTITIONED - 161)) | (1 << (FlinkSqlParser.EXTERNAL - 161)) | (1 << (FlinkSqlParser.DEFINED - 161)) | (1 << (FlinkSqlParser.REVOKE - 161)) | (1 << (FlinkSqlParser.GRANT - 161)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (FlinkSqlParser.LOCK - 193)) | (1 << (FlinkSqlParser.UNLOCK - 193)) | (1 << (FlinkSqlParser.MSCK - 193)) | (1 << (FlinkSqlParser.REPAIR - 193)) | (1 << (FlinkSqlParser.RECOVER - 193)) | (1 << (FlinkSqlParser.EXPORT - 193)) | (1 << (FlinkSqlParser.IMPORT - 193)) | (1 << (FlinkSqlParser.LOAD - 193)) | (1 << (FlinkSqlParser.ROLE - 193)) | (1 << (FlinkSqlParser.ROLES - 193)) | (1 << (FlinkSqlParser.COMPACTIONS - 193)) | (1 << (FlinkSqlParser.PRINCIPALS - 193)) | (1 << (FlinkSqlParser.TRANSACTIONS - 193)) | (1 << (FlinkSqlParser.INDEX - 193)) | (1 << (FlinkSqlParser.INDEXES - 193)) | (1 << (FlinkSqlParser.LOCKS - 193)) | (1 << (FlinkSqlParser.OPTION - 193)) | (1 << (FlinkSqlParser.LOCAL - 193)) | (1 << (FlinkSqlParser.INPATH - 193)) | (1 << (FlinkSqlParser.WATERMARK - 193)) | (1 << (FlinkSqlParser.UNNEST - 193)) | (1 << (FlinkSqlParser.MATCH - 193)) | (1 << (FlinkSqlParser.NEXT - 193)) | (1 << (FlinkSqlParser.WITHIN - 193)) | (1 << (FlinkSqlParser.WS - 193)) | (1 << (FlinkSqlParser.SYSTEM - 193)) | (1 << (FlinkSqlParser.INCLUDING - 193)) | (1 << (FlinkSqlParser.EXCLUDING - 193)) | (1 << (FlinkSqlParser.CONSTRAINTS - 193)) | (1 << (FlinkSqlParser.GENERATED - 193)) | (1 << (FlinkSqlParser.CATALOG - 193)))) !== 0) || ((((_la - 225)) & ~0x1F) === 0 && ((1 << (_la - 225)) & ((1 << (FlinkSqlParser.LANGUAGE - 225)) | (1 << (FlinkSqlParser.CATALOGS - 225)) | (1 << (FlinkSqlParser.VIEWS - 225)) | (1 << (FlinkSqlParser.PRIMARY - 225)) | (1 << (FlinkSqlParser.KEY - 225)) | (1 << (FlinkSqlParser.PERIOD - 225)) | (1 << (FlinkSqlParser.SYSTEM_TIME - 225)) | (1 << (FlinkSqlParser.STRING - 225)) | (1 << (FlinkSqlParser.ARRAY - 225)) | (1 << (FlinkSqlParser.MAP - 225)) | (1 << (FlinkSqlParser.CHAR - 225)) | (1 << (FlinkSqlParser.VARCHAR - 225)) | (1 << (FlinkSqlParser.BINARY - 225)) | (1 << (FlinkSqlParser.VARBINARY - 225)) | (1 << (FlinkSqlParser.BYTES - 225)) | (1 << (FlinkSqlParser.DECIMAL - 225)) | (1 << (FlinkSqlParser.TINYINT - 225)) | (1 << (FlinkSqlParser.SMALLINT - 225)) | (1 << (FlinkSqlParser.INT - 225)) | (1 << (FlinkSqlParser.BIGINT - 225)) | (1 << (FlinkSqlParser.FLOAT - 225)) | (1 << (FlinkSqlParser.DOUBLE - 225)) | (1 << (FlinkSqlParser.DATE - 225)) | (1 << (FlinkSqlParser.TIME - 225)) | (1 << (FlinkSqlParser.TIMESTAMP - 225)) | (1 << (FlinkSqlParser.MULTISET - 225)) | (1 << (FlinkSqlParser.BOOLEAN - 225)) | (1 << (FlinkSqlParser.RAW - 225)) | (1 << (FlinkSqlParser.ROW - 225)) | (1 << (FlinkSqlParser.NULL - 225)) | (1 << (FlinkSqlParser.DATETIME - 225)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 44:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 50:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 68:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 70:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 71:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(_localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private tableExpression_sempred(_localctx: TableExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 5);

		case 6:
			return this.precpred(this._ctx, 4);

		case 7:
			return this.precpred(this._ctx, 3);

		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0125\u0554\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x05\x04\xF3\n\x04\x03\x04\x07\x04\xF6\n\x04\f\x04" +
		"\x0E\x04\xF9\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\u0101\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0111" +
		"\n\x07\x03\b\x03\b\x05\b\u0115\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\v\x03\v\x05\v\u0121\n\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u012F\n\r\f\r\x0E\r\u0132" +
		"\v\r\x03\r\x03\r\x05\r\u0136\n\r\x03\r\x03\r\x05\r\u013A\n\r\x03\r\x03" +
		"\r\x05\r\u013E\n\r\x03\r\x03\r\x05\r\u0142\n\r\x03\r\x05\r\u0145\n\r\x03" +
		"\r\x03\r\x05\r\u0149\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u014E\n\x0E\x03" +
		"\x0E\x05\x0E\u0151\n\x0E\x03\x0F\x03\x0F\x05\x0F\u0155\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x07\x10\u015A\n\x10\f\x10\x0E\x10\u015D\v\x10\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u0170\n\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u0184\n\x18\f\x18\x0E\x18\u0187\v\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0191\n\x19\f\x19\x0E" +
		"\x19\u0194\v\x19\x03\x19\x03\x19\x05\x19\u0198\n\x19\x03\x1A\x03\x1A\x05" +
		"\x1A\u019C\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u01A6\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u01B0\n\x1E\x03\x1E\x03\x1E\x05\x1E\u01B4" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u01BA\n\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u01BE\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01C2\n\x1F\x03\x1F\x05" +
		"\x1F\u01C5\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u01CE" +
		"\n \x03 \x03 \x05 \u01D2\n \x03 \x03 \x03 \x03 \x03 \x05 \u01D9\n \x03" +
		"!\x03!\x03!\x03!\x03!\x05!\u01E0\n!\x03\"\x03\"\x03\"\x03\"\x03#\x03#" +
		"\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u01F2\n%\x03%" +
		"\x03%\x05%\u01F6\n%\x03%\x03%\x03%\x03%\x03%\x05%\u01FD\n%\x03&\x03&\x03" +
		"&\x05&\u0202\n&\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u0209\n\'\x03\'\x03" +
		"\'\x05\'\u020D\n\'\x03(\x03(\x05(\u0211\n(\x03(\x03(\x05(\u0215\n(\x03" +
		"(\x03(\x03)\x03)\x03)\x03)\x05)\u021D\n)\x03)\x03)\x05)\u0221\n)\x03)" +
		"\x03)\x03*\x03*\x03*\x03*\x05*\u0229\n*\x03*\x03*\x05*\u022D\n*\x03+\x03" +
		"+\x03+\x03,\x03,\x03,\x03,\x07,\u0236\n,\f,\x0E,\u0239\v,\x03-\x03-\x03" +
		"-\x03-\x07-\u023F\n-\f-\x0E-\u0242\v-\x03-\x03-\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x05.\u024E\n.\x03.\x05.\u0251\n.\x03.\x03.\x05.\u0255" +
		"\n.\x03.\x05.\u0258\n.\x05.\u025A\n.\x03.\x03.\x03.\x05.\u025F\n.\x03" +
		".\x03.\x05.\u0263\n.\x03.\x05.\u0266\n.\x07.\u0268\n.\f.\x0E.\u026B\v" +
		".\x03/\x03/\x03/\x03/\x07/\u0271\n/\f/\x0E/\u0274\v/\x030\x030\x030\x05" +
		"0\u0279\n0\x030\x050\u027C\n0\x030\x050\u027F\n0\x030\x050\u0282\n0\x03" +
		"1\x031\x051\u0286\n1\x031\x031\x031\x031\x071\u028C\n1\f1\x0E1\u028F\v" +
		"1\x051\u0291\n1\x032\x032\x052\u0295\n2\x032\x052\u0298\n2\x033\x033\x03" +
		"3\x034\x034\x034\x034\x074\u02A1\n4\f4\x0E4\u02A4\v4\x034\x034\x054\u02A8" +
		"\n4\x034\x054\u02AB\n4\x034\x034\x034\x054\u02B0\n4\x074\u02B2\n4\f4\x0E" +
		"4\u02B5\v4\x035\x035\x055\u02B9\n5\x036\x056\u02BC\n6\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x076\u02C7\n6\f6\x0E6\u02CA\v6\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x056\u02D4\n6\x037\x037\x037\x037\x037\x03" +
		"7\x037\x077\u02DD\n7\f7\x0E7\u02E0\v7\x037\x037\x057\u02E4\n7\x038\x03" +
		"8\x038\x039\x039\x039\x039\x039\x079\u02EE\n9\f9\x0E9\u02F1\v9\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x07:\u02FA\n:\f:\x0E:\u02FD\v:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x07:\u0306\n:\f:\x0E:\u0309\v:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x07:\u0312\n:\f:\x0E:\u0315\v:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x07:\u031F\n:\f:\x0E:\u0322\v:\x03:\x03:\x05:\u0326\n" +
		":\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x07<\u0330\n<\f<\x0E<\u0333" +
		"\v<\x03=\x03=\x05=\u0337\n=\x03>\x03>\x03>\x05>\u033C\n>\x03?\x03?\x03" +
		"?\x03?\x07?\u0342\n?\f?\x0E?\u0345\v?\x03@\x03@\x03@\x03@\x03A\x05A\u034C" +
		"\nA\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u0354\nA\fA\x0EA\u0357\vA\x05A" +
		"\u0359\nA\x03A\x03A\x03A\x03A\x03A\x07A\u0360\nA\fA\x0EA\u0363\vA\x05" +
		"A\u0365\nA\x03A\x05A\u0368\nA\x03A\x03A\x03B\x03B\x05B\u036E\nB\x03B\x03" +
		"B\x05B\u0372\nB\x03C\x03C\x03C\x03C\x05C\u0378\nC\x03D\x03D\x03D\x03E" +
		"\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0389\nF" +
		"\x05F\u038B\nF\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u0393\nF\fF\x0EF\u0396" +
		"\vF\x03G\x05G\u0399\nG\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u03A1\nG\x03" +
		"G\x03G\x03G\x03G\x03G\x07G\u03A8\nG\fG\x0EG\u03AB\vG\x03G\x03G\x03G\x05" +
		"G\u03B0\nG\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05" +
		"G\u03BD\nG\x03G\x03G\x03G\x05G\u03C2\nG\x03G\x03G\x03G\x03G\x03G\x03G" +
		"\x03G\x03G\x07G\u03CC\nG\fG\x0EG\u03CF\vG\x03G\x03G\x05G\u03D3\nG\x03" +
		"G\x05G\u03D6\nG\x03G\x03G\x03G\x03G\x05G\u03DC\nG\x03G\x03G\x03G\x05G" +
		"\u03E1\nG\x03G\x03G\x03G\x05G\u03E6\nG\x03G\x03G\x03G\x05G\u03EB\nG\x03" +
		"H\x03H\x03H\x03H\x05H\u03F1\nH\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u0406\n" +
		"H\fH\x0EH\u0409\vH\x03I\x03I\x03I\x06I\u040E\nI\rI\x0EI\u040F\x03I\x03" +
		"I\x05I\u0414\nI\x03I\x03I\x03I\x03I\x03I\x06I\u041B\nI\rI\x0EI\u041C\x03" +
		"I\x03I\x05I\u0421\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x05I\u0431\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x05I\u043A\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0452\n" +
		"I\x03I\x03I\x03I\x07I\u0457\nI\fI\x0EI\u045A\vI\x05I\u045C\nI\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0466\nI\x03I\x03I\x03I\x03I\x03" +
		"I\x07I\u046D\nI\fI\x0EI\u0470\vI\x03J\x03J\x03K\x03K\x03L\x03L\x05L\u0478" +
		"\nL\x03M\x03M\x03M\x05M\u047D\nM\x03N\x03N\x05N\u0481\nN\x03O\x03O\x03" +
		"O\x06O\u0486\nO\rO\x0EO\u0487\x03P\x03P\x03P\x05P\u048D\nP\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03R\x05R\u0495\nR\x03R\x03R\x05R\u0499\nR\x03S\x05S\u049C" +
		"\nS\x03S\x03S\x05S\u04A0\nS\x03T\x05T\u04A3\nT\x03T\x03T\x05T\u04A7\n" +
		"T\x03U\x03U\x03U\x03V\x03V\x06V\u04AE\nV\rV\x0EV\u04AF\x03V\x05V\u04B3" +
		"\nV\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x07X\u04BC\nX\fX\x0EX\u04BF\vX" +
		"\x03Y\x03Y\x05Y\u04C3\nY\x03Z\x03Z\x03Z\x03Z\x05Z\u04C9\nZ\x03[\x03[\x03" +
		"\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x07^\u04D7\n^\f^\x0E" +
		"^\u04DA\v^\x03_\x03_\x07_\u04DE\n_\f_\x0E_\u04E1\v_\x03`\x03`\x07`\u04E5" +
		"\n`\f`\x0E`\u04E8\v`\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x03c\x03c\x03" +
		"c\x03d\x03d\x03d\x03d\x07d\u04F8\nd\fd\x0Ed\u04FB\vd\x03d\x03d\x03e\x03" +
		"e\x05e\u0501\ne\x03e\x05e\u0504\ne\x03f\x03f\x03f\x05f\u0509\nf\x03g\x03" +
		"g\x03g\x03g\x05g\u050F\ng\x03h\x03h\x03h\x03h\x03h\x03h\x05h\u0517\nh" +
		"\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x03" +
		"i\x05i\u0527\ni\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x05j\u0530\nj\x03k" +
		"\x03k\x03l\x03l\x03m\x03m\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03" +
		"n\x05n\u0541\nn\x03n\x05n\u0544\nn\x03o\x03o\x03p\x03p\x03q\x03q\x03r" +
		"\x03r\x03s\x03s\x03t\x03t\x03u\x03u\x03u\x04\u04DF\u04E6\x02\x07Zf\x8A" +
		"\x8E\x90v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
		"\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
		"\xE8\x02\x02\x1D\x06\x02XX]]\xB7\xB7\xE4\xE5\x03\x02\xEA\u0101\x03\x02" +
		"\xDE\xDF\x04\x02\n\n\xE0\xE0\x04\x02\x9D\x9D\xE1\xE1\x04\x02\xAE\xAE\xB0" +
		"\xB0\x04\x02OO\x82\x82\x04\x02_`bb\x04\x021245\x03\x02%&\x04\x02CCEE\x03" +
		"\x02\n\v\x03\x02\"#\x04\x02\u0106\u0106\u0118\u0119\x06\x02zz\u0116\u0116" +
		"\u011A\u011A\u011D\u011D\x04\x02\u0118\u0119\u011B\u011B\x03\x02\u0118" +
		"\u0119\x03\x02\u0121\u0122\x04\x02\u0121\u0121\u0124\u0124\x03\x02\u0124" +
		"\u0125\x03\x02\u011E\u011F\x06\x02zz\u0116\u0116\u0118\u011A\u011C\u011D" +
		"\x05\x02\x1B\x1B\u0105\u0106\u0118\u0119\x04\x02\n\n\f\f\x17\x02\b\b\x0F" +
		"\x13\x16\x17\x1C \"\"$&((338EGGJNPUWY[^aadrv\x84\x86\xAE\xB0\xC1\xC3\xE5" +
		"\xE7\u0101\x07\x02./17_b\x85\x85\xD4\xD4\t\x02\x06-008^c\x84\x86\xA6\xA8" +
		"\xD3\xD5\u0101\x02\u05C3\x02\xEA\x03\x02\x02\x02\x04\xED\x03\x02\x02\x02" +
		"\x06\xF7\x03\x02\x02\x02\b\u0100\x03\x02\x02\x02\n\u0102\x03\x02\x02\x02" +
		"\f\u0110\x03\x02\x02\x02\x0E\u0114\x03\x02\x02\x02\x10\u0116\x03\x02\x02" +
		"\x02\x12\u0119\x03\x02\x02\x02\x14\u011E\x03\x02\x02\x02\x16\u0124\x03" +
		"\x02\x02\x02\x18\u0127\x03\x02\x02\x02\x1A\u014A\x03\x02\x02\x02\x1C\u0154" +
		"\x03\x02\x02\x02\x1E\u0156\x03\x02\x02\x02 \u015E\x03\x02\x02\x02\"\u0160" +
		"\x03\x02\x02\x02$\u0164\x03\x02\x02\x02&\u0167\x03\x02\x02\x02(\u016F" +
		"\x03\x02\x02\x02*\u0177\x03\x02\x02\x02,\u017B\x03\x02\x02\x02.\u017F" +
		"\x03\x02\x02\x020\u0197\x03\x02\x02\x022\u019B\x03\x02\x02\x024\u019D" +
		"\x03\x02\x02\x026\u01A5\x03\x02\x02\x028\u01A7\x03\x02\x02\x02:\u01AC" +
		"\x03\x02\x02\x02<\u01B7\x03\x02\x02\x02>\u01C9\x03\x02\x02\x02@\u01DA" +
		"\x03\x02\x02\x02B\u01E1\x03\x02\x02\x02D\u01E5\x03\x02\x02\x02F\u01E8" +
		"\x03\x02\x02\x02H\u01ED\x03\x02\x02\x02J\u01FE\x03\x02\x02\x02L\u0205" +
		"\x03\x02\x02\x02N\u020E\x03\x02\x02\x02P\u0218\x03\x02\x02\x02R\u0224" +
		"\x03\x02\x02\x02T\u022E\x03\x02\x02\x02V\u0231\x03\x02\x02\x02X\u023A" +
		"\x03\x02\x02\x02Z\u0259\x03\x02\x02\x02\\\u026C\x03\x02\x02\x02^\u0275" +
		"\x03\x02\x02\x02`\u0283\x03\x02\x02\x02b\u0292\x03\x02\x02\x02d\u0299" +
		"\x03\x02\x02\x02f\u029C\x03\x02\x02\x02h\u02B6\x03\x02\x02\x02j\u02D3" +
		"\x03\x02\x02\x02l\u02E3\x03\x02\x02\x02n\u02E5\x03\x02\x02\x02p\u02E8" +
		"\x03\x02\x02\x02r\u0325\x03\x02\x02\x02t\u0327\x03\x02\x02\x02v\u032A" +
		"\x03\x02\x02\x02x\u0334\x03\x02\x02\x02z\u0338\x03\x02\x02\x02|\u033D" +
		"\x03\x02\x02\x02~\u0346\x03\x02\x02\x02\x80\u034B\x03\x02\x02\x02\x82" +
		"\u036B\x03\x02\x02\x02\x84\u0377\x03\x02\x02\x02\x86\u0379\x03\x02\x02" +
		"\x02\x88\u037C\x03\x02\x02\x02\x8A\u038A\x03\x02\x02\x02\x8C\u03EA\x03" +
		"\x02\x02\x02\x8E\u03F0\x03\x02\x02\x02\x90\u0465\x03\x02\x02\x02\x92\u0471" +
		"\x03\x02\x02\x02\x94\u0473\x03\x02\x02\x02\x96\u0477\x03\x02\x02\x02\x98" +
		"\u0479\x03\x02\x02\x02\x9A\u047E\x03\x02\x02\x02\x9C\u0485\x03\x02\x02" +
		"\x02\x9E\u0489\x03\x02\x02\x02\xA0\u048E\x03\x02\x02\x02\xA2\u0498\x03" +
		"\x02\x02\x02\xA4\u049B\x03\x02\x02\x02\xA6\u04A2\x03\x02\x02\x02\xA8\u04A8" +
		"\x03\x02\x02\x02\xAA\u04B2\x03\x02\x02\x02\xAC\u04B4\x03\x02\x02\x02\xAE" +
		"\u04B8\x03\x02\x02\x02\xB0\u04C2\x03\x02\x02\x02\xB2\u04C8\x03\x02\x02" +
		"\x02\xB4\u04CA\x03\x02\x02\x02\xB6\u04CC\x03\x02\x02\x02\xB8\u04CE\x03" +
		"\x02\x02\x02\xBA\u04D3\x03\x02\x02\x02\xBC\u04DB\x03\x02\x02\x02\xBE\u04E2" +
		"\x03\x02\x02\x02\xC0\u04E9\x03\x02\x02\x02\xC2\u04EC\x03\x02\x02\x02\xC4" +
		"\u04F0\x03\x02\x02\x02\xC6\u04F3\x03\x02\x02\x02\xC8\u04FE\x03\x02\x02" +
		"\x02\xCA\u0508\x03\x02\x02\x02\xCC\u050E\x03\x02\x02\x02\xCE\u0516\x03" +
		"\x02\x02\x02\xD0\u0526\x03\x02\x02\x02\xD2\u052F\x03\x02\x02\x02\xD4\u0531" +
		"\x03\x02\x02\x02\xD6\u0533\x03\x02\x02\x02\xD8\u0535\x03\x02\x02\x02\xDA" +
		"\u0543\x03\x02\x02\x02\xDC\u0545\x03\x02\x02\x02\xDE\u0547\x03\x02\x02" +
		"\x02\xE0\u0549\x03\x02\x02\x02\xE2\u054B\x03\x02\x02\x02\xE4\u054D\x03" +
		"\x02\x02\x02\xE6\u054F\x03\x02\x02\x02\xE8\u0551\x03\x02\x02\x02\xEA\xEB" +
		"\x05\x04\x03\x02\xEB\xEC\x07\x02\x02\x03\xEC\x03\x03\x02\x02\x02\xED\xEE" +
		"\x05\x06\x04\x02\xEE\xEF\x07\x02\x02\x03\xEF\x05\x03\x02\x02\x02\xF0\xF2" +
		"\x05\b\x05\x02\xF1\xF3\x07\u0110\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3" +
		"\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF6\x05\n\x06\x02\xF5\xF0" +
		"\x03\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5" +
		"\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\x07\x03\x02\x02\x02\xF9\xF7" +
		"\x03\x02\x02\x02\xFA\u0101\x05\f\x07\x02\xFB\u0101\x05\x0E\b\x02\xFC\u0101" +
		"\x05\x10\t\x02\xFD\u0101\x05\x12\n\x02\xFE\u0101\x05\x14\v\x02\xFF\u0101" +
		"\x05\x16\f\x02\u0100\xFA\x03\x02\x02\x02\u0100\xFB\x03\x02\x02\x02\u0100" +
		"\xFC\x03\x02\x02\x02\u0100\xFD\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
		"\u0100\xFF\x03\x02\x02\x02\u0101\t\x03\x02\x02\x02\u0102\u0103\x07\u0110" +
		"\x02\x02\u0103\v\x03\x02\x02\x02\u0104\u0111\x05\x18\r\x02\u0105\u0111" +
		"\x05:\x1E\x02\u0106\u0111\x05<\x1F\x02\u0107\u0111\x05> \x02\u0108\u0111" +
		"\x058\x1D\x02\u0109\u0111\x05@!\x02\u010A\u0111\x05F$\x02\u010B\u0111" +
		"\x05H%\x02\u010C\u0111\x05J&\x02\u010D\u0111\x05L\'\x02\u010E\u0111\x05" +
		"N(\x02\u010F\u0111\x05P)\x02\u0110\u0104\x03\x02\x02\x02\u0110\u0105\x03" +
		"\x02\x02\x02\u0110\u0106\x03\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0110" +
		"\u0108\x03\x02\x02\x02\u0110\u0109\x03\x02\x02\x02\u0110\u010A\x03\x02" +
		"\x02\x02\u0110\u010B\x03\x02\x02\x02\u0110\u010C\x03\x02\x02\x02\u0110" +
		"\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03\x02" +
		"\x02\x02\u0111\r\x03\x02\x02\x02\u0112\u0115\x05Z.\x02\u0113\u0115\x05" +
		"R*\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\x0F" +
		"\x03\x02\x02\x02\u0116\u0117\x07P\x02\x02\u0117\u0118\x05\xBC_\x02\u0118" +
		"\x11\x03\x02\x02\x02\u0119\u011A\x07Q\x02\x02\u011A\u011B\x05\xB0Y\x02" +
		"\u011B\u011C\x07\'\x02\x02\u011C\u011D\x05\x0E\b\x02\u011D\x13\x03\x02" +
		"\x02\x02\u011E\u0120\x07[\x02\x02\u011F\u0121\x07\xE2\x02\x02\u0120\u011F" +
		"\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02" +
		"\u0122\u0123\x05\xBC_\x02\u0123\x15\x03\x02\x02\x02\u0124\u0125\x07W\x02" +
		"\x02\u0125\u0126\t\x02\x02\x02\u0126\x17\x03\x02\x02\x02\u0127\u0128\x07" +
		"H\x02\x02\u0128\u0129\x07I\x02\x02\u0129\u012A\x05\xBC_\x02\u012A\u012B" +
		"\x07\u010D\x02\x02\u012B\u0130\x05\x1A\x0E\x02\u012C\u012D\x07\u010F\x02" +
		"\x02\u012D\u012F\x05\x1A\x0E\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0132" +
		"\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02" +
		"\u0131\u0135\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0134\x07" +
		"\u010F\x02\x02\u0134\u0136\x05&\x14\x02\u0135\u0133\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0138\x07\u010F" +
		"\x02\x02\u0138\u013A\x05(\x15\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A" +
		"\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u013C\x07\u010F\x02" +
		"\x02\u013C\u013E\x05*\x16\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E" +
		"\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x07\u010E\x02" +
		"\x02\u0140\u0142\x05$\x13\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142" +
		"\x03\x02\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u0145\x05,\x17\x02" +
		"\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03" +
		"\x02\x02\x02\u0146\u0148\x05\xC0a\x02\u0147\u0149\x054\x1B\x02\u0148\u0147" +
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\x19\x03\x02\x02\x02" +
		"\u014A\u014B\x05\x1C\x0F\x02\u014B\u014D\x05 \x11\x02\u014C\u014E\x05" +
		"\"\x12\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E" +
		"\u0150\x03\x02\x02\x02\u014F\u0151\x05\xA4S\x02\u0150\u014F\x03\x02\x02" +
		"\x02\u0150\u0151\x03\x02\x02\x02\u0151\x1B\x03\x02\x02\x02\u0152\u0155" +
		"\x05\xBE`\x02\u0153\u0155\x05\x88E\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
		"\u0153\x03\x02\x02\x02\u0155\x1D\x03\x02\x02\x02\u0156\u015B\x05\x1C\x0F" +
		"\x02\u0157\u0158\x07\u010F\x02\x02\u0158\u015A\x05\x1C\x0F\x02\u0159\u0157" +
		"\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02" +
		"\u015B\u015C\x03\x02\x02\x02\u015C\x1F\x03\x02\x02\x02\u015D\u015B\x03" +
		"\x02\x02\x02\u015E\u015F\t\x03\x02\x02\u015F!\x03\x02\x02\x02\u0160\u0161" +
		"\x07\u010D\x02\x02\u0161\u0162\x05\xDEp\x02\u0162\u0163\x07\u010E\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0163#\x03\x02\x02\x02\u0164\u0165\x07i\x02\x02\u0165\u0166\x07\u0120" +
		"\x02\x02\u0166%\x03\x02\x02\x02\u0167\u0168\x07\xD7\x02\x02\u0168\u0169" +
		"\x07\'\x02\x02\u0169\u016A\x05\x88E\x02\u016A\u016B\x07\t\x02\x02\u016B" +
		"\u016C\x05\x88E\x02\u016C\'\x03\x02\x02\x02\u016D\u016E\x07\xAF\x02\x02" +
		"\u016E\u0170\x05\xB0Y\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03" +
		"\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x07\xE6\x02\x02\u0172" +
		"\u0173\x07\xE7\x02\x02\u0173\u0174\x07\u010D\x02\x02\u0174\u0175\x05\x1E" +
		"\x10\x02\u0175\u0176\x07\u010E\x02\x02\u0176)\x03\x02\x02\x02\u0177\u0178" +
		"\x07\xE8\x02\x02\u0178\u0179\x07\'\x02\x02\u0179\u017A\x07\xE9\x02\x02" +
		"\u017A+\x03\x02\x02\x02\u017B\u017C\x07\xBE\x02\x02\u017C\u017D\x07\x0F" +
		"\x02\x02\u017D\u017E\x05.\x18\x02\u017E-\x03\x02\x02\x02\u017F\u0180\x07" +
		"\u010D\x02\x02\u0180\u0185\x050\x19\x02\u0181\u0182\x07\u010F\x02\x02" +
		"\u0182\u0184\x050\x19\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0187\x03" +
		"\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0188\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07\u010E" +
		"\x02\x02\u0189/\x03\x02\x02\x02\u018A\u0198\x05\x96L\x02\u018B\u018C\x05" +
		"\xB0Y\x02\u018C\u018D\x07\u010D\x02\x02\u018D\u0192\x052\x1A\x02\u018E" +
		"\u018F\x07\u010F\x02\x02\u018F\u0191\x052\x1A\x02\u0190\u018E\x03\x02" +
		"\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192" +
		"\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0192\x03\x02" +
		"\x02\x02\u0195\u0196\x07\u010E\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197" +
		"\u018A\x03\x02\x02\x02\u0197\u018B\x03\x02\x02\x02\u01981\x03\x02\x02" +
		"\x02\u0199\u019C\x05\x96L\x02\u019A\u019C\x05\xDAn\x02\u019B\u0199\x03" +
		"\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C3\x03\x02\x02\x02\u019D" +
		"\u019E\x07\x1F\x02\x02\u019E\u019F\x05\xB0Y\x02\u019F\u01A0\x056\x1C\x02" +
		"\u01A05\x03\x02\x02\x02\u01A1\u01A2\t\x04\x02\x02\u01A2\u01A6\t\x05\x02" +
		"\x02\u01A3\u01A4\t\x04\x02\x02\u01A4\u01A6\t\x06\x02\x02\u01A5\u01A1\x03" +
		"\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A67\x03\x02\x02\x02\u01A7" +
		"\u01A8\x07H\x02\x02\u01A8\u01A9\x07\xE2\x02\x02\u01A9\u01AA\x05\xBC_\x02" +
		"\u01AA\u01AB\x05\xC0a\x02\u01AB9\x03\x02\x02\x02\u01AC\u01AD\x07H\x02" +
		"\x02\u01AD\u01AF\x07\xB6\x02\x02\u01AE\u01B0\x05\xC2b\x02\u01AF\u01AE" +
		"\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02" +
		"\u01B1\u01B3\x05\xBC_\x02\u01B2\u01B4\x05$\x13\x02\u01B3\u01B2\x03\x02" +
		"\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
		"\u01B6\x05\xC0a\x02\u01B6;\x03\x02\x02\x02\u01B7\u01B9\x07H\x02\x02\u01B8" +
		"\u01BA\x07\x9C\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02" +
		"\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x07K\x02\x02\u01BC\u01BE" +
		"\x05\xC2b\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02" +
		"\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C1\x05\xBC_\x02\u01C0\u01C2\x05" +
		"\x1E\x10\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C4\x03\x02\x02\x02\u01C3\u01C5\x05$\x13\x02\u01C4\u01C3\x03\x02\x02" +
		"\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7" +
		"\x07\t\x02\x02\u01C7\u01C8\x05Z.\x02\u01C8=\x03\x02\x02\x02\u01C9\u01CD" +
		"\x07H\x02\x02\u01CA\u01CE\x07\x9C\x02\x02\u01CB\u01CC\x07\x9C\x02\x02" +
		"\u01CC\u01CE\x07\xDD\x02\x02\u01CD\u01CA\x03\x02\x02\x02\u01CD\u01CB\x03" +
		"\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x07\x93\x02\x02\u01D0" +
		"\u01D2\x05\xC2b\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02" +
		"\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x05\xBC_\x02\u01D4\u01D5" +
		"\x07\t\x02\x02\u01D5\u01D8\x05\xB0Y\x02\u01D6\u01D7\x07\xE3\x02\x02\u01D7" +
		"\u01D9\x05\xB0Y\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02" +
		"\x02\u01D9?\x03\x02\x02\x02\u01DA\u01DB\x07f\x02\x02\u01DB\u01DC\x07I" +
		"\x02\x02\u01DC\u01DF\x05\xBC_\x02\u01DD\u01E0\x05B\"\x02\u01DE\u01E0\x05" +
		"D#\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0A" +
		"\x03\x02\x02\x02\u01E1\u01E2\x07g\x02\x02\u01E2\u01E3\x07c\x02\x02\u01E3" +
		"\u01E4\x05\xBC_\x02\u01E4C\x03\x02\x02\x02\u01E5\u01E6\x07j\x02\x02\u01E6" +
		"\u01E7\x05\xC6d\x02\u01E7E\x03\x02\x02\x02\u01E8\u01E9\x07f\x02\x02\u01E9" +
		"\u01EA\x07\xB6\x02\x02\u01EA\u01EB\x05\xBC_\x02\u01EB\u01EC\x05D#\x02" +
		"\u01ECG\x03\x02\x02\x02\u01ED\u01F1\x07f\x02\x02\u01EE\u01F2\x07\x9C\x02" +
		"\x02\u01EF\u01F0\x07\x9C\x02\x02\u01F0\u01F2\x07\xDD\x02\x02\u01F1\u01EE" +
		"\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02" +
		"\u01F3\u01F5\x07\x93\x02\x02\u01F4\u01F6\x05\xC4c\x02\u01F5\u01F4\x03" +
		"\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
		"\u01F8\x05\xBC_\x02\u01F8\u01F9\x07\t\x02\x02\u01F9\u01FC\x05\xB0Y\x02" +
		"\u01FA\u01FB\x07\xE3\x02\x02\u01FB\u01FD\x05\xB0Y\x02\u01FC\u01FA\x03" +
		"\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FDI\x03\x02\x02\x02\u01FE" +
		"\u01FF\x07^\x02\x02\u01FF\u0201\x07I\x02\x02\u0200\u0202\x05\xC4c\x02" +
		"\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03" +
		"\x02\x02\x02\u0203\u0204\x05\xBC_\x02\u0204K\x03\x02\x02\x02\u0205\u0206" +
		"\x07^\x02\x02\u0206\u0208\x07\xB6\x02\x02\u0207\u0209\x05\xC4c\x02\u0208" +
		"\u0207\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02" +
		"\x02\x02\u020A\u020C\x05\xBC_\x02\u020B\u020D\t\x07\x02\x02\u020C\u020B" +
		"\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020DM\x03\x02\x02\x02\u020E" +
		"\u0210\x07^\x02\x02\u020F\u0211\x07\x9C\x02\x02\u0210\u020F\x03\x02\x02" +
		"\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0214" +
		"\x07K\x02\x02\u0213\u0215\x05\xC4c\x02\u0214\u0213\x03\x02\x02\x02\u0214" +
		"\u0215\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x05\xBC" +
		"_\x02\u0217O\x03\x02\x02\x02\u0218\u021C\x07^\x02\x02\u0219\u021D\x07" +
		"\x9C\x02\x02\u021A\u021B\x07\x9C\x02\x02\u021B\u021D\x07\xDD\x02\x02\u021C" +
		"\u0219\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02" +
		"\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220\x07\x93\x02\x02\u021F" +
		"\u0221\x05\xC4c\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02" +
		"\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x05\xBC_\x02\u0223Q\x03\x02" +
		"\x02\x02\u0224\u0225\x07M\x02\x02\u0225\u0226\t\b\x02\x02\u0226\u022C" +
		"\x05\xBC_\x02\u0227\u0229\x05T+\x02\u0228\u0227\x03\x02\x02\x02\u0228" +
		"\u0229\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022D\x05Z.\x02" +
		"\u022B\u022D\x05V,\x02\u022C\u0228\x03\x02\x02\x02\u022C\u022B\x03\x02" +
		"\x02\x02\u022DS\x03\x02\x02\x02\u022E\u022F\x07<\x02\x02\u022F\u0230\x05" +
		"\xC6d\x02\u0230U\x03\x02\x02\x02\u0231\u0232\x07G\x02\x02\u0232\u0237" +
		"\x05X-\x02\u0233\u0234\x07\u010F\x02\x02\u0234\u0236\x05X-\x02\u0235\u0233" +
		"\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02" +
		"\u0237\u0238\x03\x02\x02\x02\u0238W\x03\x02\x02\x02\u0239\u0237\x03\x02" +
		"\x02\x02\u023A\u023B\x07\u010D\x02\x02\u023B\u0240\x05\xDAn\x02\u023C" +
		"\u023D\x07\u010F\x02\x02\u023D\u023F\x05\xDAn\x02\u023E\u023C\x03\x02" +
		"\x02\x02\u023F\u0242\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0240" +
		"\u0241\x03\x02\x02\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0240\x03\x02" +
		"\x02\x02\u0243\u0244\x07\u010E\x02\x02\u0244Y\x03\x02\x02\x02\u0245\u0246" +
		"\b.\x01\x02\u0246\u025A\x05\\/\x02\u0247\u0248\x07\u010D\x02\x02\u0248" +
		"\u0249\x05Z.\x02\u0249\u024A\x07\u010E\x02\x02\u024A\u025A\x03\x02\x02" +
		"\x02\u024B\u024D\x05`1\x02\u024C\u024E\x05v<\x02\u024D\u024C\x03\x02\x02" +
		"\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u0251" +
		"\x05z>\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
		"\u025A\x03\x02\x02\x02\u0252\u0254\x05^0\x02\u0253\u0255\x05v<\x02\u0254" +
		"\u0253\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0257\x03\x02" +
		"\x02\x02\u0256\u0258\x05z>\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258" +
		"\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u0245\x03\x02\x02\x02" +
		"\u0259\u0247\x03\x02\x02\x02\u0259\u024B\x03\x02\x02\x02\u0259\u0252\x03" +
		"\x02\x02\x02\u025A\u0269\x03\x02\x02\x02\u025B\u025C\f\x05\x02\x02\u025C" +
		"\u025E\t\t\x02\x02\u025D\u025F\x07\n\x02\x02\u025E\u025D\x03\x02\x02\x02" +
		"\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x05" +
		"Z.\x02\u0261\u0263\x05v<\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263\x03" +
		"\x02\x02\x02\u0263\u0265\x03\x02\x02\x02\u0264\u0266\x05z>\x02\u0265\u0264" +
		"\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0268\x03\x02\x02\x02" +
		"\u0267\u025B\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269\u0267\x03" +
		"\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A[\x03\x02\x02\x02\u026B" +
		"\u0269\x03\x02\x02\x02\u026C\u026D\x07G\x02\x02\u026D\u0272\x05\x88E\x02" +
		"\u026E\u026F\x07\u010F\x02\x02\u026F\u0271\x05\x88E\x02\u0270\u026E\x03" +
		"\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272" +
		"\u0273\x03\x02\x02\x02\u0273]\x03\x02\x02\x02\u0274\u0272\x03\x02\x02" +
		"\x02\u0275\u0276\x05`1\x02\u0276\u0278\x05d3\x02\u0277\u0279\x05n8\x02" +
		"\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027B\x03" +
		"\x02\x02\x02\u027A\u027C\x05p9\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C" +
		"\x03\x02\x02\x02\u027C\u027E\x03\x02\x02\x02\u027D\u027F\x05t;\x02\u027E" +
		"\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03\x02" +
		"\x02\x02\u0280\u0282\x05|?\x02\u0281\u0280\x03\x02\x02\x02\u0281\u0282" +
		"\x03\x02\x02\x02\u0282_\x03\x02\x02\x02\u0283\u0285\x07\x06\x02\x02\u0284" +
		"\u0286\x05\xE2r\x02\u0285\u0284\x03\x02\x02\x02\u0285\u0286\x03\x02\x02" +
		"\x02\u0286\u0290\x03\x02\x02\x02\u0287\u0291\x07\u0116\x02\x02\u0288\u028D" +
		"\x05b2\x02\u0289\u028A\x07\u010F\x02\x02\u028A\u028C\x05b2\x02\u028B\u0289" +
		"\x03\x02\x02\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02" +
		"\u028D\u028E\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03" +
		"\x02\x02\x02\u0290\u0287\x03\x02\x02\x02\u0290\u0288\x03\x02\x02\x02\u0291" +
		"a\x03\x02\x02\x02\u0292\u0297\x05\x88E\x02\u0293\u0295\x07\t\x02\x02\u0294" +
		"\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x03\x02" +
		"\x02\x02\u0296\u0298\x05\x88E\x02\u0297\u0294\x03\x02\x02\x02\u0297\u0298" +
		"\x03\x02\x02\x02\u0298c\x03\x02\x02\x02\u0299\u029A\x07\x07\x02\x02\u029A" +
		"\u029B\x05f4\x02\u029Be\x03\x02\x02\x02\u029C\u029D\b4\x01\x02\u029D\u02A2" +
		"\x05h5\x02\u029E\u029F\x07\u010F\x02\x02\u029F\u02A1\x05h5\x02\u02A0\u029E" +
		"\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02" +
		"\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02B3\x03\x02\x02\x02\u02A4\u02A2\x03" +
		"\x02\x02\x02\u02A5\u02A7\f\x03\x02\x02\u02A6\u02A8\x076\x02\x02\u02A7" +
		"\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AA\x03\x02" +
		"\x02\x02\u02A9\u02AB\t\n\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB" +
		"\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x07.\x02\x02" +
		"\u02AD\u02AF\x05f4\x02\u02AE\u02B0\x05l7\x02\u02AF\u02AE\x03\x02\x02\x02" +
		"\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02A5\x03" +
		"\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3" +
		"\u02B4\x03\x02\x02\x02\u02B4g\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02" +
		"\x02\u02B6\u02B8\x05j6\x02\u02B7\u02B9\x05\xA6T\x02\u02B8\u02B7\x03\x02" +
		"\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9i\x03\x02\x02\x02\u02BA\u02BC" +
		"\x07I\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02" +
		"\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02D4\x05\x88E\x02\u02BE\u02BF\x07" +
		"9\x02\x02\u02BF\u02C0\x07I\x02\x02\u02C0\u02C1\x07\u010D\x02\x02\u02C1" +
		"\u02C2\x05\xBC_\x02\u02C2\u02C3\x07\u010D\x02\x02\u02C3\u02C8\x05\x88" +
		"E\x02\u02C4\u02C5\x07\u010F\x02\x02\u02C5\u02C7\x05\x88E\x02\u02C6\u02C4" +
		"\x03\x02\x02\x02\u02C7\u02CA\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02" +
		"\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA\u02C8\x03" +
		"\x02\x02\x02\u02CB\u02CC\x07\u010E\x02\x02\u02CC\u02CD\x07\u010E\x02\x02" +
		"\u02CD\u02D4\x03\x02\x02\x02\u02CE\u02CF\x07\xD8\x02\x02\u02CF\u02D0\x07" +
		"\u010D\x02\x02\u02D0\u02D1\x05\x88E\x02\u02D1\u02D2\x07\u010E\x02\x02" +
		"\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02BB\x03\x02\x02\x02\u02D3\u02BE\x03" +
		"\x02\x02\x02\u02D3\u02CE\x03\x02\x02\x02\u02D4k\x03\x02\x02\x02\u02D5" +
		"\u02D6\x077\x02\x02\u02D6\u02E4\x05\x8AF\x02\u02D7\u02D8\x07\x85\x02\x02" +
		"\u02D8\u02D9\x07\u010D\x02\x02\u02D9\u02DE\x05\xBC_\x02\u02DA\u02DB\x07" +
		"\u010F\x02\x02\u02DB\u02DD\x05\xBC_\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD" +
		"\u02E0\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02" +
		"\x02\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1" +
		"\u02E2\x07\u010E\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02D5\x03\x02" +
		"\x02\x02\u02E3\u02D7\x03\x02\x02\x02\u02E4m\x03\x02\x02\x02\u02E5\u02E6" +
		"\x07\r\x02\x02\u02E6\u02E7\x05\x8AF\x02\u02E7o\x03\x02\x02\x02\u02E8\u02E9" +
		"\x07\x0E\x02\x02\u02E9\u02EA\x07\x0F\x02\x02\u02EA\u02EF\x05r:\x02\u02EB" +
		"\u02EC\x07\u010F\x02\x02\u02EC\u02EE\x05r:\x02\u02ED\u02EB\x03\x02\x02" +
		"\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0" +
		"\x03\x02\x02\x02\u02F0q\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2" +
		"\u0326\x05\x88E\x02\u02F3\u02F4\x07\u010D\x02\x02\u02F4\u0326\x07\u010E" +
		"\x02\x02\u02F5\u02F6\x07\u010D\x02\x02\u02F6\u02FB\x05\x88E\x02\u02F7" +
		"\u02F8\x07\u010F\x02\x02\u02F8\u02FA\x05\x88E\x02\u02F9\u02F7\x03\x02" +
		"\x02\x02\u02FA\u02FD\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB" +
		"\u02FC\x03\x02\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02FB\x03\x02" +
		"\x02\x02\u02FE\u02FF\x07\u010E\x02\x02\u02FF\u0326\x03\x02\x02\x02\u0300" +
		"\u0301\x07\x12\x02\x02\u0301\u0302\x07\u010D\x02\x02\u0302\u0307\x05\x88" +
		"E\x02\u0303\u0304\x07\u010F\x02\x02\u0304\u0306\x05\x88E\x02\u0305\u0303" +
		"\x03\x02\x02\x02\u0306\u0309\x03\x02\x02\x02\u0307\u0305\x03\x02\x02\x02" +
		"\u0307\u0308\x03\x02\x02\x02\u0308\u030A\x03\x02\x02\x02\u0309\u0307\x03" +
		"\x02\x02\x02\u030A\u030B\x07\u010E\x02\x02\u030B\u0326\x03\x02\x02\x02" +
		"\u030C\u030D\x07\x13\x02\x02\u030D\u030E\x07\u010D\x02\x02\u030E\u0313" +
		"\x05\x88E\x02\u030F\u0310\x07\u010F\x02\x02\u0310\u0312\x05\x88E\x02\u0311" +
		"\u030F\x03\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02" +
		"\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0316\x03\x02\x02\x02\u0315" +
		"\u0313\x03\x02\x02\x02\u0316\u0317\x07\u010E\x02\x02\u0317\u0326\x03\x02" +
		"\x02\x02\u0318\u0319\x07\x10\x02\x02\u0319\u031A\x07\x11\x02\x02\u031A" +
		"\u031B\x07\u010D\x02\x02\u031B\u0320\x05r:\x02\u031C\u031D\x07\u010F\x02" +
		"\x02\u031D\u031F\x05r:\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0322\x03" +
		"\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321" +
		"\u0323\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0324\x07\u010E" +
		"\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u02F2\x03\x02\x02\x02\u0325" +
		"\u02F3\x03\x02\x02\x02\u0325\u02F5\x03\x02\x02\x02\u0325\u0300\x03\x02" +
		"\x02\x02\u0325\u030C\x03\x02\x02\x02\u0325\u0318\x03\x02\x02\x02\u0326" +
		"s\x03\x02\x02\x02\u0327\u0328\x07\x15\x02\x02\u0328\u0329\x05\x8AF\x02" +
		"\u0329u\x03\x02\x02\x02\u032A\u032B\x07\x14\x02\x02\u032B\u032C\x07\x0F" +
		"\x02\x02\u032C\u0331\x05x=\x02\u032D\u032E\x07\u010F\x02\x02\u032E\u0330" +
		"\x05x=\x02\u032F\u032D\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331" +
		"\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332w\x03\x02\x02" +
		"\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0336\x05\x88E\x02\u0335\u0337" +
		"\t\v\x02\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337" +
		"y\x03\x02\x02\x02\u0338\u033B\x07\x16\x02\x02\u0339\u033C\x07\n\x02\x02" +
		"\u033A\u033C\x05\x88E\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033A\x03" +
		"\x02\x02\x02\u033C{\x03\x02\x02\x02\u033D\u033E\x07:\x02\x02\u033E\u0343" +
		"\x05~@\x02\u033F\u0340\x07\u010F\x02\x02\u0340\u0342\x05~@\x02\u0341\u033F" +
		"\x03\x02\x02\x02\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02" +
		"\u0343\u0344\x03\x02\x02\x02\u0344}\x03\x02\x02\x02\u0345\u0343\x03\x02" +
		"\x02\x02\u0346\u0347\x05\xA8U\x02\u0347\u0348\x07\t\x02\x02\u0348\u0349" +
		"\x05\x80A\x02\u0349\x7F\x03\x02\x02\x02\u034A\u034C\x05\xA8U\x02\u034B" +
		"\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02" +
		"\x02\x02\u034D\u0358\x07\u010D\x02\x02\u034E\u034F\x07\x14\x02\x02\u034F" +
		"\u0350\x07\x0F\x02\x02\u0350\u0355\x05\x82B\x02\u0351\u0352\x07\u010F" +
		"\x02\x02\u0352\u0354\x05\x82B\x02\u0353\u0351\x03\x02\x02\x02\u0354\u0357" +
		"\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02" +
		"\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0358\u034E\x03" +
		"\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u0364\x03\x02\x02\x02\u035A" +
		"\u035B\x07<\x02\x02\u035B\u035C\x07\x0F\x02\x02\u035C\u0361\x05\x88E\x02" +
		"\u035D\u035E\x07\u010F\x02\x02\u035E\u0360\x05\x88E\x02\u035F\u035D\x03" +
		"\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02\u0363\u0361\x03\x02" +
		"\x02\x02\u0364\u035A\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365" +
		"\u0367\x03\x02\x02\x02\u0366\u0368\x05\x84C\x02\u0367\u0366\x03\x02\x02" +
		"\x02\u0367\u0368\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036A" +
		"\x07\u010E\x02\x02\u036A\x81\x03\x02\x02\x02\u036B\u036D\x05\x88E\x02" +
		"\u036C\u036E\t\v\x02\x02\u036D\u036C\x03\x02\x02\x02\u036D\u036E\x03\x02" +
		"\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u0370\x07$\x02\x02\u0370\u0372" +
		"\t\f\x02\x02\u0371\u036F\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372" +
		"\x83\x03\x02\x02\x02\u0373\u0374\x07=\x02\x02\u0374\u0378\x05\x86D\x02" +
		"\u0375\u0376\x07>\x02\x02\u0376\u0378\x05\x86D\x02\u0377\u0373\x03\x02" +
		"\x02\x02\u0377\u0375\x03\x02\x02\x02\u0378\x85\x03\x02\x02\x02\u0379\u037A" +
		"\x05\x88E\x02\u037A\u037B\x07@\x02\x02\u037B\x87\x03\x02\x02\x02\u037C" +
		"\u037D\x05\x8AF\x02\u037D\x89\x03\x02\x02\x02\u037E\u037F\bF\x01\x02\u037F" +
		"\u0380\x07\x1B\x02\x02\u0380\u038B\x05\x8AF\x07\u0381\u0382\x07\x1D\x02" +
		"\x02\u0382\u0383\x07\u010D\x02\x02\u0383\u0384\x05Z.\x02\u0384\u0385\x07" +
		"\u010E\x02\x02\u0385\u038B\x03\x02\x02\x02\u0386\u0388\x05\x8EH\x02\u0387" +
		"\u0389\x05\x8CG\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02" +
		"\x02\u0389\u038B\x03\x02\x02\x02\u038A\u037E\x03\x02\x02\x02\u038A\u0381" +
		"\x03\x02\x02\x02\u038A\u0386\x03\x02\x02\x02\u038B\u0394\x03\x02\x02\x02" +
		"\u038C\u038D\f\x04\x02\x02\u038D\u038E\x07\x19\x02\x02\u038E\u0393\x05" +
		"\x8AF\x05\u038F\u0390\f\x03\x02\x02\u0390\u0391\x07\x18\x02\x02\u0391" +
		"\u0393\x05\x8AF\x04\u0392\u038C\x03\x02\x02\x02\u0392\u038F\x03\x02\x02" +
		"\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395" +
		"\x03\x02\x02\x02\u0395\x8B\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02" +
		"\u0397\u0399\x07\x1B\x02\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03" +
		"\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039B\x07\x1E\x02\x02\u039B" +
		"\u039C\x05\x8EH\x02\u039C\u039D\x07\x19\x02\x02\u039D\u039E\x05\x8EH\x02" +
		"\u039E\u03EB\x03\x02\x02\x02\u039F\u03A1\x07\x1B\x02\x02\u03A0\u039F\x03" +
		"\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2" +
		"\u03A3\x07\x1A\x02\x02\u03A3\u03A4\x07\u010D\x02\x02\u03A4\u03A9\x05\x88" +
		"E\x02\u03A5\u03A6\x07\u010F\x02\x02\u03A6\u03A8\x05\x88E\x02\u03A7\u03A5" +
		"\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02" +
		"\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A9\x03" +
		"\x02\x02\x02\u03AC\u03AD\x07\u010E\x02\x02\u03AD\u03EB\x03\x02\x02\x02" +
		"\u03AE\u03B0\x07\x1B\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03AF\u03B0\x03" +
		"\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x07\x1A\x02\x02\u03B2" +
		"\u03B3\x07\u010D\x02\x02\u03B3\u03B4\x05Z.\x02\u03B4\u03B5\x07\u010E\x02" +
		"\x02\u03B5\u03EB\x03\x02\x02\x02\u03B6\u03B7\x07\x1D\x02\x02\u03B7\u03B8" +
		"\x07\u010D\x02\x02\u03B8\u03B9\x05Z.\x02\u03B9\u03BA\x07\u010E\x02\x02" +
		"\u03BA\u03EB\x03\x02\x02\x02\u03BB\u03BD\x07\x1B\x02\x02\u03BC\u03BB\x03" +
		"\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE" +
		"\u03BF\x07 \x02\x02\u03BF\u03EB\x05\x8EH\x02\u03C0\u03C2\x07\x1B\x02\x02" +
		"\u03C1\u03C0\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x03" +
		"\x02\x02\x02\u03C3\u03C4\x07\x1F\x02\x02\u03C4\u03D2\t\r\x02\x02\u03C5" +
		"\u03C6\x07\u010D\x02\x02\u03C6\u03D3\x07\u010E\x02\x02\u03C7\u03C8\x07" +
		"\u010D\x02\x02\u03C8\u03CD\x05\x88E\x02\u03C9\u03CA\x07\u010F\x02\x02" +
		"\u03CA\u03CC\x05\x88E\x02\u03CB\u03C9\x03\x02\x02\x02\u03CC\u03CF\x03" +
		"\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE" +
		"\u03D0\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03D0\u03D1\x07\u010E" +
		"\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2\u03C5\x03\x02\x02\x02\u03D2" +
		"\u03C7\x03\x02\x02\x02\u03D3\u03EB\x03\x02\x02\x02\u03D4\u03D6\x07\x1B" +
		"\x02\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6" +
		"\u03D7\x03\x02\x02\x02\u03D7\u03D8\x07\x1F\x02\x02\u03D8\u03EB\x05\x8E" +
		"H\x02\u03D9\u03DB\x07!\x02\x02\u03DA\u03DC\x07\x1B\x02\x02\u03DB\u03DA" +
		"\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02" +
		"\u03DD\u03EB\x07\u0100\x02\x02\u03DE\u03E0\x07!\x02\x02\u03DF\u03E1\x07" +
		"\x1B\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1" +
		"\u03E2\x03\x02\x02\x02\u03E2\u03EB\t\x0E\x02\x02\u03E3\u03E5\x07!\x02" +
		"\x02\u03E4\u03E6\x07\x1B\x02\x02\u03E5\u03E4\x03\x02\x02\x02\u03E5\u03E6" +
		"\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8\x07\f\x02\x02" +
		"\u03E8\u03E9\x07\x07\x02\x02\u03E9\u03EB\x05\x8EH\x02\u03EA\u0398\x03" +
		"\x02\x02\x02\u03EA\u03A0\x03\x02\x02\x02\u03EA\u03AF\x03\x02\x02\x02\u03EA" +
		"\u03B6\x03\x02\x02\x02\u03EA\u03BC\x03\x02\x02\x02\u03EA\u03C1\x03\x02" +
		"\x02\x02\u03EA\u03D5\x03\x02\x02\x02\u03EA\u03D9\x03\x02\x02\x02\u03EA" +
		"\u03DE\x03\x02\x02\x02\u03EA\u03E3\x03\x02\x02\x02\u03EB\x8D\x03\x02\x02" +
		"\x02\u03EC\u03ED\bH\x01\x02\u03ED\u03F1\x05\x90I\x02\u03EE\u03EF\t\x0F" +
		"\x02\x02\u03EF\u03F1\x05\x8EH\t\u03F0\u03EC\x03\x02\x02\x02\u03F0\u03EE" +
		"\x03\x02\x02\x02\u03F1\u0407\x03\x02\x02\x02\u03F2\u03F3\f\b\x02\x02\u03F3" +
		"\u03F4\t\x10\x02\x02\u03F4\u0406\x05\x8EH\t\u03F5\u03F6\f\x07\x02\x02" +
		"\u03F6\u03F7\t\x11\x02\x02\u03F7\u0406\x05\x8EH\b\u03F8\u03F9\f\x06\x02" +
		"\x02\u03F9\u03FA\x07\u0108\x02\x02\u03FA\u0406\x05\x8EH\x07\u03FB\u03FC" +
		"\f\x05\x02\x02\u03FC\u03FD\x07\u0109\x02\x02\u03FD\u0406\x05\x8EH\x06" +
		"\u03FE\u03FF\f\x04\x02\x02\u03FF\u0400\x07\u0107\x02\x02\u0400\u0406\x05" +
		"\x8EH\x05\u0401\u0402\f\x03\x02\x02\u0402\u0403\x05\xD0i\x02\u0403\u0404" +
		"\x05\x8EH\x04\u0404\u0406\x03\x02\x02\x02\u0405\u03F2\x03\x02\x02\x02" +
		"\u0405\u03F5\x03\x02\x02\x02\u0405\u03F8\x03\x02\x02\x02\u0405\u03FB\x03" +
		"\x02\x02\x02\u0405\u03FE\x03\x02\x02\x02\u0405\u0401\x03\x02\x02\x02\u0406" +
		"\u0409\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03\x02" +
		"\x02\x02\u0408\x8F\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A\u040B" +
		"\bI\x01\x02\u040B\u040D\x07)\x02\x02\u040C\u040E\x05\xB8]\x02\u040D\u040C" +
		"\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02" +
		"\u040F\u0410\x03\x02\x02\x02\u0410\u0413\x03\x02\x02\x02\u0411\u0412\x07" +
		",\x02\x02\u0412\u0414\x05\x88E\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0414" +
		"\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0416\x07-\x02\x02" +
		"\u0416\u0466\x03\x02\x02\x02\u0417\u0418\x07)\x02\x02\u0418\u041A\x05" +
		"\x88E\x02\u0419\u041B\x05\xB8]\x02\u041A\u0419\x03\x02\x02\x02\u041B\u041C" +
		"\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02" +
		"\u041D\u0420\x03\x02\x02\x02\u041E\u041F\x07,\x02\x02\u041F\u0421\x05" +
		"\x88E\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
		"\u0422\x03\x02\x02\x02\u0422\u0423\x07-\x02\x02\u0423\u0466\x03\x02\x02" +
		"\x02\u0424\u0425\x07V\x02\x02\u0425\u0426\x07\u010D\x02\x02\u0426\u0427" +
		"\x05\x88E\x02\u0427\u0428\x07\t\x02\x02\u0428";
	private static readonly _serializedATNSegment2: string =
		"\u0429\x05 \x11\x02\u0429\u042A\x07\u010E\x02\x02\u042A\u0466\x03\x02" +
		"\x02\x02\u042B\u042C\x07C\x02\x02\u042C\u042D\x07\u010D\x02\x02\u042D" +
		"\u0430\x05\x88E\x02\u042E\u042F\x07r\x02\x02\u042F\u0431\x07$\x02\x02" +
		"\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0432\x03" +
		"\x02\x02\x02\u0432\u0433\x07\u010E\x02\x02\u0433\u0466\x03\x02\x02\x02" +
		"\u0434\u0435\x07E\x02\x02\u0435\u0436\x07\u010D\x02\x02\u0436\u0439\x05" +
		"\x88E\x02\u0437\u0438\x07r\x02\x02\u0438\u043A\x07$\x02\x02\u0439\u0437" +
		"\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02" +
		"\u043B\u043C\x07\u010E\x02\x02\u043C\u0466\x03\x02\x02\x02\u043D\u043E" +
		"\x07w\x02\x02\u043E\u043F\x07\u010D\x02\x02\u043F\u0440\x05\x8EH\x02\u0440" +
		"\u0441\x07\x1A\x02\x02\u0441\u0442\x05\x8EH\x02\u0442\u0443\x07\u010E" +
		"\x02\x02\u0443\u0466\x03\x02\x02\x02\u0444\u0466\x05\xDAn\x02\u0445\u0466" +
		"\x07\u0116\x02\x02\u0446\u0447\x05\xBC_\x02\u0447\u0448\x07\u010A\x02" +
		"\x02\u0448\u0449\x07\u0116\x02\x02\u0449\u0466\x03\x02\x02\x02\u044A\u044B" +
		"\x07\u010D\x02\x02\u044B\u044C\x05Z.\x02\u044C\u044D\x07\u010E\x02\x02" +
		"\u044D\u0466\x03\x02\x02\x02\u044E\u044F\x05\x92J\x02\u044F\u045B\x07" +
		"\u010D\x02\x02\u0450\u0452\x05\xE2r\x02\u0451\u0450\x03\x02\x02\x02\u0451" +
		"\u0452\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0458\x05\x88" +
		"E\x02\u0454\u0455\x07\u010F\x02\x02\u0455\u0457\x05\x88E\x02\u0456\u0454" +
		"\x03\x02\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02" +
		"\u0458\u0459\x03\x02\x02\x02\u0459\u045C\x03\x02\x02\x02\u045A\u0458\x03" +
		"\x02\x02\x02\u045B\u0451\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C" +
		"\u045D\x03\x02\x02\x02\u045D\u045E\x07\u010E\x02\x02\u045E\u0466\x03\x02" +
		"\x02\x02\u045F\u0466\x05\xB0Y\x02\u0460\u0466\x05\x94K\x02\u0461\u0462" +
		"\x07\u010D\x02\x02\u0462\u0463\x05\x88E\x02\u0463\u0464\x07\u010E\x02" +
		"\x02\u0464\u0466\x03\x02\x02\x02\u0465\u040A\x03\x02\x02\x02\u0465\u0417" +
		"\x03\x02\x02\x02\u0465\u0424\x03\x02\x02\x02\u0465\u042B\x03\x02\x02\x02" +
		"\u0465\u0434\x03\x02\x02\x02\u0465\u043D\x03\x02\x02\x02\u0465\u0444\x03" +
		"\x02\x02\x02\u0465\u0445\x03\x02\x02\x02\u0465\u0446\x03\x02\x02\x02\u0465" +
		"\u044A\x03\x02\x02\x02\u0465\u044E\x03\x02\x02\x02\u0465\u045F\x03\x02" +
		"\x02\x02\u0465\u0460\x03\x02\x02\x02\u0465\u0461\x03\x02\x02\x02\u0466" +
		"\u046E\x03\x02\x02\x02\u0467\u0468\f\x06\x02\x02\u0468\u0469\x07\u010B" +
		"\x02\x02\u0469\u046A\x05\x8EH\x02\u046A\u046B\x07\u010C\x02\x02\u046B" +
		"\u046D\x03\x02\x02\x02\u046C\u0467\x03\x02\x02\x02\u046D\u0470\x03\x02" +
		"\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F" +
		"\x91\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0471\u0472\x05\xBC_" +
		"\x02\u0472\x93\x03\x02\x02\x02\u0473\u0474\x05\xBC_\x02\u0474\x95\x03" +
		"\x02\x02\x02\u0475\u0478\x05\xB0Y\x02\u0476\u0478\x05\x94K\x02\u0477\u0475" +
		"\x03\x02\x02\x02\u0477\u0476\x03\x02\x02\x02\u0478\x97\x03\x02\x02\x02" +
		"\u0479\u047C\x07(\x02\x02\u047A\u047D\x05\x9AN\x02\u047B\u047D\x05\x9E" +
		"P\x02\u047C\u047A\x03\x02\x02\x02\u047C\u047B\x03\x02\x02\x02\u047C\u047D" +
		"\x03\x02\x02\x02\u047D\x99\x03\x02\x02\x02\u047E\u0480\x05\x9CO\x02\u047F" +
		"\u0481\x05\xA0Q\x02\u0480\u047F\x03\x02\x02\x02\u0480\u0481\x03\x02\x02" +
		"\x02\u0481\x9B\x03\x02\x02\x02\u0482\u0483\x05\xA2R\x02\u0483\u0484\x05" +
		"\xB0Y\x02\u0484\u0486\x03\x02\x02\x02\u0485\u0482\x03\x02\x02\x02\u0486" +
		"\u0487\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0487\u0488\x03\x02" +
		"\x02\x02\u0488\x9D\x03\x02\x02\x02\u0489\u048C\x05\xA0Q\x02\u048A\u048D" +
		"\x05\x9CO\x02\u048B\u048D\x05\xA0Q\x02\u048C\u048A\x03\x02\x02\x02\u048C" +
		"\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\x9F\x03\x02\x02" +
		"\x02\u048E\u048F\x05\xA2R\x02\u048F\u0490\x05\xB0Y\x02\u0490\u0491\x07" +
		"c\x02\x02\u0491\u0492\x05\xB0Y\x02\u0492\xA1\x03\x02\x02\x02\u0493\u0495" +
		"\t\x12\x02\x02\u0494\u0493\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02" +
		"\u0495\u0496\x03\x02\x02\x02\u0496\u0499\t\x13\x02\x02\u0497\u0499\x07" +
		"\u0120\x02\x02\u0498\u0494\x03\x02\x02\x02\u0498\u0497\x03\x02\x02\x02" +
		"\u0499\xA3\x03\x02\x02\x02\u049A\u049C\x07\t\x02\x02\u049B\u049A\x03\x02" +
		"\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D" +
		"\u049F\x05\xB2Z\x02\u049E\u04A0\x05\xACW\x02\u049F\u049E\x03\x02\x02\x02" +
		"\u049F\u04A0\x03\x02\x02\x02\u04A0\xA5\x03\x02\x02\x02\u04A1\u04A3\x07" +
		"\t\x02\x02\u04A2\u04A1\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3" +
		"\u04A4\x03\x02\x02\x02\u04A4\u04A6\x05\xB2Z\x02\u04A5\u04A7\x05\xACW\x02" +
		"\u04A6\u04A5\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\xA7\x03" +
		"\x02\x02\x02\u04A8\u04A9\x05\xB0Y\x02\u04A9\u04AA\x05\xAAV\x02\u04AA\xA9" +
		"\x03\x02\x02\x02\u04AB\u04AC\x07y\x02\x02\u04AC\u04AE\x05\xB0Y\x02\u04AD" +
		"\u04AB\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04AD\x03\x02" +
		"\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1" +
		"\u04B3\x03\x02\x02\x02\u04B2\u04AD\x03\x02\x02\x02\u04B2\u04B1\x03\x02" +
		"\x02\x02\u04B3\xAB\x03\x02\x02\x02\u04B4\u04B5\x07\u010D\x02\x02\u04B5" +
		"\u04B6\x05\xAEX\x02\u04B6\u04B7\x07\u010E\x02\x02\u04B7\xAD\x03\x02\x02" +
		"\x02\u04B8\u04BD\x05\xB0Y\x02\u04B9\u04BA\x07\u010F\x02\x02\u04BA\u04BC" +
		"\x05\xB0Y\x02\u04BB\u04B9\x03\x02\x02\x02\u04BC\u04BF\x03\x02\x02\x02" +
		"\u04BD\u04BB\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\xAF\x03" +
		"\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04C0\u04C3\x05\xB2Z\x02\u04C1" +
		"\u04C3\x05\xE6t\x02\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C1\x03\x02\x02" +
		"\x02\u04C3\xB1\x03\x02\x02\x02\u04C4\u04C9\x05\xB4[\x02\u04C5\u04C9\x05" +
		"\xB6\\\x02\u04C6\u04C9\x05\xE4s\x02\u04C7\u04C9\x05\xE8u\x02\u04C8\u04C4" +
		"\x03\x02\x02\x02\u04C8\u04C5\x03\x02\x02\x02\u04C8\u04C6\x03\x02\x02\x02" +
		"\u04C8\u04C7\x03\x02\x02\x02\u04C9\xB3\x03\x02\x02\x02\u04CA\u04CB\t\x14" +
		"\x02\x02\u04CB\xB5\x03\x02\x02\x02\u04CC\u04CD\x07\u0120\x02\x02\u04CD" +
		"\xB7\x03\x02\x02\x02\u04CE\u04CF\x07*\x02\x02\u04CF\u04D0\x05\x88E\x02" +
		"\u04D0\u04D1\x07+\x02\x02\u04D1\u04D2\x05\x88E\x02\u04D2\xB9\x03\x02\x02" +
		"\x02\u04D3\u04D8\x05\xBC_\x02\u04D4\u04D5\x07\u010F\x02\x02\u04D5\u04D7" +
		"\x05\xBC_\x02\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04DA\x03\x02\x02\x02" +
		"\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\xBB\x03" +
		"\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DB\u04DF\x07\u0124\x02\x02" +
		"\u04DC\u04DE\x07\u011E\x02\x02\u04DD\u04DC\x03\x02\x02\x02\u04DE\u04E1" +
		"\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02" +
		"\u04E0\xBD\x03\x02\x02\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04E6\t\x15" +
		"\x02\x02\u04E3\u04E5\t\x16\x02\x02\u04E4\u04E3\x03\x02\x02\x02\u04E5\u04E8" +
		"\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E6\u04E4\x03\x02\x02\x02" +
		"\u04E7\xBF\x03\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E9\u04EA\x07" +
		"F\x02\x02\u04EA\u04EB\x05\xC6d\x02\u04EB\xC1\x03\x02\x02\x02\u04EC\u04ED" +
		"\x07v\x02\x02\u04ED\u04EE\x07\x1B\x02\x02\u04EE\u04EF\x07\x1D\x02\x02" +
		"\u04EF\xC3\x03\x02\x02\x02\u04F0\u04F1\x07v\x02\x02\u04F1\u04F2\x07\x1D" +
		"\x02\x02\u04F2\xC5\x03\x02\x02\x02\u04F3\u04F4\x07\u010D\x02\x02\u04F4" +
		"\u04F9\x05\xC8e\x02\u04F5\u04F6\x07\u010F\x02\x02\u04F6\u04F8\x05\xC8" +
		"e\x02\u04F7\u04F5\x03\x02\x02\x02\u04F8\u04FB\x03\x02\x02\x02\u04F9\u04F7" +
		"\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FC\x03\x02\x02\x02" +
		"\u04FB\u04F9\x03\x02\x02\x02\u04FC\u04FD\x07\u010E\x02\x02\u04FD\xC7\x03" +
		"\x02\x02\x02\u04FE\u0503\x05\xCAf\x02\u04FF\u0501\x07\u0102\x02\x02\u0500" +
		"\u04FF\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502\x03\x02" +
		"\x02\x02\u0502\u0504\x05\xCCg\x02\u0503\u0500\x03\x02\x02\x02\u0503\u0504" +
		"\x03\x02\x02\x02\u0504\xC9\x03\x02\x02\x02\u0505\u0509\x05\xB0Y\x02\u0506" +
		"\u0509\x05\x94K\x02\u0507\u0509\x07\u0120\x02\x02\u0508\u0505\x03\x02" +
		"\x02\x02\u0508\u0506\x03\x02\x02\x02\u0508\u0507\x03\x02\x02\x02\u0509" +
		"\xCB\x03\x02\x02\x02\u050A\u050F\x07\u0121\x02\x02\u050B\u050F\x07\u0122" +
		"\x02\x02\u050C\u050F\x05\xE0q\x02\u050D\u050F\x07\u0120\x02\x02\u050E" +
		"\u050A\x03\x02\x02\x02\u050E\u050B\x03\x02\x02\x02\u050E\u050C\x03\x02" +
		"\x02\x02\u050E\u050D\x03\x02\x02\x02\u050F\xCD\x03\x02\x02\x02\u0510\u0517" +
		"\x07\x19\x02\x02\u0511\u0512\x07\u0108\x02\x02\u0512\u0517\x07\u0108\x02" +
		"\x02\u0513\u0517\x07\x18\x02\x02\u0514\u0515\x07\u0107\x02\x02\u0515\u0517" +
		"\x07\u0107\x02\x02\u0516\u0510\x03\x02\x02\x02\u0516\u0511\x03\x02\x02" +
		"\x02\u0516\u0513\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02\u0517\xCF" +
		"\x03\x02\x02\x02\u0518\u0527\x07\u0102\x02\x02\u0519\u0527\x07\u0103\x02" +
		"\x02\u051A\u0527\x07\u0104\x02\x02\u051B\u051C\x07\u0104\x02\x02\u051C" +
		"\u0527\x07\u0102\x02\x02\u051D\u051E\x07\u0103\x02\x02\u051E\u0527\x07" +
		"\u0102\x02\x02\u051F\u0520\x07\u0104\x02\x02\u0520\u0527\x07\u0103\x02" +
		"\x02\u0521\u0522\x07\u0105\x02\x02\u0522\u0527\x07\u0102\x02\x02\u0523" +
		"\u0524\x07\u0104\x02\x02\u0524\u0525\x07\u0102\x02\x02\u0525\u0527\x07" +
		"\u0103\x02\x02\u0526\u0518\x03\x02\x02\x02\u0526\u0519\x03\x02\x02\x02" +
		"\u0526\u051A\x03\x02\x02\x02\u0526\u051B\x03\x02\x02\x02\u0526\u051D\x03" +
		"\x02\x02\x02\u0526\u051F\x03\x02\x02\x02\u0526\u0521\x03\x02\x02\x02\u0526" +
		"\u0523\x03\x02\x02\x02\u0527\xD1\x03\x02\x02\x02\u0528\u0529\x07\u0104" +
		"\x02\x02\u0529\u0530\x07\u0104\x02\x02\u052A\u052B\x07\u0103\x02\x02\u052B" +
		"\u0530\x07\u0103\x02\x02\u052C\u0530\x07\u0108\x02\x02\u052D\u0530\x07" +
		"\u0109\x02\x02\u052E\u0530\x07\u0107\x02\x02\u052F\u0528\x03\x02\x02\x02" +
		"\u052F\u052A\x03\x02\x02\x02\u052F\u052C\x03\x02\x02\x02\u052F\u052D\x03" +
		"\x02\x02\x02\u052F\u052E\x03\x02\x02\x02\u0530\xD3\x03\x02\x02\x02\u0531" +
		"\u0532\t\x17\x02\x02\u0532\xD5\x03\x02\x02\x02\u0533\u0534\t\x18\x02\x02" +
		"\u0534\xD7\x03\x02\x02\x02\u0535\u0536\x05\xBC_\x02\u0536\xD9\x03\x02" +
		"\x02\x02\u0537\u0544\x05\xDCo\x02\u0538\u0544\x05\xDEp\x02\u0539\u0544" +
		"\x05\x98M\x02\u053A\u053B\x07\u0118\x02\x02\u053B\u0544\x05\xDEp\x02\u053C" +
		"\u0544\x05\xE0q\x02\u053D\u0544\x07\u0122\x02\x02\u053E\u0544\x07\u0123" +
		"\x02\x02\u053F\u0541\x07\x1B\x02\x02\u0540\u053F\x03\x02\x02\x02\u0540" +
		"\u0541\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0544\x07\u0100" +
		"\x02\x02\u0543\u0537\x03\x02\x02\x02\u0543\u0538\x03\x02\x02\x02\u0543" +
		"\u0539\x03\x02\x02\x02\u0543\u053A\x03\x02\x02\x02\u0543\u053C\x03\x02" +
		"\x02\x02\u0543\u053D\x03\x02\x02\x02\u0543\u053E\x03\x02\x02\x02\u0543" +
		"\u0540\x03\x02\x02\x02\u0544\xDB\x03\x02\x02\x02\u0545\u0546\x07\u0120" +
		"\x02\x02\u0546\xDD\x03\x02\x02\x02\u0547\u0548\x07\u0121\x02\x02\u0548" +
		"\xDF\x03\x02\x02\x02\u0549\u054A\t\x0E\x02\x02\u054A\xE1\x03\x02\x02\x02" +
		"\u054B\u054C\t\x19\x02\x02\u054C\xE3\x03\x02\x02\x02\u054D\u054E\t\x1A" +
		"\x02\x02\u054E\xE5\x03\x02\x02\x02\u054F\u0550\t\x1B\x02\x02\u0550\xE7" +
		"\x03\x02\x02\x02\u0551\u0552\t\x1C\x02\x02\u0552\xE9\x03\x02\x02\x02\x9F" +
		"\xF2\xF5\xF7\u0100\u0110\u0114\u0120\u0130\u0135\u0139\u013D\u0141\u0144" +
		"\u0148\u014D\u0150\u0154\u015B\u016F\u0185\u0192\u0197\u019B\u01A5\u01AF" +
		"\u01B3\u01B9\u01BD\u01C1\u01C4\u01CD\u01D1\u01D8\u01DF\u01F1\u01F5\u01FC" +
		"\u0201\u0208\u020C\u0210\u0214\u021C\u0220\u0228\u022C\u0237\u0240\u024D" +
		"\u0250\u0254\u0257\u0259\u025E\u0262\u0265\u0269\u0272\u0278\u027B\u027E" +
		"\u0281\u0285\u028D\u0290\u0294\u0297\u02A2\u02A7\u02AA\u02AF\u02B3\u02B8" +
		"\u02BB\u02C8\u02D3\u02DE\u02E3\u02EF\u02FB\u0307\u0313\u0320\u0325\u0331" +
		"\u0336\u033B\u0343\u034B\u0355\u0358\u0361\u0364\u0367\u036D\u0371\u0377" +
		"\u0388\u038A\u0392\u0394\u0398\u03A0\u03A9\u03AF\u03BC\u03C1\u03CD\u03D2" +
		"\u03D5\u03DB\u03E0\u03E5\u03EA\u03F0\u0405\u0407\u040F\u0413\u041C\u0420" +
		"\u0430\u0439\u0451\u0458\u045B\u0465\u046E\u0477\u047C\u0480\u0487\u048C" +
		"\u0494\u0498\u049B\u049F\u04A2\u04A6\u04AF\u04B2\u04BD\u04C2\u04C8\u04D8" +
		"\u04DF\u04E6\u04F9\u0500\u0503\u0508\u050E\u0516\u0526\u052F\u0540\u0543";
	public static readonly _serializedATN: string = Utils.join(
		[
			FlinkSqlParser._serializedATNSegment0,
			FlinkSqlParser._serializedATNSegment1,
			FlinkSqlParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSqlParser.__ATN) {
			FlinkSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FlinkSqlParser._serializedATN));
		}

		return FlinkSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public sqlStatements(): SqlStatementsContext {
		return this.getRuleContext(0, SqlStatementsContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_statement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementsContext extends ParserRuleContext {
	public sqlStatement(): SqlStatementContext[];
	public sqlStatement(i: number): SqlStatementContext;
	public sqlStatement(i?: number): SqlStatementContext | SqlStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlStatementContext);
		} else {
			return this.getRuleContext(i, SqlStatementContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSqlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSqlStatements) {
			listener.exitSqlStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatements) {
			return visitor.visitSqlStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	public ddlStatement(): DdlStatementContext | undefined {
		return this.tryGetRuleContext(0, DdlStatementContext);
	}
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public describeStatement(): DescribeStatementContext | undefined {
		return this.tryGetRuleContext(0, DescribeStatementContext);
	}
	public explainStatement(): ExplainStatementContext | undefined {
		return this.tryGetRuleContext(0, ExplainStatementContext);
	}
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public showStatememt(): ShowStatememtContext | undefined {
		return this.tryGetRuleContext(0, ShowStatememtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSqlStatement) {
			listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DdlStatementContext extends ParserRuleContext {
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public createDatabase(): CreateDatabaseContext | undefined {
		return this.tryGetRuleContext(0, CreateDatabaseContext);
	}
	public createView(): CreateViewContext | undefined {
		return this.tryGetRuleContext(0, CreateViewContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createCatalog(): CreateCatalogContext | undefined {
		return this.tryGetRuleContext(0, CreateCatalogContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public alterDatabase(): AlterDatabaseContext | undefined {
		return this.tryGetRuleContext(0, AlterDatabaseContext);
	}
	public alterFunction(): AlterFunctionContext | undefined {
		return this.tryGetRuleContext(0, AlterFunctionContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropDatabase(): DropDatabaseContext | undefined {
		return this.tryGetRuleContext(0, DropDatabaseContext);
	}
	public dropView(): DropViewContext | undefined {
		return this.tryGetRuleContext(0, DropViewContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ddlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDdlStatement) {
			listener.enterDdlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDdlStatement) {
			listener.exitDdlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDdlStatement) {
			return visitor.visitDdlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DmlStatementContext extends ParserRuleContext {
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dmlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDmlStatement) {
			listener.enterDmlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDmlStatement) {
			listener.exitDmlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDmlStatement) {
			return visitor.visitDmlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeStatementContext extends ParserRuleContext {
	public DESCRIBE(): TerminalNode { return this.getToken(FlinkSqlParser.DESCRIBE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_describeStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDescribeStatement) {
			listener.enterDescribeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDescribeStatement) {
			listener.exitDescribeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeStatement) {
			return visitor.visitDescribeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainStatementContext extends ParserRuleContext {
	public EXPLAIN(): TerminalNode { return this.getToken(FlinkSqlParser.EXPLAIN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FOR(): TerminalNode { return this.getToken(FlinkSqlParser.FOR, 0); }
	public dmlStatement(): DmlStatementContext {
		return this.getRuleContext(0, DmlStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainStatement) {
			listener.enterExplainStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainStatement) {
			listener.exitExplainStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainStatement) {
			return visitor.visitExplainStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	public USE(): TerminalNode { return this.getToken(FlinkSqlParser.USE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CATALOG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUseStatement) {
			listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowStatememtContext extends ParserRuleContext {
	public SHOW(): TerminalNode { return this.getToken(FlinkSqlParser.SHOW, 0); }
	public CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CATALOGS, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATABASES, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLES, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FUNCTIONS, 0); }
	public VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VIEWS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_showStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterShowStatememt) {
			listener.enterShowStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitShowStatememt) {
			listener.exitShowStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStatememt) {
			return visitor.visitShowStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public columnOptionDefinition(): ColumnOptionDefinitionContext[];
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext;
	public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext | ColumnOptionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnOptionDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnOptionDefinitionContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public watermarkDefinition(): WatermarkDefinitionContext | undefined {
		return this.tryGetRuleContext(0, WatermarkDefinitionContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public selfDefinitionClause(): SelfDefinitionClauseContext | undefined {
		return this.tryGetRuleContext(0, SelfDefinitionClauseContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public partitionDefinition(): PartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PartitionDefinitionContext);
	}
	public likeDefinition(): LikeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LikeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnOptionDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public lengthOneDimension(): LengthOneDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneDimensionContext);
	}
	public columnAlias(): ColumnAliasContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnOptionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnOptionDefinition) {
			listener.enterColumnOptionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnOptionDefinition) {
			listener.exitColumnOptionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnOptionDefinition) {
			return visitor.visitColumnOptionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameContext extends ParserRuleContext {
	public plusUid(): PlusUidContext | undefined {
		return this.tryGetRuleContext(0, PlusUidContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnName) {
			listener.exitColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnName) {
			return visitor.visitColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameListContext extends ParserRuleContext {
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnNameList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnNameList) {
			listener.enterColumnNameList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnNameList) {
			listener.exitColumnNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNameList) {
			return visitor.visitColumnNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnTypeContext extends ParserRuleContext {
	public _typeName!: Token;
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CHAR, 0); }
	public VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VARCHAR, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BINARY, 0); }
	public VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VARBINARY, 0); }
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BYTES, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DECIMAL, 0); }
	public TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TINYINT, 0); }
	public SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SMALLINT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INT, 0); }
	public BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIGINT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TIMESTAMP, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ARRAY, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MAP, 0); }
	public MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MULTISET, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROW, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BOOLEAN, 0); }
	public RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RAW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULL, 0); }
	public DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATETIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnType; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnType) {
			listener.enterColumnType(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnType) {
			listener.exitColumnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnType) {
			return visitor.visitColumnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext {
		return this.getRuleContext(0, DecimalLiteralContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthOneDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthOneDimension) {
			listener.enterLengthOneDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthOneDimension) {
			listener.exitLengthOneDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthOneDimension) {
			return visitor.visitLengthOneDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentSpecContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(FlinkSqlParser.COMMENT, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_commentSpec; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCommentSpec) {
			listener.enterCommentSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCommentSpec) {
			listener.exitCommentSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentSpec) {
			return visitor.visitCommentSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WatermarkDefinitionContext extends ParserRuleContext {
	public WATERMARK(): TerminalNode { return this.getToken(FlinkSqlParser.WATERMARK, 0); }
	public FOR(): TerminalNode { return this.getToken(FlinkSqlParser.FOR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode { return this.getToken(FlinkSqlParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_watermarkDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWatermarkDefinition) {
			listener.enterWatermarkDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWatermarkDefinition) {
			listener.exitWatermarkDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWatermarkDefinition) {
			return visitor.visitWatermarkDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	public PRIMARY(): TerminalNode { return this.getToken(FlinkSqlParser.PRIMARY, 0); }
	public KEY(): TerminalNode { return this.getToken(FlinkSqlParser.KEY, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONSTRAINT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableConstraint) {
			listener.enterTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableConstraint) {
			listener.exitTableConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableConstraint) {
			return visitor.visitTableConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfDefinitionClauseContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(FlinkSqlParser.PERIOD, 0); }
	public FOR(): TerminalNode { return this.getToken(FlinkSqlParser.FOR, 0); }
	public SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSqlParser.SYSTEM_TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selfDefinitionClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelfDefinitionClause) {
			listener.enterSelfDefinitionClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelfDefinitionClause) {
			listener.exitSelfDefinitionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelfDefinitionClause) {
			return visitor.visitSelfDefinitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionDefinitionContext extends ParserRuleContext {
	public PARTITIONED(): TerminalNode { return this.getToken(FlinkSqlParser.PARTITIONED, 0); }
	public BY(): TerminalNode { return this.getToken(FlinkSqlParser.BY, 0); }
	public transformList(): TransformListContext {
		return this.getRuleContext(0, TransformListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_partitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPartitionDefinition) {
			listener.enterPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPartitionDefinition) {
			listener.exitPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionDefinition) {
			return visitor.visitPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public transform(): TransformContext[];
	public transform(i: number): TransformContext;
	public transform(i?: number): TransformContext | TransformContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformContext);
		} else {
			return this.getRuleContext(i, TransformContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transformList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTransformList) {
			listener.enterTransformList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTransformList) {
			listener.exitTransformList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTransformList) {
			return visitor.visitTransformList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transform; }
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentityTransform) {
			listener.enterIdentityTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentityTransform) {
			listener.exitIdentityTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentityTransform) {
			return visitor.visitIdentityTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyTransformContext extends TransformContext {
	public _transformName!: IdentifierContext;
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public transformArgument(): TransformArgumentContext[];
	public transformArgument(i: number): TransformArgumentContext;
	public transformArgument(i?: number): TransformArgumentContext | TransformArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformArgumentContext);
		} else {
			return this.getRuleContext(i, TransformArgumentContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterApplyTransform) {
			listener.enterApplyTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitApplyTransform) {
			listener.exitApplyTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitApplyTransform) {
			return visitor.visitApplyTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transformArgument; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTransformArgument) {
			listener.enterTransformArgument(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTransformArgument) {
			listener.exitTransformArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTransformArgument) {
			return visitor.visitTransformArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeDefinitionContext extends ParserRuleContext {
	public LIKE(): TerminalNode { return this.getToken(FlinkSqlParser.LIKE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public likeOption(): LikeOptionContext {
		return this.getRuleContext(0, LikeOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likeDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikeDefinition) {
			listener.enterLikeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikeDefinition) {
			listener.exitLikeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeDefinition) {
			return visitor.visitLikeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeOptionContext extends ParserRuleContext {
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INCLUDING, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLUDING, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALL, 0); }
	public CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONSTRAINTS, 0); }
	public GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GENERATED, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OPTIONS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likeOption; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikeOption) {
			listener.enterLikeOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikeOption) {
			listener.exitLikeOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeOption) {
			return visitor.visitLikeOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateCatalogContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.CREATE, 0); }
	public CATALOG(): TerminalNode { return this.getToken(FlinkSqlParser.CATALOG, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createCatalog; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateCatalog) {
			listener.enterCreateCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateCatalog) {
			listener.exitCreateCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateCatalog) {
			return visitor.visitCreateCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateDatabaseContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.CREATE, 0); }
	public DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateDatabase) {
			listener.enterCreateDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateDatabase) {
			listener.exitCreateDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateDatabase) {
			return visitor.visitCreateDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateViewContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public AS(): TerminalNode { return this.getToken(FlinkSqlParser.AS, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.CREATE, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public AS(): TerminalNode { return this.getToken(FlinkSqlParser.AS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LANGUAGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateFunction) {
			listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterTableContext extends ParserRuleContext {
	public ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SetKeyValueDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterTable) {
			listener.enterAlterTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterTable) {
			listener.exitAlterTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTable) {
			return visitor.visitAlterTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameDefinitionContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(FlinkSqlParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(FlinkSqlParser.TO, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_renameDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRenameDefinition) {
			listener.enterRenameDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRenameDefinition) {
			listener.exitRenameDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameDefinition) {
			return visitor.visitRenameDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetKeyValueDefinitionContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(FlinkSqlParser.SET, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setKeyValueDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetKeyValueDefinition) {
			listener.enterSetKeyValueDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetKeyValueDefinition) {
			listener.exitSetKeyValueDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetKeyValueDefinition) {
			return visitor.visitSetKeyValueDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDatabaseContext extends ParserRuleContext {
	public ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.ALTER, 0); }
	public DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getRuleContext(0, SetKeyValueDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterDatabase) {
			listener.enterAlterDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterDatabase) {
			listener.exitAlterDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterDatabase) {
			return visitor.visitAlterDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterFunctionContext extends ParserRuleContext {
	public ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.ALTER, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public AS(): TerminalNode { return this.getToken(FlinkSqlParser.AS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LANGUAGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterFunction) {
			listener.enterAlterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterFunction) {
			listener.exitAlterFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterFunction) {
			return visitor.visitAlterFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropTableContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(FlinkSqlParser.DROP, 0); }
	public TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropDatabaseContext extends ParserRuleContext {
	public _dropType!: Token;
	public DROP(): TerminalNode { return this.getToken(FlinkSqlParser.DROP, 0); }
	public DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RESTRICT, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CASCADE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropDatabase) {
			listener.enterDropDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropDatabase) {
			listener.exitDropDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropDatabase) {
			return visitor.visitDropDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropViewContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(FlinkSqlParser.DROP, 0); }
	public VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropView) {
			listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropFunctionContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(FlinkSqlParser.DROP, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropFunction) {
			listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public INSERT(): TerminalNode { return this.getToken(FlinkSqlParser.INSERT, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INTO, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OVERWRITE, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public valuesDefinition(): ValuesDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValuesDefinitionContext);
	}
	public insertPartitionDefinition(): InsertPartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InsertPartitionDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertPartitionDefinitionContext extends ParserRuleContext {
	public PARTITION(): TerminalNode { return this.getToken(FlinkSqlParser.PARTITION, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertPartitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertPartitionDefinition) {
			listener.enterInsertPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertPartitionDefinition) {
			listener.exitInsertPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertPartitionDefinition) {
			return visitor.visitInsertPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesDefinitionContext extends ParserRuleContext {
	public VALUES(): TerminalNode { return this.getToken(FlinkSqlParser.VALUES, 0); }
	public valuesRowDefinition(): ValuesRowDefinitionContext[];
	public valuesRowDefinition(i: number): ValuesRowDefinitionContext;
	public valuesRowDefinition(i?: number): ValuesRowDefinitionContext | ValuesRowDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValuesRowDefinitionContext);
		} else {
			return this.getRuleContext(i, ValuesRowDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesDefinition) {
			listener.enterValuesDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesDefinition) {
			listener.exitValuesDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesDefinition) {
			return visitor.visitValuesDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesRowDefinitionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesRowDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesRowDefinition) {
			listener.enterValuesRowDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesRowDefinition) {
			listener.exitValuesRowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesRowDefinition) {
			return visitor.visitValuesRowDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryStatementContext extends ParserRuleContext {
	public _left!: QueryStatementContext;
	public _operator!: Token;
	public _right!: QueryStatementContext;
	public valuesCaluse(): ValuesCaluseContext | undefined {
		return this.tryGetRuleContext(0, ValuesCaluseContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext[];
	public queryStatement(i: number): QueryStatementContext;
	public queryStatement(i?: number): QueryStatementContext | QueryStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryStatementContext);
		} else {
			return this.getRuleContext(i, QueryStatementContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INTERSECT, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNION, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCEPT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALL, 0); }
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public selectStatement(): SelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_queryStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQueryStatement) {
			listener.enterQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQueryStatement) {
			listener.exitQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryStatement) {
			return visitor.visitQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesCaluseContext extends ParserRuleContext {
	public VALUES(): TerminalNode { return this.getToken(FlinkSqlParser.VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesCaluse; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesCaluse) {
			listener.enterValuesCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesCaluse) {
			listener.exitValuesCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesCaluse) {
			return visitor.visitValuesCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStatementContext extends ParserRuleContext {
	public selectClause(): SelectClauseContext {
		return this.getRuleContext(0, SelectClauseContext);
	}
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selectStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelectStatement) {
			listener.enterSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelectStatement) {
			listener.exitSelectStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectStatement) {
			return visitor.visitSelectStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectClauseContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(FlinkSqlParser.SELECT, 0); }
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selectClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelectClause) {
			listener.enterSelectClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelectClause) {
			listener.exitSelectClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectClause) {
			return visitor.visitSelectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectItemDefinitionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_projectItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterProjectItemDefinition) {
			listener.enterProjectItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitProjectItemDefinition) {
			listener.exitProjectItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitProjectItemDefinition) {
			return visitor.visitProjectItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromClauseContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(FlinkSqlParser.FROM, 0); }
	public tableExpression(): TableExpressionContext {
		return this.getRuleContext(0, TableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_fromClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFromClause) {
			listener.exitFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableExpressionContext extends ParserRuleContext {
	public tableReference(): TableReferenceContext[];
	public tableReference(i: number): TableReferenceContext;
	public tableReference(i?: number): TableReferenceContext | TableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableReferenceContext);
		} else {
			return this.getRuleContext(i, TableReferenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public tableExpression(): TableExpressionContext[];
	public tableExpression(i: number): TableExpressionContext;
	public tableExpression(i?: number): TableExpressionContext | TableExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableExpressionContext);
		} else {
			return this.getRuleContext(i, TableExpressionContext);
		}
	}
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.JOIN, 0); }
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NATURAL, 0); }
	public joinCondition(): JoinConditionContext | undefined {
		return this.tryGetRuleContext(0, JoinConditionContext);
	}
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FULL, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INNER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableExpression) {
			listener.enterTableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableExpression) {
			listener.exitTableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableExpression) {
			return visitor.visitTableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableReferenceContext extends ParserRuleContext {
	public tablePrimary(): TablePrimaryContext {
		return this.getRuleContext(0, TablePrimaryContext);
	}
	public tableAlias(): TableAliasContext | undefined {
		return this.tryGetRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableReference; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableReference) {
			listener.enterTableReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableReference) {
			listener.exitTableReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableReference) {
			return visitor.visitTableReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePrimaryContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLE, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LATERAL, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.LR_BRACKET, i);
		}
	}
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.RR_BRACKET, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNNEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePrimary; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePrimary) {
			listener.enterTablePrimary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePrimary) {
			listener.exitTablePrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePrimary) {
			return visitor.visitTablePrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinConditionContext extends ParserRuleContext {
	public ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.USING, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_joinCondition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJoinCondition) {
			listener.enterJoinCondition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJoinCondition) {
			listener.exitJoinCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinCondition) {
			return visitor.visitJoinCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(FlinkSqlParser.WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(FlinkSqlParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(FlinkSqlParser.BY, 0); }
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupByClause) {
			listener.exitGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupItemDefinitionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CUBE, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLLUP, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GROUPING, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SETS, 0); }
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupItemDefinition) {
			listener.enterGroupItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupItemDefinition) {
			listener.exitGroupItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupItemDefinition) {
			return visitor.visitGroupItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	public HAVING(): TerminalNode { return this.getToken(FlinkSqlParser.HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_havingClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitHavingClause) {
			listener.exitHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByCaluseContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(FlinkSqlParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(FlinkSqlParser.BY, 0); }
	public orderItemDefition(): OrderItemDefitionContext[];
	public orderItemDefition(i: number): OrderItemDefitionContext;
	public orderItemDefition(i?: number): OrderItemDefitionContext | OrderItemDefitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderItemDefitionContext);
		} else {
			return this.getRuleContext(i, OrderItemDefitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_orderByCaluse; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOrderByCaluse) {
			listener.enterOrderByCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOrderByCaluse) {
			listener.exitOrderByCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByCaluse) {
			return visitor.visitOrderByCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderItemDefitionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_orderItemDefition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOrderItemDefition) {
			listener.enterOrderItemDefition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOrderItemDefition) {
			listener.exitOrderItemDefition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOrderItemDefition) {
			return visitor.visitOrderItemDefition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public _limit!: ExpressionContext;
	public LIMIT(): TerminalNode { return this.getToken(FlinkSqlParser.LIMIT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowClauseContext extends ParserRuleContext {
	public WINDOW(): TerminalNode { return this.getToken(FlinkSqlParser.WINDOW, 0); }
	public namedWindow(): NamedWindowContext[];
	public namedWindow(i: number): NamedWindowContext;
	public namedWindow(i?: number): NamedWindowContext | NamedWindowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedWindowContext);
		} else {
			return this.getRuleContext(i, NamedWindowContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowClause) {
			listener.enterWindowClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowClause) {
			listener.exitWindowClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowClause) {
			return visitor.visitWindowClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedWindowContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public AS(): TerminalNode { return this.getToken(FlinkSqlParser.AS, 0); }
	public windowSpec(): WindowSpecContext {
		return this.getRuleContext(0, WindowSpecContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_namedWindow; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNamedWindow) {
			listener.enterNamedWindow(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNamedWindow) {
			listener.exitNamedWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedWindow) {
			return visitor.visitNamedWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ORDER, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BY);
		} else {
			return this.getToken(FlinkSqlParser.BY, i);
		}
	}
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITION, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowSpec; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowSpec) {
			listener.enterWindowSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowSpec) {
			listener.exitWindowSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowSpec) {
			return visitor.visitWindowSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrder!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DESC, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LAST, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sortItem; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSortItem) {
			listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RANGE, 0); }
	public frameBound(): FrameBoundContext {
		return this.getRuleContext(0, FrameBoundContext);
	}
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROWS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PRECEDING(): TerminalNode { return this.getToken(FlinkSqlParser.PRECEDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_frameBound; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFrameBound) {
			listener.enterFrameBound(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFrameBound) {
			listener.exitFrameBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFrameBound) {
			return visitor.visitFrameBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_expression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(FlinkSqlParser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends BooleanExpressionContext {
	public EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.EXISTS, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public _pattern!: ValueExpressionContext;
	public _quantifier!: Token;
	public _right!: ValueExpressionContext;
	public AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AND, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BETWEEN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NOT, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXISTS, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RLIKE, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIKE, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ANY, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALL, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IS, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FALSE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FROM, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_predicate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_NOT_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PENCENT_SIGN, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public DOUBLE_VERTICAL_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0); }
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_OR_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(FlinkSqlParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(FlinkSqlParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(FlinkSqlParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(FlinkSqlParser.END, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public CAST(): TerminalNode { return this.getToken(FlinkSqlParser.CAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(FlinkSqlParser.AS, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstContext extends PrimaryExpressionContext {
	public FIRST(): TerminalNode { return this.getToken(FlinkSqlParser.FIRST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IGNORE, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFirst) {
			listener.enterFirst(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFirst) {
			listener.exitFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFirst) {
			return visitor.visitFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LastContext extends PrimaryExpressionContext {
	public LAST(): TerminalNode { return this.getToken(FlinkSqlParser.LAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IGNORE, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLast) {
			listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	public POSITION(): TerminalNode { return this.getToken(FlinkSqlParser.POSITION, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public IN(): TerminalNode { return this.getToken(FlinkSqlParser.IN, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstantDefault) {
			listener.exitConstantDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	public ASTERISK_SIGN(): TerminalNode { return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOT, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStar) {
			listener.exitStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	public LS_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LS_BRACKET, 0); }
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RS_BRACKET, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_functionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DereferenceDefinitionContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dereferenceDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDereferenceDefinition) {
			listener.enterDereferenceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDereferenceDefinition) {
			listener.exitDereferenceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDereferenceDefinition) {
			return visitor.visitDereferenceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public INTERVAL(): TerminalNode { return this.getToken(FlinkSqlParser.INTERVAL, 0); }
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_interval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInterval) {
			listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getRuleContext(0, MultiUnitsIntervalContext);
	}
	public unitToUnitInterval(): UnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, UnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingMultiUnitsInterval) {
			listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingMultiUnitsInterval) {
			listener.exitErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingMultiUnitsInterval) {
			return visitor.visitErrorCapturingMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiUnitsIntervalContext extends ParserRuleContext {
	public intervalValue(): IntervalValueContext[];
	public intervalValue(i: number): IntervalValueContext;
	public intervalValue(i?: number): IntervalValueContext | IntervalValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalValueContext);
		} else {
			return this.getRuleContext(i, IntervalValueContext);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_multiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMultiUnitsInterval) {
			listener.enterMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMultiUnitsInterval) {
			listener.exitMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMultiUnitsInterval) {
			return visitor.visitMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingUnitToUnitIntervalContext extends ParserRuleContext {
	public _body!: UnitToUnitIntervalContext;
	public _error1!: MultiUnitsIntervalContext;
	public _error2!: UnitToUnitIntervalContext;
	public unitToUnitInterval(): UnitToUnitIntervalContext[];
	public unitToUnitInterval(i: number): UnitToUnitIntervalContext;
	public unitToUnitInterval(i?: number): UnitToUnitIntervalContext | UnitToUnitIntervalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitToUnitIntervalContext);
		} else {
			return this.getRuleContext(i, UnitToUnitIntervalContext);
		}
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, MultiUnitsIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingUnitToUnitInterval) {
			listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingUnitToUnitInterval) {
			listener.exitErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingUnitToUnitInterval) {
			return visitor.visitErrorCapturingUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitToUnitIntervalContext extends ParserRuleContext {
	public _value!: IntervalValueContext;
	public _from!: IdentifierContext;
	public _to!: IdentifierContext;
	public TO(): TerminalNode { return this.getToken(FlinkSqlParser.TO, 0); }
	public intervalValue(): IntervalValueContext {
		return this.getRuleContext(0, IntervalValueContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnitToUnitInterval) {
			listener.enterUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnitToUnitInterval) {
			listener.exitUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnitToUnitInterval) {
			return visitor.visitUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalValueContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_intervalValue; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIntervalValue) {
			listener.enterIntervalValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIntervalValue) {
			listener.exitIntervalValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalValue) {
			return visitor.visitIntervalValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasContext extends ParserRuleContext {
	public strictIdentifier(): StrictIdentifierContext {
		return this.getRuleContext(0, StrictIdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnAlias; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnAlias) {
			listener.enterColumnAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnAlias) {
			listener.exitColumnAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnAlias) {
			return visitor.visitColumnAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableAliasContext extends ParserRuleContext {
	public strictIdentifier(): StrictIdentifierContext {
		return this.getRuleContext(0, StrictIdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableAlias; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableAlias) {
			listener.exitTableAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingIdentifier) {
			listener.enterErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingIdentifier) {
			listener.exitErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingIdentifier) {
			return visitor.visitErrorCapturingIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingIdentifierExtra; }
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.MINUS);
		} else {
			return this.getToken(FlinkSqlParser.MINUS, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorIdent) {
			listener.enterErrorIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorIdent) {
			listener.exitErrorIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorIdent) {
			return visitor.visitErrorIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRealIdent) {
			listener.enterRealIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRealIdent) {
			listener.exitRealIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRealIdent) {
			return visitor.visitRealIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public identifierSeq(): IdentifierSeqContext {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSeqContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifierSeq; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifierSeq) {
			listener.exitIdentifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public strictIdentifier(): StrictIdentifierContext | undefined {
		return this.tryGetRuleContext(0, StrictIdentifierContext);
	}
	public strictNonReserved(): StrictNonReservedContext | undefined {
		return this.tryGetRuleContext(0, StrictNonReservedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_strictIdentifier; }
	public copyFrom(ctx: StrictIdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierAlternativeContext extends StrictIdentifierContext {
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnquotedIdentifierAlternative) {
			listener.enterUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnquotedIdentifierAlternative) {
			listener.exitUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifierAlternative) {
			return visitor.visitUnquotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnsiNonReservedKeywordsContext extends StrictIdentifierContext {
	public ansiNonReserved(): AnsiNonReservedContext {
		return this.getRuleContext(0, AnsiNonReservedContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAnsiNonReservedKeywords) {
			listener.enterAnsiNonReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAnsiNonReservedKeywords) {
			listener.exitAnsiNonReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAnsiNonReservedKeywords) {
			return visitor.visitAnsiNonReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonReservedKeywordsContext extends StrictIdentifierContext {
	public nonReserved(): NonReservedContext {
		return this.getRuleContext(0, NonReservedContext);
	}
	constructor(ctx: StrictIdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNonReservedKeywords) {
			listener.enterNonReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNonReservedKeywords) {
			listener.exitNonReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywords) {
			return visitor.visitNonReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnquotedIdentifierContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public ID_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ID_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unquotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	public WHEN(): TerminalNode { return this.getToken(FlinkSqlParser.WHEN, 0); }
	public THEN(): TerminalNode { return this.getToken(FlinkSqlParser.THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UidListContext extends ParserRuleContext {
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_uidList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUidList) {
			listener.enterUidList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUidList) {
			listener.exitUidList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUidList) {
			return visitor.visitUidList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UidContext extends ParserRuleContext {
	public ID_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.ID_LITERAL, 0); }
	public DOT_ID(): TerminalNode[];
	public DOT_ID(i: number): TerminalNode;
	public DOT_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.DOT_ID);
		} else {
			return this.getToken(FlinkSqlParser.DOT_ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_uid; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUid) {
			listener.enterUid(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUid) {
			listener.exitUid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUid) {
			return visitor.visitUid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlusUidContext extends ParserRuleContext {
	public ID_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ID_LITERAL, 0); }
	public PLUS_ID_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PLUS_ID_LITERAL, 0); }
	public DOT_ID(): TerminalNode[];
	public DOT_ID(i: number): TerminalNode;
	public DOT_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.DOT_ID);
		} else {
			return this.getToken(FlinkSqlParser.DOT_ID, i);
		}
	}
	public PLUS_DOT_ID(): TerminalNode[];
	public PLUS_DOT_ID(i: number): TerminalNode;
	public PLUS_DOT_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.PLUS_DOT_ID);
		} else {
			return this.getToken(FlinkSqlParser.PLUS_DOT_ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_plusUid; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPlusUid) {
			listener.enterPlusUid(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPlusUid) {
			listener.exitPlusUid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPlusUid) {
			return visitor.visitPlusUid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithOptionContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(FlinkSqlParser.WITH, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withOption; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithOption) {
			listener.enterWithOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithOption) {
			listener.exitWithOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithOption) {
			return visitor.visitWithOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(FlinkSqlParser.IF, 0); }
	public NOT(): TerminalNode { return this.getToken(FlinkSqlParser.NOT, 0); }
	public EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ifNotExists; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIfNotExists) {
			listener.enterIfNotExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIfNotExists) {
			listener.exitIfNotExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIfNotExists) {
			return visitor.visitIfNotExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(FlinkSqlParser.IF, 0); }
	public EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ifExists; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIfExists) {
			listener.enterIfExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIfExists) {
			listener.exitIfExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIfExists) {
			return visitor.visitIfExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyList) {
			listener.enterTablePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyList) {
			listener.exitTablePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyList) {
			return visitor.visitTablePropertyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public _key!: TablePropertyKeyContext;
	public _value!: TablePropertyValueContext;
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public tablePropertyValue(): TablePropertyValueContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyValueContext);
	}
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyKeyContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyKey; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyKey) {
			listener.enterTablePropertyKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyKey) {
			listener.exitTablePropertyKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyKey) {
			return visitor.visitTablePropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyValueContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyValue; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyValue) {
			listener.enterTablePropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyValue) {
			listener.exitTablePropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyValue) {
			return visitor.visitTablePropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AND, 0); }
	public BIT_AND_OP(): TerminalNode[];
	public BIT_AND_OP(i: number): TerminalNode;
	public BIT_AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BIT_AND_OP);
		} else {
			return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
		}
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OR, 0); }
	public BIT_OR_OP(): TerminalNode[];
	public BIT_OR_OP(i: number): TerminalNode;
	public BIT_OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BIT_OR_OP);
		} else {
			return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_logicalOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalOperator) {
			listener.exitLogicalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalOperator) {
			return visitor.visitLogicalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
	public GREATER_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public LESS_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitOperatorContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode[];
	public LESS_SYMBOL(i: number): TerminalNode;
	public LESS_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
		} else {
			return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
		}
	}
	public GREATER_SYMBOL(): TerminalNode[];
	public GREATER_SYMBOL(i: number): TerminalNode;
	public GREATER_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
		} else {
			return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
		}
	}
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_OR_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_bitOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterBitOperator) {
			listener.enterBitOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitBitOperator) {
			listener.exitBitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitBitOperator) {
			return visitor.visitBitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathOperatorContext extends ParserRuleContext {
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PENCENT_SIGN, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public DOUBLE_HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_mathOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMathOperator) {
			listener.enterMathOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMathOperator) {
			listener.exitMathOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMathOperator) {
			return visitor.visitMathOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_NOT_OP, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FullColumnNameContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_fullColumnName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFullColumnName) {
			listener.enterFullColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFullColumnName) {
			listener.exitFullColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFullColumnName) {
			return visitor.visitFullColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public decimalLiteral(): DecimalLiteralContext | undefined {
		return this.tryGetRuleContext(0, DecimalLiteralContext);
	}
	public interval(): IntervalContext | undefined {
		return this.tryGetRuleContext(0, IntervalContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public BIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_STRING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_constant; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalLiteralContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_decimalLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DISTINCT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnsiNonReservedContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AFTER, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALTER, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ANALYZE, 0); }
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ANTI, 0); }
	public ARCHIVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ARCHIVE, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ARRAY, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASC, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AT, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BETWEEN, 0); }
	public BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIGINT, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BINARY, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BOOLEAN, 0); }
	public BUCKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BUCKET, 0); }
	public BUCKETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BUCKETS, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BY, 0); }
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BYTES, 0); }
	public CACHE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CACHE, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CASCADE, 0); }
	public CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CATALOG, 0); }
	public CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CATALOGS, 0); }
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CHANGE, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CHAR, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CLEAR, 0); }
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CLUSTER, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CLUSTERED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CODEGEN, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COLLECTION, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COLUMNS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMENT, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMIT, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMPACT, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMPACTIONS, 0); }
	public COMPUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMPUTE, 0); }
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONCATENATE, 0); }
	public CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONSTRAINTS, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COST, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CUBE, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CURRENT, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATA, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATABASE, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATABASES, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATE, 0); }
	public DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATETIME, 0); }
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DBPROPERTIES, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DECIMAL, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DEFINED, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DELETE, 0); }
	public DELIMITED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DELIMITED, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DESCRIBE, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DFS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIRECTORIES, 0); }
	public DIRECTORY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIRECTORY, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DISTRIBUTE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIV, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DROP, 0); }
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ESCAPED, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCHANGE, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLUDING, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXISTS, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXPLAIN, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXPORT, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXTENDED, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXTERNAL, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXTRACT, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FIELDS, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FILEFORMAT, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FIRST, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FLOAT, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FOLLOWING, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FORMAT, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FORMATTED, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FUNCTION, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FUNCTIONS, 0); }
	public GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GENERATED, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GLOBAL, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GROUPING, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IF, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IGNORE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IMPORT, 0); }
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INCLUDING, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INDEX, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INDEXES, 0); }
	public INPATH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INPATH, 0); }
	public INPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INPUTFORMAT, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INSERT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INT, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INTERVAL, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ITEMS, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KEY, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KEYS, 0); }
	public LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LANGUAGE, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LAST, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LATERAL, 0); }
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LAZY, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIKE, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIMIT, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LINES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIST, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOAD, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCAL, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCATION, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCK, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCKS, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOGICAL, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MACRO, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MAP, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MATCH, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MINUS, 0); }
	public MSCK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MSCK, 0); }
	public MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MULTISET, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NEXT, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NO, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULL, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULLS, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OF, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OPTION, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OPTIONS, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OUT, 0); }
	public OUTPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OUTPUTFORMAT, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OVER, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OVERWRITE, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITION, 0); }
	public PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITIONED, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITIONS, 0); }
	public PERCENTLIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PERCENTLIT, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PERIOD, 0); }
	public PIVOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PIVOT, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.POSITION, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PRECEDING, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PRINCIPALS, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PURGE, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RANGE, 0); }
	public RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RAW, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RECORDREADER, 0); }
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RECORDWRITER, 0); }
	public RECOVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RECOVER, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REDUCE, 0); }
	public REFRESH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REFRESH, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RENAME, 0); }
	public REPAIR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REPAIR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REPLACE, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RESET, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RESTRICT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REVOKE, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RLIKE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLE, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLES, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLLBACK, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLLUP, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROW, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROWS, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SEMI, 0); }
	public SEPARATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SEPARATED, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SERDE, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SERDEPROPERTIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SET, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SETMINUS, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SETS, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SHOW, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SKEWED, 0); }
	public SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SMALLINT, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SORT, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SORTED, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.START, 0); }
	public STATISTICS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STATISTICS, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STORED, 0); }
	public STRATIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRATIFY, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRUCT, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM, 0); }
	public SYSTEM_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM_TIME, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLES, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLESAMPLE, 0); }
	public TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TBLPROPERTIES, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public TERMINATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TERMINATED, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TIMESTAMP, 0); }
	public TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TINYINT, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TOUCH, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRANSACTION, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRANSACTIONS, 0); }
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRANSFORM, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRUE, 0); }
	public TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRUNCATE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNARCHIVE, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNBOUNDED, 0); }
	public UNCACHE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNCACHE, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNLOCK, 0); }
	public UNSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNSET, 0); }
	public UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNNEST, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.USE, 0); }
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VALUES, 0); }
	public VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VARBINARY, 0); }
	public VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VARCHAR, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VIEW, 0); }
	public VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VIEWS, 0); }
	public WATERMARK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WATERMARK, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WINDOW, 0); }
	public WITHIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WITHIN, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ansiNonReserved; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAnsiNonReserved) {
			listener.enterAnsiNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAnsiNonReserved) {
			listener.exitAnsiNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAnsiNonReserved) {
			return visitor.visitAnsiNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictNonReservedContext extends ParserRuleContext {
	public ANTI(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ANTI, 0); }
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CROSS, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCEPT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FULL, 0); }
	public INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INNER, 0); }
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INTERSECT, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.JOIN, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LEFT, 0); }
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NATURAL, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ON, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RIGHT, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SEMI, 0); }
	public SETMINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SETMINUS, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNION, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.USING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_strictNonReserved; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStrictNonReserved) {
			listener.enterStrictNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStrictNonReserved) {
			listener.exitStrictNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStrictNonReserved) {
			return visitor.visitStrictNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AFTER, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALL, 0); }
	public ALTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ALTER, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ANALYZE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AND, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ANY, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COLUMNS, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ARRAY, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASC, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.AT, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BETWEEN, 0); }
	public BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIGINT, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BINARY, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BOOLEAN, 0); }
	public BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BOTH, 0); }
	public BUCKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BUCKET, 0); }
	public BUCKETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BUCKETS, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BY, 0); }
	public BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BYTES, 0); }
	public CACHE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CACHE, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CASCADE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CASE, 0); }
	public CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CAST, 0); }
	public CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CATALOG, 0); }
	public CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CATALOGS, 0); }
	public CHANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CHANGE, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CHAR, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CLEAR, 0); }
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CLUSTER, 0); }
	public CLUSTERED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CLUSTERED, 0); }
	public CODEGEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CODEGEN, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COLLECTION, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COLUMN, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMENT, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMIT, 0); }
	public COMPACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMPACT, 0); }
	public COMPACTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMPACTIONS, 0); }
	public COMPUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMPUTE, 0); }
	public CONCATENATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONCATENATE, 0); }
	public CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONSTRAINT, 0); }
	public CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CONSTRAINTS, 0); }
	public COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COST, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CREATE, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CUBE, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.CURRENT, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATA, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATABASE, 0); }
	public DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATABASES, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATE, 0); }
	public DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DATETIME, 0); }
	public DBPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DBPROPERTIES, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DECIMAL, 0); }
	public DEFINED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DEFINED, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DELETE, 0); }
	public DELIMITED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DELIMITED, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DESC, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DESCRIBE, 0); }
	public DFS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DFS, 0); }
	public DIRECTORIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIRECTORIES, 0); }
	public DIRECTORY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIRECTORY, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DISTINCT, 0); }
	public DISTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DISTRIBUTE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIV, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DROP, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ELSE, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.END, 0); }
	public ESCAPED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ESCAPED, 0); }
	public EXCHANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCHANGE, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLUDING, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXISTS, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXPLAIN, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXPORT, 0); }
	public EXTENDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXTENDED, 0); }
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXTERNAL, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXTRACT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FALSE, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FIELDS, 0); }
	public FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FILEFORMAT, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FIRST, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FLOAT, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FOLLOWING, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FOR, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FORMAT, 0); }
	public FORMATTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FORMATTED, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FROM, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FUNCTION, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.FUNCTIONS, 0); }
	public GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GENERATED, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GLOBAL, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GRANT, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GROUP, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GROUPING, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HAVING, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IF, 0); }
	public IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IGNORE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IMPORT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IN, 0); }
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INCLUDING, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INDEX, 0); }
	public INDEXES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INDEXES, 0); }
	public INPATH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INPATH, 0); }
	public INPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INPUTFORMAT, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INSERT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INT, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INTERVAL, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.INTO, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.IS, 0); }
	public ITEMS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ITEMS, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KEY, 0); }
	public KEYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KEYS, 0); }
	public LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LANGUAGE, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LAST, 0); }
	public LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LATERAL, 0); }
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LAZY, 0); }
	public LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LEADING, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIKE, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIMIT, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LINES, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LIST, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOAD, 0); }
	public LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCAL, 0); }
	public LOCATION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCATION, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCK, 0); }
	public LOCKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOCKS, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LOGICAL, 0); }
	public MACRO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MACRO, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MAP, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MATCH, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MINUS, 0); }
	public MSCK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MSCK, 0); }
	public MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.MULTISET, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NEXT, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NO, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULL, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.NULLS, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OF, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OPTION, 0); }
	public OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OPTIONS, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OR, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ORDER, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OUT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OUTER, 0); }
	public OUTPUTFORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OUTPUTFORMAT, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OVER, 0); }
	public OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.OVERWRITE, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITION, 0); }
	public PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITIONED, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PARTITIONS, 0); }
	public PERCENTLIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PERCENTLIT, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PERIOD, 0); }
	public PIVOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PIVOT, 0); }
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.POSITION, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PRECEDING, 0); }
	public PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PRIMARY, 0); }
	public PRINCIPALS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PRINCIPALS, 0); }
	public PURGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PURGE, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RANGE, 0); }
	public RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RAW, 0); }
	public RECORDREADER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RECORDREADER, 0); }
	public RECORDWRITER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RECORDWRITER, 0); }
	public RECOVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RECOVER, 0); }
	public REDUCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REDUCE, 0); }
	public REFRESH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REFRESH, 0); }
	public RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RENAME, 0); }
	public REPAIR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REPAIR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REPLACE, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RESET, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RESTRICT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REVOKE, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RLIKE, 0); }
	public ROLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLE, 0); }
	public ROLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLES, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLLBACK, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROLLUP, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROW, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ROWS, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SELECT, 0); }
	public SEPARATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SEPARATED, 0); }
	public SERDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SERDE, 0); }
	public SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SERDEPROPERTIES, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SET, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SETS, 0); }
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SHOW, 0); }
	public SKEWED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SKEWED, 0); }
	public SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SMALLINT, 0); }
	public SORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SORT, 0); }
	public SORTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SORTED, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.START, 0); }
	public STATISTICS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STATISTICS, 0); }
	public STORED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STORED, 0); }
	public STRATIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRATIFY, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRUCT, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM, 0); }
	public SYSTEM_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SYSTEM_TIME, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLE, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLES, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TABLESAMPLE, 0); }
	public TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TBLPROPERTIES, 0); }
	public TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TEMPORARY, 0); }
	public TERMINATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TERMINATED, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.THEN, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TIMESTAMP, 0); }
	public TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TINYINT, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TO, 0); }
	public TOUCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TOUCH, 0); }
	public TRAILING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRAILING, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRANSACTION, 0); }
	public TRANSACTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRANSACTIONS, 0); }
	public TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRANSFORM, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRUE, 0); }
	public TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.TRUNCATE, 0); }
	public UNARCHIVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNARCHIVE, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNBOUNDED, 0); }
	public UNCACHE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNCACHE, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNLOCK, 0); }
	public UNSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNSET, 0); }
	public UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.UNNEST, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.USE, 0); }
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VALUES, 0); }
	public VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VARBINARY, 0); }
	public VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VARCHAR, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VIEW, 0); }
	public VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.VIEWS, 0); }
	public WATERMARK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WATERMARK, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WHEN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WHERE, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WINDOW, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WITH, 0); }
	public WITHIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WITHIN, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNonReserved) {
			listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


