// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/packages/parser-core/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FlinkSqlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SPACE=1, COMMENT_INPUT=2, LINE_COMMENT=3, SELECT=4, FROM=5, ADD=6, AS=7, 
		ALL=8, ANY=9, DISTINCT=10, WHERE=11, GROUP=12, BY=13, GROUPING=14, SETS=15, 
		CUBE=16, ROLLUP=17, ORDER=18, HAVING=19, LIMIT=20, AT=21, OR=22, AND=23, 
		IN=24, NOT=25, NO=26, EXISTS=27, BETWEEN=28, LIKE=29, RLIKE=30, IS=31, 
		TRUE=32, FALSE=33, NULLS=34, ASC=35, DESC=36, FOR=37, INTERVAL=38, CASE=39, 
		WHEN=40, THEN=41, ELSE=42, END=43, JOIN=44, CROSS=45, OUTER=46, INNER=47, 
		LEFT=48, SEMI=49, RIGHT=50, FULL=51, NATURAL=52, ON=53, PIVOT=54, LATERAL=55, 
		WINDOW=56, OVER=57, PARTITION=58, RANGE=59, ROWS=60, UNBOUNDED=61, PRECEDING=62, 
		FOLLOWING=63, CURRENT=64, FIRST=65, AFTER=66, LAST=67, WITH=68, VALUES=69, 
		CREATE=70, TABLE=71, DIRECTORY=72, VIEW=73, REPLACE=74, INSERT=75, DELETE=76, 
		INTO=77, DESCRIBE=78, EXPLAIN=79, FORMAT=80, LOGICAL=81, CODEGEN=82, COST=83, 
		CAST=84, SHOW=85, TABLES=86, COLUMNS=87, COLUMN=88, USE=89, PARTITIONS=90, 
		FUNCTIONS=91, DROP=92, UNION=93, EXCEPT=94, SETMINUS=95, INTERSECT=96, 
		TO=97, TABLESAMPLE=98, STRATIFY=99, ALTER=100, RENAME=101, STRUCT=102, 
		COMMENT=103, SET=104, RESET=105, DATA=106, START=107, TRANSACTION=108, 
		COMMIT=109, ROLLBACK=110, MACRO=111, IGNORE=112, BOTH=113, LEADING=114, 
		TRAILING=115, IF=116, POSITION=117, EXTRACT=118, MINUS=119, DIV=120, PERCENTLIT=121, 
		BUCKET=122, OUT=123, OF=124, SORT=125, CLUSTER=126, DISTRIBUTE=127, OVERWRITE=128, 
		TRANSFORM=129, REDUCE=130, USING=131, SERDE=132, SERDEPROPERTIES=133, 
		RECORDREADER=134, RECORDWRITER=135, DELIMITED=136, FIELDS=137, TERMINATED=138, 
		COLLECTION=139, ITEMS=140, KEYS=141, ESCAPED=142, LINES=143, SEPARATED=144, 
		FUNCTION=145, EXTENDED=146, REFRESH=147, CLEAR=148, CACHE=149, UNCACHE=150, 
		LAZY=151, FORMATTED=152, GLOBAL=153, TEMPORARY=154, OPTIONS=155, UNSET=156, 
		TBLPROPERTIES=157, DBPROPERTIES=158, BUCKETS=159, SKEWED=160, STORED=161, 
		DIRECTORIES=162, LOCATION=163, EXCHANGE=164, ARCHIVE=165, UNARCHIVE=166, 
		FILEFORMAT=167, TOUCH=168, COMPACT=169, CONCATENATE=170, CHANGE=171, CASCADE=172, 
		CONSTRAINT=173, RESTRICT=174, CLUSTERED=175, SORTED=176, PURGE=177, INPUTFORMAT=178, 
		OUTPUTFORMAT=179, DATABASE=180, DATABASES=181, DFS=182, TRUNCATE=183, 
		ANALYZE=184, COMPUTE=185, LIST=186, STATISTICS=187, PARTITIONED=188, EXTERNAL=189, 
		DEFINED=190, REVOKE=191, GRANT=192, LOCK=193, UNLOCK=194, MSCK=195, REPAIR=196, 
		RECOVER=197, EXPORT=198, IMPORT=199, LOAD=200, ROLE=201, ROLES=202, COMPACTIONS=203, 
		PRINCIPALS=204, TRANSACTIONS=205, INDEX=206, INDEXES=207, LOCKS=208, OPTION=209, 
		ANTI=210, LOCAL=211, INPATH=212, WATERMARK=213, UNNEST=214, MATCH=215, 
		NEXT=216, WITHIN=217, WS=218, SYSTEM=219, INCLUDING=220, EXCLUDING=221, 
		CONSTRAINTS=222, GENERATED=223, CATALOG=224, LANGUAGE=225, CATALOGS=226, 
		VIEWS=227, PRIMARY=228, KEY=229, PERIOD=230, SYSTEM_TIME=231, STRING=232, 
		ARRAY=233, MAP=234, CHAR=235, VARCHAR=236, BINARY=237, VARBINARY=238, 
		BYTES=239, DECIMAL=240, TINYINT=241, SMALLINT=242, INT=243, BIGINT=244, 
		FLOAT=245, DOUBLE=246, DATE=247, TIME=248, TIMESTAMP=249, MULTISET=250, 
		BOOLEAN=251, RAW=252, ROW=253, NULL=254, DATETIME=255, EQUAL_SYMBOL=256, 
		GREATER_SYMBOL=257, LESS_SYMBOL=258, EXCLAMATION_SYMBOL=259, BIT_NOT_OP=260, 
		BIT_OR_OP=261, BIT_AND_OP=262, BIT_XOR_OP=263, DOT=264, LS_BRACKET=265, 
		RS_BRACKET=266, LR_BRACKET=267, RR_BRACKET=268, COMMA=269, SEMICOLON=270, 
		AT_SIGN=271, SINGLE_QUOTE_SYMB=272, DOUBLE_QUOTE_SYMB=273, REVERSE_QUOTE_SYMB=274, 
		COLON_SYMB=275, ASTERISK_SIGN=276, UNDERLINE_SIGN=277, HYPNEN_SIGN=278, 
		ADD_SIGN=279, PENCENT_SIGN=280, DOUBLE_VERTICAL_SIGN=281, DOUBLE_HYPNEN_SIGN=282, 
		SLASH_SIGN=283, DOT_ID=284, PLUS_DOT_ID=285, STRING_LITERAL=286, DIG_LITERAL=287, 
		REAL_LITERAL=288, BIT_STRING=289, ID_LITERAL=290, PLUS_ID_LITERAL=291;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_sqlStatements = 2, RULE_sqlStatement = 3, 
		RULE_emptyStatement = 4, RULE_ddlStatement = 5, RULE_dmlStatement = 6, 
		RULE_describeStatement = 7, RULE_explainStatement = 8, RULE_useStatement = 9, 
		RULE_showStatememt = 10, RULE_createTable = 11, RULE_columnOptionDefinition = 12, 
		RULE_columnName = 13, RULE_columnNameList = 14, RULE_columnType = 15, 
		RULE_lengthOneDimension = 16, RULE_commentSpec = 17, RULE_watermarkDefinition = 18, 
		RULE_tableConstraint = 19, RULE_selfDefinitionClause = 20, RULE_partitionDefinition = 21, 
		RULE_transformList = 22, RULE_transform = 23, RULE_transformArgument = 24, 
		RULE_likeDefinition = 25, RULE_likeOption = 26, RULE_createCatalog = 27, 
		RULE_createDatabase = 28, RULE_createView = 29, RULE_createFunction = 30, 
		RULE_alterTable = 31, RULE_renameDefinition = 32, RULE_setKeyValueDefinition = 33, 
		RULE_alterDatabase = 34, RULE_alterFunction = 35, RULE_dropTable = 36, 
		RULE_dropDatabase = 37, RULE_dropView = 38, RULE_dropFunction = 39, RULE_insertStatement = 40, 
		RULE_insertPartitionDefinition = 41, RULE_valuesDefinition = 42, RULE_valuesRowDefinition = 43, 
		RULE_queryStatement = 44, RULE_valuesCaluse = 45, RULE_selectStatement = 46, 
		RULE_selectClause = 47, RULE_projectItemDefinition = 48, RULE_fromClause = 49, 
		RULE_tableExpression = 50, RULE_tableReference = 51, RULE_tablePrimary = 52, 
		RULE_joinCondition = 53, RULE_whereClause = 54, RULE_groupByClause = 55, 
		RULE_groupItemDefinition = 56, RULE_havingClause = 57, RULE_orderByCaluse = 58, 
		RULE_orderItemDefition = 59, RULE_limitClause = 60, RULE_windowClause = 61, 
		RULE_namedWindow = 62, RULE_windowSpec = 63, RULE_sortItem = 64, RULE_windowFrame = 65, 
		RULE_frameBound = 66, RULE_expression = 67, RULE_booleanExpression = 68, 
		RULE_predicate = 69, RULE_valueExpression = 70, RULE_primaryExpression = 71, 
		RULE_functionName = 72, RULE_dereferenceDefinition = 73, RULE_qualifiedName = 74, 
		RULE_interval = 75, RULE_errorCapturingMultiUnitsInterval = 76, RULE_multiUnitsInterval = 77, 
		RULE_errorCapturingUnitToUnitInterval = 78, RULE_unitToUnitInterval = 79, 
		RULE_intervalValue = 80, RULE_columnAlias = 81, RULE_tableAlias = 82, 
		RULE_errorCapturingIdentifier = 83, RULE_errorCapturingIdentifierExtra = 84, 
		RULE_identifierList = 85, RULE_identifierSeq = 86, RULE_identifier = 87, 
		RULE_strictIdentifier = 88, RULE_unquotedIdentifier = 89, RULE_quotedIdentifier = 90, 
		RULE_whenClause = 91, RULE_uidList = 92, RULE_uid = 93, RULE_plusUid = 94, 
		RULE_withOption = 95, RULE_ifNotExists = 96, RULE_ifExists = 97, RULE_tablePropertyList = 98, 
		RULE_tableProperty = 99, RULE_tablePropertyKey = 100, RULE_tablePropertyValue = 101, 
		RULE_logicalOperator = 102, RULE_comparisonOperator = 103, RULE_bitOperator = 104, 
		RULE_mathOperator = 105, RULE_unaryOperator = 106, RULE_fullColumnName = 107, 
		RULE_constant = 108, RULE_stringLiteral = 109, RULE_decimalLiteral = 110, 
		RULE_booleanLiteral = 111, RULE_setQuantifier = 112, RULE_ansiNonReserved = 113, 
		RULE_strictNonReserved = 114, RULE_nonReserved = 115;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
			"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
			"useStatement", "showStatememt", "createTable", "columnOptionDefinition", 
			"columnName", "columnNameList", "columnType", "lengthOneDimension", "commentSpec", 
			"watermarkDefinition", "tableConstraint", "selfDefinitionClause", "partitionDefinition", 
			"transformList", "transform", "transformArgument", "likeDefinition", 
			"likeOption", "createCatalog", "createDatabase", "createView", "createFunction", 
			"alterTable", "renameDefinition", "setKeyValueDefinition", "alterDatabase", 
			"alterFunction", "dropTable", "dropDatabase", "dropView", "dropFunction", 
			"insertStatement", "insertPartitionDefinition", "valuesDefinition", "valuesRowDefinition", 
			"queryStatement", "valuesCaluse", "selectStatement", "selectClause", 
			"projectItemDefinition", "fromClause", "tableExpression", "tableReference", 
			"tablePrimary", "joinCondition", "whereClause", "groupByClause", "groupItemDefinition", 
			"havingClause", "orderByCaluse", "orderItemDefition", "limitClause", 
			"windowClause", "namedWindow", "windowSpec", "sortItem", "windowFrame", 
			"frameBound", "expression", "booleanExpression", "predicate", "valueExpression", 
			"primaryExpression", "functionName", "dereferenceDefinition", "qualifiedName", 
			"interval", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
			"errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
			"columnAlias", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
			"identifierList", "identifierSeq", "identifier", "strictIdentifier", 
			"unquotedIdentifier", "quotedIdentifier", "whenClause", "uidList", "uid", 
			"plusUid", "withOption", "ifNotExists", "ifExists", "tablePropertyList", 
			"tableProperty", "tablePropertyKey", "tablePropertyValue", "logicalOperator", 
			"comparisonOperator", "bitOperator", "mathOperator", "unaryOperator", 
			"fullColumnName", "constant", "stringLiteral", "decimalLiteral", "booleanLiteral", 
			"setQuantifier", "ansiNonReserved", "strictNonReserved", "nonReserved"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'SELECT'", "'FROM'", "'ADD'", "'AS'", "'ALL'", 
			"'ANY'", "'DISTINCT'", "'WHERE'", "'GROUP'", "'BY'", "'GROUPING'", "'SETS'", 
			"'CUBE'", "'ROLLUP'", "'ORDER'", "'HAVING'", "'LIMIT'", "'AT'", "'OR'", 
			"'AND'", "'IN'", "'NOT'", "'NO'", "'EXISTS'", "'BETWEEN'", "'LIKE'", 
			"'RLIKE'", "'IS'", "'TRUE'", "'FALSE'", "'NULLS'", "'ASC'", "'DESC'", 
			"'FOR'", "'INTERVAL'", "'CASE'", "'WHEN'", "'THEN'", "'ELSE'", "'END'", 
			"'JOIN'", "'CROSS'", "'OUTER'", "'INNER'", "'LEFT'", "'SEMI'", "'RIGHT'", 
			"'FULL'", "'NATURAL'", "'ON'", "'PIVOT'", "'LATERAL'", "'WINDOW'", "'OVER'", 
			"'PARTITION'", "'RANGE'", "'ROWS'", "'UNBOUNDED'", "'PRECEDING'", "'FOLLOWING'", 
			"'CURRENT'", "'FIRST'", "'AFTER'", "'LAST'", "'WITH'", "'VALUES'", "'CREATE'", 
			"'TABLE'", "'DIRECTORY'", "'VIEW'", "'REPLACE'", "'INSERT'", "'DELETE'", 
			"'INTO'", "'DESCRIBE'", "'EXPLAIN'", "'FORMAT'", "'LOGICAL'", "'CODEGEN'", 
			"'COST'", "'CAST'", "'SHOW'", "'TABLES'", "'COLUMNS'", "'COLUMN'", "'USE'", 
			"'PARTITIONS'", "'FUNCTIONS'", "'DROP'", "'UNION'", "'EXCEPT'", "'SETMINUS'", 
			"'INTERSECT'", "'TO'", "'TABLESAMPLE'", "'STRATIFY'", "'ALTER'", "'RENAME'", 
			"'STRUCT'", "'COMMENT'", "'SET'", "'RESET'", "'DATA'", "'START'", "'TRANSACTION'", 
			"'COMMIT'", "'ROLLBACK'", "'MACRO'", "'IGNORE'", "'BOTH'", "'LEADING'", 
			"'TRAILING'", "'IF'", "'POSITION'", "'EXTRACT'", "'MINUS'", "'DIV'", 
			"'PERCENTLIT'", "'BUCKET'", "'OUT'", "'OF'", "'SORT'", "'CLUSTER'", "'DISTRIBUTE'", 
			"'OVERWRITE'", "'TRANSFORM'", "'REDUCE'", "'USING'", "'SERDE'", "'SERDEPROPERTIES'", 
			"'RECORDREADER'", "'RECORDWRITER'", "'DELIMITED'", "'FIELDS'", "'TERMINATED'", 
			"'COLLECTION'", "'ITEMS'", "'KEYS'", "'ESCAPED'", "'LINES'", "'SEPARATED'", 
			"'FUNCTION'", "'EXTENDED'", "'REFRESH'", "'CLEAR'", "'CACHE'", "'UNCACHE'", 
			"'LAZY'", "'FORMATTED'", "'GLOBAL'", "'TEMPORARY'", "'OPTIONS'", "'UNSET'", 
			"'TBLPROPERTIES'", "'DBPROPERTIES'", "'BUCKETS'", "'SKEWED'", "'STORED'", 
			"'DIRECTORIES'", "'LOCATION'", "'EXCHANGE'", "'ARCHIVE'", "'UNARCHIVE'", 
			"'FILEFORMAT'", "'TOUCH'", "'COMPACT'", "'CONCATENATE'", "'CHANGE'", 
			"'CASCADE'", "'CONSTRAINT'", "'RESTRICT'", "'CLUSTERED'", "'SORTED'", 
			"'PURGE'", "'INPUTFORMAT'", "'OUTPUTFORMAT'", "'DATABASE'", "'DATABASES'", 
			"'DFS'", "'TRUNCATE'", "'ANALYZE'", "'COMPUTE'", "'LIST'", "'STATISTICS'", 
			"'PARTITIONED'", "'EXTERNAL'", "'DEFINED'", "'REVOKE'", "'GRANT'", "'LOCK'", 
			"'UNLOCK'", "'MSCK'", "'REPAIR'", "'RECOVER'", "'EXPORT'", "'IMPORT'", 
			"'LOAD'", "'ROLE'", "'ROLES'", "'COMPACTIONS'", "'PRINCIPALS'", "'TRANSACTIONS'", 
			"'INDEX'", "'INDEXES'", "'LOCKS'", "'OPTION'", "'ANTI'", "'LOCAL'", "'INPATH'", 
			"'WATERMARK'", "'UNNEST'", "'MATCH'", "'NEXT'", "'WITHIN'", "'WS'", "'SYSTEM'", 
			"'INCLUDING'", "'EXCLUDING'", "'CONSTRAINTS'", "'GENERATED'", "'CATALOG'", 
			"'LANGUAGE'", "'CATALOGS'", "'VIEWS'", "'PRIMARY'", "'KEY'", "'PERIOD'", 
			"'SYSTEM_TIME'", "'STRING'", "'ARRAY'", "'MAP'", "'CHAR'", "'VARCHAR'", 
			"'BINARY'", "'VARBINARY'", "'BYTES'", "'DECIMAL'", "'TINYINT'", "'SMALLINT'", 
			"'INT'", "'BIGINT'", "'FLOAT'", "'DOUBLE'", "'DATE'", "'TIME'", "'TIMESTAMP'", 
			"'MULTISET'", "'BOOLEAN'", "'RAW'", "'ROW'", "'NULL'", "'DATETIME'", 
			"'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'['", 
			"']'", "'('", "')'", "','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", 
			"'*'", "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "SELECT", "FROM", "ADD", 
			"AS", "ALL", "ANY", "DISTINCT", "WHERE", "GROUP", "BY", "GROUPING", "SETS", 
			"CUBE", "ROLLUP", "ORDER", "HAVING", "LIMIT", "AT", "OR", "AND", "IN", 
			"NOT", "NO", "EXISTS", "BETWEEN", "LIKE", "RLIKE", "IS", "TRUE", "FALSE", 
			"NULLS", "ASC", "DESC", "FOR", "INTERVAL", "CASE", "WHEN", "THEN", "ELSE", 
			"END", "JOIN", "CROSS", "OUTER", "INNER", "LEFT", "SEMI", "RIGHT", "FULL", 
			"NATURAL", "ON", "PIVOT", "LATERAL", "WINDOW", "OVER", "PARTITION", "RANGE", 
			"ROWS", "UNBOUNDED", "PRECEDING", "FOLLOWING", "CURRENT", "FIRST", "AFTER", 
			"LAST", "WITH", "VALUES", "CREATE", "TABLE", "DIRECTORY", "VIEW", "REPLACE", 
			"INSERT", "DELETE", "INTO", "DESCRIBE", "EXPLAIN", "FORMAT", "LOGICAL", 
			"CODEGEN", "COST", "CAST", "SHOW", "TABLES", "COLUMNS", "COLUMN", "USE", 
			"PARTITIONS", "FUNCTIONS", "DROP", "UNION", "EXCEPT", "SETMINUS", "INTERSECT", 
			"TO", "TABLESAMPLE", "STRATIFY", "ALTER", "RENAME", "STRUCT", "COMMENT", 
			"SET", "RESET", "DATA", "START", "TRANSACTION", "COMMIT", "ROLLBACK", 
			"MACRO", "IGNORE", "BOTH", "LEADING", "TRAILING", "IF", "POSITION", "EXTRACT", 
			"MINUS", "DIV", "PERCENTLIT", "BUCKET", "OUT", "OF", "SORT", "CLUSTER", 
			"DISTRIBUTE", "OVERWRITE", "TRANSFORM", "REDUCE", "USING", "SERDE", "SERDEPROPERTIES", 
			"RECORDREADER", "RECORDWRITER", "DELIMITED", "FIELDS", "TERMINATED", 
			"COLLECTION", "ITEMS", "KEYS", "ESCAPED", "LINES", "SEPARATED", "FUNCTION", 
			"EXTENDED", "REFRESH", "CLEAR", "CACHE", "UNCACHE", "LAZY", "FORMATTED", 
			"GLOBAL", "TEMPORARY", "OPTIONS", "UNSET", "TBLPROPERTIES", "DBPROPERTIES", 
			"BUCKETS", "SKEWED", "STORED", "DIRECTORIES", "LOCATION", "EXCHANGE", 
			"ARCHIVE", "UNARCHIVE", "FILEFORMAT", "TOUCH", "COMPACT", "CONCATENATE", 
			"CHANGE", "CASCADE", "CONSTRAINT", "RESTRICT", "CLUSTERED", "SORTED", 
			"PURGE", "INPUTFORMAT", "OUTPUTFORMAT", "DATABASE", "DATABASES", "DFS", 
			"TRUNCATE", "ANALYZE", "COMPUTE", "LIST", "STATISTICS", "PARTITIONED", 
			"EXTERNAL", "DEFINED", "REVOKE", "GRANT", "LOCK", "UNLOCK", "MSCK", "REPAIR", 
			"RECOVER", "EXPORT", "IMPORT", "LOAD", "ROLE", "ROLES", "COMPACTIONS", 
			"PRINCIPALS", "TRANSACTIONS", "INDEX", "INDEXES", "LOCKS", "OPTION", 
			"ANTI", "LOCAL", "INPATH", "WATERMARK", "UNNEST", "MATCH", "NEXT", "WITHIN", 
			"WS", "SYSTEM", "INCLUDING", "EXCLUDING", "CONSTRAINTS", "GENERATED", 
			"CATALOG", "LANGUAGE", "CATALOGS", "VIEWS", "PRIMARY", "KEY", "PERIOD", 
			"SYSTEM_TIME", "STRING", "ARRAY", "MAP", "CHAR", "VARCHAR", "BINARY", 
			"VARBINARY", "BYTES", "DECIMAL", "TINYINT", "SMALLINT", "INT", "BIGINT", 
			"FLOAT", "DOUBLE", "DATE", "TIME", "TIMESTAMP", "MULTISET", "BOOLEAN", 
			"RAW", "ROW", "NULL", "DATETIME", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
			"EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", 
			"DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "COMMA", 
			"SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", 
			"COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", "HYPNEN_SIGN", "ADD_SIGN", 
			"PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", "SLASH_SIGN", 
			"DOT_ID", "PLUS_DOT_ID", "STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", 
			"BIT_STRING", "ID_LITERAL", "PLUS_ID_LITERAL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "FlinkSqlParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FlinkSqlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FlinkSqlParser.EOF, 0); }
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			statement();
			setState(233);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public SqlStatementsContext sqlStatements() {
			return getRuleContext(SqlStatementsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FlinkSqlParser.EOF, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			sqlStatements();
			setState(236);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlStatementsContext extends ParserRuleContext {
		public List<SqlStatementContext> sqlStatement() {
			return getRuleContexts(SqlStatementContext.class);
		}
		public SqlStatementContext sqlStatement(int i) {
			return getRuleContext(SqlStatementContext.class,i);
		}
		public List<EmptyStatementContext> emptyStatement() {
			return getRuleContexts(EmptyStatementContext.class);
		}
		public EmptyStatementContext emptyStatement(int i) {
			return getRuleContext(EmptyStatementContext.class,i);
		}
		public SqlStatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlStatements; }
	}

	public final SqlStatementsContext sqlStatements() throws RecognitionException {
		SqlStatementsContext _localctx = new SqlStatementsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sqlStatements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SELECT || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (VALUES - 69)) | (1L << (CREATE - 69)) | (1L << (INSERT - 69)) | (1L << (DESCRIBE - 69)) | (1L << (EXPLAIN - 69)) | (1L << (SHOW - 69)) | (1L << (USE - 69)) | (1L << (DROP - 69)) | (1L << (ALTER - 69)))) != 0) || _la==LR_BRACKET || _la==SEMICOLON) {
				{
				setState(240);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SELECT:
				case VALUES:
				case CREATE:
				case INSERT:
				case DESCRIBE:
				case EXPLAIN:
				case SHOW:
				case USE:
				case DROP:
				case ALTER:
				case LR_BRACKET:
					{
					setState(238);
					sqlStatement();
					}
					break;
				case SEMICOLON:
					{
					setState(239);
					emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(244);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlStatementContext extends ParserRuleContext {
		public DdlStatementContext ddlStatement() {
			return getRuleContext(DdlStatementContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(FlinkSqlParser.SEMICOLON, 0); }
		public DmlStatementContext dmlStatement() {
			return getRuleContext(DmlStatementContext.class,0);
		}
		public DescribeStatementContext describeStatement() {
			return getRuleContext(DescribeStatementContext.class,0);
		}
		public ExplainStatementContext explainStatement() {
			return getRuleContext(ExplainStatementContext.class,0);
		}
		public UseStatementContext useStatement() {
			return getRuleContext(UseStatementContext.class,0);
		}
		public ShowStatememtContext showStatememt() {
			return getRuleContext(ShowStatememtContext.class,0);
		}
		public SqlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlStatement; }
	}

	public final SqlStatementContext sqlStatement() throws RecognitionException {
		SqlStatementContext _localctx = new SqlStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sqlStatement);
		try {
			setState(269);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CREATE:
			case DROP:
			case ALTER:
				enterOuterAlt(_localctx, 1);
				{
				setState(245);
				ddlStatement();
				setState(247);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(246);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case SELECT:
			case VALUES:
			case INSERT:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				setState(249);
				dmlStatement();
				setState(251);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(250);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case DESCRIBE:
				enterOuterAlt(_localctx, 3);
				{
				setState(253);
				describeStatement();
				setState(255);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(254);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case EXPLAIN:
				enterOuterAlt(_localctx, 4);
				{
				setState(257);
				explainStatement();
				setState(259);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(258);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case USE:
				enterOuterAlt(_localctx, 5);
				{
				setState(261);
				useStatement();
				setState(263);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(262);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case SHOW:
				enterOuterAlt(_localctx, 6);
				{
				setState(265);
				showStatememt();
				setState(267);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(266);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatementContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(FlinkSqlParser.SEMICOLON, 0); }
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_emptyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DdlStatementContext extends ParserRuleContext {
		public CreateTableContext createTable() {
			return getRuleContext(CreateTableContext.class,0);
		}
		public CreateDatabaseContext createDatabase() {
			return getRuleContext(CreateDatabaseContext.class,0);
		}
		public CreateViewContext createView() {
			return getRuleContext(CreateViewContext.class,0);
		}
		public CreateFunctionContext createFunction() {
			return getRuleContext(CreateFunctionContext.class,0);
		}
		public CreateCatalogContext createCatalog() {
			return getRuleContext(CreateCatalogContext.class,0);
		}
		public AlterTableContext alterTable() {
			return getRuleContext(AlterTableContext.class,0);
		}
		public AlterDatabaseContext alterDatabase() {
			return getRuleContext(AlterDatabaseContext.class,0);
		}
		public AlterFunctionContext alterFunction() {
			return getRuleContext(AlterFunctionContext.class,0);
		}
		public DropTableContext dropTable() {
			return getRuleContext(DropTableContext.class,0);
		}
		public DropDatabaseContext dropDatabase() {
			return getRuleContext(DropDatabaseContext.class,0);
		}
		public DropViewContext dropView() {
			return getRuleContext(DropViewContext.class,0);
		}
		public DropFunctionContext dropFunction() {
			return getRuleContext(DropFunctionContext.class,0);
		}
		public DdlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ddlStatement; }
	}

	public final DdlStatementContext ddlStatement() throws RecognitionException {
		DdlStatementContext _localctx = new DdlStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_ddlStatement);
		try {
			setState(285);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(273);
				createTable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(274);
				createDatabase();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(275);
				createView();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(276);
				createFunction();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(277);
				createCatalog();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(278);
				alterTable();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(279);
				alterDatabase();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(280);
				alterFunction();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(281);
				dropTable();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(282);
				dropDatabase();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(283);
				dropView();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(284);
				dropFunction();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DmlStatementContext extends ParserRuleContext {
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public InsertStatementContext insertStatement() {
			return getRuleContext(InsertStatementContext.class,0);
		}
		public DmlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dmlStatement; }
	}

	public final DmlStatementContext dmlStatement() throws RecognitionException {
		DmlStatementContext _localctx = new DmlStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_dmlStatement);
		try {
			setState(289);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case VALUES:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(287);
				queryStatement(0);
				}
				break;
			case INSERT:
				enterOuterAlt(_localctx, 2);
				{
				setState(288);
				insertStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescribeStatementContext extends ParserRuleContext {
		public TerminalNode DESCRIBE() { return getToken(FlinkSqlParser.DESCRIBE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public DescribeStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_describeStatement; }
	}

	public final DescribeStatementContext describeStatement() throws RecognitionException {
		DescribeStatementContext _localctx = new DescribeStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_describeStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			match(DESCRIBE);
			setState(292);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplainStatementContext extends ParserRuleContext {
		public TerminalNode EXPLAIN() { return getToken(FlinkSqlParser.EXPLAIN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode FOR() { return getToken(FlinkSqlParser.FOR, 0); }
		public DmlStatementContext dmlStatement() {
			return getRuleContext(DmlStatementContext.class,0);
		}
		public ExplainStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explainStatement; }
	}

	public final ExplainStatementContext explainStatement() throws RecognitionException {
		ExplainStatementContext _localctx = new ExplainStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_explainStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			match(EXPLAIN);
			setState(295);
			identifier();
			setState(296);
			match(FOR);
			setState(297);
			dmlStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UseStatementContext extends ParserRuleContext {
		public TerminalNode USE() { return getToken(FlinkSqlParser.USE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode CATALOG() { return getToken(FlinkSqlParser.CATALOG, 0); }
		public UseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_useStatement; }
	}

	public final UseStatementContext useStatement() throws RecognitionException {
		UseStatementContext _localctx = new UseStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_useStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(USE);
			setState(301);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CATALOG) {
				{
				setState(300);
				match(CATALOG);
				}
			}

			setState(303);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShowStatememtContext extends ParserRuleContext {
		public TerminalNode SHOW() { return getToken(FlinkSqlParser.SHOW, 0); }
		public TerminalNode CATALOGS() { return getToken(FlinkSqlParser.CATALOGS, 0); }
		public TerminalNode DATABASES() { return getToken(FlinkSqlParser.DATABASES, 0); }
		public TerminalNode TABLES() { return getToken(FlinkSqlParser.TABLES, 0); }
		public TerminalNode FUNCTIONS() { return getToken(FlinkSqlParser.FUNCTIONS, 0); }
		public TerminalNode VIEWS() { return getToken(FlinkSqlParser.VIEWS, 0); }
		public ShowStatememtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_showStatememt; }
	}

	public final ShowStatememtContext showStatememt() throws RecognitionException {
		ShowStatememtContext _localctx = new ShowStatememtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_showStatememt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(SHOW);
			setState(306);
			_la = _input.LA(1);
			if ( !(_la==TABLES || _la==FUNCTIONS || ((((_la - 181)) & ~0x3f) == 0 && ((1L << (_la - 181)) & ((1L << (DATABASES - 181)) | (1L << (CATALOGS - 181)) | (1L << (VIEWS - 181)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateTableContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(FlinkSqlParser.CREATE, 0); }
		public TerminalNode TABLE() { return getToken(FlinkSqlParser.TABLE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<ColumnOptionDefinitionContext> columnOptionDefinition() {
			return getRuleContexts(ColumnOptionDefinitionContext.class);
		}
		public ColumnOptionDefinitionContext columnOptionDefinition(int i) {
			return getRuleContext(ColumnOptionDefinitionContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public WatermarkDefinitionContext watermarkDefinition() {
			return getRuleContext(WatermarkDefinitionContext.class,0);
		}
		public TableConstraintContext tableConstraint() {
			return getRuleContext(TableConstraintContext.class,0);
		}
		public SelfDefinitionClauseContext selfDefinitionClause() {
			return getRuleContext(SelfDefinitionClauseContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public PartitionDefinitionContext partitionDefinition() {
			return getRuleContext(PartitionDefinitionContext.class,0);
		}
		public LikeDefinitionContext likeDefinition() {
			return getRuleContext(LikeDefinitionContext.class,0);
		}
		public CreateTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createTable; }
	}

	public final CreateTableContext createTable() throws RecognitionException {
		CreateTableContext _localctx = new CreateTableContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_createTable);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			match(CREATE);
			setState(309);
			match(TABLE);
			setState(310);
			uid();
			setState(311);
			match(LR_BRACKET);
			setState(312);
			columnOptionDefinition();
			setState(317);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(313);
					match(COMMA);
					setState(314);
					columnOptionDefinition();
					}
					} 
				}
				setState(319);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(322);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(320);
				match(COMMA);
				setState(321);
				watermarkDefinition();
				}
				break;
			}
			setState(326);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(324);
				match(COMMA);
				setState(325);
				tableConstraint();
				}
				break;
			}
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(328);
				match(COMMA);
				setState(329);
				selfDefinitionClause();
				}
			}

			setState(332);
			match(RR_BRACKET);
			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(333);
				commentSpec();
				}
			}

			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITIONED) {
				{
				setState(336);
				partitionDefinition();
				}
			}

			setState(339);
			withOption();
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIKE) {
				{
				setState(340);
				likeDefinition();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnOptionDefinitionContext extends ParserRuleContext {
		public ColumnNameContext columnName() {
			return getRuleContext(ColumnNameContext.class,0);
		}
		public ColumnTypeContext columnType() {
			return getRuleContext(ColumnTypeContext.class,0);
		}
		public LengthOneDimensionContext lengthOneDimension() {
			return getRuleContext(LengthOneDimensionContext.class,0);
		}
		public ColumnAliasContext columnAlias() {
			return getRuleContext(ColumnAliasContext.class,0);
		}
		public ColumnOptionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnOptionDefinition; }
	}

	public final ColumnOptionDefinitionContext columnOptionDefinition() throws RecognitionException {
		ColumnOptionDefinitionContext _localctx = new ColumnOptionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_columnOptionDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			columnName();
			setState(344);
			columnType();
			setState(346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(345);
				lengthOneDimension();
				}
			}

			setState(349);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << OUTER) | (1L << SEMI) | (1L << PIVOT) | (1L << LATERAL) | (1L << WINDOW) | (1L << OVER) | (1L << PARTITION) | (1L << RANGE) | (1L << ROWS) | (1L << UNBOUNDED) | (1L << PRECEDING) | (1L << FOLLOWING))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (WITH - 64)) | (1L << (VALUES - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (SETMINUS - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)) | (1L << (COMMIT - 64)) | (1L << (ROLLBACK - 64)) | (1L << (MACRO - 64)) | (1L << (IGNORE - 64)) | (1L << (BOTH - 64)) | (1L << (LEADING - 64)) | (1L << (TRAILING - 64)) | (1L << (IF - 64)) | (1L << (POSITION - 64)) | (1L << (EXTRACT - 64)) | (1L << (MINUS - 64)) | (1L << (DIV - 64)) | (1L << (PERCENTLIT - 64)) | (1L << (BUCKET - 64)) | (1L << (OUT - 64)) | (1L << (OF - 64)) | (1L << (SORT - 64)) | (1L << (CLUSTER - 64)) | (1L << (DISTRIBUTE - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)) | (1L << (UNSET - 128)) | (1L << (TBLPROPERTIES - 128)) | (1L << (DBPROPERTIES - 128)) | (1L << (BUCKETS - 128)) | (1L << (SKEWED - 128)) | (1L << (STORED - 128)) | (1L << (DIRECTORIES - 128)) | (1L << (LOCATION - 128)) | (1L << (EXCHANGE - 128)) | (1L << (ARCHIVE - 128)) | (1L << (UNARCHIVE - 128)) | (1L << (FILEFORMAT - 128)) | (1L << (TOUCH - 128)) | (1L << (COMPACT - 128)) | (1L << (CONCATENATE - 128)) | (1L << (CHANGE - 128)) | (1L << (CASCADE - 128)) | (1L << (CONSTRAINT - 128)) | (1L << (RESTRICT - 128)) | (1L << (CLUSTERED - 128)) | (1L << (SORTED - 128)) | (1L << (PURGE - 128)) | (1L << (INPUTFORMAT - 128)) | (1L << (OUTPUTFORMAT - 128)) | (1L << (DATABASE - 128)) | (1L << (DATABASES - 128)) | (1L << (DFS - 128)) | (1L << (TRUNCATE - 128)) | (1L << (ANALYZE - 128)) | (1L << (COMPUTE - 128)) | (1L << (LIST - 128)) | (1L << (STATISTICS - 128)) | (1L << (PARTITIONED - 128)) | (1L << (EXTERNAL - 128)) | (1L << (DEFINED - 128)) | (1L << (REVOKE - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)) | (1L << (WATERMARK - 192)) | (1L << (UNNEST - 192)) | (1L << (MATCH - 192)) | (1L << (NEXT - 192)) | (1L << (WITHIN - 192)) | (1L << (WS - 192)) | (1L << (SYSTEM - 192)) | (1L << (INCLUDING - 192)) | (1L << (EXCLUDING - 192)) | (1L << (CONSTRAINTS - 192)) | (1L << (GENERATED - 192)) | (1L << (CATALOG - 192)) | (1L << (LANGUAGE - 192)) | (1L << (CATALOGS - 192)) | (1L << (VIEWS - 192)) | (1L << (PRIMARY - 192)) | (1L << (KEY - 192)) | (1L << (PERIOD - 192)) | (1L << (SYSTEM_TIME - 192)) | (1L << (STRING - 192)) | (1L << (ARRAY - 192)) | (1L << (MAP - 192)) | (1L << (CHAR - 192)) | (1L << (VARCHAR - 192)) | (1L << (BINARY - 192)) | (1L << (VARBINARY - 192)) | (1L << (BYTES - 192)) | (1L << (DECIMAL - 192)) | (1L << (TINYINT - 192)) | (1L << (SMALLINT - 192)) | (1L << (INT - 192)) | (1L << (BIGINT - 192)) | (1L << (FLOAT - 192)) | (1L << (DOUBLE - 192)) | (1L << (DATE - 192)) | (1L << (TIME - 192)) | (1L << (TIMESTAMP - 192)) | (1L << (MULTISET - 192)) | (1L << (BOOLEAN - 192)) | (1L << (RAW - 192)) | (1L << (ROW - 192)) | (1L << (NULL - 192)) | (1L << (DATETIME - 192)))) != 0) || ((((_la - 286)) & ~0x3f) == 0 && ((1L << (_la - 286)) & ((1L << (STRING_LITERAL - 286)) | (1L << (DIG_LITERAL - 286)) | (1L << (ID_LITERAL - 286)))) != 0)) {
				{
				setState(348);
				columnAlias();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnNameContext extends ParserRuleContext {
		public PlusUidContext plusUid() {
			return getRuleContext(PlusUidContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ColumnNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnName; }
	}

	public final ColumnNameContext columnName() throws RecognitionException {
		ColumnNameContext _localctx = new ColumnNameContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_columnName);
		try {
			setState(353);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(351);
				plusUid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(352);
				expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnNameListContext extends ParserRuleContext {
		public List<ColumnNameContext> columnName() {
			return getRuleContexts(ColumnNameContext.class);
		}
		public ColumnNameContext columnName(int i) {
			return getRuleContext(ColumnNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public ColumnNameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnNameList; }
	}

	public final ColumnNameListContext columnNameList() throws RecognitionException {
		ColumnNameListContext _localctx = new ColumnNameListContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_columnNameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			columnName();
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(356);
				match(COMMA);
				setState(357);
				columnName();
				}
				}
				setState(362);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnTypeContext extends ParserRuleContext {
		public Token typeName;
		public TerminalNode CHAR() { return getToken(FlinkSqlParser.CHAR, 0); }
		public TerminalNode VARCHAR() { return getToken(FlinkSqlParser.VARCHAR, 0); }
		public TerminalNode STRING() { return getToken(FlinkSqlParser.STRING, 0); }
		public TerminalNode BINARY() { return getToken(FlinkSqlParser.BINARY, 0); }
		public TerminalNode VARBINARY() { return getToken(FlinkSqlParser.VARBINARY, 0); }
		public TerminalNode BYTES() { return getToken(FlinkSqlParser.BYTES, 0); }
		public TerminalNode DECIMAL() { return getToken(FlinkSqlParser.DECIMAL, 0); }
		public TerminalNode TINYINT() { return getToken(FlinkSqlParser.TINYINT, 0); }
		public TerminalNode SMALLINT() { return getToken(FlinkSqlParser.SMALLINT, 0); }
		public TerminalNode INT() { return getToken(FlinkSqlParser.INT, 0); }
		public TerminalNode BIGINT() { return getToken(FlinkSqlParser.BIGINT, 0); }
		public TerminalNode FLOAT() { return getToken(FlinkSqlParser.FLOAT, 0); }
		public TerminalNode DOUBLE() { return getToken(FlinkSqlParser.DOUBLE, 0); }
		public TerminalNode DATE() { return getToken(FlinkSqlParser.DATE, 0); }
		public TerminalNode TIME() { return getToken(FlinkSqlParser.TIME, 0); }
		public TerminalNode TIMESTAMP() { return getToken(FlinkSqlParser.TIMESTAMP, 0); }
		public TerminalNode ARRAY() { return getToken(FlinkSqlParser.ARRAY, 0); }
		public TerminalNode MAP() { return getToken(FlinkSqlParser.MAP, 0); }
		public TerminalNode MULTISET() { return getToken(FlinkSqlParser.MULTISET, 0); }
		public TerminalNode ROW() { return getToken(FlinkSqlParser.ROW, 0); }
		public TerminalNode BOOLEAN() { return getToken(FlinkSqlParser.BOOLEAN, 0); }
		public TerminalNode RAW() { return getToken(FlinkSqlParser.RAW, 0); }
		public TerminalNode NULL() { return getToken(FlinkSqlParser.NULL, 0); }
		public TerminalNode DATETIME() { return getToken(FlinkSqlParser.DATETIME, 0); }
		public ColumnTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnType; }
	}

	public final ColumnTypeContext columnType() throws RecognitionException {
		ColumnTypeContext _localctx = new ColumnTypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_columnType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			((ColumnTypeContext)_localctx).typeName = _input.LT(1);
			_la = _input.LA(1);
			if ( !(((((_la - 232)) & ~0x3f) == 0 && ((1L << (_la - 232)) & ((1L << (STRING - 232)) | (1L << (ARRAY - 232)) | (1L << (MAP - 232)) | (1L << (CHAR - 232)) | (1L << (VARCHAR - 232)) | (1L << (BINARY - 232)) | (1L << (VARBINARY - 232)) | (1L << (BYTES - 232)) | (1L << (DECIMAL - 232)) | (1L << (TINYINT - 232)) | (1L << (SMALLINT - 232)) | (1L << (INT - 232)) | (1L << (BIGINT - 232)) | (1L << (FLOAT - 232)) | (1L << (DOUBLE - 232)) | (1L << (DATE - 232)) | (1L << (TIME - 232)) | (1L << (TIMESTAMP - 232)) | (1L << (MULTISET - 232)) | (1L << (BOOLEAN - 232)) | (1L << (RAW - 232)) | (1L << (ROW - 232)) | (1L << (NULL - 232)) | (1L << (DATETIME - 232)))) != 0)) ) {
				((ColumnTypeContext)_localctx).typeName = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LengthOneDimensionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public DecimalLiteralContext decimalLiteral() {
			return getRuleContext(DecimalLiteralContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public LengthOneDimensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lengthOneDimension; }
	}

	public final LengthOneDimensionContext lengthOneDimension() throws RecognitionException {
		LengthOneDimensionContext _localctx = new LengthOneDimensionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_lengthOneDimension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			match(LR_BRACKET);
			setState(366);
			decimalLiteral();
			setState(367);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentSpecContext extends ParserRuleContext {
		public TerminalNode COMMENT() { return getToken(FlinkSqlParser.COMMENT, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSqlParser.STRING_LITERAL, 0); }
		public CommentSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commentSpec; }
	}

	public final CommentSpecContext commentSpec() throws RecognitionException {
		CommentSpecContext _localctx = new CommentSpecContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_commentSpec);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			match(COMMENT);
			setState(370);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WatermarkDefinitionContext extends ParserRuleContext {
		public TerminalNode WATERMARK() { return getToken(FlinkSqlParser.WATERMARK, 0); }
		public TerminalNode FOR() { return getToken(FlinkSqlParser.FOR, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public WatermarkDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_watermarkDefinition; }
	}

	public final WatermarkDefinitionContext watermarkDefinition() throws RecognitionException {
		WatermarkDefinitionContext _localctx = new WatermarkDefinitionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_watermarkDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
			match(WATERMARK);
			setState(373);
			match(FOR);
			setState(374);
			expression();
			setState(375);
			match(AS);
			setState(376);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableConstraintContext extends ParserRuleContext {
		public TerminalNode PRIMARY() { return getToken(FlinkSqlParser.PRIMARY, 0); }
		public TerminalNode KEY() { return getToken(FlinkSqlParser.KEY, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public TerminalNode CONSTRAINT() { return getToken(FlinkSqlParser.CONSTRAINT, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TableConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableConstraint; }
	}

	public final TableConstraintContext tableConstraint() throws RecognitionException {
		TableConstraintContext _localctx = new TableConstraintContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_tableConstraint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONSTRAINT) {
				{
				setState(378);
				match(CONSTRAINT);
				setState(379);
				identifier();
				}
			}

			setState(382);
			match(PRIMARY);
			setState(383);
			match(KEY);
			setState(384);
			match(LR_BRACKET);
			setState(385);
			columnNameList();
			setState(386);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelfDefinitionClauseContext extends ParserRuleContext {
		public TerminalNode PERIOD() { return getToken(FlinkSqlParser.PERIOD, 0); }
		public TerminalNode FOR() { return getToken(FlinkSqlParser.FOR, 0); }
		public TerminalNode SYSTEM_TIME() { return getToken(FlinkSqlParser.SYSTEM_TIME, 0); }
		public SelfDefinitionClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selfDefinitionClause; }
	}

	public final SelfDefinitionClauseContext selfDefinitionClause() throws RecognitionException {
		SelfDefinitionClauseContext _localctx = new SelfDefinitionClauseContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_selfDefinitionClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(388);
			match(PERIOD);
			setState(389);
			match(FOR);
			setState(390);
			match(SYSTEM_TIME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PartitionDefinitionContext extends ParserRuleContext {
		public TerminalNode PARTITIONED() { return getToken(FlinkSqlParser.PARTITIONED, 0); }
		public TerminalNode BY() { return getToken(FlinkSqlParser.BY, 0); }
		public TransformListContext transformList() {
			return getRuleContext(TransformListContext.class,0);
		}
		public PartitionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_partitionDefinition; }
	}

	public final PartitionDefinitionContext partitionDefinition() throws RecognitionException {
		PartitionDefinitionContext _localctx = new PartitionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_partitionDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			match(PARTITIONED);
			setState(393);
			match(BY);
			setState(394);
			transformList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransformListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<TransformContext> transform() {
			return getRuleContexts(TransformContext.class);
		}
		public TransformContext transform(int i) {
			return getRuleContext(TransformContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public TransformListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformList; }
	}

	public final TransformListContext transformList() throws RecognitionException {
		TransformListContext _localctx = new TransformListContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_transformList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
			match(LR_BRACKET);
			setState(397);
			transform();
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(398);
				match(COMMA);
				setState(399);
				transform();
				}
				}
				setState(404);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(405);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransformContext extends ParserRuleContext {
		public TransformContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transform; }
	 
		public TransformContext() { }
		public void copyFrom(TransformContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IdentityTransformContext extends TransformContext {
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public IdentityTransformContext(TransformContext ctx) { copyFrom(ctx); }
	}
	public static class ApplyTransformContext extends TransformContext {
		public IdentifierContext transformName;
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<TransformArgumentContext> transformArgument() {
			return getRuleContexts(TransformArgumentContext.class);
		}
		public TransformArgumentContext transformArgument(int i) {
			return getRuleContext(TransformArgumentContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public ApplyTransformContext(TransformContext ctx) { copyFrom(ctx); }
	}

	public final TransformContext transform() throws RecognitionException {
		TransformContext _localctx = new TransformContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_transform);
		int _la;
		try {
			setState(420);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(407);
				qualifiedName();
				}
				break;
			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(408);
				((ApplyTransformContext)_localctx).transformName = identifier();
				setState(409);
				match(LR_BRACKET);
				setState(410);
				transformArgument();
				setState(415);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(411);
					match(COMMA);
					setState(412);
					transformArgument();
					}
					}
					setState(417);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(418);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransformArgumentContext extends ParserRuleContext {
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public TransformArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformArgument; }
	}

	public final TransformArgumentContext transformArgument() throws RecognitionException {
		TransformArgumentContext _localctx = new TransformArgumentContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_transformArgument);
		try {
			setState(424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(422);
				qualifiedName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(423);
				constant();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LikeDefinitionContext extends ParserRuleContext {
		public TerminalNode LIKE() { return getToken(FlinkSqlParser.LIKE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LikeOptionContext likeOption() {
			return getRuleContext(LikeOptionContext.class,0);
		}
		public LikeDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_likeDefinition; }
	}

	public final LikeDefinitionContext likeDefinition() throws RecognitionException {
		LikeDefinitionContext _localctx = new LikeDefinitionContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_likeDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(LIKE);
			setState(427);
			identifier();
			setState(428);
			likeOption();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LikeOptionContext extends ParserRuleContext {
		public TerminalNode INCLUDING() { return getToken(FlinkSqlParser.INCLUDING, 0); }
		public TerminalNode EXCLUDING() { return getToken(FlinkSqlParser.EXCLUDING, 0); }
		public TerminalNode ALL() { return getToken(FlinkSqlParser.ALL, 0); }
		public TerminalNode CONSTRAINTS() { return getToken(FlinkSqlParser.CONSTRAINTS, 0); }
		public TerminalNode GENERATED() { return getToken(FlinkSqlParser.GENERATED, 0); }
		public TerminalNode OPTIONS() { return getToken(FlinkSqlParser.OPTIONS, 0); }
		public LikeOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_likeOption; }
	}

	public final LikeOptionContext likeOption() throws RecognitionException {
		LikeOptionContext _localctx = new LikeOptionContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_likeOption);
		int _la;
		try {
			setState(434);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(430);
				_la = _input.LA(1);
				if ( !(_la==INCLUDING || _la==EXCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(431);
				_la = _input.LA(1);
				if ( !(_la==ALL || _la==CONSTRAINTS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(432);
				_la = _input.LA(1);
				if ( !(_la==INCLUDING || _la==EXCLUDING) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(433);
				_la = _input.LA(1);
				if ( !(_la==OPTIONS || _la==GENERATED) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateCatalogContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(FlinkSqlParser.CREATE, 0); }
		public TerminalNode CATALOG() { return getToken(FlinkSqlParser.CATALOG, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public CreateCatalogContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createCatalog; }
	}

	public final CreateCatalogContext createCatalog() throws RecognitionException {
		CreateCatalogContext _localctx = new CreateCatalogContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_createCatalog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			match(CREATE);
			setState(437);
			match(CATALOG);
			setState(438);
			uid();
			setState(439);
			withOption();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateDatabaseContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(FlinkSqlParser.CREATE, 0); }
		public TerminalNode DATABASE() { return getToken(FlinkSqlParser.DATABASE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public WithOptionContext withOption() {
			return getRuleContext(WithOptionContext.class,0);
		}
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public CreateDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createDatabase; }
	}

	public final CreateDatabaseContext createDatabase() throws RecognitionException {
		CreateDatabaseContext _localctx = new CreateDatabaseContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_createDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			match(CREATE);
			setState(442);
			match(DATABASE);
			setState(444);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(443);
				ifNotExists();
				}
			}

			setState(446);
			uid();
			setState(448);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(447);
				commentSpec();
				}
			}

			setState(450);
			withOption();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateViewContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(FlinkSqlParser.CREATE, 0); }
		public TerminalNode VIEW() { return getToken(FlinkSqlParser.VIEW, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public ColumnNameListContext columnNameList() {
			return getRuleContext(ColumnNameListContext.class,0);
		}
		public CommentSpecContext commentSpec() {
			return getRuleContext(CommentSpecContext.class,0);
		}
		public CreateViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createView; }
	}

	public final CreateViewContext createView() throws RecognitionException {
		CreateViewContext _localctx = new CreateViewContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_createView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(452);
			match(CREATE);
			setState(454);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TEMPORARY) {
				{
				setState(453);
				match(TEMPORARY);
				}
			}

			setState(456);
			match(VIEW);
			setState(458);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(457);
				ifNotExists();
				}
			}

			setState(460);
			uid();
			setState(462);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(461);
				columnNameList();
				}
				break;
			}
			setState(465);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMENT) {
				{
				setState(464);
				commentSpec();
				}
			}

			setState(467);
			match(AS);
			setState(468);
			queryStatement(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreateFunctionContext extends ParserRuleContext {
		public TerminalNode CREATE() { return getToken(FlinkSqlParser.CREATE, 0); }
		public TerminalNode FUNCTION() { return getToken(FlinkSqlParser.FUNCTION, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public TerminalNode SYSTEM() { return getToken(FlinkSqlParser.SYSTEM, 0); }
		public IfNotExistsContext ifNotExists() {
			return getRuleContext(IfNotExistsContext.class,0);
		}
		public TerminalNode LANGUAGE() { return getToken(FlinkSqlParser.LANGUAGE, 0); }
		public CreateFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createFunction; }
	}

	public final CreateFunctionContext createFunction() throws RecognitionException {
		CreateFunctionContext _localctx = new CreateFunctionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_createFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			match(CREATE);
			setState(474);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				{
				setState(471);
				match(TEMPORARY);
				}
				break;
			case 2:
				{
				setState(472);
				match(TEMPORARY);
				setState(473);
				match(SYSTEM);
				}
				break;
			}
			setState(476);
			match(FUNCTION);
			setState(478);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(477);
				ifNotExists();
				}
			}

			setState(480);
			uid();
			setState(481);
			match(AS);
			setState(482);
			identifier();
			setState(485);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LANGUAGE) {
				{
				setState(483);
				match(LANGUAGE);
				setState(484);
				identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterTableContext extends ParserRuleContext {
		public TerminalNode ALTER() { return getToken(FlinkSqlParser.ALTER, 0); }
		public TerminalNode TABLE() { return getToken(FlinkSqlParser.TABLE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public RenameDefinitionContext renameDefinition() {
			return getRuleContext(RenameDefinitionContext.class,0);
		}
		public SetKeyValueDefinitionContext setKeyValueDefinition() {
			return getRuleContext(SetKeyValueDefinitionContext.class,0);
		}
		public AlterTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterTable; }
	}

	public final AlterTableContext alterTable() throws RecognitionException {
		AlterTableContext _localctx = new AlterTableContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_alterTable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(487);
			match(ALTER);
			setState(488);
			match(TABLE);
			setState(489);
			uid();
			setState(492);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RENAME:
				{
				setState(490);
				renameDefinition();
				}
				break;
			case SET:
				{
				setState(491);
				setKeyValueDefinition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RenameDefinitionContext extends ParserRuleContext {
		public TerminalNode RENAME() { return getToken(FlinkSqlParser.RENAME, 0); }
		public TerminalNode TO() { return getToken(FlinkSqlParser.TO, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public RenameDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_renameDefinition; }
	}

	public final RenameDefinitionContext renameDefinition() throws RecognitionException {
		RenameDefinitionContext _localctx = new RenameDefinitionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_renameDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(494);
			match(RENAME);
			setState(495);
			match(TO);
			setState(496);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetKeyValueDefinitionContext extends ParserRuleContext {
		public TerminalNode SET() { return getToken(FlinkSqlParser.SET, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public SetKeyValueDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setKeyValueDefinition; }
	}

	public final SetKeyValueDefinitionContext setKeyValueDefinition() throws RecognitionException {
		SetKeyValueDefinitionContext _localctx = new SetKeyValueDefinitionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_setKeyValueDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(498);
			match(SET);
			setState(499);
			tablePropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterDatabaseContext extends ParserRuleContext {
		public TerminalNode ALTER() { return getToken(FlinkSqlParser.ALTER, 0); }
		public TerminalNode DATABASE() { return getToken(FlinkSqlParser.DATABASE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public SetKeyValueDefinitionContext setKeyValueDefinition() {
			return getRuleContext(SetKeyValueDefinitionContext.class,0);
		}
		public AlterDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterDatabase; }
	}

	public final AlterDatabaseContext alterDatabase() throws RecognitionException {
		AlterDatabaseContext _localctx = new AlterDatabaseContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_alterDatabase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			match(ALTER);
			setState(502);
			match(DATABASE);
			setState(503);
			uid();
			setState(504);
			setKeyValueDefinition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlterFunctionContext extends ParserRuleContext {
		public TerminalNode ALTER() { return getToken(FlinkSqlParser.ALTER, 0); }
		public TerminalNode FUNCTION() { return getToken(FlinkSqlParser.FUNCTION, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public TerminalNode SYSTEM() { return getToken(FlinkSqlParser.SYSTEM, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public TerminalNode LANGUAGE() { return getToken(FlinkSqlParser.LANGUAGE, 0); }
		public AlterFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alterFunction; }
	}

	public final AlterFunctionContext alterFunction() throws RecognitionException {
		AlterFunctionContext _localctx = new AlterFunctionContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_alterFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(506);
			match(ALTER);
			setState(510);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(507);
				match(TEMPORARY);
				}
				break;
			case 2:
				{
				setState(508);
				match(TEMPORARY);
				setState(509);
				match(SYSTEM);
				}
				break;
			}
			setState(512);
			match(FUNCTION);
			setState(514);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(513);
				ifExists();
				}
			}

			setState(516);
			uid();
			setState(517);
			match(AS);
			setState(518);
			identifier();
			setState(521);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LANGUAGE) {
				{
				setState(519);
				match(LANGUAGE);
				setState(520);
				identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropTableContext extends ParserRuleContext {
		public TerminalNode DROP() { return getToken(FlinkSqlParser.DROP, 0); }
		public TerminalNode TABLE() { return getToken(FlinkSqlParser.TABLE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropTableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropTable; }
	}

	public final DropTableContext dropTable() throws RecognitionException {
		DropTableContext _localctx = new DropTableContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_dropTable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			match(DROP);
			setState(524);
			match(TABLE);
			setState(526);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(525);
				ifExists();
				}
			}

			setState(528);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropDatabaseContext extends ParserRuleContext {
		public Token dropType;
		public TerminalNode DROP() { return getToken(FlinkSqlParser.DROP, 0); }
		public TerminalNode DATABASE() { return getToken(FlinkSqlParser.DATABASE, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public TerminalNode RESTRICT() { return getToken(FlinkSqlParser.RESTRICT, 0); }
		public TerminalNode CASCADE() { return getToken(FlinkSqlParser.CASCADE, 0); }
		public DropDatabaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropDatabase; }
	}

	public final DropDatabaseContext dropDatabase() throws RecognitionException {
		DropDatabaseContext _localctx = new DropDatabaseContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_dropDatabase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			match(DROP);
			setState(531);
			match(DATABASE);
			setState(533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(532);
				ifExists();
				}
			}

			setState(535);
			uid();
			setState(537);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CASCADE || _la==RESTRICT) {
				{
				setState(536);
				((DropDatabaseContext)_localctx).dropType = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==CASCADE || _la==RESTRICT) ) {
					((DropDatabaseContext)_localctx).dropType = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropViewContext extends ParserRuleContext {
		public TerminalNode DROP() { return getToken(FlinkSqlParser.DROP, 0); }
		public TerminalNode VIEW() { return getToken(FlinkSqlParser.VIEW, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropView; }
	}

	public final DropViewContext dropView() throws RecognitionException {
		DropViewContext _localctx = new DropViewContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_dropView);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			match(DROP);
			setState(541);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TEMPORARY) {
				{
				setState(540);
				match(TEMPORARY);
				}
			}

			setState(543);
			match(VIEW);
			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(544);
				ifExists();
				}
			}

			setState(547);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DropFunctionContext extends ParserRuleContext {
		public TerminalNode DROP() { return getToken(FlinkSqlParser.DROP, 0); }
		public TerminalNode FUNCTION() { return getToken(FlinkSqlParser.FUNCTION, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public TerminalNode SYSTEM() { return getToken(FlinkSqlParser.SYSTEM, 0); }
		public IfExistsContext ifExists() {
			return getRuleContext(IfExistsContext.class,0);
		}
		public DropFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropFunction; }
	}

	public final DropFunctionContext dropFunction() throws RecognitionException {
		DropFunctionContext _localctx = new DropFunctionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_dropFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			match(DROP);
			setState(553);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				{
				setState(550);
				match(TEMPORARY);
				}
				break;
			case 2:
				{
				setState(551);
				match(TEMPORARY);
				setState(552);
				match(SYSTEM);
				}
				break;
			}
			setState(555);
			match(FUNCTION);
			setState(557);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IF) {
				{
				setState(556);
				ifExists();
				}
			}

			setState(559);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertStatementContext extends ParserRuleContext {
		public TerminalNode INSERT() { return getToken(FlinkSqlParser.INSERT, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode INTO() { return getToken(FlinkSqlParser.INTO, 0); }
		public TerminalNode OVERWRITE() { return getToken(FlinkSqlParser.OVERWRITE, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public ValuesDefinitionContext valuesDefinition() {
			return getRuleContext(ValuesDefinitionContext.class,0);
		}
		public InsertPartitionDefinitionContext insertPartitionDefinition() {
			return getRuleContext(InsertPartitionDefinitionContext.class,0);
		}
		public InsertStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertStatement; }
	}

	public final InsertStatementContext insertStatement() throws RecognitionException {
		InsertStatementContext _localctx = new InsertStatementContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_insertStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(561);
			match(INSERT);
			setState(562);
			_la = _input.LA(1);
			if ( !(_la==INTO || _la==OVERWRITE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(563);
			uid();
			setState(569);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(565);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PARTITION) {
					{
					setState(564);
					insertPartitionDefinition();
					}
				}

				setState(567);
				queryStatement(0);
				}
				break;
			case 2:
				{
				setState(568);
				valuesDefinition();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertPartitionDefinitionContext extends ParserRuleContext {
		public TerminalNode PARTITION() { return getToken(FlinkSqlParser.PARTITION, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public InsertPartitionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertPartitionDefinition; }
	}

	public final InsertPartitionDefinitionContext insertPartitionDefinition() throws RecognitionException {
		InsertPartitionDefinitionContext _localctx = new InsertPartitionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_insertPartitionDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(571);
			match(PARTITION);
			setState(572);
			tablePropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuesDefinitionContext extends ParserRuleContext {
		public TerminalNode VALUES() { return getToken(FlinkSqlParser.VALUES, 0); }
		public List<ValuesRowDefinitionContext> valuesRowDefinition() {
			return getRuleContexts(ValuesRowDefinitionContext.class);
		}
		public ValuesRowDefinitionContext valuesRowDefinition(int i) {
			return getRuleContext(ValuesRowDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public ValuesDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuesDefinition; }
	}

	public final ValuesDefinitionContext valuesDefinition() throws RecognitionException {
		ValuesDefinitionContext _localctx = new ValuesDefinitionContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_valuesDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			match(VALUES);
			setState(575);
			valuesRowDefinition();
			setState(580);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(576);
				match(COMMA);
				setState(577);
				valuesRowDefinition();
				}
				}
				setState(582);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuesRowDefinitionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<ConstantContext> constant() {
			return getRuleContexts(ConstantContext.class);
		}
		public ConstantContext constant(int i) {
			return getRuleContext(ConstantContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public ValuesRowDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuesRowDefinition; }
	}

	public final ValuesRowDefinitionContext valuesRowDefinition() throws RecognitionException {
		ValuesRowDefinitionContext _localctx = new ValuesRowDefinitionContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_valuesRowDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(583);
			match(LR_BRACKET);
			setState(584);
			constant();
			setState(589);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(585);
				match(COMMA);
				setState(586);
				constant();
				}
				}
				setState(591);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(592);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryStatementContext extends ParserRuleContext {
		public QueryStatementContext left;
		public Token operator;
		public QueryStatementContext right;
		public ValuesCaluseContext valuesCaluse() {
			return getRuleContext(ValuesCaluseContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<QueryStatementContext> queryStatement() {
			return getRuleContexts(QueryStatementContext.class);
		}
		public QueryStatementContext queryStatement(int i) {
			return getRuleContext(QueryStatementContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public SelectClauseContext selectClause() {
			return getRuleContext(SelectClauseContext.class,0);
		}
		public OrderByCaluseContext orderByCaluse() {
			return getRuleContext(OrderByCaluseContext.class,0);
		}
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public SelectStatementContext selectStatement() {
			return getRuleContext(SelectStatementContext.class,0);
		}
		public TerminalNode INTERSECT() { return getToken(FlinkSqlParser.INTERSECT, 0); }
		public TerminalNode UNION() { return getToken(FlinkSqlParser.UNION, 0); }
		public TerminalNode EXCEPT() { return getToken(FlinkSqlParser.EXCEPT, 0); }
		public TerminalNode ALL() { return getToken(FlinkSqlParser.ALL, 0); }
		public QueryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_queryStatement; }
	}

	public final QueryStatementContext queryStatement() throws RecognitionException {
		return queryStatement(0);
	}

	private QueryStatementContext queryStatement(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		QueryStatementContext _localctx = new QueryStatementContext(_ctx, _parentState);
		QueryStatementContext _prevctx = _localctx;
		int _startState = 88;
		enterRecursionRule(_localctx, 88, RULE_queryStatement, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(614);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				{
				setState(595);
				valuesCaluse();
				}
				break;
			case 2:
				{
				setState(596);
				match(LR_BRACKET);
				setState(597);
				queryStatement(0);
				setState(598);
				match(RR_BRACKET);
				}
				break;
			case 3:
				{
				setState(600);
				selectClause();
				setState(602);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
				case 1:
					{
					setState(601);
					orderByCaluse();
					}
					break;
				}
				setState(605);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
				case 1:
					{
					setState(604);
					limitClause();
					}
					break;
				}
				}
				break;
			case 4:
				{
				setState(607);
				selectStatement();
				setState(609);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
				case 1:
					{
					setState(608);
					orderByCaluse();
					}
					break;
				}
				setState(612);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
				case 1:
					{
					setState(611);
					limitClause();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(630);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,61,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new QueryStatementContext(_parentctx, _parentState);
					_localctx.left = _prevctx;
					_localctx.left = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_queryStatement);
					setState(616);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(617);
					((QueryStatementContext)_localctx).operator = _input.LT(1);
					_la = _input.LA(1);
					if ( !(((((_la - 93)) & ~0x3f) == 0 && ((1L << (_la - 93)) & ((1L << (UNION - 93)) | (1L << (EXCEPT - 93)) | (1L << (INTERSECT - 93)))) != 0)) ) {
						((QueryStatementContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(619);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==ALL) {
						{
						setState(618);
						match(ALL);
						}
					}

					setState(621);
					((QueryStatementContext)_localctx).right = queryStatement(0);
					setState(623);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
					case 1:
						{
						setState(622);
						orderByCaluse();
						}
						break;
					}
					setState(626);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
					case 1:
						{
						setState(625);
						limitClause();
						}
						break;
					}
					}
					} 
				}
				setState(632);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,61,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValuesCaluseContext extends ParserRuleContext {
		public TerminalNode VALUES() { return getToken(FlinkSqlParser.VALUES, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public ValuesCaluseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valuesCaluse; }
	}

	public final ValuesCaluseContext valuesCaluse() throws RecognitionException {
		ValuesCaluseContext _localctx = new ValuesCaluseContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_valuesCaluse);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(633);
			match(VALUES);
			setState(634);
			expression();
			setState(639);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(635);
					match(COMMA);
					setState(636);
					expression();
					}
					} 
				}
				setState(641);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectStatementContext extends ParserRuleContext {
		public SelectClauseContext selectClause() {
			return getRuleContext(SelectClauseContext.class,0);
		}
		public FromClauseContext fromClause() {
			return getRuleContext(FromClauseContext.class,0);
		}
		public WhereClauseContext whereClause() {
			return getRuleContext(WhereClauseContext.class,0);
		}
		public GroupByClauseContext groupByClause() {
			return getRuleContext(GroupByClauseContext.class,0);
		}
		public HavingClauseContext havingClause() {
			return getRuleContext(HavingClauseContext.class,0);
		}
		public WindowClauseContext windowClause() {
			return getRuleContext(WindowClauseContext.class,0);
		}
		public SelectStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectStatement; }
	}

	public final SelectStatementContext selectStatement() throws RecognitionException {
		SelectStatementContext _localctx = new SelectStatementContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_selectStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			selectClause();
			setState(643);
			fromClause();
			setState(645);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				{
				setState(644);
				whereClause();
				}
				break;
			}
			setState(648);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				{
				setState(647);
				groupByClause();
				}
				break;
			}
			setState(651);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
			case 1:
				{
				setState(650);
				havingClause();
				}
				break;
			}
			setState(654);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				{
				setState(653);
				windowClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectClauseContext extends ParserRuleContext {
		public TerminalNode SELECT() { return getToken(FlinkSqlParser.SELECT, 0); }
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
		public List<ProjectItemDefinitionContext> projectItemDefinition() {
			return getRuleContexts(ProjectItemDefinitionContext.class);
		}
		public ProjectItemDefinitionContext projectItemDefinition(int i) {
			return getRuleContext(ProjectItemDefinitionContext.class,i);
		}
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public SelectClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectClause; }
	}

	public final SelectClauseContext selectClause() throws RecognitionException {
		SelectClauseContext _localctx = new SelectClauseContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_selectClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(656);
			match(SELECT);
			setState(658);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				{
				setState(657);
				setQuantifier();
				}
				break;
			}
			setState(669);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				{
				setState(660);
				match(ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				setState(661);
				projectItemDefinition();
				setState(666);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(662);
						match(COMMA);
						setState(663);
						projectItemDefinition();
						}
						} 
					}
					setState(668);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProjectItemDefinitionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public ProjectItemDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_projectItemDefinition; }
	}

	public final ProjectItemDefinitionContext projectItemDefinition() throws RecognitionException {
		ProjectItemDefinitionContext _localctx = new ProjectItemDefinitionContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_projectItemDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(671);
			expression();
			setState(676);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				{
				setState(673);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
				case 1:
					{
					setState(672);
					match(AS);
					}
					break;
				}
				setState(675);
				expression();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromClauseContext extends ParserRuleContext {
		public TerminalNode FROM() { return getToken(FlinkSqlParser.FROM, 0); }
		public TableExpressionContext tableExpression() {
			return getRuleContext(TableExpressionContext.class,0);
		}
		public FromClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromClause; }
	}

	public final FromClauseContext fromClause() throws RecognitionException {
		FromClauseContext _localctx = new FromClauseContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_fromClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(678);
			match(FROM);
			setState(679);
			tableExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableExpressionContext extends ParserRuleContext {
		public List<TableReferenceContext> tableReference() {
			return getRuleContexts(TableReferenceContext.class);
		}
		public TableReferenceContext tableReference(int i) {
			return getRuleContext(TableReferenceContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public List<TableExpressionContext> tableExpression() {
			return getRuleContexts(TableExpressionContext.class);
		}
		public TableExpressionContext tableExpression(int i) {
			return getRuleContext(TableExpressionContext.class,i);
		}
		public TerminalNode JOIN() { return getToken(FlinkSqlParser.JOIN, 0); }
		public TerminalNode NATURAL() { return getToken(FlinkSqlParser.NATURAL, 0); }
		public JoinConditionContext joinCondition() {
			return getRuleContext(JoinConditionContext.class,0);
		}
		public TerminalNode LEFT() { return getToken(FlinkSqlParser.LEFT, 0); }
		public TerminalNode RIGHT() { return getToken(FlinkSqlParser.RIGHT, 0); }
		public TerminalNode FULL() { return getToken(FlinkSqlParser.FULL, 0); }
		public TerminalNode INNER() { return getToken(FlinkSqlParser.INNER, 0); }
		public TableExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableExpression; }
	}

	public final TableExpressionContext tableExpression() throws RecognitionException {
		return tableExpression(0);
	}

	private TableExpressionContext tableExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TableExpressionContext _localctx = new TableExpressionContext(_ctx, _parentState);
		TableExpressionContext _prevctx = _localctx;
		int _startState = 100;
		enterRecursionRule(_localctx, 100, RULE_tableExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(682);
			tableReference();
			setState(687);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(683);
					match(COMMA);
					setState(684);
					tableReference();
					}
					} 
				}
				setState(689);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(704);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TableExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_tableExpression);
					setState(690);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(692);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NATURAL) {
						{
						setState(691);
						match(NATURAL);
						}
					}

					setState(695);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INNER) | (1L << LEFT) | (1L << RIGHT) | (1L << FULL))) != 0)) {
						{
						setState(694);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INNER) | (1L << LEFT) | (1L << RIGHT) | (1L << FULL))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
					}

					setState(697);
					match(JOIN);
					setState(698);
					tableExpression(0);
					setState(700);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
					case 1:
						{
						setState(699);
						joinCondition();
						}
						break;
					}
					}
					} 
				}
				setState(706);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TableReferenceContext extends ParserRuleContext {
		public TablePrimaryContext tablePrimary() {
			return getRuleContext(TablePrimaryContext.class,0);
		}
		public TableAliasContext tableAlias() {
			return getRuleContext(TableAliasContext.class,0);
		}
		public TableReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableReference; }
	}

	public final TableReferenceContext tableReference() throws RecognitionException {
		TableReferenceContext _localctx = new TableReferenceContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_tableReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(707);
			tablePrimary();
			setState(709);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				{
				setState(708);
				tableAlias();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePrimaryContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode TABLE() { return getToken(FlinkSqlParser.TABLE, 0); }
		public TerminalNode LATERAL() { return getToken(FlinkSqlParser.LATERAL, 0); }
		public List<TerminalNode> LR_BRACKET() { return getTokens(FlinkSqlParser.LR_BRACKET); }
		public TerminalNode LR_BRACKET(int i) {
			return getToken(FlinkSqlParser.LR_BRACKET, i);
		}
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public List<TerminalNode> RR_BRACKET() { return getTokens(FlinkSqlParser.RR_BRACKET); }
		public TerminalNode RR_BRACKET(int i) {
			return getToken(FlinkSqlParser.RR_BRACKET, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public TerminalNode UNNEST() { return getToken(FlinkSqlParser.UNNEST, 0); }
		public TablePrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePrimary; }
	}

	public final TablePrimaryContext tablePrimary() throws RecognitionException {
		TablePrimaryContext _localctx = new TablePrimaryContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_tablePrimary);
		int _la;
		try {
			setState(736);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(712);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
				case 1:
					{
					setState(711);
					match(TABLE);
					}
					break;
				}
				setState(714);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(715);
				match(LATERAL);
				setState(716);
				match(TABLE);
				setState(717);
				match(LR_BRACKET);
				setState(718);
				uid();
				setState(719);
				match(LR_BRACKET);
				setState(720);
				expression();
				setState(725);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(721);
					match(COMMA);
					setState(722);
					expression();
					}
					}
					setState(727);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(728);
				match(RR_BRACKET);
				setState(729);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(731);
				match(UNNEST);
				setState(732);
				match(LR_BRACKET);
				setState(733);
				expression();
				setState(734);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JoinConditionContext extends ParserRuleContext {
		public TerminalNode ON() { return getToken(FlinkSqlParser.ON, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public TerminalNode USING() { return getToken(FlinkSqlParser.USING, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<UidContext> uid() {
			return getRuleContexts(UidContext.class);
		}
		public UidContext uid(int i) {
			return getRuleContext(UidContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public JoinConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_joinCondition; }
	}

	public final JoinConditionContext joinCondition() throws RecognitionException {
		JoinConditionContext _localctx = new JoinConditionContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_joinCondition);
		int _la;
		try {
			setState(752);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ON:
				enterOuterAlt(_localctx, 1);
				{
				setState(738);
				match(ON);
				setState(739);
				booleanExpression(0);
				}
				break;
			case USING:
				enterOuterAlt(_localctx, 2);
				{
				setState(740);
				match(USING);
				setState(741);
				match(LR_BRACKET);
				setState(742);
				uid();
				setState(747);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(743);
					match(COMMA);
					setState(744);
					uid();
					}
					}
					setState(749);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(750);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhereClauseContext extends ParserRuleContext {
		public TerminalNode WHERE() { return getToken(FlinkSqlParser.WHERE, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public WhereClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whereClause; }
	}

	public final WhereClauseContext whereClause() throws RecognitionException {
		WhereClauseContext _localctx = new WhereClauseContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_whereClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(754);
			match(WHERE);
			setState(755);
			booleanExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupByClauseContext extends ParserRuleContext {
		public TerminalNode GROUP() { return getToken(FlinkSqlParser.GROUP, 0); }
		public TerminalNode BY() { return getToken(FlinkSqlParser.BY, 0); }
		public List<GroupItemDefinitionContext> groupItemDefinition() {
			return getRuleContexts(GroupItemDefinitionContext.class);
		}
		public GroupItemDefinitionContext groupItemDefinition(int i) {
			return getRuleContext(GroupItemDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public GroupByClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupByClause; }
	}

	public final GroupByClauseContext groupByClause() throws RecognitionException {
		GroupByClauseContext _localctx = new GroupByClauseContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_groupByClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(757);
			match(GROUP);
			setState(758);
			match(BY);
			setState(759);
			groupItemDefinition();
			setState(764);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,83,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(760);
					match(COMMA);
					setState(761);
					groupItemDefinition();
					}
					} 
				}
				setState(766);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,83,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupItemDefinitionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public TerminalNode CUBE() { return getToken(FlinkSqlParser.CUBE, 0); }
		public TerminalNode ROLLUP() { return getToken(FlinkSqlParser.ROLLUP, 0); }
		public TerminalNode GROUPING() { return getToken(FlinkSqlParser.GROUPING, 0); }
		public TerminalNode SETS() { return getToken(FlinkSqlParser.SETS, 0); }
		public List<GroupItemDefinitionContext> groupItemDefinition() {
			return getRuleContexts(GroupItemDefinitionContext.class);
		}
		public GroupItemDefinitionContext groupItemDefinition(int i) {
			return getRuleContext(GroupItemDefinitionContext.class,i);
		}
		public GroupItemDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupItemDefinition; }
	}

	public final GroupItemDefinitionContext groupItemDefinition() throws RecognitionException {
		GroupItemDefinitionContext _localctx = new GroupItemDefinitionContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_groupItemDefinition);
		int _la;
		try {
			setState(818);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(767);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(768);
				match(LR_BRACKET);
				setState(769);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(770);
				match(LR_BRACKET);
				setState(771);
				expression();
				setState(776);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(772);
					match(COMMA);
					setState(773);
					expression();
					}
					}
					setState(778);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(779);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(781);
				match(CUBE);
				setState(782);
				match(LR_BRACKET);
				setState(783);
				expression();
				setState(788);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(784);
					match(COMMA);
					setState(785);
					expression();
					}
					}
					setState(790);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(791);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(793);
				match(ROLLUP);
				setState(794);
				match(LR_BRACKET);
				setState(795);
				expression();
				setState(800);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(796);
					match(COMMA);
					setState(797);
					expression();
					}
					}
					setState(802);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(803);
				match(RR_BRACKET);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(805);
				match(GROUPING);
				setState(806);
				match(SETS);
				setState(807);
				match(LR_BRACKET);
				setState(808);
				groupItemDefinition();
				setState(813);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(809);
					match(COMMA);
					setState(810);
					groupItemDefinition();
					}
					}
					setState(815);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(816);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HavingClauseContext extends ParserRuleContext {
		public TerminalNode HAVING() { return getToken(FlinkSqlParser.HAVING, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public HavingClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_havingClause; }
	}

	public final HavingClauseContext havingClause() throws RecognitionException {
		HavingClauseContext _localctx = new HavingClauseContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_havingClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(820);
			match(HAVING);
			setState(821);
			booleanExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderByCaluseContext extends ParserRuleContext {
		public TerminalNode ORDER() { return getToken(FlinkSqlParser.ORDER, 0); }
		public TerminalNode BY() { return getToken(FlinkSqlParser.BY, 0); }
		public List<OrderItemDefitionContext> orderItemDefition() {
			return getRuleContexts(OrderItemDefitionContext.class);
		}
		public OrderItemDefitionContext orderItemDefition(int i) {
			return getRuleContext(OrderItemDefitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public OrderByCaluseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderByCaluse; }
	}

	public final OrderByCaluseContext orderByCaluse() throws RecognitionException {
		OrderByCaluseContext _localctx = new OrderByCaluseContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_orderByCaluse);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(823);
			match(ORDER);
			setState(824);
			match(BY);
			setState(825);
			orderItemDefition();
			setState(830);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(826);
					match(COMMA);
					setState(827);
					orderItemDefition();
					}
					} 
				}
				setState(832);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderItemDefitionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ASC() { return getToken(FlinkSqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(FlinkSqlParser.DESC, 0); }
		public OrderItemDefitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderItemDefition; }
	}

	public final OrderItemDefitionContext orderItemDefition() throws RecognitionException {
		OrderItemDefitionContext _localctx = new OrderItemDefitionContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_orderItemDefition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(833);
			expression();
			setState(835);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				{
				setState(834);
				_la = _input.LA(1);
				if ( !(_la==ASC || _la==DESC) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LimitClauseContext extends ParserRuleContext {
		public ExpressionContext limit;
		public TerminalNode LIMIT() { return getToken(FlinkSqlParser.LIMIT, 0); }
		public TerminalNode ALL() { return getToken(FlinkSqlParser.ALL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LimitClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitClause; }
	}

	public final LimitClauseContext limitClause() throws RecognitionException {
		LimitClauseContext _localctx = new LimitClauseContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_limitClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(837);
			match(LIMIT);
			setState(840);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				setState(838);
				match(ALL);
				}
				break;
			case 2:
				{
				setState(839);
				((LimitClauseContext)_localctx).limit = expression();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowClauseContext extends ParserRuleContext {
		public TerminalNode WINDOW() { return getToken(FlinkSqlParser.WINDOW, 0); }
		public List<NamedWindowContext> namedWindow() {
			return getRuleContexts(NamedWindowContext.class);
		}
		public NamedWindowContext namedWindow(int i) {
			return getRuleContext(NamedWindowContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public WindowClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowClause; }
	}

	public final WindowClauseContext windowClause() throws RecognitionException {
		WindowClauseContext _localctx = new WindowClauseContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_windowClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(842);
			match(WINDOW);
			setState(843);
			namedWindow();
			setState(848);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(844);
					match(COMMA);
					setState(845);
					namedWindow();
					}
					} 
				}
				setState(850);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamedWindowContext extends ParserRuleContext {
		public ErrorCapturingIdentifierContext name;
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public WindowSpecContext windowSpec() {
			return getRuleContext(WindowSpecContext.class,0);
		}
		public ErrorCapturingIdentifierContext errorCapturingIdentifier() {
			return getRuleContext(ErrorCapturingIdentifierContext.class,0);
		}
		public NamedWindowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namedWindow; }
	}

	public final NamedWindowContext namedWindow() throws RecognitionException {
		NamedWindowContext _localctx = new NamedWindowContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_namedWindow);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(851);
			((NamedWindowContext)_localctx).name = errorCapturingIdentifier();
			setState(852);
			match(AS);
			setState(853);
			windowSpec();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowSpecContext extends ParserRuleContext {
		public ErrorCapturingIdentifierContext name;
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public TerminalNode ORDER() { return getToken(FlinkSqlParser.ORDER, 0); }
		public List<TerminalNode> BY() { return getTokens(FlinkSqlParser.BY); }
		public TerminalNode BY(int i) {
			return getToken(FlinkSqlParser.BY, i);
		}
		public List<SortItemContext> sortItem() {
			return getRuleContexts(SortItemContext.class);
		}
		public SortItemContext sortItem(int i) {
			return getRuleContext(SortItemContext.class,i);
		}
		public TerminalNode PARTITION() { return getToken(FlinkSqlParser.PARTITION, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public WindowFrameContext windowFrame() {
			return getRuleContext(WindowFrameContext.class,0);
		}
		public ErrorCapturingIdentifierContext errorCapturingIdentifier() {
			return getRuleContext(ErrorCapturingIdentifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public WindowSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowSpec; }
	}

	public final WindowSpecContext windowSpec() throws RecognitionException {
		WindowSpecContext _localctx = new WindowSpecContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_windowSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(856);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER) | (1L << LEFT) | (1L << SEMI) | (1L << RIGHT) | (1L << FULL) | (1L << NATURAL) | (1L << ON) | (1L << PIVOT) | (1L << LATERAL) | (1L << WINDOW) | (1L << OVER) | (1L << PARTITION) | (1L << RANGE) | (1L << ROWS) | (1L << UNBOUNDED) | (1L << PRECEDING) | (1L << FOLLOWING))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (WITH - 64)) | (1L << (VALUES - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)) | (1L << (COMMIT - 64)) | (1L << (ROLLBACK - 64)) | (1L << (MACRO - 64)) | (1L << (IGNORE - 64)) | (1L << (BOTH - 64)) | (1L << (LEADING - 64)) | (1L << (TRAILING - 64)) | (1L << (IF - 64)) | (1L << (POSITION - 64)) | (1L << (EXTRACT - 64)) | (1L << (MINUS - 64)) | (1L << (DIV - 64)) | (1L << (PERCENTLIT - 64)) | (1L << (BUCKET - 64)) | (1L << (OUT - 64)) | (1L << (OF - 64)) | (1L << (SORT - 64)) | (1L << (CLUSTER - 64)) | (1L << (DISTRIBUTE - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (USING - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)) | (1L << (UNSET - 128)) | (1L << (TBLPROPERTIES - 128)) | (1L << (DBPROPERTIES - 128)) | (1L << (BUCKETS - 128)) | (1L << (SKEWED - 128)) | (1L << (STORED - 128)) | (1L << (DIRECTORIES - 128)) | (1L << (LOCATION - 128)) | (1L << (EXCHANGE - 128)) | (1L << (ARCHIVE - 128)) | (1L << (UNARCHIVE - 128)) | (1L << (FILEFORMAT - 128)) | (1L << (TOUCH - 128)) | (1L << (COMPACT - 128)) | (1L << (CONCATENATE - 128)) | (1L << (CHANGE - 128)) | (1L << (CASCADE - 128)) | (1L << (CONSTRAINT - 128)) | (1L << (RESTRICT - 128)) | (1L << (CLUSTERED - 128)) | (1L << (SORTED - 128)) | (1L << (PURGE - 128)) | (1L << (INPUTFORMAT - 128)) | (1L << (OUTPUTFORMAT - 128)) | (1L << (DATABASE - 128)) | (1L << (DATABASES - 128)) | (1L << (DFS - 128)) | (1L << (TRUNCATE - 128)) | (1L << (ANALYZE - 128)) | (1L << (COMPUTE - 128)) | (1L << (LIST - 128)) | (1L << (STATISTICS - 128)) | (1L << (PARTITIONED - 128)) | (1L << (EXTERNAL - 128)) | (1L << (DEFINED - 128)) | (1L << (REVOKE - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)) | (1L << (WATERMARK - 192)) | (1L << (UNNEST - 192)) | (1L << (MATCH - 192)) | (1L << (NEXT - 192)) | (1L << (WITHIN - 192)) | (1L << (WS - 192)) | (1L << (SYSTEM - 192)) | (1L << (INCLUDING - 192)) | (1L << (EXCLUDING - 192)) | (1L << (CONSTRAINTS - 192)) | (1L << (GENERATED - 192)) | (1L << (CATALOG - 192)) | (1L << (LANGUAGE - 192)) | (1L << (CATALOGS - 192)) | (1L << (VIEWS - 192)) | (1L << (PRIMARY - 192)) | (1L << (KEY - 192)) | (1L << (PERIOD - 192)) | (1L << (SYSTEM_TIME - 192)) | (1L << (STRING - 192)) | (1L << (ARRAY - 192)) | (1L << (MAP - 192)) | (1L << (CHAR - 192)) | (1L << (VARCHAR - 192)) | (1L << (BINARY - 192)) | (1L << (VARBINARY - 192)) | (1L << (BYTES - 192)) | (1L << (DECIMAL - 192)) | (1L << (TINYINT - 192)) | (1L << (SMALLINT - 192)) | (1L << (INT - 192)) | (1L << (BIGINT - 192)) | (1L << (FLOAT - 192)) | (1L << (DOUBLE - 192)) | (1L << (DATE - 192)) | (1L << (TIME - 192)) | (1L << (TIMESTAMP - 192)) | (1L << (MULTISET - 192)) | (1L << (BOOLEAN - 192)) | (1L << (RAW - 192)) | (1L << (ROW - 192)) | (1L << (NULL - 192)) | (1L << (DATETIME - 192)))) != 0) || ((((_la - 286)) & ~0x3f) == 0 && ((1L << (_la - 286)) & ((1L << (STRING_LITERAL - 286)) | (1L << (DIG_LITERAL - 286)) | (1L << (ID_LITERAL - 286)))) != 0)) {
				{
				setState(855);
				((WindowSpecContext)_localctx).name = errorCapturingIdentifier();
				}
			}

			setState(858);
			match(LR_BRACKET);
			setState(869);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDER) {
				{
				setState(859);
				match(ORDER);
				setState(860);
				match(BY);
				setState(861);
				sortItem();
				setState(866);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(862);
					match(COMMA);
					setState(863);
					sortItem();
					}
					}
					setState(868);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(881);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PARTITION) {
				{
				setState(871);
				match(PARTITION);
				setState(872);
				match(BY);
				setState(873);
				expression();
				setState(878);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(874);
					match(COMMA);
					setState(875);
					expression();
					}
					}
					setState(880);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(884);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RANGE || _la==ROWS) {
				{
				setState(883);
				windowFrame();
				}
			}

			setState(886);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SortItemContext extends ParserRuleContext {
		public Token ordering;
		public Token nullOrder;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode NULLS() { return getToken(FlinkSqlParser.NULLS, 0); }
		public TerminalNode ASC() { return getToken(FlinkSqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(FlinkSqlParser.DESC, 0); }
		public TerminalNode LAST() { return getToken(FlinkSqlParser.LAST, 0); }
		public TerminalNode FIRST() { return getToken(FlinkSqlParser.FIRST, 0); }
		public SortItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sortItem; }
	}

	public final SortItemContext sortItem() throws RecognitionException {
		SortItemContext _localctx = new SortItemContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_sortItem);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(888);
			expression();
			setState(890);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASC || _la==DESC) {
				{
				setState(889);
				((SortItemContext)_localctx).ordering = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ASC || _la==DESC) ) {
					((SortItemContext)_localctx).ordering = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(894);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NULLS) {
				{
				setState(892);
				match(NULLS);
				setState(893);
				((SortItemContext)_localctx).nullOrder = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==FIRST || _la==LAST) ) {
					((SortItemContext)_localctx).nullOrder = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WindowFrameContext extends ParserRuleContext {
		public TerminalNode RANGE() { return getToken(FlinkSqlParser.RANGE, 0); }
		public FrameBoundContext frameBound() {
			return getRuleContext(FrameBoundContext.class,0);
		}
		public TerminalNode ROWS() { return getToken(FlinkSqlParser.ROWS, 0); }
		public WindowFrameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_windowFrame; }
	}

	public final WindowFrameContext windowFrame() throws RecognitionException {
		WindowFrameContext _localctx = new WindowFrameContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_windowFrame);
		try {
			setState(900);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RANGE:
				enterOuterAlt(_localctx, 1);
				{
				setState(896);
				match(RANGE);
				setState(897);
				frameBound();
				}
				break;
			case ROWS:
				enterOuterAlt(_localctx, 2);
				{
				setState(898);
				match(ROWS);
				setState(899);
				frameBound();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FrameBoundContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PRECEDING() { return getToken(FlinkSqlParser.PRECEDING, 0); }
		public FrameBoundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_frameBound; }
	}

	public final FrameBoundContext frameBound() throws RecognitionException {
		FrameBoundContext _localctx = new FrameBoundContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_frameBound);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(902);
			expression();
			setState(903);
			match(PRECEDING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(905);
			booleanExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanExpressionContext extends ParserRuleContext {
		public BooleanExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanExpression; }
	 
		public BooleanExpressionContext() { }
		public void copyFrom(BooleanExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LogicalNotContext extends BooleanExpressionContext {
		public TerminalNode NOT() { return getToken(FlinkSqlParser.NOT, 0); }
		public BooleanExpressionContext booleanExpression() {
			return getRuleContext(BooleanExpressionContext.class,0);
		}
		public LogicalNotContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PredicatedContext extends BooleanExpressionContext {
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public PredicateContext predicate() {
			return getRuleContext(PredicateContext.class,0);
		}
		public PredicatedContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsContext extends BooleanExpressionContext {
		public TerminalNode EXISTS() { return getToken(FlinkSqlParser.EXISTS, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public ExistsContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalBinaryContext extends BooleanExpressionContext {
		public BooleanExpressionContext left;
		public Token operator;
		public BooleanExpressionContext right;
		public List<BooleanExpressionContext> booleanExpression() {
			return getRuleContexts(BooleanExpressionContext.class);
		}
		public BooleanExpressionContext booleanExpression(int i) {
			return getRuleContext(BooleanExpressionContext.class,i);
		}
		public TerminalNode AND() { return getToken(FlinkSqlParser.AND, 0); }
		public TerminalNode OR() { return getToken(FlinkSqlParser.OR, 0); }
		public LogicalBinaryContext(BooleanExpressionContext ctx) { copyFrom(ctx); }
	}

	public final BooleanExpressionContext booleanExpression() throws RecognitionException {
		return booleanExpression(0);
	}

	private BooleanExpressionContext booleanExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BooleanExpressionContext _localctx = new BooleanExpressionContext(_ctx, _parentState);
		BooleanExpressionContext _prevctx = _localctx;
		int _startState = 136;
		enterRecursionRule(_localctx, 136, RULE_booleanExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(919);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(908);
				match(NOT);
				setState(909);
				booleanExpression(5);
				}
				break;
			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(910);
				match(EXISTS);
				setState(911);
				match(LR_BRACKET);
				setState(912);
				queryStatement(0);
				setState(913);
				match(RR_BRACKET);
				}
				break;
			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(915);
				valueExpression(0);
				setState(917);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
				case 1:
					{
					setState(916);
					predicate();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(929);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(927);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(921);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(922);
						((LogicalBinaryContext)_localctx).operator = match(AND);
						setState(923);
						((LogicalBinaryContext)_localctx).right = booleanExpression(3);
						}
						break;
					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						((LogicalBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_booleanExpression);
						setState(924);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(925);
						((LogicalBinaryContext)_localctx).operator = match(OR);
						setState(926);
						((LogicalBinaryContext)_localctx).right = booleanExpression(2);
						}
						break;
					}
					} 
				}
				setState(931);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PredicateContext extends ParserRuleContext {
		public Token kind;
		public ValueExpressionContext lower;
		public ValueExpressionContext upper;
		public ValueExpressionContext pattern;
		public Token quantifier;
		public ValueExpressionContext right;
		public TerminalNode AND() { return getToken(FlinkSqlParser.AND, 0); }
		public TerminalNode BETWEEN() { return getToken(FlinkSqlParser.BETWEEN, 0); }
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public TerminalNode NOT() { return getToken(FlinkSqlParser.NOT, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public TerminalNode IN() { return getToken(FlinkSqlParser.IN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode EXISTS() { return getToken(FlinkSqlParser.EXISTS, 0); }
		public TerminalNode RLIKE() { return getToken(FlinkSqlParser.RLIKE, 0); }
		public TerminalNode LIKE() { return getToken(FlinkSqlParser.LIKE, 0); }
		public TerminalNode ANY() { return getToken(FlinkSqlParser.ANY, 0); }
		public TerminalNode ALL() { return getToken(FlinkSqlParser.ALL, 0); }
		public TerminalNode IS() { return getToken(FlinkSqlParser.IS, 0); }
		public TerminalNode NULL() { return getToken(FlinkSqlParser.NULL, 0); }
		public TerminalNode TRUE() { return getToken(FlinkSqlParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(FlinkSqlParser.FALSE, 0); }
		public TerminalNode FROM() { return getToken(FlinkSqlParser.FROM, 0); }
		public TerminalNode DISTINCT() { return getToken(FlinkSqlParser.DISTINCT, 0); }
		public PredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicate; }
	}

	public final PredicateContext predicate() throws RecognitionException {
		PredicateContext _localctx = new PredicateContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_predicate);
		int _la;
		try {
			setState(1015);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(933);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(932);
					match(NOT);
					}
				}

				setState(935);
				((PredicateContext)_localctx).kind = match(BETWEEN);
				setState(936);
				((PredicateContext)_localctx).lower = valueExpression(0);
				setState(937);
				match(AND);
				setState(938);
				((PredicateContext)_localctx).upper = valueExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(941);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(940);
					match(NOT);
					}
				}

				setState(943);
				((PredicateContext)_localctx).kind = match(IN);
				setState(944);
				match(LR_BRACKET);
				setState(945);
				expression();
				setState(950);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(946);
					match(COMMA);
					setState(947);
					expression();
					}
					}
					setState(952);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(953);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(956);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(955);
					match(NOT);
					}
				}

				setState(958);
				((PredicateContext)_localctx).kind = match(IN);
				setState(959);
				match(LR_BRACKET);
				setState(960);
				queryStatement(0);
				setState(961);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(963);
				((PredicateContext)_localctx).kind = match(EXISTS);
				setState(964);
				match(LR_BRACKET);
				setState(965);
				queryStatement(0);
				setState(966);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(969);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(968);
					match(NOT);
					}
				}

				setState(971);
				((PredicateContext)_localctx).kind = match(RLIKE);
				setState(972);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(974);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(973);
					match(NOT);
					}
				}

				setState(976);
				((PredicateContext)_localctx).kind = match(LIKE);
				setState(977);
				((PredicateContext)_localctx).quantifier = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==ALL || _la==ANY) ) {
					((PredicateContext)_localctx).quantifier = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(991);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
				case 1:
					{
					setState(978);
					match(LR_BRACKET);
					setState(979);
					match(RR_BRACKET);
					}
					break;
				case 2:
					{
					setState(980);
					match(LR_BRACKET);
					setState(981);
					expression();
					setState(986);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(982);
						match(COMMA);
						setState(983);
						expression();
						}
						}
						setState(988);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(989);
					match(RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(994);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(993);
					match(NOT);
					}
				}

				setState(996);
				((PredicateContext)_localctx).kind = match(LIKE);
				setState(997);
				((PredicateContext)_localctx).pattern = valueExpression(0);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(998);
				match(IS);
				setState(1000);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(999);
					match(NOT);
					}
				}

				setState(1002);
				((PredicateContext)_localctx).kind = match(NULL);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1003);
				match(IS);
				setState(1005);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(1004);
					match(NOT);
					}
				}

				setState(1007);
				((PredicateContext)_localctx).kind = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==TRUE || _la==FALSE) ) {
					((PredicateContext)_localctx).kind = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1008);
				match(IS);
				setState(1010);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(1009);
					match(NOT);
					}
				}

				setState(1012);
				((PredicateContext)_localctx).kind = match(DISTINCT);
				setState(1013);
				match(FROM);
				setState(1014);
				((PredicateContext)_localctx).right = valueExpression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueExpressionContext extends ParserRuleContext {
		public ValueExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueExpression; }
	 
		public ValueExpressionContext() { }
		public void copyFrom(ValueExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValueExpressionDefaultContext extends ValueExpressionContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public ValueExpressionDefaultContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ComparisonContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public ValueExpressionContext right;
		public ComparisonOperatorContext comparisonOperator() {
			return getRuleContext(ComparisonOperatorContext.class,0);
		}
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public ComparisonContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticBinaryContext extends ValueExpressionContext {
		public ValueExpressionContext left;
		public Token operator;
		public ValueExpressionContext right;
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
		public TerminalNode SLASH_SIGN() { return getToken(FlinkSqlParser.SLASH_SIGN, 0); }
		public TerminalNode PENCENT_SIGN() { return getToken(FlinkSqlParser.PENCENT_SIGN, 0); }
		public TerminalNode DIV() { return getToken(FlinkSqlParser.DIV, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSqlParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
		public TerminalNode DOUBLE_VERTICAL_SIGN() { return getToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0); }
		public TerminalNode BIT_AND_OP() { return getToken(FlinkSqlParser.BIT_AND_OP, 0); }
		public TerminalNode BIT_XOR_OP() { return getToken(FlinkSqlParser.BIT_XOR_OP, 0); }
		public TerminalNode BIT_OR_OP() { return getToken(FlinkSqlParser.BIT_OR_OP, 0); }
		public ArithmeticBinaryContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArithmeticUnaryContext extends ValueExpressionContext {
		public Token operator;
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSqlParser.ADD_SIGN, 0); }
		public TerminalNode BIT_NOT_OP() { return getToken(FlinkSqlParser.BIT_NOT_OP, 0); }
		public ArithmeticUnaryContext(ValueExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ValueExpressionContext valueExpression() throws RecognitionException {
		return valueExpression(0);
	}

	private ValueExpressionContext valueExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ValueExpressionContext _localctx = new ValueExpressionContext(_ctx, _parentState);
		ValueExpressionContext _prevctx = _localctx;
		int _startState = 140;
		enterRecursionRule(_localctx, 140, RULE_valueExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1021);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1018);
				primaryExpression(0);
				}
				break;
			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1019);
				((ArithmeticUnaryContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 260)) & ~0x3f) == 0 && ((1L << (_la - 260)) & ((1L << (BIT_NOT_OP - 260)) | (1L << (HYPNEN_SIGN - 260)) | (1L << (ADD_SIGN - 260)))) != 0)) ) {
					((ArithmeticUnaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1020);
				valueExpression(7);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1044);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,121,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1042);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,120,_ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1023);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1024);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==DIV || ((((_la - 276)) & ~0x3f) == 0 && ((1L << (_la - 276)) & ((1L << (ASTERISK_SIGN - 276)) | (1L << (PENCENT_SIGN - 276)) | (1L << (SLASH_SIGN - 276)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1025);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(7);
						}
						break;
					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1026);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1027);
						((ArithmeticBinaryContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 278)) & ~0x3f) == 0 && ((1L << (_la - 278)) & ((1L << (HYPNEN_SIGN - 278)) | (1L << (ADD_SIGN - 278)) | (1L << (DOUBLE_VERTICAL_SIGN - 278)))) != 0)) ) {
							((ArithmeticBinaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(1028);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(6);
						}
						break;
					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1029);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1030);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_AND_OP);
						setState(1031);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(5);
						}
						break;
					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1032);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1033);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_XOR_OP);
						setState(1034);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(4);
						}
						break;
					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						((ArithmeticBinaryContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1035);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1036);
						((ArithmeticBinaryContext)_localctx).operator = match(BIT_OR_OP);
						setState(1037);
						((ArithmeticBinaryContext)_localctx).right = valueExpression(3);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_valueExpression);
						setState(1038);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1039);
						comparisonOperator();
						setState(1040);
						((ComparisonContext)_localctx).right = valueExpression(2);
						}
						break;
					}
					} 
				}
				setState(1046);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,121,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	 
		public PrimaryExpressionContext() { }
		public void copyFrom(PrimaryExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DereferenceContext extends PrimaryExpressionContext {
		public DereferenceDefinitionContext dereferenceDefinition() {
			return getRuleContext(DereferenceDefinitionContext.class,0);
		}
		public DereferenceContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SimpleCaseContext extends PrimaryExpressionContext {
		public ExpressionContext value;
		public ExpressionContext elseExpression;
		public TerminalNode CASE() { return getToken(FlinkSqlParser.CASE, 0); }
		public TerminalNode END() { return getToken(FlinkSqlParser.END, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(FlinkSqlParser.ELSE, 0); }
		public SimpleCaseContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ColumnReferenceContext extends PrimaryExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ColumnReferenceContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LastContext extends PrimaryExpressionContext {
		public TerminalNode LAST() { return getToken(FlinkSqlParser.LAST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public TerminalNode IGNORE() { return getToken(FlinkSqlParser.IGNORE, 0); }
		public TerminalNode NULLS() { return getToken(FlinkSqlParser.NULLS, 0); }
		public LastContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StarContext extends PrimaryExpressionContext {
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public TerminalNode DOT() { return getToken(FlinkSqlParser.DOT, 0); }
		public StarContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubscriptContext extends PrimaryExpressionContext {
		public PrimaryExpressionContext value;
		public ValueExpressionContext index;
		public TerminalNode LS_BRACKET() { return getToken(FlinkSqlParser.LS_BRACKET, 0); }
		public TerminalNode RS_BRACKET() { return getToken(FlinkSqlParser.RS_BRACKET, 0); }
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public ValueExpressionContext valueExpression() {
			return getRuleContext(ValueExpressionContext.class,0);
		}
		public SubscriptContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubqueryExpressionContext extends PrimaryExpressionContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public QueryStatementContext queryStatement() {
			return getRuleContext(QueryStatementContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public SubqueryExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CastContext extends PrimaryExpressionContext {
		public TerminalNode CAST() { return getToken(FlinkSqlParser.CAST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public ColumnTypeContext columnType() {
			return getRuleContext(ColumnTypeContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public CastContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ConstantDefaultContext extends PrimaryExpressionContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public ConstantDefaultContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends PrimaryExpressionContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public ParenthesizedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallContext extends PrimaryExpressionContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public SetQuantifierContext setQuantifier() {
			return getRuleContext(SetQuantifierContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public FunctionCallContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SearchedCaseContext extends PrimaryExpressionContext {
		public ExpressionContext elseExpression;
		public TerminalNode CASE() { return getToken(FlinkSqlParser.CASE, 0); }
		public TerminalNode END() { return getToken(FlinkSqlParser.END, 0); }
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(FlinkSqlParser.ELSE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SearchedCaseContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PositionContext extends PrimaryExpressionContext {
		public ValueExpressionContext substr;
		public ValueExpressionContext str;
		public TerminalNode POSITION() { return getToken(FlinkSqlParser.POSITION, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public TerminalNode IN() { return getToken(FlinkSqlParser.IN, 0); }
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<ValueExpressionContext> valueExpression() {
			return getRuleContexts(ValueExpressionContext.class);
		}
		public ValueExpressionContext valueExpression(int i) {
			return getRuleContext(ValueExpressionContext.class,i);
		}
		public PositionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FirstContext extends PrimaryExpressionContext {
		public TerminalNode FIRST() { return getToken(FlinkSqlParser.FIRST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public TerminalNode IGNORE() { return getToken(FlinkSqlParser.IGNORE, 0); }
		public TerminalNode NULLS() { return getToken(FlinkSqlParser.NULLS, 0); }
		public FirstContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		return primaryExpression(0);
	}

	private PrimaryExpressionContext primaryExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, _parentState);
		PrimaryExpressionContext _prevctx = _localctx;
		int _startState = 142;
		enterRecursionRule(_localctx, 142, RULE_primaryExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1138);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(1048);
				match(CASE);
				setState(1050); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1049);
					whenClause();
					}
					}
					setState(1052); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==WHEN );
				setState(1056);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(1054);
					match(ELSE);
					setState(1055);
					((SearchedCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1058);
				match(END);
				}
				break;
			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1060);
				match(CASE);
				setState(1061);
				((SimpleCaseContext)_localctx).value = expression();
				setState(1063); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1062);
					whenClause();
					}
					}
					setState(1065); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==WHEN );
				setState(1069);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(1067);
					match(ELSE);
					setState(1068);
					((SimpleCaseContext)_localctx).elseExpression = expression();
					}
				}

				setState(1071);
				match(END);
				}
				break;
			case 3:
				{
				_localctx = new CastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1073);
				match(CAST);
				setState(1074);
				match(LR_BRACKET);
				setState(1075);
				expression();
				setState(1076);
				match(AS);
				setState(1077);
				columnType();
				setState(1078);
				match(RR_BRACKET);
				}
				break;
			case 4:
				{
				_localctx = new FirstContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1080);
				match(FIRST);
				setState(1081);
				match(LR_BRACKET);
				setState(1082);
				expression();
				setState(1085);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGNORE) {
					{
					setState(1083);
					match(IGNORE);
					setState(1084);
					match(NULLS);
					}
				}

				setState(1087);
				match(RR_BRACKET);
				}
				break;
			case 5:
				{
				_localctx = new LastContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1089);
				match(LAST);
				setState(1090);
				match(LR_BRACKET);
				setState(1091);
				expression();
				setState(1094);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IGNORE) {
					{
					setState(1092);
					match(IGNORE);
					setState(1093);
					match(NULLS);
					}
				}

				setState(1096);
				match(RR_BRACKET);
				}
				break;
			case 6:
				{
				_localctx = new PositionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1098);
				match(POSITION);
				setState(1099);
				match(LR_BRACKET);
				setState(1100);
				((PositionContext)_localctx).substr = valueExpression(0);
				setState(1101);
				match(IN);
				setState(1102);
				((PositionContext)_localctx).str = valueExpression(0);
				setState(1103);
				match(RR_BRACKET);
				}
				break;
			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1105);
				constant();
				}
				break;
			case 8:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1106);
				match(ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				_localctx = new StarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1107);
				uid();
				setState(1108);
				match(DOT);
				setState(1109);
				match(ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1111);
				match(LR_BRACKET);
				setState(1112);
				queryStatement(0);
				setState(1113);
				match(RR_BRACKET);
				}
				break;
			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1115);
				functionName();
				setState(1116);
				match(LR_BRACKET);
				setState(1128);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << JOIN) | (1L << CROSS) | (1L << OUTER) | (1L << INNER) | (1L << LEFT) | (1L << SEMI) | (1L << RIGHT) | (1L << FULL) | (1L << NATURAL) | (1L << ON) | (1L << PIVOT) | (1L << LATERAL) | (1L << WINDOW) | (1L << OVER) | (1L << PARTITION) | (1L << RANGE) | (1L << ROWS) | (1L << UNBOUNDED) | (1L << PRECEDING) | (1L << FOLLOWING))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (WITH - 64)) | (1L << (VALUES - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (UNION - 64)) | (1L << (EXCEPT - 64)) | (1L << (SETMINUS - 64)) | (1L << (INTERSECT - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)) | (1L << (COMMIT - 64)) | (1L << (ROLLBACK - 64)) | (1L << (MACRO - 64)) | (1L << (IGNORE - 64)) | (1L << (BOTH - 64)) | (1L << (LEADING - 64)) | (1L << (TRAILING - 64)) | (1L << (IF - 64)) | (1L << (POSITION - 64)) | (1L << (EXTRACT - 64)) | (1L << (MINUS - 64)) | (1L << (DIV - 64)) | (1L << (PERCENTLIT - 64)) | (1L << (BUCKET - 64)) | (1L << (OUT - 64)) | (1L << (OF - 64)) | (1L << (SORT - 64)) | (1L << (CLUSTER - 64)) | (1L << (DISTRIBUTE - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (USING - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)) | (1L << (UNSET - 128)) | (1L << (TBLPROPERTIES - 128)) | (1L << (DBPROPERTIES - 128)) | (1L << (BUCKETS - 128)) | (1L << (SKEWED - 128)) | (1L << (STORED - 128)) | (1L << (DIRECTORIES - 128)) | (1L << (LOCATION - 128)) | (1L << (EXCHANGE - 128)) | (1L << (ARCHIVE - 128)) | (1L << (UNARCHIVE - 128)) | (1L << (FILEFORMAT - 128)) | (1L << (TOUCH - 128)) | (1L << (COMPACT - 128)) | (1L << (CONCATENATE - 128)) | (1L << (CHANGE - 128)) | (1L << (CASCADE - 128)) | (1L << (CONSTRAINT - 128)) | (1L << (RESTRICT - 128)) | (1L << (CLUSTERED - 128)) | (1L << (SORTED - 128)) | (1L << (PURGE - 128)) | (1L << (INPUTFORMAT - 128)) | (1L << (OUTPUTFORMAT - 128)) | (1L << (DATABASE - 128)) | (1L << (DATABASES - 128)) | (1L << (DFS - 128)) | (1L << (TRUNCATE - 128)) | (1L << (ANALYZE - 128)) | (1L << (COMPUTE - 128)) | (1L << (LIST - 128)) | (1L << (STATISTICS - 128)) | (1L << (PARTITIONED - 128)) | (1L << (EXTERNAL - 128)) | (1L << (DEFINED - 128)) | (1L << (REVOKE - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (ANTI - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)) | (1L << (WATERMARK - 192)) | (1L << (UNNEST - 192)) | (1L << (MATCH - 192)) | (1L << (NEXT - 192)) | (1L << (WITHIN - 192)) | (1L << (WS - 192)) | (1L << (SYSTEM - 192)) | (1L << (INCLUDING - 192)) | (1L << (EXCLUDING - 192)) | (1L << (CONSTRAINTS - 192)) | (1L << (GENERATED - 192)) | (1L << (CATALOG - 192)) | (1L << (LANGUAGE - 192)) | (1L << (CATALOGS - 192)) | (1L << (VIEWS - 192)) | (1L << (PRIMARY - 192)) | (1L << (KEY - 192)) | (1L << (PERIOD - 192)) | (1L << (SYSTEM_TIME - 192)) | (1L << (STRING - 192)) | (1L << (ARRAY - 192)) | (1L << (MAP - 192)) | (1L << (CHAR - 192)) | (1L << (VARCHAR - 192)) | (1L << (BINARY - 192)) | (1L << (VARBINARY - 192)) | (1L << (BYTES - 192)) | (1L << (DECIMAL - 192)) | (1L << (TINYINT - 192)) | (1L << (SMALLINT - 192)) | (1L << (INT - 192)) | (1L << (BIGINT - 192)) | (1L << (FLOAT - 192)) | (1L << (DOUBLE - 192)) | (1L << (DATE - 192)) | (1L << (TIME - 192)) | (1L << (TIMESTAMP - 192)) | (1L << (MULTISET - 192)) | (1L << (BOOLEAN - 192)) | (1L << (RAW - 192)) | (1L << (ROW - 192)) | (1L << (NULL - 192)) | (1L << (DATETIME - 192)))) != 0) || ((((_la - 260)) & ~0x3f) == 0 && ((1L << (_la - 260)) & ((1L << (BIT_NOT_OP - 260)) | (1L << (LR_BRACKET - 260)) | (1L << (ASTERISK_SIGN - 260)) | (1L << (HYPNEN_SIGN - 260)) | (1L << (ADD_SIGN - 260)) | (1L << (STRING_LITERAL - 260)) | (1L << (DIG_LITERAL - 260)) | (1L << (REAL_LITERAL - 260)) | (1L << (BIT_STRING - 260)) | (1L << (ID_LITERAL - 260)))) != 0)) {
					{
					setState(1118);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
					case 1:
						{
						setState(1117);
						setQuantifier();
						}
						break;
					}
					setState(1120);
					expression();
					setState(1125);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(1121);
						match(COMMA);
						setState(1122);
						expression();
						}
						}
						setState(1127);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(1130);
				match(RR_BRACKET);
				}
				break;
			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1132);
				identifier();
				}
				break;
			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1133);
				dereferenceDefinition();
				}
				break;
			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(1134);
				match(LR_BRACKET);
				setState(1135);
				expression();
				setState(1136);
				match(RR_BRACKET);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1147);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,132,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					((SubscriptContext)_localctx).value = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_primaryExpression);
					setState(1140);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(1141);
					match(LS_BRACKET);
					setState(1142);
					((SubscriptContext)_localctx).index = valueExpression(0);
					setState(1143);
					match(RS_BRACKET);
					}
					} 
				}
				setState(1149);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,132,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class FunctionNameContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_functionName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1150);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DereferenceDefinitionContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public DereferenceDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dereferenceDefinition; }
	}

	public final DereferenceDefinitionContext dereferenceDefinition() throws RecognitionException {
		DereferenceDefinitionContext _localctx = new DereferenceDefinitionContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_dereferenceDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1152);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DereferenceDefinitionContext dereferenceDefinition() {
			return getRuleContext(DereferenceDefinitionContext.class,0);
		}
		public QualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedName; }
	}

	public final QualifiedNameContext qualifiedName() throws RecognitionException {
		QualifiedNameContext _localctx = new QualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_qualifiedName);
		try {
			setState(1156);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1154);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1155);
				dereferenceDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalContext extends ParserRuleContext {
		public TerminalNode INTERVAL() { return getToken(FlinkSqlParser.INTERVAL, 0); }
		public ErrorCapturingMultiUnitsIntervalContext errorCapturingMultiUnitsInterval() {
			return getRuleContext(ErrorCapturingMultiUnitsIntervalContext.class,0);
		}
		public ErrorCapturingUnitToUnitIntervalContext errorCapturingUnitToUnitInterval() {
			return getRuleContext(ErrorCapturingUnitToUnitIntervalContext.class,0);
		}
		public IntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interval; }
	}

	public final IntervalContext interval() throws RecognitionException {
		IntervalContext _localctx = new IntervalContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_interval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1158);
			match(INTERVAL);
			setState(1161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				{
				setState(1159);
				errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(1160);
				errorCapturingUnitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
		public MultiUnitsIntervalContext multiUnitsInterval() {
			return getRuleContext(MultiUnitsIntervalContext.class,0);
		}
		public UnitToUnitIntervalContext unitToUnitInterval() {
			return getRuleContext(UnitToUnitIntervalContext.class,0);
		}
		public ErrorCapturingMultiUnitsIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingMultiUnitsInterval; }
	}

	public final ErrorCapturingMultiUnitsIntervalContext errorCapturingMultiUnitsInterval() throws RecognitionException {
		ErrorCapturingMultiUnitsIntervalContext _localctx = new ErrorCapturingMultiUnitsIntervalContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_errorCapturingMultiUnitsInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1163);
			multiUnitsInterval();
			setState(1165);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
			case 1:
				{
				setState(1164);
				unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultiUnitsIntervalContext extends ParserRuleContext {
		public List<IntervalValueContext> intervalValue() {
			return getRuleContexts(IntervalValueContext.class);
		}
		public IntervalValueContext intervalValue(int i) {
			return getRuleContext(IntervalValueContext.class,i);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public MultiUnitsIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiUnitsInterval; }
	}

	public final MultiUnitsIntervalContext multiUnitsInterval() throws RecognitionException {
		MultiUnitsIntervalContext _localctx = new MultiUnitsIntervalContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_multiUnitsInterval);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1170); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1167);
					intervalValue();
					setState(1168);
					identifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1172); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,136,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingUnitToUnitIntervalContext extends ParserRuleContext {
		public UnitToUnitIntervalContext body;
		public MultiUnitsIntervalContext error1;
		public UnitToUnitIntervalContext error2;
		public List<UnitToUnitIntervalContext> unitToUnitInterval() {
			return getRuleContexts(UnitToUnitIntervalContext.class);
		}
		public UnitToUnitIntervalContext unitToUnitInterval(int i) {
			return getRuleContext(UnitToUnitIntervalContext.class,i);
		}
		public MultiUnitsIntervalContext multiUnitsInterval() {
			return getRuleContext(MultiUnitsIntervalContext.class,0);
		}
		public ErrorCapturingUnitToUnitIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingUnitToUnitInterval; }
	}

	public final ErrorCapturingUnitToUnitIntervalContext errorCapturingUnitToUnitInterval() throws RecognitionException {
		ErrorCapturingUnitToUnitIntervalContext _localctx = new ErrorCapturingUnitToUnitIntervalContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_errorCapturingUnitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1174);
			((ErrorCapturingUnitToUnitIntervalContext)_localctx).body = unitToUnitInterval();
			setState(1177);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				{
				setState(1175);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error1 = multiUnitsInterval();
				}
				break;
			case 2:
				{
				setState(1176);
				((ErrorCapturingUnitToUnitIntervalContext)_localctx).error2 = unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnitToUnitIntervalContext extends ParserRuleContext {
		public IntervalValueContext value;
		public IdentifierContext from;
		public IdentifierContext to;
		public TerminalNode TO() { return getToken(FlinkSqlParser.TO, 0); }
		public IntervalValueContext intervalValue() {
			return getRuleContext(IntervalValueContext.class,0);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public UnitToUnitIntervalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitToUnitInterval; }
	}

	public final UnitToUnitIntervalContext unitToUnitInterval() throws RecognitionException {
		UnitToUnitIntervalContext _localctx = new UnitToUnitIntervalContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_unitToUnitInterval);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1179);
			((UnitToUnitIntervalContext)_localctx).value = intervalValue();
			setState(1180);
			((UnitToUnitIntervalContext)_localctx).from = identifier();
			setState(1181);
			match(TO);
			setState(1182);
			((UnitToUnitIntervalContext)_localctx).to = identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntervalValueContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSqlParser.DIG_LITERAL, 0); }
		public TerminalNode REAL_LITERAL() { return getToken(FlinkSqlParser.REAL_LITERAL, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSqlParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSqlParser.STRING_LITERAL, 0); }
		public IntervalValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intervalValue; }
	}

	public final IntervalValueContext intervalValue() throws RecognitionException {
		IntervalValueContext _localctx = new IntervalValueContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_intervalValue);
		int _la;
		try {
			setState(1189);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HYPNEN_SIGN:
			case ADD_SIGN:
			case DIG_LITERAL:
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1185);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HYPNEN_SIGN || _la==ADD_SIGN) {
					{
					setState(1184);
					_la = _input.LA(1);
					if ( !(_la==HYPNEN_SIGN || _la==ADD_SIGN) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(1187);
				_la = _input.LA(1);
				if ( !(_la==DIG_LITERAL || _la==REAL_LITERAL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1188);
				match(STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColumnAliasContext extends ParserRuleContext {
		public StrictIdentifierContext strictIdentifier() {
			return getRuleContext(StrictIdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public ColumnAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnAlias; }
	}

	public final ColumnAliasContext columnAlias() throws RecognitionException {
		ColumnAliasContext _localctx = new ColumnAliasContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_columnAlias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1192);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,140,_ctx) ) {
			case 1:
				{
				setState(1191);
				match(AS);
				}
				break;
			}
			setState(1194);
			strictIdentifier();
			setState(1196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(1195);
				identifierList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableAliasContext extends ParserRuleContext {
		public StrictIdentifierContext strictIdentifier() {
			return getRuleContext(StrictIdentifierContext.class,0);
		}
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public TableAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableAlias; }
	}

	public final TableAliasContext tableAlias() throws RecognitionException {
		TableAliasContext _localctx = new TableAliasContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_tableAlias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1199);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,142,_ctx) ) {
			case 1:
				{
				setState(1198);
				match(AS);
				}
				break;
			}
			setState(1201);
			strictIdentifier();
			setState(1203);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
			case 1:
				{
				setState(1202);
				identifierList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ErrorCapturingIdentifierExtraContext errorCapturingIdentifierExtra() {
			return getRuleContext(ErrorCapturingIdentifierExtraContext.class,0);
		}
		public ErrorCapturingIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingIdentifier; }
	}

	public final ErrorCapturingIdentifierContext errorCapturingIdentifier() throws RecognitionException {
		ErrorCapturingIdentifierContext _localctx = new ErrorCapturingIdentifierContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_errorCapturingIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1205);
			identifier();
			setState(1206);
			errorCapturingIdentifierExtra();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
		public ErrorCapturingIdentifierExtraContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorCapturingIdentifierExtra; }
	 
		public ErrorCapturingIdentifierExtraContext() { }
		public void copyFrom(ErrorCapturingIdentifierExtraContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
		public List<TerminalNode> MINUS() { return getTokens(FlinkSqlParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(FlinkSqlParser.MINUS, i);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public ErrorIdentContext(ErrorCapturingIdentifierExtraContext ctx) { copyFrom(ctx); }
	}
	public static class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
		public RealIdentContext(ErrorCapturingIdentifierExtraContext ctx) { copyFrom(ctx); }
	}

	public final ErrorCapturingIdentifierExtraContext errorCapturingIdentifierExtra() throws RecognitionException {
		ErrorCapturingIdentifierExtraContext _localctx = new ErrorCapturingIdentifierExtraContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_errorCapturingIdentifierExtra);
		int _la;
		try {
			setState(1215);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1210); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1208);
					match(MINUS);
					setState(1209);
					identifier();
					}
					}
					setState(1212); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==MINUS );
				}
				break;
			case AS:
			case LR_BRACKET:
				_localctx = new RealIdentContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public IdentifierSeqContext identifierSeq() {
			return getRuleContext(IdentifierSeqContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_identifierList);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1217);
			match(LR_BRACKET);
			setState(1218);
			identifierSeq();
			setState(1219);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierSeqContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public IdentifierSeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierSeq; }
	}

	public final IdentifierSeqContext identifierSeq() throws RecognitionException {
		IdentifierSeqContext _localctx = new IdentifierSeqContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_identifierSeq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1221);
			identifier();
			setState(1226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1222);
				match(COMMA);
				setState(1223);
				identifier();
				}
				}
				setState(1228);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public StrictIdentifierContext strictIdentifier() {
			return getRuleContext(StrictIdentifierContext.class,0);
		}
		public StrictNonReservedContext strictNonReserved() {
			return getRuleContext(StrictNonReservedContext.class,0);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_identifier);
		try {
			setState(1231);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,147,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1229);
				strictIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1230);
				strictNonReserved();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrictIdentifierContext extends ParserRuleContext {
		public StrictIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strictIdentifier; }
	 
		public StrictIdentifierContext() { }
		public void copyFrom(StrictIdentifierContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class QuotedIdentifierAlternativeContext extends StrictIdentifierContext {
		public QuotedIdentifierContext quotedIdentifier() {
			return getRuleContext(QuotedIdentifierContext.class,0);
		}
		public QuotedIdentifierAlternativeContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class NonReservedKeywordsContext extends StrictIdentifierContext {
		public NonReservedContext nonReserved() {
			return getRuleContext(NonReservedContext.class,0);
		}
		public NonReservedKeywordsContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class UnquotedIdentifierAlternativeContext extends StrictIdentifierContext {
		public UnquotedIdentifierContext unquotedIdentifier() {
			return getRuleContext(UnquotedIdentifierContext.class,0);
		}
		public UnquotedIdentifierAlternativeContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class AnsiNonReservedKeywordsContext extends StrictIdentifierContext {
		public AnsiNonReservedContext ansiNonReserved() {
			return getRuleContext(AnsiNonReservedContext.class,0);
		}
		public AnsiNonReservedKeywordsContext(StrictIdentifierContext ctx) { copyFrom(ctx); }
	}

	public final StrictIdentifierContext strictIdentifier() throws RecognitionException {
		StrictIdentifierContext _localctx = new StrictIdentifierContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_strictIdentifier);
		try {
			setState(1237);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
			case 1:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(1233);
				unquotedIdentifier();
				}
				break;
			case 2:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(1234);
				quotedIdentifier();
				}
				break;
			case 3:
				_localctx = new AnsiNonReservedKeywordsContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(1235);
				ansiNonReserved();
				}
				break;
			case 4:
				_localctx = new NonReservedKeywordsContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(1236);
				nonReserved();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnquotedIdentifierContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSqlParser.DIG_LITERAL, 0); }
		public TerminalNode ID_LITERAL() { return getToken(FlinkSqlParser.ID_LITERAL, 0); }
		public UnquotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unquotedIdentifier; }
	}

	public final UnquotedIdentifierContext unquotedIdentifier() throws RecognitionException {
		UnquotedIdentifierContext _localctx = new UnquotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_unquotedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1239);
			_la = _input.LA(1);
			if ( !(_la==DIG_LITERAL || _la==ID_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QuotedIdentifierContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSqlParser.STRING_LITERAL, 0); }
		public QuotedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedIdentifier; }
	}

	public final QuotedIdentifierContext quotedIdentifier() throws RecognitionException {
		QuotedIdentifierContext _localctx = new QuotedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_quotedIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1241);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenClauseContext extends ParserRuleContext {
		public ExpressionContext condition;
		public ExpressionContext result;
		public TerminalNode WHEN() { return getToken(FlinkSqlParser.WHEN, 0); }
		public TerminalNode THEN() { return getToken(FlinkSqlParser.THEN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public WhenClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenClause; }
	}

	public final WhenClauseContext whenClause() throws RecognitionException {
		WhenClauseContext _localctx = new WhenClauseContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1243);
			match(WHEN);
			setState(1244);
			((WhenClauseContext)_localctx).condition = expression();
			setState(1245);
			match(THEN);
			setState(1246);
			((WhenClauseContext)_localctx).result = expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UidListContext extends ParserRuleContext {
		public List<UidContext> uid() {
			return getRuleContexts(UidContext.class);
		}
		public UidContext uid(int i) {
			return getRuleContext(UidContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public UidListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uidList; }
	}

	public final UidListContext uidList() throws RecognitionException {
		UidListContext _localctx = new UidListContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_uidList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1248);
			uid();
			setState(1253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1249);
				match(COMMA);
				setState(1250);
				uid();
				}
				}
				setState(1255);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UidContext extends ParserRuleContext {
		public TerminalNode ID_LITERAL() { return getToken(FlinkSqlParser.ID_LITERAL, 0); }
		public List<TerminalNode> DOT_ID() { return getTokens(FlinkSqlParser.DOT_ID); }
		public TerminalNode DOT_ID(int i) {
			return getToken(FlinkSqlParser.DOT_ID, i);
		}
		public UidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uid; }
	}

	public final UidContext uid() throws RecognitionException {
		UidContext _localctx = new UidContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_uid);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1256);
			match(ID_LITERAL);
			setState(1260);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,150,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(1257);
					match(DOT_ID);
					}
					} 
				}
				setState(1262);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,150,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlusUidContext extends ParserRuleContext {
		public TerminalNode ID_LITERAL() { return getToken(FlinkSqlParser.ID_LITERAL, 0); }
		public TerminalNode PLUS_ID_LITERAL() { return getToken(FlinkSqlParser.PLUS_ID_LITERAL, 0); }
		public List<TerminalNode> DOT_ID() { return getTokens(FlinkSqlParser.DOT_ID); }
		public TerminalNode DOT_ID(int i) {
			return getToken(FlinkSqlParser.DOT_ID, i);
		}
		public List<TerminalNode> PLUS_DOT_ID() { return getTokens(FlinkSqlParser.PLUS_DOT_ID); }
		public TerminalNode PLUS_DOT_ID(int i) {
			return getToken(FlinkSqlParser.PLUS_DOT_ID, i);
		}
		public PlusUidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_plusUid; }
	}

	public final PlusUidContext plusUid() throws RecognitionException {
		PlusUidContext _localctx = new PlusUidContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_plusUid);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1263);
			_la = _input.LA(1);
			if ( !(_la==ID_LITERAL || _la==PLUS_ID_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1267);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,151,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(1264);
					_la = _input.LA(1);
					if ( !(_la==DOT_ID || _la==PLUS_DOT_ID) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					} 
				}
				setState(1269);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,151,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithOptionContext extends ParserRuleContext {
		public TerminalNode WITH() { return getToken(FlinkSqlParser.WITH, 0); }
		public TablePropertyListContext tablePropertyList() {
			return getRuleContext(TablePropertyListContext.class,0);
		}
		public WithOptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withOption; }
	}

	public final WithOptionContext withOption() throws RecognitionException {
		WithOptionContext _localctx = new WithOptionContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_withOption);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1270);
			match(WITH);
			setState(1271);
			tablePropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfNotExistsContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(FlinkSqlParser.IF, 0); }
		public TerminalNode NOT() { return getToken(FlinkSqlParser.NOT, 0); }
		public TerminalNode EXISTS() { return getToken(FlinkSqlParser.EXISTS, 0); }
		public IfNotExistsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifNotExists; }
	}

	public final IfNotExistsContext ifNotExists() throws RecognitionException {
		IfNotExistsContext _localctx = new IfNotExistsContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_ifNotExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1273);
			match(IF);
			setState(1274);
			match(NOT);
			setState(1275);
			match(EXISTS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfExistsContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(FlinkSqlParser.IF, 0); }
		public TerminalNode EXISTS() { return getToken(FlinkSqlParser.EXISTS, 0); }
		public IfExistsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifExists; }
	}

	public final IfExistsContext ifExists() throws RecognitionException {
		IfExistsContext _localctx = new IfExistsContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_ifExists);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1277);
			match(IF);
			setState(1278);
			match(EXISTS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyListContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(FlinkSqlParser.LR_BRACKET, 0); }
		public List<TablePropertyContext> tableProperty() {
			return getRuleContexts(TablePropertyContext.class);
		}
		public TablePropertyContext tableProperty(int i) {
			return getRuleContext(TablePropertyContext.class,i);
		}
		public TerminalNode RR_BRACKET() { return getToken(FlinkSqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FlinkSqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FlinkSqlParser.COMMA, i);
		}
		public TablePropertyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyList; }
	}

	public final TablePropertyListContext tablePropertyList() throws RecognitionException {
		TablePropertyListContext _localctx = new TablePropertyListContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_tablePropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1280);
			match(LR_BRACKET);
			setState(1281);
			tableProperty();
			setState(1286);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1282);
				match(COMMA);
				setState(1283);
				tableProperty();
				}
				}
				setState(1288);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1289);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyContext extends ParserRuleContext {
		public TablePropertyKeyContext key;
		public TablePropertyValueContext value;
		public TablePropertyKeyContext tablePropertyKey() {
			return getRuleContext(TablePropertyKeyContext.class,0);
		}
		public TablePropertyValueContext tablePropertyValue() {
			return getRuleContext(TablePropertyValueContext.class,0);
		}
		public TerminalNode EQUAL_SYMBOL() { return getToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
		public TablePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableProperty; }
	}

	public final TablePropertyContext tableProperty() throws RecognitionException {
		TablePropertyContext _localctx = new TablePropertyContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_tableProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1291);
			((TablePropertyContext)_localctx).key = tablePropertyKey();
			setState(1296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TRUE || _la==FALSE || ((((_la - 256)) & ~0x3f) == 0 && ((1L << (_la - 256)) & ((1L << (EQUAL_SYMBOL - 256)) | (1L << (STRING_LITERAL - 256)) | (1L << (DIG_LITERAL - 256)) | (1L << (REAL_LITERAL - 256)))) != 0)) {
				{
				setState(1293);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUAL_SYMBOL) {
					{
					setState(1292);
					match(EQUAL_SYMBOL);
					}
				}

				setState(1295);
				((TablePropertyContext)_localctx).value = tablePropertyValue();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyKeyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DereferenceDefinitionContext dereferenceDefinition() {
			return getRuleContext(DereferenceDefinitionContext.class,0);
		}
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSqlParser.STRING_LITERAL, 0); }
		public TablePropertyKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyKey; }
	}

	public final TablePropertyKeyContext tablePropertyKey() throws RecognitionException {
		TablePropertyKeyContext _localctx = new TablePropertyKeyContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_tablePropertyKey);
		try {
			setState(1301);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,155,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1298);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1299);
				dereferenceDefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1300);
				match(STRING_LITERAL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TablePropertyValueContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSqlParser.DIG_LITERAL, 0); }
		public TerminalNode REAL_LITERAL() { return getToken(FlinkSqlParser.REAL_LITERAL, 0); }
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSqlParser.STRING_LITERAL, 0); }
		public TablePropertyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropertyValue; }
	}

	public final TablePropertyValueContext tablePropertyValue() throws RecognitionException {
		TablePropertyValueContext _localctx = new TablePropertyValueContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_tablePropertyValue);
		try {
			setState(1307);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1303);
				match(DIG_LITERAL);
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1304);
				match(REAL_LITERAL);
				}
				break;
			case TRUE:
			case FALSE:
				enterOuterAlt(_localctx, 3);
				{
				setState(1305);
				booleanLiteral();
				}
				break;
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(1306);
				match(STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicalOperatorContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(FlinkSqlParser.AND, 0); }
		public List<TerminalNode> BIT_AND_OP() { return getTokens(FlinkSqlParser.BIT_AND_OP); }
		public TerminalNode BIT_AND_OP(int i) {
			return getToken(FlinkSqlParser.BIT_AND_OP, i);
		}
		public TerminalNode OR() { return getToken(FlinkSqlParser.OR, 0); }
		public List<TerminalNode> BIT_OR_OP() { return getTokens(FlinkSqlParser.BIT_OR_OP); }
		public TerminalNode BIT_OR_OP(int i) {
			return getToken(FlinkSqlParser.BIT_OR_OP, i);
		}
		public LogicalOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalOperator; }
	}

	public final LogicalOperatorContext logicalOperator() throws RecognitionException {
		LogicalOperatorContext _localctx = new LogicalOperatorContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_logicalOperator);
		try {
			setState(1315);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AND:
				enterOuterAlt(_localctx, 1);
				{
				setState(1309);
				match(AND);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 2);
				{
				setState(1310);
				match(BIT_AND_OP);
				setState(1311);
				match(BIT_AND_OP);
				}
				break;
			case OR:
				enterOuterAlt(_localctx, 3);
				{
				setState(1312);
				match(OR);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(1313);
				match(BIT_OR_OP);
				setState(1314);
				match(BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComparisonOperatorContext extends ParserRuleContext {
		public TerminalNode EQUAL_SYMBOL() { return getToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
		public TerminalNode GREATER_SYMBOL() { return getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
		public TerminalNode LESS_SYMBOL() { return getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
		public TerminalNode EXCLAMATION_SYMBOL() { return getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
		public ComparisonOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonOperator; }
	}

	public final ComparisonOperatorContext comparisonOperator() throws RecognitionException {
		ComparisonOperatorContext _localctx = new ComparisonOperatorContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_comparisonOperator);
		try {
			setState(1331);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,158,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1317);
				match(EQUAL_SYMBOL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1318);
				match(GREATER_SYMBOL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1319);
				match(LESS_SYMBOL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1320);
				match(LESS_SYMBOL);
				setState(1321);
				match(EQUAL_SYMBOL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1322);
				match(GREATER_SYMBOL);
				setState(1323);
				match(EQUAL_SYMBOL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1324);
				match(LESS_SYMBOL);
				setState(1325);
				match(GREATER_SYMBOL);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1326);
				match(EXCLAMATION_SYMBOL);
				setState(1327);
				match(EQUAL_SYMBOL);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1328);
				match(LESS_SYMBOL);
				setState(1329);
				match(EQUAL_SYMBOL);
				setState(1330);
				match(GREATER_SYMBOL);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BitOperatorContext extends ParserRuleContext {
		public List<TerminalNode> LESS_SYMBOL() { return getTokens(FlinkSqlParser.LESS_SYMBOL); }
		public TerminalNode LESS_SYMBOL(int i) {
			return getToken(FlinkSqlParser.LESS_SYMBOL, i);
		}
		public List<TerminalNode> GREATER_SYMBOL() { return getTokens(FlinkSqlParser.GREATER_SYMBOL); }
		public TerminalNode GREATER_SYMBOL(int i) {
			return getToken(FlinkSqlParser.GREATER_SYMBOL, i);
		}
		public TerminalNode BIT_AND_OP() { return getToken(FlinkSqlParser.BIT_AND_OP, 0); }
		public TerminalNode BIT_XOR_OP() { return getToken(FlinkSqlParser.BIT_XOR_OP, 0); }
		public TerminalNode BIT_OR_OP() { return getToken(FlinkSqlParser.BIT_OR_OP, 0); }
		public BitOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitOperator; }
	}

	public final BitOperatorContext bitOperator() throws RecognitionException {
		BitOperatorContext _localctx = new BitOperatorContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_bitOperator);
		try {
			setState(1340);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LESS_SYMBOL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1333);
				match(LESS_SYMBOL);
				setState(1334);
				match(LESS_SYMBOL);
				}
				break;
			case GREATER_SYMBOL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1335);
				match(GREATER_SYMBOL);
				setState(1336);
				match(GREATER_SYMBOL);
				}
				break;
			case BIT_AND_OP:
				enterOuterAlt(_localctx, 3);
				{
				setState(1337);
				match(BIT_AND_OP);
				}
				break;
			case BIT_XOR_OP:
				enterOuterAlt(_localctx, 4);
				{
				setState(1338);
				match(BIT_XOR_OP);
				}
				break;
			case BIT_OR_OP:
				enterOuterAlt(_localctx, 5);
				{
				setState(1339);
				match(BIT_OR_OP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathOperatorContext extends ParserRuleContext {
		public TerminalNode ASTERISK_SIGN() { return getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
		public TerminalNode SLASH_SIGN() { return getToken(FlinkSqlParser.SLASH_SIGN, 0); }
		public TerminalNode PENCENT_SIGN() { return getToken(FlinkSqlParser.PENCENT_SIGN, 0); }
		public TerminalNode DIV() { return getToken(FlinkSqlParser.DIV, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSqlParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
		public TerminalNode DOUBLE_HYPNEN_SIGN() { return getToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0); }
		public MathOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathOperator; }
	}

	public final MathOperatorContext mathOperator() throws RecognitionException {
		MathOperatorContext _localctx = new MathOperatorContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_mathOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1342);
			_la = _input.LA(1);
			if ( !(_la==DIV || ((((_la - 276)) & ~0x3f) == 0 && ((1L << (_la - 276)) & ((1L << (ASTERISK_SIGN - 276)) | (1L << (HYPNEN_SIGN - 276)) | (1L << (ADD_SIGN - 276)) | (1L << (PENCENT_SIGN - 276)) | (1L << (DOUBLE_HYPNEN_SIGN - 276)) | (1L << (SLASH_SIGN - 276)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryOperatorContext extends ParserRuleContext {
		public TerminalNode EXCLAMATION_SYMBOL() { return getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
		public TerminalNode BIT_NOT_OP() { return getToken(FlinkSqlParser.BIT_NOT_OP, 0); }
		public TerminalNode ADD_SIGN() { return getToken(FlinkSqlParser.ADD_SIGN, 0); }
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
		public TerminalNode NOT() { return getToken(FlinkSqlParser.NOT, 0); }
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1344);
			_la = _input.LA(1);
			if ( !(_la==NOT || ((((_la - 259)) & ~0x3f) == 0 && ((1L << (_la - 259)) & ((1L << (EXCLAMATION_SYMBOL - 259)) | (1L << (BIT_NOT_OP - 259)) | (1L << (HYPNEN_SIGN - 259)) | (1L << (ADD_SIGN - 259)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FullColumnNameContext extends ParserRuleContext {
		public UidContext uid() {
			return getRuleContext(UidContext.class,0);
		}
		public FullColumnNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fullColumnName; }
	}

	public final FullColumnNameContext fullColumnName() throws RecognitionException {
		FullColumnNameContext _localctx = new FullColumnNameContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_fullColumnName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1346);
			uid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantContext extends ParserRuleContext {
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public DecimalLiteralContext decimalLiteral() {
			return getRuleContext(DecimalLiteralContext.class,0);
		}
		public IntervalContext interval() {
			return getRuleContext(IntervalContext.class,0);
		}
		public TerminalNode HYPNEN_SIGN() { return getToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public TerminalNode REAL_LITERAL() { return getToken(FlinkSqlParser.REAL_LITERAL, 0); }
		public TerminalNode BIT_STRING() { return getToken(FlinkSqlParser.BIT_STRING, 0); }
		public TerminalNode NULL() { return getToken(FlinkSqlParser.NULL, 0); }
		public TerminalNode NOT() { return getToken(FlinkSqlParser.NOT, 0); }
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_constant);
		int _la;
		try {
			setState(1360);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1348);
				stringLiteral();
				}
				break;
			case DIG_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1349);
				decimalLiteral();
				}
				break;
			case INTERVAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(1350);
				interval();
				}
				break;
			case HYPNEN_SIGN:
				enterOuterAlt(_localctx, 4);
				{
				setState(1351);
				match(HYPNEN_SIGN);
				setState(1352);
				decimalLiteral();
				}
				break;
			case TRUE:
			case FALSE:
				enterOuterAlt(_localctx, 5);
				{
				setState(1353);
				booleanLiteral();
				}
				break;
			case REAL_LITERAL:
				enterOuterAlt(_localctx, 6);
				{
				setState(1354);
				match(REAL_LITERAL);
				}
				break;
			case BIT_STRING:
				enterOuterAlt(_localctx, 7);
				{
				setState(1355);
				match(BIT_STRING);
				}
				break;
			case NOT:
			case NULL:
				enterOuterAlt(_localctx, 8);
				{
				setState(1357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(1356);
					match(NOT);
					}
				}

				setState(1359);
				match(NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(FlinkSqlParser.STRING_LITERAL, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1362);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DecimalLiteralContext extends ParserRuleContext {
		public TerminalNode DIG_LITERAL() { return getToken(FlinkSqlParser.DIG_LITERAL, 0); }
		public DecimalLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decimalLiteral; }
	}

	public final DecimalLiteralContext decimalLiteral() throws RecognitionException {
		DecimalLiteralContext _localctx = new DecimalLiteralContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_decimalLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1364);
			match(DIG_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanLiteralContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(FlinkSqlParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(FlinkSqlParser.FALSE, 0); }
		public BooleanLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanLiteral; }
	}

	public final BooleanLiteralContext booleanLiteral() throws RecognitionException {
		BooleanLiteralContext _localctx = new BooleanLiteralContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1366);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetQuantifierContext extends ParserRuleContext {
		public TerminalNode DISTINCT() { return getToken(FlinkSqlParser.DISTINCT, 0); }
		public TerminalNode ALL() { return getToken(FlinkSqlParser.ALL, 0); }
		public SetQuantifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setQuantifier; }
	}

	public final SetQuantifierContext setQuantifier() throws RecognitionException {
		SetQuantifierContext _localctx = new SetQuantifierContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_setQuantifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1368);
			_la = _input.LA(1);
			if ( !(_la==ALL || _la==DISTINCT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnsiNonReservedContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(FlinkSqlParser.ADD, 0); }
		public TerminalNode AFTER() { return getToken(FlinkSqlParser.AFTER, 0); }
		public TerminalNode ALTER() { return getToken(FlinkSqlParser.ALTER, 0); }
		public TerminalNode ANALYZE() { return getToken(FlinkSqlParser.ANALYZE, 0); }
		public TerminalNode ANTI() { return getToken(FlinkSqlParser.ANTI, 0); }
		public TerminalNode ARCHIVE() { return getToken(FlinkSqlParser.ARCHIVE, 0); }
		public TerminalNode ARRAY() { return getToken(FlinkSqlParser.ARRAY, 0); }
		public TerminalNode ASC() { return getToken(FlinkSqlParser.ASC, 0); }
		public TerminalNode AT() { return getToken(FlinkSqlParser.AT, 0); }
		public TerminalNode BETWEEN() { return getToken(FlinkSqlParser.BETWEEN, 0); }
		public TerminalNode BIGINT() { return getToken(FlinkSqlParser.BIGINT, 0); }
		public TerminalNode BINARY() { return getToken(FlinkSqlParser.BINARY, 0); }
		public TerminalNode BOOLEAN() { return getToken(FlinkSqlParser.BOOLEAN, 0); }
		public TerminalNode BUCKET() { return getToken(FlinkSqlParser.BUCKET, 0); }
		public TerminalNode BUCKETS() { return getToken(FlinkSqlParser.BUCKETS, 0); }
		public TerminalNode BY() { return getToken(FlinkSqlParser.BY, 0); }
		public TerminalNode BYTES() { return getToken(FlinkSqlParser.BYTES, 0); }
		public TerminalNode CACHE() { return getToken(FlinkSqlParser.CACHE, 0); }
		public TerminalNode CASCADE() { return getToken(FlinkSqlParser.CASCADE, 0); }
		public TerminalNode CATALOG() { return getToken(FlinkSqlParser.CATALOG, 0); }
		public TerminalNode CATALOGS() { return getToken(FlinkSqlParser.CATALOGS, 0); }
		public TerminalNode CHANGE() { return getToken(FlinkSqlParser.CHANGE, 0); }
		public TerminalNode CHAR() { return getToken(FlinkSqlParser.CHAR, 0); }
		public TerminalNode CLEAR() { return getToken(FlinkSqlParser.CLEAR, 0); }
		public TerminalNode CLUSTER() { return getToken(FlinkSqlParser.CLUSTER, 0); }
		public TerminalNode CLUSTERED() { return getToken(FlinkSqlParser.CLUSTERED, 0); }
		public TerminalNode CODEGEN() { return getToken(FlinkSqlParser.CODEGEN, 0); }
		public TerminalNode COLLECTION() { return getToken(FlinkSqlParser.COLLECTION, 0); }
		public TerminalNode COLUMNS() { return getToken(FlinkSqlParser.COLUMNS, 0); }
		public TerminalNode COMMENT() { return getToken(FlinkSqlParser.COMMENT, 0); }
		public TerminalNode COMMIT() { return getToken(FlinkSqlParser.COMMIT, 0); }
		public TerminalNode COMPACT() { return getToken(FlinkSqlParser.COMPACT, 0); }
		public TerminalNode COMPACTIONS() { return getToken(FlinkSqlParser.COMPACTIONS, 0); }
		public TerminalNode COMPUTE() { return getToken(FlinkSqlParser.COMPUTE, 0); }
		public TerminalNode CONCATENATE() { return getToken(FlinkSqlParser.CONCATENATE, 0); }
		public TerminalNode CONSTRAINTS() { return getToken(FlinkSqlParser.CONSTRAINTS, 0); }
		public TerminalNode COST() { return getToken(FlinkSqlParser.COST, 0); }
		public TerminalNode CUBE() { return getToken(FlinkSqlParser.CUBE, 0); }
		public TerminalNode CURRENT() { return getToken(FlinkSqlParser.CURRENT, 0); }
		public TerminalNode DATA() { return getToken(FlinkSqlParser.DATA, 0); }
		public TerminalNode DATABASE() { return getToken(FlinkSqlParser.DATABASE, 0); }
		public TerminalNode DATABASES() { return getToken(FlinkSqlParser.DATABASES, 0); }
		public TerminalNode DATE() { return getToken(FlinkSqlParser.DATE, 0); }
		public TerminalNode DATETIME() { return getToken(FlinkSqlParser.DATETIME, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(FlinkSqlParser.DBPROPERTIES, 0); }
		public TerminalNode DECIMAL() { return getToken(FlinkSqlParser.DECIMAL, 0); }
		public TerminalNode DEFINED() { return getToken(FlinkSqlParser.DEFINED, 0); }
		public TerminalNode DELETE() { return getToken(FlinkSqlParser.DELETE, 0); }
		public TerminalNode DELIMITED() { return getToken(FlinkSqlParser.DELIMITED, 0); }
		public TerminalNode DESC() { return getToken(FlinkSqlParser.DESC, 0); }
		public TerminalNode DESCRIBE() { return getToken(FlinkSqlParser.DESCRIBE, 0); }
		public TerminalNode DFS() { return getToken(FlinkSqlParser.DFS, 0); }
		public TerminalNode DIRECTORIES() { return getToken(FlinkSqlParser.DIRECTORIES, 0); }
		public TerminalNode DIRECTORY() { return getToken(FlinkSqlParser.DIRECTORY, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(FlinkSqlParser.DISTRIBUTE, 0); }
		public TerminalNode DIV() { return getToken(FlinkSqlParser.DIV, 0); }
		public TerminalNode DOUBLE() { return getToken(FlinkSqlParser.DOUBLE, 0); }
		public TerminalNode DROP() { return getToken(FlinkSqlParser.DROP, 0); }
		public TerminalNode ESCAPED() { return getToken(FlinkSqlParser.ESCAPED, 0); }
		public TerminalNode EXCHANGE() { return getToken(FlinkSqlParser.EXCHANGE, 0); }
		public TerminalNode EXCLUDING() { return getToken(FlinkSqlParser.EXCLUDING, 0); }
		public TerminalNode EXISTS() { return getToken(FlinkSqlParser.EXISTS, 0); }
		public TerminalNode EXPLAIN() { return getToken(FlinkSqlParser.EXPLAIN, 0); }
		public TerminalNode EXPORT() { return getToken(FlinkSqlParser.EXPORT, 0); }
		public TerminalNode EXTENDED() { return getToken(FlinkSqlParser.EXTENDED, 0); }
		public TerminalNode EXTERNAL() { return getToken(FlinkSqlParser.EXTERNAL, 0); }
		public TerminalNode EXTRACT() { return getToken(FlinkSqlParser.EXTRACT, 0); }
		public TerminalNode FIELDS() { return getToken(FlinkSqlParser.FIELDS, 0); }
		public TerminalNode FILEFORMAT() { return getToken(FlinkSqlParser.FILEFORMAT, 0); }
		public TerminalNode FIRST() { return getToken(FlinkSqlParser.FIRST, 0); }
		public TerminalNode FLOAT() { return getToken(FlinkSqlParser.FLOAT, 0); }
		public TerminalNode FOLLOWING() { return getToken(FlinkSqlParser.FOLLOWING, 0); }
		public TerminalNode FORMAT() { return getToken(FlinkSqlParser.FORMAT, 0); }
		public TerminalNode FORMATTED() { return getToken(FlinkSqlParser.FORMATTED, 0); }
		public TerminalNode FUNCTION() { return getToken(FlinkSqlParser.FUNCTION, 0); }
		public TerminalNode FUNCTIONS() { return getToken(FlinkSqlParser.FUNCTIONS, 0); }
		public TerminalNode GENERATED() { return getToken(FlinkSqlParser.GENERATED, 0); }
		public TerminalNode GLOBAL() { return getToken(FlinkSqlParser.GLOBAL, 0); }
		public TerminalNode GROUPING() { return getToken(FlinkSqlParser.GROUPING, 0); }
		public TerminalNode IF() { return getToken(FlinkSqlParser.IF, 0); }
		public TerminalNode IGNORE() { return getToken(FlinkSqlParser.IGNORE, 0); }
		public TerminalNode IMPORT() { return getToken(FlinkSqlParser.IMPORT, 0); }
		public TerminalNode INCLUDING() { return getToken(FlinkSqlParser.INCLUDING, 0); }
		public TerminalNode INDEX() { return getToken(FlinkSqlParser.INDEX, 0); }
		public TerminalNode INDEXES() { return getToken(FlinkSqlParser.INDEXES, 0); }
		public TerminalNode INPATH() { return getToken(FlinkSqlParser.INPATH, 0); }
		public TerminalNode INPUTFORMAT() { return getToken(FlinkSqlParser.INPUTFORMAT, 0); }
		public TerminalNode INSERT() { return getToken(FlinkSqlParser.INSERT, 0); }
		public TerminalNode INT() { return getToken(FlinkSqlParser.INT, 0); }
		public TerminalNode INTERVAL() { return getToken(FlinkSqlParser.INTERVAL, 0); }
		public TerminalNode ITEMS() { return getToken(FlinkSqlParser.ITEMS, 0); }
		public TerminalNode KEY() { return getToken(FlinkSqlParser.KEY, 0); }
		public TerminalNode KEYS() { return getToken(FlinkSqlParser.KEYS, 0); }
		public TerminalNode LANGUAGE() { return getToken(FlinkSqlParser.LANGUAGE, 0); }
		public TerminalNode LAST() { return getToken(FlinkSqlParser.LAST, 0); }
		public TerminalNode LATERAL() { return getToken(FlinkSqlParser.LATERAL, 0); }
		public TerminalNode LAZY() { return getToken(FlinkSqlParser.LAZY, 0); }
		public TerminalNode LIKE() { return getToken(FlinkSqlParser.LIKE, 0); }
		public TerminalNode LIMIT() { return getToken(FlinkSqlParser.LIMIT, 0); }
		public TerminalNode LINES() { return getToken(FlinkSqlParser.LINES, 0); }
		public TerminalNode LIST() { return getToken(FlinkSqlParser.LIST, 0); }
		public TerminalNode LOAD() { return getToken(FlinkSqlParser.LOAD, 0); }
		public TerminalNode LOCAL() { return getToken(FlinkSqlParser.LOCAL, 0); }
		public TerminalNode LOCATION() { return getToken(FlinkSqlParser.LOCATION, 0); }
		public TerminalNode LOCK() { return getToken(FlinkSqlParser.LOCK, 0); }
		public TerminalNode LOCKS() { return getToken(FlinkSqlParser.LOCKS, 0); }
		public TerminalNode LOGICAL() { return getToken(FlinkSqlParser.LOGICAL, 0); }
		public TerminalNode MACRO() { return getToken(FlinkSqlParser.MACRO, 0); }
		public TerminalNode MAP() { return getToken(FlinkSqlParser.MAP, 0); }
		public TerminalNode MATCH() { return getToken(FlinkSqlParser.MATCH, 0); }
		public TerminalNode MINUS() { return getToken(FlinkSqlParser.MINUS, 0); }
		public TerminalNode MSCK() { return getToken(FlinkSqlParser.MSCK, 0); }
		public TerminalNode MULTISET() { return getToken(FlinkSqlParser.MULTISET, 0); }
		public TerminalNode NEXT() { return getToken(FlinkSqlParser.NEXT, 0); }
		public TerminalNode NO() { return getToken(FlinkSqlParser.NO, 0); }
		public TerminalNode NULL() { return getToken(FlinkSqlParser.NULL, 0); }
		public TerminalNode NULLS() { return getToken(FlinkSqlParser.NULLS, 0); }
		public TerminalNode OF() { return getToken(FlinkSqlParser.OF, 0); }
		public TerminalNode OPTION() { return getToken(FlinkSqlParser.OPTION, 0); }
		public TerminalNode OPTIONS() { return getToken(FlinkSqlParser.OPTIONS, 0); }
		public TerminalNode OUT() { return getToken(FlinkSqlParser.OUT, 0); }
		public TerminalNode OUTPUTFORMAT() { return getToken(FlinkSqlParser.OUTPUTFORMAT, 0); }
		public TerminalNode OVER() { return getToken(FlinkSqlParser.OVER, 0); }
		public TerminalNode OVERWRITE() { return getToken(FlinkSqlParser.OVERWRITE, 0); }
		public TerminalNode PARTITION() { return getToken(FlinkSqlParser.PARTITION, 0); }
		public TerminalNode PARTITIONED() { return getToken(FlinkSqlParser.PARTITIONED, 0); }
		public TerminalNode PARTITIONS() { return getToken(FlinkSqlParser.PARTITIONS, 0); }
		public TerminalNode PERCENTLIT() { return getToken(FlinkSqlParser.PERCENTLIT, 0); }
		public TerminalNode PERIOD() { return getToken(FlinkSqlParser.PERIOD, 0); }
		public TerminalNode PIVOT() { return getToken(FlinkSqlParser.PIVOT, 0); }
		public TerminalNode POSITION() { return getToken(FlinkSqlParser.POSITION, 0); }
		public TerminalNode PRECEDING() { return getToken(FlinkSqlParser.PRECEDING, 0); }
		public TerminalNode PRINCIPALS() { return getToken(FlinkSqlParser.PRINCIPALS, 0); }
		public TerminalNode PURGE() { return getToken(FlinkSqlParser.PURGE, 0); }
		public TerminalNode RANGE() { return getToken(FlinkSqlParser.RANGE, 0); }
		public TerminalNode RAW() { return getToken(FlinkSqlParser.RAW, 0); }
		public TerminalNode RECORDREADER() { return getToken(FlinkSqlParser.RECORDREADER, 0); }
		public TerminalNode RECORDWRITER() { return getToken(FlinkSqlParser.RECORDWRITER, 0); }
		public TerminalNode RECOVER() { return getToken(FlinkSqlParser.RECOVER, 0); }
		public TerminalNode REDUCE() { return getToken(FlinkSqlParser.REDUCE, 0); }
		public TerminalNode REFRESH() { return getToken(FlinkSqlParser.REFRESH, 0); }
		public TerminalNode RENAME() { return getToken(FlinkSqlParser.RENAME, 0); }
		public TerminalNode REPAIR() { return getToken(FlinkSqlParser.REPAIR, 0); }
		public TerminalNode REPLACE() { return getToken(FlinkSqlParser.REPLACE, 0); }
		public TerminalNode RESET() { return getToken(FlinkSqlParser.RESET, 0); }
		public TerminalNode RESTRICT() { return getToken(FlinkSqlParser.RESTRICT, 0); }
		public TerminalNode REVOKE() { return getToken(FlinkSqlParser.REVOKE, 0); }
		public TerminalNode RLIKE() { return getToken(FlinkSqlParser.RLIKE, 0); }
		public TerminalNode ROLE() { return getToken(FlinkSqlParser.ROLE, 0); }
		public TerminalNode ROLES() { return getToken(FlinkSqlParser.ROLES, 0); }
		public TerminalNode ROLLBACK() { return getToken(FlinkSqlParser.ROLLBACK, 0); }
		public TerminalNode ROLLUP() { return getToken(FlinkSqlParser.ROLLUP, 0); }
		public TerminalNode ROW() { return getToken(FlinkSqlParser.ROW, 0); }
		public TerminalNode ROWS() { return getToken(FlinkSqlParser.ROWS, 0); }
		public TerminalNode SEMI() { return getToken(FlinkSqlParser.SEMI, 0); }
		public TerminalNode SEPARATED() { return getToken(FlinkSqlParser.SEPARATED, 0); }
		public TerminalNode SERDE() { return getToken(FlinkSqlParser.SERDE, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(FlinkSqlParser.SERDEPROPERTIES, 0); }
		public TerminalNode SET() { return getToken(FlinkSqlParser.SET, 0); }
		public TerminalNode SETMINUS() { return getToken(FlinkSqlParser.SETMINUS, 0); }
		public TerminalNode SETS() { return getToken(FlinkSqlParser.SETS, 0); }
		public TerminalNode SHOW() { return getToken(FlinkSqlParser.SHOW, 0); }
		public TerminalNode SKEWED() { return getToken(FlinkSqlParser.SKEWED, 0); }
		public TerminalNode SMALLINT() { return getToken(FlinkSqlParser.SMALLINT, 0); }
		public TerminalNode SORT() { return getToken(FlinkSqlParser.SORT, 0); }
		public TerminalNode SORTED() { return getToken(FlinkSqlParser.SORTED, 0); }
		public TerminalNode START() { return getToken(FlinkSqlParser.START, 0); }
		public TerminalNode STATISTICS() { return getToken(FlinkSqlParser.STATISTICS, 0); }
		public TerminalNode STORED() { return getToken(FlinkSqlParser.STORED, 0); }
		public TerminalNode STRATIFY() { return getToken(FlinkSqlParser.STRATIFY, 0); }
		public TerminalNode STRING() { return getToken(FlinkSqlParser.STRING, 0); }
		public TerminalNode STRUCT() { return getToken(FlinkSqlParser.STRUCT, 0); }
		public TerminalNode SYSTEM() { return getToken(FlinkSqlParser.SYSTEM, 0); }
		public TerminalNode SYSTEM_TIME() { return getToken(FlinkSqlParser.SYSTEM_TIME, 0); }
		public TerminalNode TABLES() { return getToken(FlinkSqlParser.TABLES, 0); }
		public TerminalNode TABLESAMPLE() { return getToken(FlinkSqlParser.TABLESAMPLE, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(FlinkSqlParser.TBLPROPERTIES, 0); }
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public TerminalNode TERMINATED() { return getToken(FlinkSqlParser.TERMINATED, 0); }
		public TerminalNode TIME() { return getToken(FlinkSqlParser.TIME, 0); }
		public TerminalNode TIMESTAMP() { return getToken(FlinkSqlParser.TIMESTAMP, 0); }
		public TerminalNode TINYINT() { return getToken(FlinkSqlParser.TINYINT, 0); }
		public TerminalNode TOUCH() { return getToken(FlinkSqlParser.TOUCH, 0); }
		public TerminalNode TRANSACTION() { return getToken(FlinkSqlParser.TRANSACTION, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(FlinkSqlParser.TRANSACTIONS, 0); }
		public TerminalNode TRANSFORM() { return getToken(FlinkSqlParser.TRANSFORM, 0); }
		public TerminalNode TRUE() { return getToken(FlinkSqlParser.TRUE, 0); }
		public TerminalNode TRUNCATE() { return getToken(FlinkSqlParser.TRUNCATE, 0); }
		public TerminalNode UNARCHIVE() { return getToken(FlinkSqlParser.UNARCHIVE, 0); }
		public TerminalNode UNBOUNDED() { return getToken(FlinkSqlParser.UNBOUNDED, 0); }
		public TerminalNode UNCACHE() { return getToken(FlinkSqlParser.UNCACHE, 0); }
		public TerminalNode UNLOCK() { return getToken(FlinkSqlParser.UNLOCK, 0); }
		public TerminalNode UNSET() { return getToken(FlinkSqlParser.UNSET, 0); }
		public TerminalNode UNNEST() { return getToken(FlinkSqlParser.UNNEST, 0); }
		public TerminalNode USE() { return getToken(FlinkSqlParser.USE, 0); }
		public TerminalNode VALUES() { return getToken(FlinkSqlParser.VALUES, 0); }
		public TerminalNode VARBINARY() { return getToken(FlinkSqlParser.VARBINARY, 0); }
		public TerminalNode VARCHAR() { return getToken(FlinkSqlParser.VARCHAR, 0); }
		public TerminalNode VIEW() { return getToken(FlinkSqlParser.VIEW, 0); }
		public TerminalNode VIEWS() { return getToken(FlinkSqlParser.VIEWS, 0); }
		public TerminalNode WATERMARK() { return getToken(FlinkSqlParser.WATERMARK, 0); }
		public TerminalNode WINDOW() { return getToken(FlinkSqlParser.WINDOW, 0); }
		public TerminalNode WITHIN() { return getToken(FlinkSqlParser.WITHIN, 0); }
		public TerminalNode WS() { return getToken(FlinkSqlParser.WS, 0); }
		public AnsiNonReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ansiNonReserved; }
	}

	public final AnsiNonReservedContext ansiNonReserved() throws RecognitionException {
		AnsiNonReservedContext _localctx = new AnsiNonReservedContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_ansiNonReserved);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1370);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ADD) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << LIMIT) | (1L << AT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << TRUE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << INTERVAL) | (1L << SEMI) | (1L << PIVOT) | (1L << LATERAL) | (1L << WINDOW) | (1L << OVER) | (1L << PARTITION) | (1L << RANGE) | (1L << ROWS) | (1L << UNBOUNDED) | (1L << PRECEDING) | (1L << FOLLOWING))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (VALUES - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (SETMINUS - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)) | (1L << (COMMIT - 64)) | (1L << (ROLLBACK - 64)) | (1L << (MACRO - 64)) | (1L << (IGNORE - 64)) | (1L << (IF - 64)) | (1L << (POSITION - 64)) | (1L << (EXTRACT - 64)) | (1L << (MINUS - 64)) | (1L << (DIV - 64)) | (1L << (PERCENTLIT - 64)) | (1L << (BUCKET - 64)) | (1L << (OUT - 64)) | (1L << (OF - 64)) | (1L << (SORT - 64)) | (1L << (CLUSTER - 64)) | (1L << (DISTRIBUTE - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)) | (1L << (UNSET - 128)) | (1L << (TBLPROPERTIES - 128)) | (1L << (DBPROPERTIES - 128)) | (1L << (BUCKETS - 128)) | (1L << (SKEWED - 128)) | (1L << (STORED - 128)) | (1L << (DIRECTORIES - 128)) | (1L << (LOCATION - 128)) | (1L << (EXCHANGE - 128)) | (1L << (ARCHIVE - 128)) | (1L << (UNARCHIVE - 128)) | (1L << (FILEFORMAT - 128)) | (1L << (TOUCH - 128)) | (1L << (COMPACT - 128)) | (1L << (CONCATENATE - 128)) | (1L << (CHANGE - 128)) | (1L << (CASCADE - 128)) | (1L << (RESTRICT - 128)) | (1L << (CLUSTERED - 128)) | (1L << (SORTED - 128)) | (1L << (PURGE - 128)) | (1L << (INPUTFORMAT - 128)) | (1L << (OUTPUTFORMAT - 128)) | (1L << (DATABASE - 128)) | (1L << (DATABASES - 128)) | (1L << (DFS - 128)) | (1L << (TRUNCATE - 128)) | (1L << (ANALYZE - 128)) | (1L << (COMPUTE - 128)) | (1L << (LIST - 128)) | (1L << (STATISTICS - 128)) | (1L << (PARTITIONED - 128)) | (1L << (EXTERNAL - 128)) | (1L << (DEFINED - 128)) | (1L << (REVOKE - 128)))) != 0) || ((((_la - 193)) & ~0x3f) == 0 && ((1L << (_la - 193)) & ((1L << (LOCK - 193)) | (1L << (UNLOCK - 193)) | (1L << (MSCK - 193)) | (1L << (REPAIR - 193)) | (1L << (RECOVER - 193)) | (1L << (EXPORT - 193)) | (1L << (IMPORT - 193)) | (1L << (LOAD - 193)) | (1L << (ROLE - 193)) | (1L << (ROLES - 193)) | (1L << (COMPACTIONS - 193)) | (1L << (PRINCIPALS - 193)) | (1L << (TRANSACTIONS - 193)) | (1L << (INDEX - 193)) | (1L << (INDEXES - 193)) | (1L << (LOCKS - 193)) | (1L << (OPTION - 193)) | (1L << (ANTI - 193)) | (1L << (LOCAL - 193)) | (1L << (INPATH - 193)) | (1L << (WATERMARK - 193)) | (1L << (UNNEST - 193)) | (1L << (MATCH - 193)) | (1L << (NEXT - 193)) | (1L << (WITHIN - 193)) | (1L << (WS - 193)) | (1L << (SYSTEM - 193)) | (1L << (INCLUDING - 193)) | (1L << (EXCLUDING - 193)) | (1L << (CONSTRAINTS - 193)) | (1L << (GENERATED - 193)) | (1L << (CATALOG - 193)) | (1L << (LANGUAGE - 193)) | (1L << (CATALOGS - 193)) | (1L << (VIEWS - 193)) | (1L << (KEY - 193)) | (1L << (PERIOD - 193)) | (1L << (SYSTEM_TIME - 193)) | (1L << (STRING - 193)) | (1L << (ARRAY - 193)) | (1L << (MAP - 193)) | (1L << (CHAR - 193)) | (1L << (VARCHAR - 193)) | (1L << (BINARY - 193)) | (1L << (VARBINARY - 193)) | (1L << (BYTES - 193)) | (1L << (DECIMAL - 193)) | (1L << (TINYINT - 193)) | (1L << (SMALLINT - 193)) | (1L << (INT - 193)) | (1L << (BIGINT - 193)) | (1L << (FLOAT - 193)) | (1L << (DOUBLE - 193)) | (1L << (DATE - 193)) | (1L << (TIME - 193)) | (1L << (TIMESTAMP - 193)) | (1L << (MULTISET - 193)) | (1L << (BOOLEAN - 193)) | (1L << (RAW - 193)) | (1L << (ROW - 193)) | (1L << (NULL - 193)) | (1L << (DATETIME - 193)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrictNonReservedContext extends ParserRuleContext {
		public TerminalNode ANTI() { return getToken(FlinkSqlParser.ANTI, 0); }
		public TerminalNode CROSS() { return getToken(FlinkSqlParser.CROSS, 0); }
		public TerminalNode EXCEPT() { return getToken(FlinkSqlParser.EXCEPT, 0); }
		public TerminalNode FULL() { return getToken(FlinkSqlParser.FULL, 0); }
		public TerminalNode INNER() { return getToken(FlinkSqlParser.INNER, 0); }
		public TerminalNode INTERSECT() { return getToken(FlinkSqlParser.INTERSECT, 0); }
		public TerminalNode JOIN() { return getToken(FlinkSqlParser.JOIN, 0); }
		public TerminalNode LEFT() { return getToken(FlinkSqlParser.LEFT, 0); }
		public TerminalNode NATURAL() { return getToken(FlinkSqlParser.NATURAL, 0); }
		public TerminalNode ON() { return getToken(FlinkSqlParser.ON, 0); }
		public TerminalNode RIGHT() { return getToken(FlinkSqlParser.RIGHT, 0); }
		public TerminalNode SEMI() { return getToken(FlinkSqlParser.SEMI, 0); }
		public TerminalNode SETMINUS() { return getToken(FlinkSqlParser.SETMINUS, 0); }
		public TerminalNode UNION() { return getToken(FlinkSqlParser.UNION, 0); }
		public TerminalNode USING() { return getToken(FlinkSqlParser.USING, 0); }
		public StrictNonReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strictNonReserved; }
	}

	public final StrictNonReservedContext strictNonReserved() throws RecognitionException {
		StrictNonReservedContext _localctx = new StrictNonReservedContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_strictNonReserved);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1372);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << JOIN) | (1L << CROSS) | (1L << INNER) | (1L << LEFT) | (1L << SEMI) | (1L << RIGHT) | (1L << FULL) | (1L << NATURAL) | (1L << ON))) != 0) || ((((_la - 93)) & ~0x3f) == 0 && ((1L << (_la - 93)) & ((1L << (UNION - 93)) | (1L << (EXCEPT - 93)) | (1L << (SETMINUS - 93)) | (1L << (INTERSECT - 93)) | (1L << (USING - 93)))) != 0) || _la==ANTI) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonReservedContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(FlinkSqlParser.ADD, 0); }
		public TerminalNode AFTER() { return getToken(FlinkSqlParser.AFTER, 0); }
		public TerminalNode ALL() { return getToken(FlinkSqlParser.ALL, 0); }
		public TerminalNode ALTER() { return getToken(FlinkSqlParser.ALTER, 0); }
		public TerminalNode ANALYZE() { return getToken(FlinkSqlParser.ANALYZE, 0); }
		public TerminalNode AND() { return getToken(FlinkSqlParser.AND, 0); }
		public TerminalNode ANY() { return getToken(FlinkSqlParser.ANY, 0); }
		public TerminalNode COLUMNS() { return getToken(FlinkSqlParser.COLUMNS, 0); }
		public TerminalNode ARRAY() { return getToken(FlinkSqlParser.ARRAY, 0); }
		public TerminalNode AS() { return getToken(FlinkSqlParser.AS, 0); }
		public TerminalNode ASC() { return getToken(FlinkSqlParser.ASC, 0); }
		public TerminalNode AT() { return getToken(FlinkSqlParser.AT, 0); }
		public TerminalNode BETWEEN() { return getToken(FlinkSqlParser.BETWEEN, 0); }
		public TerminalNode BIGINT() { return getToken(FlinkSqlParser.BIGINT, 0); }
		public TerminalNode BINARY() { return getToken(FlinkSqlParser.BINARY, 0); }
		public TerminalNode BOOLEAN() { return getToken(FlinkSqlParser.BOOLEAN, 0); }
		public TerminalNode BOTH() { return getToken(FlinkSqlParser.BOTH, 0); }
		public TerminalNode BUCKET() { return getToken(FlinkSqlParser.BUCKET, 0); }
		public TerminalNode BUCKETS() { return getToken(FlinkSqlParser.BUCKETS, 0); }
		public TerminalNode BY() { return getToken(FlinkSqlParser.BY, 0); }
		public TerminalNode BYTES() { return getToken(FlinkSqlParser.BYTES, 0); }
		public TerminalNode CACHE() { return getToken(FlinkSqlParser.CACHE, 0); }
		public TerminalNode CASCADE() { return getToken(FlinkSqlParser.CASCADE, 0); }
		public TerminalNode CASE() { return getToken(FlinkSqlParser.CASE, 0); }
		public TerminalNode CAST() { return getToken(FlinkSqlParser.CAST, 0); }
		public TerminalNode CATALOG() { return getToken(FlinkSqlParser.CATALOG, 0); }
		public TerminalNode CATALOGS() { return getToken(FlinkSqlParser.CATALOGS, 0); }
		public TerminalNode CHANGE() { return getToken(FlinkSqlParser.CHANGE, 0); }
		public TerminalNode CHAR() { return getToken(FlinkSqlParser.CHAR, 0); }
		public TerminalNode CLEAR() { return getToken(FlinkSqlParser.CLEAR, 0); }
		public TerminalNode CLUSTER() { return getToken(FlinkSqlParser.CLUSTER, 0); }
		public TerminalNode CLUSTERED() { return getToken(FlinkSqlParser.CLUSTERED, 0); }
		public TerminalNode CODEGEN() { return getToken(FlinkSqlParser.CODEGEN, 0); }
		public TerminalNode COLLECTION() { return getToken(FlinkSqlParser.COLLECTION, 0); }
		public TerminalNode COLUMN() { return getToken(FlinkSqlParser.COLUMN, 0); }
		public TerminalNode COMMENT() { return getToken(FlinkSqlParser.COMMENT, 0); }
		public TerminalNode COMMIT() { return getToken(FlinkSqlParser.COMMIT, 0); }
		public TerminalNode COMPACT() { return getToken(FlinkSqlParser.COMPACT, 0); }
		public TerminalNode COMPACTIONS() { return getToken(FlinkSqlParser.COMPACTIONS, 0); }
		public TerminalNode COMPUTE() { return getToken(FlinkSqlParser.COMPUTE, 0); }
		public TerminalNode CONCATENATE() { return getToken(FlinkSqlParser.CONCATENATE, 0); }
		public TerminalNode CONSTRAINT() { return getToken(FlinkSqlParser.CONSTRAINT, 0); }
		public TerminalNode CONSTRAINTS() { return getToken(FlinkSqlParser.CONSTRAINTS, 0); }
		public TerminalNode COST() { return getToken(FlinkSqlParser.COST, 0); }
		public TerminalNode CREATE() { return getToken(FlinkSqlParser.CREATE, 0); }
		public TerminalNode CUBE() { return getToken(FlinkSqlParser.CUBE, 0); }
		public TerminalNode CURRENT() { return getToken(FlinkSqlParser.CURRENT, 0); }
		public TerminalNode DATA() { return getToken(FlinkSqlParser.DATA, 0); }
		public TerminalNode DATABASE() { return getToken(FlinkSqlParser.DATABASE, 0); }
		public TerminalNode DATABASES() { return getToken(FlinkSqlParser.DATABASES, 0); }
		public TerminalNode DATE() { return getToken(FlinkSqlParser.DATE, 0); }
		public TerminalNode DATETIME() { return getToken(FlinkSqlParser.DATETIME, 0); }
		public TerminalNode DBPROPERTIES() { return getToken(FlinkSqlParser.DBPROPERTIES, 0); }
		public TerminalNode DECIMAL() { return getToken(FlinkSqlParser.DECIMAL, 0); }
		public TerminalNode DEFINED() { return getToken(FlinkSqlParser.DEFINED, 0); }
		public TerminalNode DELETE() { return getToken(FlinkSqlParser.DELETE, 0); }
		public TerminalNode DELIMITED() { return getToken(FlinkSqlParser.DELIMITED, 0); }
		public TerminalNode DESC() { return getToken(FlinkSqlParser.DESC, 0); }
		public TerminalNode DESCRIBE() { return getToken(FlinkSqlParser.DESCRIBE, 0); }
		public TerminalNode DFS() { return getToken(FlinkSqlParser.DFS, 0); }
		public TerminalNode DIRECTORIES() { return getToken(FlinkSqlParser.DIRECTORIES, 0); }
		public TerminalNode DIRECTORY() { return getToken(FlinkSqlParser.DIRECTORY, 0); }
		public TerminalNode DISTINCT() { return getToken(FlinkSqlParser.DISTINCT, 0); }
		public TerminalNode DISTRIBUTE() { return getToken(FlinkSqlParser.DISTRIBUTE, 0); }
		public TerminalNode DIV() { return getToken(FlinkSqlParser.DIV, 0); }
		public TerminalNode DOUBLE() { return getToken(FlinkSqlParser.DOUBLE, 0); }
		public TerminalNode DROP() { return getToken(FlinkSqlParser.DROP, 0); }
		public TerminalNode ELSE() { return getToken(FlinkSqlParser.ELSE, 0); }
		public TerminalNode END() { return getToken(FlinkSqlParser.END, 0); }
		public TerminalNode ESCAPED() { return getToken(FlinkSqlParser.ESCAPED, 0); }
		public TerminalNode EXCHANGE() { return getToken(FlinkSqlParser.EXCHANGE, 0); }
		public TerminalNode EXCLUDING() { return getToken(FlinkSqlParser.EXCLUDING, 0); }
		public TerminalNode EXISTS() { return getToken(FlinkSqlParser.EXISTS, 0); }
		public TerminalNode EXPLAIN() { return getToken(FlinkSqlParser.EXPLAIN, 0); }
		public TerminalNode EXPORT() { return getToken(FlinkSqlParser.EXPORT, 0); }
		public TerminalNode EXTENDED() { return getToken(FlinkSqlParser.EXTENDED, 0); }
		public TerminalNode EXTERNAL() { return getToken(FlinkSqlParser.EXTERNAL, 0); }
		public TerminalNode EXTRACT() { return getToken(FlinkSqlParser.EXTRACT, 0); }
		public TerminalNode FALSE() { return getToken(FlinkSqlParser.FALSE, 0); }
		public TerminalNode FIELDS() { return getToken(FlinkSqlParser.FIELDS, 0); }
		public TerminalNode FILEFORMAT() { return getToken(FlinkSqlParser.FILEFORMAT, 0); }
		public TerminalNode FIRST() { return getToken(FlinkSqlParser.FIRST, 0); }
		public TerminalNode FLOAT() { return getToken(FlinkSqlParser.FLOAT, 0); }
		public TerminalNode FOLLOWING() { return getToken(FlinkSqlParser.FOLLOWING, 0); }
		public TerminalNode FOR() { return getToken(FlinkSqlParser.FOR, 0); }
		public TerminalNode FORMAT() { return getToken(FlinkSqlParser.FORMAT, 0); }
		public TerminalNode FORMATTED() { return getToken(FlinkSqlParser.FORMATTED, 0); }
		public TerminalNode FROM() { return getToken(FlinkSqlParser.FROM, 0); }
		public TerminalNode FUNCTION() { return getToken(FlinkSqlParser.FUNCTION, 0); }
		public TerminalNode FUNCTIONS() { return getToken(FlinkSqlParser.FUNCTIONS, 0); }
		public TerminalNode GENERATED() { return getToken(FlinkSqlParser.GENERATED, 0); }
		public TerminalNode GLOBAL() { return getToken(FlinkSqlParser.GLOBAL, 0); }
		public TerminalNode GRANT() { return getToken(FlinkSqlParser.GRANT, 0); }
		public TerminalNode GROUP() { return getToken(FlinkSqlParser.GROUP, 0); }
		public TerminalNode GROUPING() { return getToken(FlinkSqlParser.GROUPING, 0); }
		public TerminalNode HAVING() { return getToken(FlinkSqlParser.HAVING, 0); }
		public TerminalNode IF() { return getToken(FlinkSqlParser.IF, 0); }
		public TerminalNode IGNORE() { return getToken(FlinkSqlParser.IGNORE, 0); }
		public TerminalNode IMPORT() { return getToken(FlinkSqlParser.IMPORT, 0); }
		public TerminalNode IN() { return getToken(FlinkSqlParser.IN, 0); }
		public TerminalNode INCLUDING() { return getToken(FlinkSqlParser.INCLUDING, 0); }
		public TerminalNode INDEX() { return getToken(FlinkSqlParser.INDEX, 0); }
		public TerminalNode INDEXES() { return getToken(FlinkSqlParser.INDEXES, 0); }
		public TerminalNode INPATH() { return getToken(FlinkSqlParser.INPATH, 0); }
		public TerminalNode INPUTFORMAT() { return getToken(FlinkSqlParser.INPUTFORMAT, 0); }
		public TerminalNode INSERT() { return getToken(FlinkSqlParser.INSERT, 0); }
		public TerminalNode INT() { return getToken(FlinkSqlParser.INT, 0); }
		public TerminalNode INTERVAL() { return getToken(FlinkSqlParser.INTERVAL, 0); }
		public TerminalNode INTO() { return getToken(FlinkSqlParser.INTO, 0); }
		public TerminalNode IS() { return getToken(FlinkSqlParser.IS, 0); }
		public TerminalNode ITEMS() { return getToken(FlinkSqlParser.ITEMS, 0); }
		public TerminalNode KEY() { return getToken(FlinkSqlParser.KEY, 0); }
		public TerminalNode KEYS() { return getToken(FlinkSqlParser.KEYS, 0); }
		public TerminalNode LANGUAGE() { return getToken(FlinkSqlParser.LANGUAGE, 0); }
		public TerminalNode LAST() { return getToken(FlinkSqlParser.LAST, 0); }
		public TerminalNode LATERAL() { return getToken(FlinkSqlParser.LATERAL, 0); }
		public TerminalNode LAZY() { return getToken(FlinkSqlParser.LAZY, 0); }
		public TerminalNode LEADING() { return getToken(FlinkSqlParser.LEADING, 0); }
		public TerminalNode LIKE() { return getToken(FlinkSqlParser.LIKE, 0); }
		public TerminalNode LIMIT() { return getToken(FlinkSqlParser.LIMIT, 0); }
		public TerminalNode LINES() { return getToken(FlinkSqlParser.LINES, 0); }
		public TerminalNode LIST() { return getToken(FlinkSqlParser.LIST, 0); }
		public TerminalNode LOAD() { return getToken(FlinkSqlParser.LOAD, 0); }
		public TerminalNode LOCAL() { return getToken(FlinkSqlParser.LOCAL, 0); }
		public TerminalNode LOCATION() { return getToken(FlinkSqlParser.LOCATION, 0); }
		public TerminalNode LOCK() { return getToken(FlinkSqlParser.LOCK, 0); }
		public TerminalNode LOCKS() { return getToken(FlinkSqlParser.LOCKS, 0); }
		public TerminalNode LOGICAL() { return getToken(FlinkSqlParser.LOGICAL, 0); }
		public TerminalNode MACRO() { return getToken(FlinkSqlParser.MACRO, 0); }
		public TerminalNode MAP() { return getToken(FlinkSqlParser.MAP, 0); }
		public TerminalNode MATCH() { return getToken(FlinkSqlParser.MATCH, 0); }
		public TerminalNode MINUS() { return getToken(FlinkSqlParser.MINUS, 0); }
		public TerminalNode MSCK() { return getToken(FlinkSqlParser.MSCK, 0); }
		public TerminalNode MULTISET() { return getToken(FlinkSqlParser.MULTISET, 0); }
		public TerminalNode NEXT() { return getToken(FlinkSqlParser.NEXT, 0); }
		public TerminalNode NO() { return getToken(FlinkSqlParser.NO, 0); }
		public TerminalNode NOT() { return getToken(FlinkSqlParser.NOT, 0); }
		public TerminalNode NULL() { return getToken(FlinkSqlParser.NULL, 0); }
		public TerminalNode NULLS() { return getToken(FlinkSqlParser.NULLS, 0); }
		public TerminalNode OF() { return getToken(FlinkSqlParser.OF, 0); }
		public TerminalNode OPTION() { return getToken(FlinkSqlParser.OPTION, 0); }
		public TerminalNode OPTIONS() { return getToken(FlinkSqlParser.OPTIONS, 0); }
		public TerminalNode OR() { return getToken(FlinkSqlParser.OR, 0); }
		public TerminalNode ORDER() { return getToken(FlinkSqlParser.ORDER, 0); }
		public TerminalNode OUT() { return getToken(FlinkSqlParser.OUT, 0); }
		public TerminalNode OUTER() { return getToken(FlinkSqlParser.OUTER, 0); }
		public TerminalNode OUTPUTFORMAT() { return getToken(FlinkSqlParser.OUTPUTFORMAT, 0); }
		public TerminalNode OVER() { return getToken(FlinkSqlParser.OVER, 0); }
		public TerminalNode OVERWRITE() { return getToken(FlinkSqlParser.OVERWRITE, 0); }
		public TerminalNode PARTITION() { return getToken(FlinkSqlParser.PARTITION, 0); }
		public TerminalNode PARTITIONED() { return getToken(FlinkSqlParser.PARTITIONED, 0); }
		public TerminalNode PARTITIONS() { return getToken(FlinkSqlParser.PARTITIONS, 0); }
		public TerminalNode PERCENTLIT() { return getToken(FlinkSqlParser.PERCENTLIT, 0); }
		public TerminalNode PERIOD() { return getToken(FlinkSqlParser.PERIOD, 0); }
		public TerminalNode PIVOT() { return getToken(FlinkSqlParser.PIVOT, 0); }
		public TerminalNode POSITION() { return getToken(FlinkSqlParser.POSITION, 0); }
		public TerminalNode PRECEDING() { return getToken(FlinkSqlParser.PRECEDING, 0); }
		public TerminalNode PRIMARY() { return getToken(FlinkSqlParser.PRIMARY, 0); }
		public TerminalNode PRINCIPALS() { return getToken(FlinkSqlParser.PRINCIPALS, 0); }
		public TerminalNode PURGE() { return getToken(FlinkSqlParser.PURGE, 0); }
		public TerminalNode RANGE() { return getToken(FlinkSqlParser.RANGE, 0); }
		public TerminalNode RAW() { return getToken(FlinkSqlParser.RAW, 0); }
		public TerminalNode RECORDREADER() { return getToken(FlinkSqlParser.RECORDREADER, 0); }
		public TerminalNode RECORDWRITER() { return getToken(FlinkSqlParser.RECORDWRITER, 0); }
		public TerminalNode RECOVER() { return getToken(FlinkSqlParser.RECOVER, 0); }
		public TerminalNode REDUCE() { return getToken(FlinkSqlParser.REDUCE, 0); }
		public TerminalNode REFRESH() { return getToken(FlinkSqlParser.REFRESH, 0); }
		public TerminalNode RENAME() { return getToken(FlinkSqlParser.RENAME, 0); }
		public TerminalNode REPAIR() { return getToken(FlinkSqlParser.REPAIR, 0); }
		public TerminalNode REPLACE() { return getToken(FlinkSqlParser.REPLACE, 0); }
		public TerminalNode RESET() { return getToken(FlinkSqlParser.RESET, 0); }
		public TerminalNode RESTRICT() { return getToken(FlinkSqlParser.RESTRICT, 0); }
		public TerminalNode REVOKE() { return getToken(FlinkSqlParser.REVOKE, 0); }
		public TerminalNode RLIKE() { return getToken(FlinkSqlParser.RLIKE, 0); }
		public TerminalNode ROLE() { return getToken(FlinkSqlParser.ROLE, 0); }
		public TerminalNode ROLES() { return getToken(FlinkSqlParser.ROLES, 0); }
		public TerminalNode ROLLBACK() { return getToken(FlinkSqlParser.ROLLBACK, 0); }
		public TerminalNode ROLLUP() { return getToken(FlinkSqlParser.ROLLUP, 0); }
		public TerminalNode ROW() { return getToken(FlinkSqlParser.ROW, 0); }
		public TerminalNode ROWS() { return getToken(FlinkSqlParser.ROWS, 0); }
		public TerminalNode SELECT() { return getToken(FlinkSqlParser.SELECT, 0); }
		public TerminalNode SEPARATED() { return getToken(FlinkSqlParser.SEPARATED, 0); }
		public TerminalNode SERDE() { return getToken(FlinkSqlParser.SERDE, 0); }
		public TerminalNode SERDEPROPERTIES() { return getToken(FlinkSqlParser.SERDEPROPERTIES, 0); }
		public TerminalNode SET() { return getToken(FlinkSqlParser.SET, 0); }
		public TerminalNode SETS() { return getToken(FlinkSqlParser.SETS, 0); }
		public TerminalNode SHOW() { return getToken(FlinkSqlParser.SHOW, 0); }
		public TerminalNode SKEWED() { return getToken(FlinkSqlParser.SKEWED, 0); }
		public TerminalNode SMALLINT() { return getToken(FlinkSqlParser.SMALLINT, 0); }
		public TerminalNode SORT() { return getToken(FlinkSqlParser.SORT, 0); }
		public TerminalNode SORTED() { return getToken(FlinkSqlParser.SORTED, 0); }
		public TerminalNode START() { return getToken(FlinkSqlParser.START, 0); }
		public TerminalNode STATISTICS() { return getToken(FlinkSqlParser.STATISTICS, 0); }
		public TerminalNode STORED() { return getToken(FlinkSqlParser.STORED, 0); }
		public TerminalNode STRATIFY() { return getToken(FlinkSqlParser.STRATIFY, 0); }
		public TerminalNode STRING() { return getToken(FlinkSqlParser.STRING, 0); }
		public TerminalNode STRUCT() { return getToken(FlinkSqlParser.STRUCT, 0); }
		public TerminalNode SYSTEM() { return getToken(FlinkSqlParser.SYSTEM, 0); }
		public TerminalNode SYSTEM_TIME() { return getToken(FlinkSqlParser.SYSTEM_TIME, 0); }
		public TerminalNode TABLE() { return getToken(FlinkSqlParser.TABLE, 0); }
		public TerminalNode TABLES() { return getToken(FlinkSqlParser.TABLES, 0); }
		public TerminalNode TABLESAMPLE() { return getToken(FlinkSqlParser.TABLESAMPLE, 0); }
		public TerminalNode TBLPROPERTIES() { return getToken(FlinkSqlParser.TBLPROPERTIES, 0); }
		public TerminalNode TEMPORARY() { return getToken(FlinkSqlParser.TEMPORARY, 0); }
		public TerminalNode TERMINATED() { return getToken(FlinkSqlParser.TERMINATED, 0); }
		public TerminalNode THEN() { return getToken(FlinkSqlParser.THEN, 0); }
		public TerminalNode TIME() { return getToken(FlinkSqlParser.TIME, 0); }
		public TerminalNode TIMESTAMP() { return getToken(FlinkSqlParser.TIMESTAMP, 0); }
		public TerminalNode TINYINT() { return getToken(FlinkSqlParser.TINYINT, 0); }
		public TerminalNode TO() { return getToken(FlinkSqlParser.TO, 0); }
		public TerminalNode TOUCH() { return getToken(FlinkSqlParser.TOUCH, 0); }
		public TerminalNode TRAILING() { return getToken(FlinkSqlParser.TRAILING, 0); }
		public TerminalNode TRANSACTION() { return getToken(FlinkSqlParser.TRANSACTION, 0); }
		public TerminalNode TRANSACTIONS() { return getToken(FlinkSqlParser.TRANSACTIONS, 0); }
		public TerminalNode TRANSFORM() { return getToken(FlinkSqlParser.TRANSFORM, 0); }
		public TerminalNode TRUE() { return getToken(FlinkSqlParser.TRUE, 0); }
		public TerminalNode TRUNCATE() { return getToken(FlinkSqlParser.TRUNCATE, 0); }
		public TerminalNode UNARCHIVE() { return getToken(FlinkSqlParser.UNARCHIVE, 0); }
		public TerminalNode UNBOUNDED() { return getToken(FlinkSqlParser.UNBOUNDED, 0); }
		public TerminalNode UNCACHE() { return getToken(FlinkSqlParser.UNCACHE, 0); }
		public TerminalNode UNLOCK() { return getToken(FlinkSqlParser.UNLOCK, 0); }
		public TerminalNode UNSET() { return getToken(FlinkSqlParser.UNSET, 0); }
		public TerminalNode UNNEST() { return getToken(FlinkSqlParser.UNNEST, 0); }
		public TerminalNode USE() { return getToken(FlinkSqlParser.USE, 0); }
		public TerminalNode VALUES() { return getToken(FlinkSqlParser.VALUES, 0); }
		public TerminalNode VARBINARY() { return getToken(FlinkSqlParser.VARBINARY, 0); }
		public TerminalNode VARCHAR() { return getToken(FlinkSqlParser.VARCHAR, 0); }
		public TerminalNode VIEW() { return getToken(FlinkSqlParser.VIEW, 0); }
		public TerminalNode VIEWS() { return getToken(FlinkSqlParser.VIEWS, 0); }
		public TerminalNode WATERMARK() { return getToken(FlinkSqlParser.WATERMARK, 0); }
		public TerminalNode WHEN() { return getToken(FlinkSqlParser.WHEN, 0); }
		public TerminalNode WHERE() { return getToken(FlinkSqlParser.WHERE, 0); }
		public TerminalNode WINDOW() { return getToken(FlinkSqlParser.WINDOW, 0); }
		public TerminalNode WITH() { return getToken(FlinkSqlParser.WITH, 0); }
		public TerminalNode WITHIN() { return getToken(FlinkSqlParser.WITHIN, 0); }
		public TerminalNode WS() { return getToken(FlinkSqlParser.WS, 0); }
		public NonReservedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonReserved; }
	}

	public final NonReservedContext nonReserved() throws RecognitionException {
		NonReservedContext _localctx = new NonReservedContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_nonReserved);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1374);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SELECT) | (1L << FROM) | (1L << ADD) | (1L << AS) | (1L << ALL) | (1L << ANY) | (1L << DISTINCT) | (1L << WHERE) | (1L << GROUP) | (1L << BY) | (1L << GROUPING) | (1L << SETS) | (1L << CUBE) | (1L << ROLLUP) | (1L << ORDER) | (1L << HAVING) | (1L << LIMIT) | (1L << AT) | (1L << OR) | (1L << AND) | (1L << IN) | (1L << NOT) | (1L << NO) | (1L << EXISTS) | (1L << BETWEEN) | (1L << LIKE) | (1L << RLIKE) | (1L << IS) | (1L << TRUE) | (1L << FALSE) | (1L << NULLS) | (1L << ASC) | (1L << DESC) | (1L << FOR) | (1L << INTERVAL) | (1L << CASE) | (1L << WHEN) | (1L << THEN) | (1L << ELSE) | (1L << END) | (1L << OUTER) | (1L << PIVOT) | (1L << LATERAL) | (1L << WINDOW) | (1L << OVER) | (1L << PARTITION) | (1L << RANGE) | (1L << ROWS) | (1L << UNBOUNDED) | (1L << PRECEDING) | (1L << FOLLOWING))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (CURRENT - 64)) | (1L << (FIRST - 64)) | (1L << (AFTER - 64)) | (1L << (LAST - 64)) | (1L << (WITH - 64)) | (1L << (VALUES - 64)) | (1L << (CREATE - 64)) | (1L << (TABLE - 64)) | (1L << (DIRECTORY - 64)) | (1L << (VIEW - 64)) | (1L << (REPLACE - 64)) | (1L << (INSERT - 64)) | (1L << (DELETE - 64)) | (1L << (INTO - 64)) | (1L << (DESCRIBE - 64)) | (1L << (EXPLAIN - 64)) | (1L << (FORMAT - 64)) | (1L << (LOGICAL - 64)) | (1L << (CODEGEN - 64)) | (1L << (COST - 64)) | (1L << (CAST - 64)) | (1L << (SHOW - 64)) | (1L << (TABLES - 64)) | (1L << (COLUMNS - 64)) | (1L << (COLUMN - 64)) | (1L << (USE - 64)) | (1L << (PARTITIONS - 64)) | (1L << (FUNCTIONS - 64)) | (1L << (DROP - 64)) | (1L << (TO - 64)) | (1L << (TABLESAMPLE - 64)) | (1L << (STRATIFY - 64)) | (1L << (ALTER - 64)) | (1L << (RENAME - 64)) | (1L << (STRUCT - 64)) | (1L << (COMMENT - 64)) | (1L << (SET - 64)) | (1L << (RESET - 64)) | (1L << (DATA - 64)) | (1L << (START - 64)) | (1L << (TRANSACTION - 64)) | (1L << (COMMIT - 64)) | (1L << (ROLLBACK - 64)) | (1L << (MACRO - 64)) | (1L << (IGNORE - 64)) | (1L << (BOTH - 64)) | (1L << (LEADING - 64)) | (1L << (TRAILING - 64)) | (1L << (IF - 64)) | (1L << (POSITION - 64)) | (1L << (EXTRACT - 64)) | (1L << (MINUS - 64)) | (1L << (DIV - 64)) | (1L << (PERCENTLIT - 64)) | (1L << (BUCKET - 64)) | (1L << (OUT - 64)) | (1L << (OF - 64)) | (1L << (SORT - 64)) | (1L << (CLUSTER - 64)) | (1L << (DISTRIBUTE - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (OVERWRITE - 128)) | (1L << (TRANSFORM - 128)) | (1L << (REDUCE - 128)) | (1L << (SERDE - 128)) | (1L << (SERDEPROPERTIES - 128)) | (1L << (RECORDREADER - 128)) | (1L << (RECORDWRITER - 128)) | (1L << (DELIMITED - 128)) | (1L << (FIELDS - 128)) | (1L << (TERMINATED - 128)) | (1L << (COLLECTION - 128)) | (1L << (ITEMS - 128)) | (1L << (KEYS - 128)) | (1L << (ESCAPED - 128)) | (1L << (LINES - 128)) | (1L << (SEPARATED - 128)) | (1L << (FUNCTION - 128)) | (1L << (EXTENDED - 128)) | (1L << (REFRESH - 128)) | (1L << (CLEAR - 128)) | (1L << (CACHE - 128)) | (1L << (UNCACHE - 128)) | (1L << (LAZY - 128)) | (1L << (FORMATTED - 128)) | (1L << (GLOBAL - 128)) | (1L << (TEMPORARY - 128)) | (1L << (OPTIONS - 128)) | (1L << (UNSET - 128)) | (1L << (TBLPROPERTIES - 128)) | (1L << (DBPROPERTIES - 128)) | (1L << (BUCKETS - 128)) | (1L << (SKEWED - 128)) | (1L << (STORED - 128)) | (1L << (DIRECTORIES - 128)) | (1L << (LOCATION - 128)) | (1L << (EXCHANGE - 128)) | (1L << (UNARCHIVE - 128)) | (1L << (FILEFORMAT - 128)) | (1L << (TOUCH - 128)) | (1L << (COMPACT - 128)) | (1L << (CONCATENATE - 128)) | (1L << (CHANGE - 128)) | (1L << (CASCADE - 128)) | (1L << (CONSTRAINT - 128)) | (1L << (RESTRICT - 128)) | (1L << (CLUSTERED - 128)) | (1L << (SORTED - 128)) | (1L << (PURGE - 128)) | (1L << (INPUTFORMAT - 128)) | (1L << (OUTPUTFORMAT - 128)) | (1L << (DATABASE - 128)) | (1L << (DATABASES - 128)) | (1L << (DFS - 128)) | (1L << (TRUNCATE - 128)) | (1L << (ANALYZE - 128)) | (1L << (COMPUTE - 128)) | (1L << (LIST - 128)) | (1L << (STATISTICS - 128)) | (1L << (PARTITIONED - 128)) | (1L << (EXTERNAL - 128)) | (1L << (DEFINED - 128)) | (1L << (REVOKE - 128)))) != 0) || ((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (GRANT - 192)) | (1L << (LOCK - 192)) | (1L << (UNLOCK - 192)) | (1L << (MSCK - 192)) | (1L << (REPAIR - 192)) | (1L << (RECOVER - 192)) | (1L << (EXPORT - 192)) | (1L << (IMPORT - 192)) | (1L << (LOAD - 192)) | (1L << (ROLE - 192)) | (1L << (ROLES - 192)) | (1L << (COMPACTIONS - 192)) | (1L << (PRINCIPALS - 192)) | (1L << (TRANSACTIONS - 192)) | (1L << (INDEX - 192)) | (1L << (INDEXES - 192)) | (1L << (LOCKS - 192)) | (1L << (OPTION - 192)) | (1L << (LOCAL - 192)) | (1L << (INPATH - 192)) | (1L << (WATERMARK - 192)) | (1L << (UNNEST - 192)) | (1L << (MATCH - 192)) | (1L << (NEXT - 192)) | (1L << (WITHIN - 192)) | (1L << (WS - 192)) | (1L << (SYSTEM - 192)) | (1L << (INCLUDING - 192)) | (1L << (EXCLUDING - 192)) | (1L << (CONSTRAINTS - 192)) | (1L << (GENERATED - 192)) | (1L << (CATALOG - 192)) | (1L << (LANGUAGE - 192)) | (1L << (CATALOGS - 192)) | (1L << (VIEWS - 192)) | (1L << (PRIMARY - 192)) | (1L << (KEY - 192)) | (1L << (PERIOD - 192)) | (1L << (SYSTEM_TIME - 192)) | (1L << (STRING - 192)) | (1L << (ARRAY - 192)) | (1L << (MAP - 192)) | (1L << (CHAR - 192)) | (1L << (VARCHAR - 192)) | (1L << (BINARY - 192)) | (1L << (VARBINARY - 192)) | (1L << (BYTES - 192)) | (1L << (DECIMAL - 192)) | (1L << (TINYINT - 192)) | (1L << (SMALLINT - 192)) | (1L << (INT - 192)) | (1L << (BIGINT - 192)) | (1L << (FLOAT - 192)) | (1L << (DOUBLE - 192)) | (1L << (DATE - 192)) | (1L << (TIME - 192)) | (1L << (TIMESTAMP - 192)) | (1L << (MULTISET - 192)) | (1L << (BOOLEAN - 192)) | (1L << (RAW - 192)) | (1L << (ROW - 192)) | (1L << (NULL - 192)) | (1L << (DATETIME - 192)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 44:
			return queryStatement_sempred((QueryStatementContext)_localctx, predIndex);
		case 50:
			return tableExpression_sempred((TableExpressionContext)_localctx, predIndex);
		case 68:
			return booleanExpression_sempred((BooleanExpressionContext)_localctx, predIndex);
		case 70:
			return valueExpression_sempred((ValueExpressionContext)_localctx, predIndex);
		case 71:
			return primaryExpression_sempred((PrimaryExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean queryStatement_sempred(QueryStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean tableExpression_sempred(TableExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean booleanExpression_sempred(BooleanExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean valueExpression_sempred(ValueExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 6);
		case 5:
			return precpred(_ctx, 5);
		case 6:
			return precpred(_ctx, 4);
		case 7:
			return precpred(_ctx, 3);
		case 8:
			return precpred(_ctx, 2);
		case 9:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean primaryExpression_sempred(PrimaryExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 10:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0125\u0563\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\3\2\3\2"+
		"\3\2\3\3\3\3\3\3\3\4\3\4\7\4\u00f3\n\4\f\4\16\4\u00f6\13\4\3\5\3\5\5\5"+
		"\u00fa\n\5\3\5\3\5\5\5\u00fe\n\5\3\5\3\5\5\5\u0102\n\5\3\5\3\5\5\5\u0106"+
		"\n\5\3\5\3\5\5\5\u010a\n\5\3\5\3\5\5\5\u010e\n\5\5\5\u0110\n\5\3\6\3\6"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u0120\n\7\3\b\3\b"+
		"\5\b\u0124\n\b\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\5\13\u0130\n"+
		"\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u013e\n\r\f"+
		"\r\16\r\u0141\13\r\3\r\3\r\5\r\u0145\n\r\3\r\3\r\5\r\u0149\n\r\3\r\3\r"+
		"\5\r\u014d\n\r\3\r\3\r\5\r\u0151\n\r\3\r\5\r\u0154\n\r\3\r\3\r\5\r\u0158"+
		"\n\r\3\16\3\16\3\16\5\16\u015d\n\16\3\16\5\16\u0160\n\16\3\17\3\17\5\17"+
		"\u0164\n\17\3\20\3\20\3\20\7\20\u0169\n\20\f\20\16\20\u016c\13\20\3\21"+
		"\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\25\3\25\5\25\u017f\n\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26"+
		"\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\7\30\u0193\n\30\f\30\16"+
		"\30\u0196\13\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\7\31\u01a0\n\31"+
		"\f\31\16\31\u01a3\13\31\3\31\3\31\5\31\u01a7\n\31\3\32\3\32\5\32\u01ab"+
		"\n\32\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\5\34\u01b5\n\34\3\35\3\35"+
		"\3\35\3\35\3\35\3\36\3\36\3\36\5\36\u01bf\n\36\3\36\3\36\5\36\u01c3\n"+
		"\36\3\36\3\36\3\37\3\37\5\37\u01c9\n\37\3\37\3\37\5\37\u01cd\n\37\3\37"+
		"\3\37\5\37\u01d1\n\37\3\37\5\37\u01d4\n\37\3\37\3\37\3\37\3 \3 \3 \3 "+
		"\5 \u01dd\n \3 \3 \5 \u01e1\n \3 \3 \3 \3 \3 \5 \u01e8\n \3!\3!\3!\3!"+
		"\3!\5!\u01ef\n!\3\"\3\"\3\"\3\"\3#\3#\3#\3$\3$\3$\3$\3$\3%\3%\3%\3%\5"+
		"%\u0201\n%\3%\3%\5%\u0205\n%\3%\3%\3%\3%\3%\5%\u020c\n%\3&\3&\3&\5&\u0211"+
		"\n&\3&\3&\3\'\3\'\3\'\5\'\u0218\n\'\3\'\3\'\5\'\u021c\n\'\3(\3(\5(\u0220"+
		"\n(\3(\3(\5(\u0224\n(\3(\3(\3)\3)\3)\3)\5)\u022c\n)\3)\3)\5)\u0230\n)"+
		"\3)\3)\3*\3*\3*\3*\5*\u0238\n*\3*\3*\5*\u023c\n*\3+\3+\3+\3,\3,\3,\3,"+
		"\7,\u0245\n,\f,\16,\u0248\13,\3-\3-\3-\3-\7-\u024e\n-\f-\16-\u0251\13"+
		"-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\5.\u025d\n.\3.\5.\u0260\n.\3.\3.\5.\u0264"+
		"\n.\3.\5.\u0267\n.\5.\u0269\n.\3.\3.\3.\5.\u026e\n.\3.\3.\5.\u0272\n."+
		"\3.\5.\u0275\n.\7.\u0277\n.\f.\16.\u027a\13.\3/\3/\3/\3/\7/\u0280\n/\f"+
		"/\16/\u0283\13/\3\60\3\60\3\60\5\60\u0288\n\60\3\60\5\60\u028b\n\60\3"+
		"\60\5\60\u028e\n\60\3\60\5\60\u0291\n\60\3\61\3\61\5\61\u0295\n\61\3\61"+
		"\3\61\3\61\3\61\7\61\u029b\n\61\f\61\16\61\u029e\13\61\5\61\u02a0\n\61"+
		"\3\62\3\62\5\62\u02a4\n\62\3\62\5\62\u02a7\n\62\3\63\3\63\3\63\3\64\3"+
		"\64\3\64\3\64\7\64\u02b0\n\64\f\64\16\64\u02b3\13\64\3\64\3\64\5\64\u02b7"+
		"\n\64\3\64\5\64\u02ba\n\64\3\64\3\64\3\64\5\64\u02bf\n\64\7\64\u02c1\n"+
		"\64\f\64\16\64\u02c4\13\64\3\65\3\65\5\65\u02c8\n\65\3\66\5\66\u02cb\n"+
		"\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\7\66\u02d6\n\66\f\66"+
		"\16\66\u02d9\13\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\5\66\u02e3"+
		"\n\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\7\67\u02ec\n\67\f\67\16\67\u02ef"+
		"\13\67\3\67\3\67\5\67\u02f3\n\67\38\38\38\39\39\39\39\39\79\u02fd\n9\f"+
		"9\169\u0300\139\3:\3:\3:\3:\3:\3:\3:\7:\u0309\n:\f:\16:\u030c\13:\3:\3"+
		":\3:\3:\3:\3:\3:\7:\u0315\n:\f:\16:\u0318\13:\3:\3:\3:\3:\3:\3:\3:\7:"+
		"\u0321\n:\f:\16:\u0324\13:\3:\3:\3:\3:\3:\3:\3:\3:\7:\u032e\n:\f:\16:"+
		"\u0331\13:\3:\3:\5:\u0335\n:\3;\3;\3;\3<\3<\3<\3<\3<\7<\u033f\n<\f<\16"+
		"<\u0342\13<\3=\3=\5=\u0346\n=\3>\3>\3>\5>\u034b\n>\3?\3?\3?\3?\7?\u0351"+
		"\n?\f?\16?\u0354\13?\3@\3@\3@\3@\3A\5A\u035b\nA\3A\3A\3A\3A\3A\3A\7A\u0363"+
		"\nA\fA\16A\u0366\13A\5A\u0368\nA\3A\3A\3A\3A\3A\7A\u036f\nA\fA\16A\u0372"+
		"\13A\5A\u0374\nA\3A\5A\u0377\nA\3A\3A\3B\3B\5B\u037d\nB\3B\3B\5B\u0381"+
		"\nB\3C\3C\3C\3C\5C\u0387\nC\3D\3D\3D\3E\3E\3F\3F\3F\3F\3F\3F\3F\3F\3F"+
		"\3F\5F\u0398\nF\5F\u039a\nF\3F\3F\3F\3F\3F\3F\7F\u03a2\nF\fF\16F\u03a5"+
		"\13F\3G\5G\u03a8\nG\3G\3G\3G\3G\3G\3G\5G\u03b0\nG\3G\3G\3G\3G\3G\7G\u03b7"+
		"\nG\fG\16G\u03ba\13G\3G\3G\3G\5G\u03bf\nG\3G\3G\3G\3G\3G\3G\3G\3G\3G\3"+
		"G\3G\5G\u03cc\nG\3G\3G\3G\5G\u03d1\nG\3G\3G\3G\3G\3G\3G\3G\3G\7G\u03db"+
		"\nG\fG\16G\u03de\13G\3G\3G\5G\u03e2\nG\3G\5G\u03e5\nG\3G\3G\3G\3G\5G\u03eb"+
		"\nG\3G\3G\3G\5G\u03f0\nG\3G\3G\3G\5G\u03f5\nG\3G\3G\3G\5G\u03fa\nG\3H"+
		"\3H\3H\3H\5H\u0400\nH\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H"+
		"\3H\3H\3H\7H\u0415\nH\fH\16H\u0418\13H\3I\3I\3I\6I\u041d\nI\rI\16I\u041e"+
		"\3I\3I\5I\u0423\nI\3I\3I\3I\3I\3I\6I\u042a\nI\rI\16I\u042b\3I\3I\5I\u0430"+
		"\nI\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\5I\u0440\nI\3I\3I\3I\3I"+
		"\3I\3I\3I\5I\u0449\nI\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I"+
		"\3I\3I\3I\3I\3I\3I\5I\u0461\nI\3I\3I\3I\7I\u0466\nI\fI\16I\u0469\13I\5"+
		"I\u046b\nI\3I\3I\3I\3I\3I\3I\3I\3I\5I\u0475\nI\3I\3I\3I\3I\3I\7I\u047c"+
		"\nI\fI\16I\u047f\13I\3J\3J\3K\3K\3L\3L\5L\u0487\nL\3M\3M\3M\5M\u048c\n"+
		"M\3N\3N\5N\u0490\nN\3O\3O\3O\6O\u0495\nO\rO\16O\u0496\3P\3P\3P\5P\u049c"+
		"\nP\3Q\3Q\3Q\3Q\3Q\3R\5R\u04a4\nR\3R\3R\5R\u04a8\nR\3S\5S\u04ab\nS\3S"+
		"\3S\5S\u04af\nS\3T\5T\u04b2\nT\3T\3T\5T\u04b6\nT\3U\3U\3U\3V\3V\6V\u04bd"+
		"\nV\rV\16V\u04be\3V\5V\u04c2\nV\3W\3W\3W\3W\3X\3X\3X\7X\u04cb\nX\fX\16"+
		"X\u04ce\13X\3Y\3Y\5Y\u04d2\nY\3Z\3Z\3Z\3Z\5Z\u04d8\nZ\3[\3[\3\\\3\\\3"+
		"]\3]\3]\3]\3]\3^\3^\3^\7^\u04e6\n^\f^\16^\u04e9\13^\3_\3_\7_\u04ed\n_"+
		"\f_\16_\u04f0\13_\3`\3`\7`\u04f4\n`\f`\16`\u04f7\13`\3a\3a\3a\3b\3b\3"+
		"b\3b\3c\3c\3c\3d\3d\3d\3d\7d\u0507\nd\fd\16d\u050a\13d\3d\3d\3e\3e\5e"+
		"\u0510\ne\3e\5e\u0513\ne\3f\3f\3f\5f\u0518\nf\3g\3g\3g\3g\5g\u051e\ng"+
		"\3h\3h\3h\3h\3h\3h\5h\u0526\nh\3i\3i\3i\3i\3i\3i\3i\3i\3i\3i\3i\3i\3i"+
		"\3i\5i\u0536\ni\3j\3j\3j\3j\3j\3j\3j\5j\u053f\nj\3k\3k\3l\3l\3m\3m\3n"+
		"\3n\3n\3n\3n\3n\3n\3n\3n\5n\u0550\nn\3n\5n\u0553\nn\3o\3o\3p\3p\3q\3q"+
		"\3r\3r\3s\3s\3t\3t\3u\3u\3u\4\u04ee\u04f5\7Zf\u008a\u008e\u0090v\2\4\6"+
		"\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRT"+
		"VXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e"+
		"\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6"+
		"\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be"+
		"\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6"+
		"\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4\u00e6\u00e8\2\35\6\2XX]]\u00b7"+
		"\u00b7\u00e4\u00e5\3\2\u00ea\u0101\3\2\u00de\u00df\4\2\n\n\u00e0\u00e0"+
		"\4\2\u009d\u009d\u00e1\u00e1\4\2\u00ae\u00ae\u00b0\u00b0\4\2OO\u0082\u0082"+
		"\4\2_`bb\4\2\61\62\64\65\3\2%&\4\2CCEE\3\2\n\13\3\2\"#\4\2\u0106\u0106"+
		"\u0118\u0119\6\2zz\u0116\u0116\u011a\u011a\u011d\u011d\4\2\u0118\u0119"+
		"\u011b\u011b\3\2\u0118\u0119\3\2\u0121\u0122\4\2\u0121\u0121\u0124\u0124"+
		"\3\2\u0124\u0125\3\2\u011e\u011f\6\2zz\u0116\u0116\u0118\u011a\u011c\u011d"+
		"\5\2\33\33\u0105\u0106\u0118\u0119\4\2\n\n\f\f\27\2\b\b\17\23\26\27\34"+
		" \"\"$&((\63\638EGGJNPUWY[^aadrv\u0084\u0086\u00ae\u00b0\u00c1\u00c3\u00e5"+
		"\u00e7\u0101\7\2./\61\67_b\u0085\u0085\u00d4\u00d4\t\2\6-\60\608^c\u0084"+
		"\u0086\u00a6\u00a8\u00d3\u00d5\u0101\2\u05d7\2\u00ea\3\2\2\2\4\u00ed\3"+
		"\2\2\2\6\u00f4\3\2\2\2\b\u010f\3\2\2\2\n\u0111\3\2\2\2\f\u011f\3\2\2\2"+
		"\16\u0123\3\2\2\2\20\u0125\3\2\2\2\22\u0128\3\2\2\2\24\u012d\3\2\2\2\26"+
		"\u0133\3\2\2\2\30\u0136\3\2\2\2\32\u0159\3\2\2\2\34\u0163\3\2\2\2\36\u0165"+
		"\3\2\2\2 \u016d\3\2\2\2\"\u016f\3\2\2\2$\u0173\3\2\2\2&\u0176\3\2\2\2"+
		"(\u017e\3\2\2\2*\u0186\3\2\2\2,\u018a\3\2\2\2.\u018e\3\2\2\2\60\u01a6"+
		"\3\2\2\2\62\u01aa\3\2\2\2\64\u01ac\3\2\2\2\66\u01b4\3\2\2\28\u01b6\3\2"+
		"\2\2:\u01bb\3\2\2\2<\u01c6\3\2\2\2>\u01d8\3\2\2\2@\u01e9\3\2\2\2B\u01f0"+
		"\3\2\2\2D\u01f4\3\2\2\2F\u01f7\3\2\2\2H\u01fc\3\2\2\2J\u020d\3\2\2\2L"+
		"\u0214\3\2\2\2N\u021d\3\2\2\2P\u0227\3\2\2\2R\u0233\3\2\2\2T\u023d\3\2"+
		"\2\2V\u0240\3\2\2\2X\u0249\3\2\2\2Z\u0268\3\2\2\2\\\u027b\3\2\2\2^\u0284"+
		"\3\2\2\2`\u0292\3\2\2\2b\u02a1\3\2\2\2d\u02a8\3\2\2\2f\u02ab\3\2\2\2h"+
		"\u02c5\3\2\2\2j\u02e2\3\2\2\2l\u02f2\3\2\2\2n\u02f4\3\2\2\2p\u02f7\3\2"+
		"\2\2r\u0334\3\2\2\2t\u0336\3\2\2\2v\u0339\3\2\2\2x\u0343\3\2\2\2z\u0347"+
		"\3\2\2\2|\u034c\3\2\2\2~\u0355\3\2\2\2\u0080\u035a\3\2\2\2\u0082\u037a"+
		"\3\2\2\2\u0084\u0386\3\2\2\2\u0086\u0388\3\2\2\2\u0088\u038b\3\2\2\2\u008a"+
		"\u0399\3\2\2\2\u008c\u03f9\3\2\2\2\u008e\u03ff\3\2\2\2\u0090\u0474\3\2"+
		"\2\2\u0092\u0480\3\2\2\2\u0094\u0482\3\2\2\2\u0096\u0486\3\2\2\2\u0098"+
		"\u0488\3\2\2\2\u009a\u048d\3\2\2\2\u009c\u0494\3\2\2\2\u009e\u0498\3\2"+
		"\2\2\u00a0\u049d\3\2\2\2\u00a2\u04a7\3\2\2\2\u00a4\u04aa\3\2\2\2\u00a6"+
		"\u04b1\3\2\2\2\u00a8\u04b7\3\2\2\2\u00aa\u04c1\3\2\2\2\u00ac\u04c3\3\2"+
		"\2\2\u00ae\u04c7\3\2\2\2\u00b0\u04d1\3\2\2\2\u00b2\u04d7\3\2\2\2\u00b4"+
		"\u04d9\3\2\2\2\u00b6\u04db\3\2\2\2\u00b8\u04dd\3\2\2\2\u00ba\u04e2\3\2"+
		"\2\2\u00bc\u04ea\3\2\2\2\u00be\u04f1\3\2\2\2\u00c0\u04f8\3\2\2\2\u00c2"+
		"\u04fb\3\2\2\2\u00c4\u04ff\3\2\2\2\u00c6\u0502\3\2\2\2\u00c8\u050d\3\2"+
		"\2\2\u00ca\u0517\3\2\2\2\u00cc\u051d\3\2\2\2\u00ce\u0525\3\2\2\2\u00d0"+
		"\u0535\3\2\2\2\u00d2\u053e\3\2\2\2\u00d4\u0540\3\2\2\2\u00d6\u0542\3\2"+
		"\2\2\u00d8\u0544\3\2\2\2\u00da\u0552\3\2\2\2\u00dc\u0554\3\2\2\2\u00de"+
		"\u0556\3\2\2\2\u00e0\u0558\3\2\2\2\u00e2\u055a\3\2\2\2\u00e4\u055c\3\2"+
		"\2\2\u00e6\u055e\3\2\2\2\u00e8\u0560\3\2\2\2\u00ea\u00eb\5\4\3\2\u00eb"+
		"\u00ec\7\2\2\3\u00ec\3\3\2\2\2\u00ed\u00ee\5\6\4\2\u00ee\u00ef\7\2\2\3"+
		"\u00ef\5\3\2\2\2\u00f0\u00f3\5\b\5\2\u00f1\u00f3\5\n\6\2\u00f2\u00f0\3"+
		"\2\2\2\u00f2\u00f1\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f4"+
		"\u00f5\3\2\2\2\u00f5\7\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f7\u00f9\5\f\7\2"+
		"\u00f8\u00fa\7\u0110\2\2\u00f9\u00f8\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa"+
		"\u0110\3\2\2\2\u00fb\u00fd\5\16\b\2\u00fc\u00fe\7\u0110\2\2\u00fd\u00fc"+
		"\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe\u0110\3\2\2\2\u00ff\u0101\5\20\t\2"+
		"\u0100\u0102\7\u0110\2\2\u0101\u0100\3\2\2\2\u0101\u0102\3\2\2\2\u0102"+
		"\u0110\3\2\2\2\u0103\u0105\5\22\n\2\u0104\u0106\7\u0110\2\2\u0105\u0104"+
		"\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0110\3\2\2\2\u0107\u0109\5\24\13\2"+
		"\u0108\u010a\7\u0110\2\2\u0109\u0108\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"\u0110\3\2\2\2\u010b\u010d\5\26\f\2\u010c\u010e\7\u0110\2\2\u010d\u010c"+
		"\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u0110\3\2\2\2\u010f\u00f7\3\2\2\2\u010f"+
		"\u00fb\3\2\2\2\u010f\u00ff\3\2\2\2\u010f\u0103\3\2\2\2\u010f\u0107\3\2"+
		"\2\2\u010f\u010b\3\2\2\2\u0110\t\3\2\2\2\u0111\u0112\7\u0110\2\2\u0112"+
		"\13\3\2\2\2\u0113\u0120\5\30\r\2\u0114\u0120\5:\36\2\u0115\u0120\5<\37"+
		"\2\u0116\u0120\5> \2\u0117\u0120\58\35\2\u0118\u0120\5@!\2\u0119\u0120"+
		"\5F$\2\u011a\u0120\5H%\2\u011b\u0120\5J&\2\u011c\u0120\5L\'\2\u011d\u0120"+
		"\5N(\2\u011e\u0120\5P)\2\u011f\u0113\3\2\2\2\u011f\u0114\3\2\2\2\u011f"+
		"\u0115\3\2\2\2\u011f\u0116\3\2\2\2\u011f\u0117\3\2\2\2\u011f\u0118\3\2"+
		"\2\2\u011f\u0119\3\2\2\2\u011f\u011a\3\2\2\2\u011f\u011b\3\2\2\2\u011f"+
		"\u011c\3\2\2\2\u011f\u011d\3\2\2\2\u011f\u011e\3\2\2\2\u0120\r\3\2\2\2"+
		"\u0121\u0124\5Z.\2\u0122\u0124\5R*\2\u0123\u0121\3\2\2\2\u0123\u0122\3"+
		"\2\2\2\u0124\17\3\2\2\2\u0125\u0126\7P\2\2\u0126\u0127\5\u00bc_\2\u0127"+
		"\21\3\2\2\2\u0128\u0129\7Q\2\2\u0129\u012a\5\u00b0Y\2\u012a\u012b\7\'"+
		"\2\2\u012b\u012c\5\16\b\2\u012c\23\3\2\2\2\u012d\u012f\7[\2\2\u012e\u0130"+
		"\7\u00e2\2\2\u012f\u012e\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0131\3\2\2"+
		"\2\u0131\u0132\5\u00bc_\2\u0132\25\3\2\2\2\u0133\u0134\7W\2\2\u0134\u0135"+
		"\t\2\2\2\u0135\27\3\2\2\2\u0136\u0137\7H\2\2\u0137\u0138\7I\2\2\u0138"+
		"\u0139\5\u00bc_\2\u0139\u013a\7\u010d\2\2\u013a\u013f\5\32\16\2\u013b"+
		"\u013c\7\u010f\2\2\u013c\u013e\5\32\16\2\u013d\u013b\3\2\2\2\u013e\u0141"+
		"\3\2\2\2\u013f\u013d\3\2\2\2\u013f\u0140\3\2\2\2\u0140\u0144\3\2\2\2\u0141"+
		"\u013f\3\2\2\2\u0142\u0143\7\u010f\2\2\u0143\u0145\5&\24\2\u0144\u0142"+
		"\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0148\3\2\2\2\u0146\u0147\7\u010f\2"+
		"\2\u0147\u0149\5(\25\2\u0148\u0146\3\2\2\2\u0148\u0149\3\2\2\2\u0149\u014c"+
		"\3\2\2\2\u014a\u014b\7\u010f\2\2\u014b\u014d\5*\26\2\u014c\u014a\3\2\2"+
		"\2\u014c\u014d\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u0150\7\u010e\2\2\u014f"+
		"\u0151\5$\23\2\u0150\u014f\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0153\3\2"+
		"\2\2\u0152\u0154\5,\27\2\u0153\u0152\3\2\2\2\u0153\u0154\3\2\2\2\u0154"+
		"\u0155\3\2\2\2\u0155\u0157\5\u00c0a\2\u0156\u0158\5\64\33\2\u0157\u0156"+
		"\3\2\2\2\u0157\u0158\3\2\2\2\u0158\31\3\2\2\2\u0159\u015a\5\34\17\2\u015a"+
		"\u015c\5 \21\2\u015b\u015d\5\"\22\2\u015c\u015b\3\2\2\2\u015c\u015d\3"+
		"\2\2\2\u015d\u015f\3\2\2\2\u015e\u0160\5\u00a4S\2\u015f\u015e\3\2\2\2"+
		"\u015f\u0160\3\2\2\2\u0160\33\3\2\2\2\u0161\u0164\5\u00be`\2\u0162\u0164"+
		"\5\u0088E\2\u0163\u0161\3\2\2\2\u0163\u0162\3\2\2\2\u0164\35\3\2\2\2\u0165"+
		"\u016a\5\34\17\2\u0166\u0167\7\u010f\2\2\u0167\u0169\5\34\17\2\u0168\u0166"+
		"\3\2\2\2\u0169\u016c\3\2\2\2\u016a\u0168\3\2\2\2\u016a\u016b\3\2\2\2\u016b"+
		"\37\3\2\2\2\u016c\u016a\3\2\2\2\u016d\u016e\t\3\2\2\u016e!\3\2\2\2\u016f"+
		"\u0170\7\u010d\2\2\u0170\u0171\5\u00dep\2\u0171\u0172\7\u010e\2\2\u0172"+
		"#\3\2\2\2\u0173\u0174\7i\2\2\u0174\u0175\7\u0120\2\2\u0175%\3\2\2\2\u0176"+
		"\u0177\7\u00d7\2\2\u0177\u0178\7\'\2\2\u0178\u0179\5\u0088E\2\u0179\u017a"+
		"\7\t\2\2\u017a\u017b\5\u0088E\2\u017b\'\3\2\2\2\u017c\u017d\7\u00af\2"+
		"\2\u017d\u017f\5\u00b0Y\2\u017e\u017c\3\2\2\2\u017e\u017f\3\2\2\2\u017f"+
		"\u0180\3\2\2\2\u0180\u0181\7\u00e6\2\2\u0181\u0182\7\u00e7\2\2\u0182\u0183"+
		"\7\u010d\2\2\u0183\u0184\5\36\20\2\u0184\u0185\7\u010e\2\2\u0185)\3\2"+
		"\2\2\u0186\u0187\7\u00e8\2\2\u0187\u0188\7\'\2\2\u0188\u0189\7\u00e9\2"+
		"\2\u0189+\3\2\2\2\u018a\u018b\7\u00be\2\2\u018b\u018c\7\17\2\2\u018c\u018d"+
		"\5.\30\2\u018d-\3\2\2\2\u018e\u018f\7\u010d\2\2\u018f\u0194\5\60\31\2"+
		"\u0190\u0191\7\u010f\2\2\u0191\u0193\5\60\31\2\u0192\u0190\3\2\2\2\u0193"+
		"\u0196\3\2\2\2\u0194\u0192\3\2\2\2\u0194\u0195\3\2\2\2\u0195\u0197\3\2"+
		"\2\2\u0196\u0194\3\2\2\2\u0197\u0198\7\u010e\2\2\u0198/\3\2\2\2\u0199"+
		"\u01a7\5\u0096L\2\u019a\u019b\5\u00b0Y\2\u019b\u019c\7\u010d\2\2\u019c"+
		"\u01a1\5\62\32\2\u019d\u019e\7\u010f\2\2\u019e\u01a0\5\62\32\2\u019f\u019d"+
		"\3\2\2\2\u01a0\u01a3\3\2\2\2\u01a1\u019f\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2"+
		"\u01a4\3\2\2\2\u01a3\u01a1\3\2\2\2\u01a4\u01a5\7\u010e\2\2\u01a5\u01a7"+
		"\3\2\2\2\u01a6\u0199\3\2\2\2\u01a6\u019a\3\2\2\2\u01a7\61\3\2\2\2\u01a8"+
		"\u01ab\5\u0096L\2\u01a9\u01ab\5\u00dan\2\u01aa\u01a8\3\2\2\2\u01aa\u01a9"+
		"\3\2\2\2\u01ab\63\3\2\2\2\u01ac\u01ad\7\37\2\2\u01ad\u01ae\5\u00b0Y\2"+
		"\u01ae\u01af\5\66\34\2\u01af\65\3\2\2\2\u01b0\u01b1\t\4\2\2\u01b1\u01b5"+
		"\t\5\2\2\u01b2\u01b3\t\4\2\2\u01b3\u01b5\t\6\2\2\u01b4\u01b0\3\2\2\2\u01b4"+
		"\u01b2\3\2\2\2\u01b5\67\3\2\2\2\u01b6\u01b7\7H\2\2\u01b7\u01b8\7\u00e2"+
		"\2\2\u01b8\u01b9\5\u00bc_\2\u01b9\u01ba\5\u00c0a\2\u01ba9\3\2\2\2\u01bb"+
		"\u01bc\7H\2\2\u01bc\u01be\7\u00b6\2\2\u01bd\u01bf\5\u00c2b\2\u01be\u01bd"+
		"\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0\u01c2\5\u00bc_"+
		"\2\u01c1\u01c3\5$\23\2\u01c2\u01c1\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c4"+
		"\3\2\2\2\u01c4\u01c5\5\u00c0a\2\u01c5;\3\2\2\2\u01c6\u01c8\7H\2\2\u01c7"+
		"\u01c9\7\u009c\2\2\u01c8\u01c7\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01ca"+
		"\3\2\2\2\u01ca\u01cc\7K\2\2\u01cb\u01cd\5\u00c2b\2\u01cc\u01cb\3\2\2\2"+
		"\u01cc\u01cd\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ce\u01d0\5\u00bc_\2\u01cf"+
		"\u01d1\5\36\20\2\u01d0\u01cf\3\2\2\2\u01d0\u01d1\3\2\2\2\u01d1\u01d3\3"+
		"\2\2\2\u01d2\u01d4\5$\23\2\u01d3\u01d2\3\2\2\2\u01d3\u01d4\3\2\2\2\u01d4"+
		"\u01d5\3\2\2\2\u01d5\u01d6\7\t\2\2\u01d6\u01d7\5Z.\2\u01d7=\3\2\2\2\u01d8"+
		"\u01dc\7H\2\2\u01d9\u01dd\7\u009c\2\2\u01da\u01db\7\u009c\2\2\u01db\u01dd"+
		"\7\u00dd\2\2\u01dc\u01d9\3\2\2\2\u01dc\u01da\3\2\2\2\u01dd\u01de\3\2\2"+
		"\2\u01de\u01e0\7\u0093\2\2\u01df\u01e1\5\u00c2b\2\u01e0\u01df\3\2\2\2"+
		"\u01e0\u01e1\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01e3\5\u00bc_\2\u01e3"+
		"\u01e4\7\t\2\2\u01e4\u01e7\5\u00b0Y\2\u01e5\u01e6\7\u00e3\2\2\u01e6\u01e8"+
		"\5\u00b0Y\2\u01e7\u01e5\3\2\2\2\u01e7\u01e8\3\2\2\2\u01e8?\3\2\2\2\u01e9"+
		"\u01ea\7f\2\2\u01ea\u01eb\7I\2\2\u01eb\u01ee\5\u00bc_\2\u01ec\u01ef\5"+
		"B\"\2\u01ed\u01ef\5D#\2\u01ee\u01ec\3\2\2\2\u01ee\u01ed\3\2\2\2\u01ef"+
		"A\3\2\2\2\u01f0\u01f1\7g\2\2\u01f1\u01f2\7c\2\2\u01f2\u01f3\5\u00bc_\2"+
		"\u01f3C\3\2\2\2\u01f4\u01f5\7j\2\2\u01f5\u01f6\5\u00c6d\2\u01f6E\3\2\2"+
		"\2\u01f7\u01f8\7f\2\2\u01f8\u01f9\7\u00b6\2\2\u01f9\u01fa\5\u00bc_\2\u01fa"+
		"\u01fb\5D#\2\u01fbG\3\2\2\2\u01fc\u0200\7f\2\2\u01fd\u0201\7\u009c\2\2"+
		"\u01fe\u01ff\7\u009c\2\2\u01ff\u0201\7\u00dd\2\2\u0200\u01fd\3\2\2\2\u0200"+
		"\u01fe\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0204\7\u0093\2\2\u0203\u0205"+
		"\5\u00c4c\2\u0204\u0203\3\2\2\2\u0204\u0205\3\2\2\2\u0205\u0206\3\2\2"+
		"\2\u0206\u0207\5\u00bc_\2\u0207\u0208\7\t\2\2\u0208\u020b\5\u00b0Y\2\u0209"+
		"\u020a\7\u00e3\2\2\u020a\u020c\5\u00b0Y\2\u020b\u0209\3\2\2\2\u020b\u020c"+
		"\3\2\2\2\u020cI\3\2\2\2\u020d\u020e\7^\2\2\u020e\u0210\7I\2\2\u020f\u0211"+
		"\5\u00c4c\2\u0210\u020f\3\2\2\2\u0210\u0211\3\2\2\2\u0211\u0212\3\2\2"+
		"\2\u0212\u0213\5\u00bc_\2\u0213K\3\2\2\2\u0214\u0215\7^\2\2\u0215\u0217"+
		"\7\u00b6\2\2\u0216\u0218\5\u00c4c\2\u0217\u0216\3\2\2\2\u0217\u0218\3"+
		"\2\2\2\u0218\u0219\3\2\2\2\u0219\u021b\5\u00bc_\2\u021a\u021c\t\7\2\2"+
		"\u021b\u021a\3\2\2\2\u021b\u021c\3\2\2\2\u021cM\3\2\2\2\u021d\u021f\7"+
		"^\2\2\u021e\u0220\7\u009c\2\2\u021f\u021e\3\2\2\2\u021f\u0220\3\2\2\2"+
		"\u0220\u0221\3\2\2\2\u0221\u0223\7K\2\2\u0222\u0224\5\u00c4c\2\u0223\u0222"+
		"\3\2\2\2\u0223\u0224\3\2\2\2\u0224\u0225\3\2\2\2\u0225\u0226\5\u00bc_"+
		"\2\u0226O\3\2\2\2\u0227\u022b\7^\2\2\u0228\u022c\7\u009c\2\2\u0229\u022a"+
		"\7\u009c\2\2\u022a\u022c\7\u00dd\2\2\u022b\u0228\3\2\2\2\u022b\u0229\3"+
		"\2\2\2\u022b\u022c\3\2\2\2\u022c\u022d\3\2\2\2\u022d\u022f\7\u0093\2\2"+
		"\u022e\u0230\5\u00c4c\2\u022f\u022e\3\2\2\2\u022f\u0230\3\2\2\2\u0230"+
		"\u0231\3\2\2\2\u0231\u0232\5\u00bc_\2\u0232Q\3\2\2\2\u0233\u0234\7M\2"+
		"\2\u0234\u0235\t\b\2\2\u0235\u023b\5\u00bc_\2\u0236\u0238\5T+\2\u0237"+
		"\u0236\3\2\2\2\u0237\u0238\3\2\2\2\u0238\u0239\3\2\2\2\u0239\u023c\5Z"+
		".\2\u023a\u023c\5V,\2\u023b\u0237\3\2\2\2\u023b\u023a\3\2\2\2\u023cS\3"+
		"\2\2\2\u023d\u023e\7<\2\2\u023e\u023f\5\u00c6d\2\u023fU\3\2\2\2\u0240"+
		"\u0241\7G\2\2\u0241\u0246\5X-\2\u0242\u0243\7\u010f\2\2\u0243\u0245\5"+
		"X-\2\u0244\u0242\3\2\2\2\u0245\u0248\3\2\2\2\u0246\u0244\3\2\2\2\u0246"+
		"\u0247\3\2\2\2\u0247W\3\2\2\2\u0248\u0246\3\2\2\2\u0249\u024a\7\u010d"+
		"\2\2\u024a\u024f\5\u00dan\2\u024b\u024c\7\u010f\2\2\u024c\u024e\5\u00da"+
		"n\2\u024d\u024b\3\2\2\2\u024e\u0251\3\2\2\2\u024f\u024d\3\2\2\2\u024f"+
		"\u0250\3\2\2\2\u0250\u0252\3\2\2\2\u0251\u024f\3\2\2\2\u0252\u0253\7\u010e"+
		"\2\2\u0253Y\3\2\2\2\u0254\u0255\b.\1\2\u0255\u0269\5\\/\2\u0256\u0257"+
		"\7\u010d\2\2\u0257\u0258\5Z.\2\u0258\u0259\7\u010e\2\2\u0259\u0269\3\2"+
		"\2\2\u025a\u025c\5`\61\2\u025b\u025d\5v<\2\u025c\u025b\3\2\2\2\u025c\u025d"+
		"\3\2\2\2\u025d\u025f\3\2\2\2\u025e\u0260\5z>\2\u025f\u025e\3\2\2\2\u025f"+
		"\u0260\3\2\2\2\u0260\u0269\3\2\2\2\u0261\u0263\5^\60\2\u0262\u0264\5v"+
		"<\2\u0263\u0262\3\2\2\2\u0263\u0264\3\2\2\2\u0264\u0266\3\2\2\2\u0265"+
		"\u0267\5z>\2\u0266\u0265\3\2\2\2\u0266\u0267\3\2\2\2\u0267\u0269\3\2\2"+
		"\2\u0268\u0254\3\2\2\2\u0268\u0256\3\2\2\2\u0268\u025a\3\2\2\2\u0268\u0261"+
		"\3\2\2\2\u0269\u0278\3\2\2\2\u026a\u026b\f\5\2\2\u026b\u026d\t\t\2\2\u026c"+
		"\u026e\7\n\2\2\u026d\u026c\3\2\2\2\u026d\u026e\3\2\2\2\u026e\u026f\3\2"+
		"\2\2\u026f\u0271\5Z.\2\u0270\u0272\5v<\2\u0271\u0270\3\2\2\2\u0271\u0272"+
		"\3\2\2\2\u0272\u0274\3\2\2\2\u0273\u0275\5z>\2\u0274\u0273\3\2\2\2\u0274"+
		"\u0275\3\2\2\2\u0275\u0277\3\2\2\2\u0276\u026a\3\2\2\2\u0277\u027a\3\2"+
		"\2\2\u0278\u0276\3\2\2\2\u0278\u0279\3\2\2\2\u0279[\3\2\2\2\u027a\u0278"+
		"\3\2\2\2\u027b\u027c\7G\2\2\u027c\u0281\5\u0088E\2\u027d\u027e\7\u010f"+
		"\2\2\u027e\u0280\5\u0088E\2\u027f\u027d\3\2\2\2\u0280\u0283\3\2\2\2\u0281"+
		"\u027f\3\2\2\2\u0281\u0282\3\2\2\2\u0282]\3\2\2\2\u0283\u0281\3\2\2\2"+
		"\u0284\u0285\5`\61\2\u0285\u0287\5d\63\2\u0286\u0288\5n8\2\u0287\u0286"+
		"\3\2\2\2\u0287\u0288\3\2\2\2\u0288\u028a\3\2\2\2\u0289\u028b\5p9\2\u028a"+
		"\u0289\3\2\2\2\u028a\u028b\3\2\2\2\u028b\u028d\3\2\2\2\u028c\u028e\5t"+
		";\2\u028d\u028c\3\2\2\2\u028d\u028e\3\2\2\2\u028e\u0290\3\2\2\2\u028f"+
		"\u0291\5|?\2\u0290\u028f\3\2\2\2\u0290\u0291\3\2\2\2\u0291_\3\2\2\2\u0292"+
		"\u0294\7\6\2\2\u0293\u0295\5\u00e2r\2\u0294\u0293\3\2\2\2\u0294\u0295"+
		"\3\2\2\2\u0295\u029f\3\2\2\2\u0296\u02a0\7\u0116\2\2\u0297\u029c\5b\62"+
		"\2\u0298\u0299\7\u010f\2\2\u0299\u029b\5b\62\2\u029a\u0298\3\2\2\2\u029b"+
		"\u029e\3\2\2\2\u029c\u029a\3\2\2\2\u029c\u029d\3\2\2\2\u029d\u02a0\3\2"+
		"\2\2\u029e\u029c\3\2\2\2\u029f\u0296\3\2\2\2\u029f\u0297\3\2\2\2\u02a0"+
		"a\3\2\2\2\u02a1\u02a6\5\u0088E\2\u02a2\u02a4\7\t\2\2\u02a3\u02a2\3\2\2"+
		"\2\u02a3\u02a4\3\2\2\2\u02a4\u02a5\3\2\2\2\u02a5\u02a7\5\u0088E\2\u02a6"+
		"\u02a3\3\2\2\2\u02a6\u02a7\3\2\2\2\u02a7c\3\2\2\2\u02a8\u02a9\7\7\2\2"+
		"\u02a9\u02aa\5f\64\2\u02aae\3\2\2\2\u02ab\u02ac\b\64\1\2\u02ac\u02b1\5"+
		"h\65\2\u02ad\u02ae\7\u010f\2\2\u02ae\u02b0\5h\65\2\u02af\u02ad\3\2\2\2"+
		"\u02b0\u02b3\3\2\2\2\u02b1\u02af\3\2\2\2\u02b1\u02b2\3\2\2\2\u02b2\u02c2"+
		"\3\2\2\2\u02b3\u02b1\3\2\2\2\u02b4\u02b6\f\3\2\2\u02b5\u02b7\7\66\2\2"+
		"\u02b6\u02b5\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7\u02b9\3\2\2\2\u02b8\u02ba"+
		"\t\n\2\2\u02b9\u02b8\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba\u02bb\3\2\2\2\u02bb"+
		"\u02bc\7.\2\2\u02bc\u02be\5f\64\2\u02bd\u02bf\5l\67\2\u02be\u02bd\3\2"+
		"\2\2\u02be\u02bf\3\2\2\2\u02bf\u02c1\3\2\2\2\u02c0\u02b4\3\2\2\2\u02c1"+
		"\u02c4\3\2\2\2\u02c2\u02c0\3\2\2\2\u02c2\u02c3\3\2\2\2\u02c3g\3\2\2\2"+
		"\u02c4\u02c2\3\2\2\2\u02c5\u02c7\5j\66\2\u02c6\u02c8\5\u00a6T\2\u02c7"+
		"\u02c6\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8i\3\2\2\2\u02c9\u02cb\7I\2\2\u02ca"+
		"\u02c9\3\2\2\2\u02ca\u02cb\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02e3\5\u0088"+
		"E\2\u02cd\u02ce\79\2\2\u02ce\u02cf\7I\2\2\u02cf\u02d0\7\u010d\2\2\u02d0"+
		"\u02d1\5\u00bc_\2\u02d1\u02d2\7\u010d\2\2\u02d2\u02d7\5\u0088E\2\u02d3"+
		"\u02d4\7\u010f\2\2\u02d4\u02d6\5\u0088E\2\u02d5\u02d3\3\2\2\2\u02d6\u02d9"+
		"\3\2\2\2\u02d7\u02d5\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8\u02da\3\2\2\2\u02d9"+
		"\u02d7\3\2\2\2\u02da\u02db\7\u010e\2\2\u02db\u02dc\7\u010e\2\2\u02dc\u02e3"+
		"\3\2\2\2\u02dd\u02de\7\u00d8\2\2\u02de\u02df\7\u010d\2\2\u02df\u02e0\5"+
		"\u0088E\2\u02e0\u02e1\7\u010e\2\2\u02e1\u02e3\3\2\2\2\u02e2\u02ca\3\2"+
		"\2\2\u02e2\u02cd\3\2\2\2\u02e2\u02dd\3\2\2\2\u02e3k\3\2\2\2\u02e4\u02e5"+
		"\7\67\2\2\u02e5\u02f3\5\u008aF\2\u02e6\u02e7\7\u0085\2\2\u02e7\u02e8\7"+
		"\u010d\2\2\u02e8\u02ed\5\u00bc_\2\u02e9\u02ea\7\u010f\2\2\u02ea\u02ec"+
		"\5\u00bc_\2\u02eb\u02e9\3\2\2\2\u02ec\u02ef\3\2\2\2\u02ed\u02eb\3\2\2"+
		"\2\u02ed\u02ee\3\2\2\2\u02ee\u02f0\3\2\2\2\u02ef\u02ed\3\2\2\2\u02f0\u02f1"+
		"\7\u010e\2\2\u02f1\u02f3\3\2\2\2\u02f2\u02e4\3\2\2\2\u02f2\u02e6\3\2\2"+
		"\2\u02f3m\3\2\2\2\u02f4\u02f5\7\r\2\2\u02f5\u02f6\5\u008aF\2\u02f6o\3"+
		"\2\2\2\u02f7\u02f8\7\16\2\2\u02f8\u02f9\7\17\2\2\u02f9\u02fe\5r:\2\u02fa"+
		"\u02fb\7\u010f\2\2\u02fb\u02fd\5r:\2\u02fc\u02fa\3\2\2\2\u02fd\u0300\3"+
		"\2\2\2\u02fe\u02fc\3\2\2\2\u02fe\u02ff\3\2\2\2\u02ffq\3\2\2\2\u0300\u02fe"+
		"\3\2\2\2\u0301\u0335\5\u0088E\2\u0302\u0303\7\u010d\2\2\u0303\u0335\7"+
		"\u010e\2\2\u0304\u0305\7\u010d\2\2\u0305\u030a\5\u0088E\2\u0306\u0307"+
		"\7\u010f\2\2\u0307\u0309\5\u0088E\2\u0308\u0306\3\2\2\2\u0309\u030c\3"+
		"\2\2\2\u030a\u0308\3\2\2\2\u030a\u030b\3\2\2\2\u030b\u030d\3\2\2\2\u030c"+
		"\u030a\3\2\2\2\u030d\u030e\7\u010e\2\2\u030e\u0335\3\2\2\2\u030f\u0310"+
		"\7\22\2\2\u0310\u0311\7\u010d\2\2\u0311\u0316\5\u0088E\2\u0312\u0313\7"+
		"\u010f\2\2\u0313\u0315\5\u0088E\2\u0314\u0312\3\2\2\2\u0315\u0318\3\2"+
		"\2\2\u0316\u0314\3\2\2\2\u0316\u0317\3\2\2\2\u0317\u0319\3\2\2\2\u0318"+
		"\u0316\3\2\2\2\u0319\u031a\7\u010e\2\2\u031a\u0335\3\2\2\2\u031b\u031c"+
		"\7\23\2\2\u031c\u031d\7\u010d\2\2\u031d\u0322\5\u0088E\2\u031e\u031f\7"+
		"\u010f\2\2\u031f\u0321\5\u0088E\2\u0320\u031e\3\2\2\2\u0321\u0324\3\2"+
		"\2\2\u0322\u0320\3\2\2\2\u0322\u0323\3\2\2\2\u0323\u0325\3\2\2\2\u0324"+
		"\u0322\3\2\2\2\u0325\u0326\7\u010e\2\2\u0326\u0335\3\2\2\2\u0327\u0328"+
		"\7\20\2\2\u0328\u0329\7\21\2\2\u0329\u032a\7\u010d\2\2\u032a\u032f\5r"+
		":\2\u032b\u032c\7\u010f\2\2\u032c\u032e\5r:\2\u032d\u032b\3\2\2\2\u032e"+
		"\u0331\3\2\2\2\u032f\u032d\3\2\2\2\u032f\u0330\3\2\2\2\u0330\u0332\3\2"+
		"\2\2\u0331\u032f\3\2\2\2\u0332\u0333\7\u010e\2\2\u0333\u0335\3\2\2\2\u0334"+
		"\u0301\3\2\2\2\u0334\u0302\3\2\2\2\u0334\u0304\3\2\2\2\u0334\u030f\3\2"+
		"\2\2\u0334\u031b\3\2\2\2\u0334\u0327\3\2\2\2\u0335s\3\2\2\2\u0336\u0337"+
		"\7\25\2\2\u0337\u0338\5\u008aF\2\u0338u\3\2\2\2\u0339\u033a\7\24\2\2\u033a"+
		"\u033b\7\17\2\2\u033b\u0340\5x=\2\u033c\u033d\7\u010f\2\2\u033d\u033f"+
		"\5x=\2\u033e\u033c\3\2\2\2\u033f\u0342\3\2\2\2\u0340\u033e\3\2\2\2\u0340"+
		"\u0341\3\2\2\2\u0341w\3\2\2\2\u0342\u0340\3\2\2\2\u0343\u0345\5\u0088"+
		"E\2\u0344\u0346\t\13\2\2\u0345\u0344\3\2\2\2\u0345\u0346\3\2\2\2\u0346"+
		"y\3\2\2\2\u0347\u034a\7\26\2\2\u0348\u034b\7\n\2\2\u0349\u034b\5\u0088"+
		"E\2\u034a\u0348\3\2\2\2\u034a\u0349\3\2\2\2\u034b{\3\2\2\2\u034c\u034d"+
		"\7:\2\2\u034d\u0352\5~@\2\u034e\u034f\7\u010f\2\2\u034f\u0351\5~@\2\u0350"+
		"\u034e\3\2\2\2\u0351\u0354\3\2\2\2\u0352\u0350\3\2\2\2\u0352\u0353\3\2"+
		"\2\2\u0353}\3\2\2\2\u0354\u0352\3\2\2\2\u0355\u0356\5\u00a8U\2\u0356\u0357"+
		"\7\t\2\2\u0357\u0358\5\u0080A\2\u0358\177\3\2\2\2\u0359\u035b\5\u00a8"+
		"U\2\u035a\u0359\3\2\2\2\u035a\u035b\3\2\2\2\u035b\u035c\3\2\2\2\u035c"+
		"\u0367\7\u010d\2\2\u035d\u035e\7\24\2\2\u035e\u035f\7\17\2\2\u035f\u0364"+
		"\5\u0082B\2\u0360\u0361\7\u010f\2\2\u0361\u0363\5\u0082B\2\u0362\u0360"+
		"\3\2\2\2\u0363\u0366\3\2\2\2\u0364\u0362\3\2\2\2\u0364\u0365\3\2\2\2\u0365"+
		"\u0368\3\2\2\2\u0366\u0364\3\2\2\2\u0367\u035d\3\2\2\2\u0367\u0368\3\2"+
		"\2\2\u0368\u0373\3\2\2\2\u0369\u036a\7<\2\2\u036a\u036b\7\17\2\2\u036b"+
		"\u0370\5\u0088E\2\u036c\u036d\7\u010f\2\2\u036d\u036f\5\u0088E\2\u036e"+
		"\u036c\3\2\2\2\u036f\u0372\3\2\2\2\u0370\u036e\3\2\2\2\u0370\u0371\3\2"+
		"\2\2\u0371\u0374\3\2\2\2\u0372\u0370\3\2\2\2\u0373\u0369\3\2\2\2\u0373"+
		"\u0374\3\2\2\2\u0374\u0376\3\2\2\2\u0375\u0377\5\u0084C\2\u0376\u0375"+
		"\3\2\2\2\u0376\u0377\3\2\2\2\u0377\u0378\3\2\2\2\u0378\u0379\7\u010e\2"+
		"\2\u0379\u0081\3\2\2\2\u037a\u037c\5\u0088E\2\u037b\u037d\t\13\2\2\u037c"+
		"\u037b\3\2\2\2\u037c\u037d\3\2\2\2\u037d\u0380\3\2\2\2\u037e\u037f\7$"+
		"\2\2\u037f\u0381\t\f\2\2\u0380\u037e\3\2\2\2\u0380\u0381\3\2\2\2\u0381"+
		"\u0083\3\2\2\2\u0382\u0383\7=\2\2\u0383\u0387\5\u0086D\2\u0384\u0385\7"+
		">\2\2\u0385\u0387\5\u0086D\2\u0386\u0382\3\2\2\2\u0386\u0384\3\2\2\2\u0387"+
		"\u0085\3\2\2\2\u0388\u0389\5\u0088E\2\u0389\u038a\7@\2\2\u038a\u0087\3"+
		"\2\2\2\u038b\u038c\5\u008aF\2\u038c\u0089\3\2\2\2\u038d\u038e\bF\1\2\u038e"+
		"\u038f\7\33\2\2\u038f\u039a\5\u008aF\7\u0390\u0391\7\35\2\2\u0391\u0392"+
		"\7\u010d\2\2\u0392\u0393\5Z.\2\u0393\u0394\7\u010e\2\2\u0394\u039a\3\2"+
		"\2\2\u0395\u0397\5\u008eH\2\u0396\u0398\5\u008cG\2\u0397\u0396\3\2\2\2"+
		"\u0397\u0398\3\2\2\2\u0398\u039a\3\2\2\2\u0399\u038d\3\2\2\2\u0399\u0390"+
		"\3\2\2\2\u0399\u0395\3\2\2\2\u039a\u03a3\3\2\2\2\u039b\u039c\f\4\2\2\u039c"+
		"\u039d\7\31\2\2\u039d\u03a2\5\u008aF\5\u039e\u039f\f\3\2\2\u039f\u03a0"+
		"\7\30\2\2\u03a0\u03a2\5\u008aF\4\u03a1\u039b\3\2\2\2\u03a1\u039e\3\2\2"+
		"\2\u03a2\u03a5\3\2\2\2\u03a3\u03a1\3\2\2\2\u03a3\u03a4\3\2\2\2\u03a4\u008b"+
		"\3\2\2\2\u03a5\u03a3\3\2\2\2\u03a6\u03a8\7\33\2\2\u03a7\u03a6\3\2\2\2"+
		"\u03a7\u03a8\3\2\2\2\u03a8\u03a9\3\2\2\2\u03a9\u03aa\7\36\2\2\u03aa\u03ab"+
		"\5\u008eH\2\u03ab\u03ac\7\31\2\2\u03ac\u03ad\5\u008eH\2\u03ad\u03fa\3"+
		"\2\2\2\u03ae\u03b0\7\33\2\2\u03af\u03ae\3\2\2\2\u03af\u03b0\3\2\2\2\u03b0"+
		"\u03b1\3\2\2\2\u03b1\u03b2\7\32\2\2\u03b2\u03b3\7\u010d\2\2\u03b3\u03b8"+
		"\5\u0088E\2\u03b4\u03b5\7\u010f\2\2\u03b5\u03b7\5\u0088E\2\u03b6\u03b4"+
		"\3\2\2\2\u03b7\u03ba\3\2\2\2\u03b8\u03b6\3\2\2\2\u03b8\u03b9\3\2\2\2\u03b9"+
		"\u03bb\3\2\2\2\u03ba\u03b8\3\2\2\2\u03bb\u03bc\7\u010e\2\2\u03bc\u03fa"+
		"\3\2\2\2\u03bd\u03bf\7\33\2\2\u03be\u03bd\3\2\2\2\u03be\u03bf\3\2\2\2"+
		"\u03bf\u03c0\3\2\2\2\u03c0\u03c1\7\32\2\2\u03c1\u03c2\7\u010d\2\2\u03c2"+
		"\u03c3\5Z.\2\u03c3\u03c4\7\u010e\2\2\u03c4\u03fa\3\2\2\2\u03c5\u03c6\7"+
		"\35\2\2\u03c6\u03c7\7\u010d\2\2\u03c7\u03c8\5Z.\2\u03c8\u03c9\7\u010e"+
		"\2\2\u03c9\u03fa\3\2\2\2\u03ca\u03cc\7\33\2\2\u03cb\u03ca\3\2\2\2\u03cb"+
		"\u03cc\3\2\2\2\u03cc\u03cd\3\2\2\2\u03cd\u03ce\7 \2\2\u03ce\u03fa\5\u008e"+
		"H\2\u03cf\u03d1\7\33\2\2\u03d0\u03cf\3\2\2\2\u03d0\u03d1\3\2\2\2\u03d1"+
		"\u03d2\3\2\2\2\u03d2\u03d3\7\37\2\2\u03d3\u03e1\t\r\2\2\u03d4\u03d5\7"+
		"\u010d\2\2\u03d5\u03e2\7\u010e\2\2\u03d6\u03d7\7\u010d\2\2\u03d7\u03dc"+
		"\5\u0088E\2\u03d8\u03d9\7\u010f\2\2\u03d9\u03db\5\u0088E\2\u03da\u03d8"+
		"\3\2\2\2\u03db\u03de\3\2\2\2\u03dc\u03da\3\2\2\2\u03dc\u03dd\3\2\2\2\u03dd"+
		"\u03df\3\2\2\2\u03de\u03dc\3\2\2\2\u03df\u03e0\7\u010e\2\2\u03e0\u03e2"+
		"\3\2\2\2\u03e1\u03d4\3\2\2\2\u03e1\u03d6\3\2\2\2\u03e2\u03fa\3\2\2\2\u03e3"+
		"\u03e5\7\33\2\2\u03e4\u03e3\3\2\2\2\u03e4\u03e5\3\2\2\2\u03e5\u03e6\3"+
		"\2\2\2\u03e6\u03e7\7\37\2\2\u03e7\u03fa\5\u008eH\2\u03e8\u03ea\7!\2\2"+
		"\u03e9\u03eb\7\33\2\2\u03ea\u03e9\3\2\2\2\u03ea\u03eb\3\2\2\2\u03eb\u03ec"+
		"\3\2\2\2\u03ec\u03fa\7\u0100\2\2\u03ed\u03ef\7!\2\2\u03ee\u03f0\7\33\2"+
		"\2\u03ef\u03ee\3\2\2\2\u03ef\u03f0\3\2\2\2\u03f0\u03f1\3\2\2\2\u03f1\u03fa"+
		"\t\16\2\2\u03f2\u03f4\7!\2\2\u03f3\u03f5\7\33\2\2\u03f4\u03f3\3\2\2\2"+
		"\u03f4\u03f5\3\2\2\2\u03f5\u03f6\3\2\2\2\u03f6\u03f7\7\f\2\2\u03f7\u03f8"+
		"\7\7\2\2\u03f8\u03fa\5\u008eH\2\u03f9\u03a7\3\2\2\2\u03f9\u03af\3\2\2"+
		"\2\u03f9\u03be\3\2\2\2\u03f9\u03c5\3\2\2\2\u03f9\u03cb\3\2\2\2\u03f9\u03d0"+
		"\3\2\2\2\u03f9\u03e4\3\2\2\2\u03f9\u03e8\3\2\2\2\u03f9\u03ed\3\2\2\2\u03f9"+
		"\u03f2\3\2\2\2\u03fa\u008d\3\2\2\2\u03fb\u03fc\bH\1\2\u03fc\u0400\5\u0090"+
		"I\2\u03fd\u03fe\t\17\2\2\u03fe\u0400\5\u008eH\t\u03ff\u03fb\3\2\2\2\u03ff"+
		"\u03fd\3\2\2\2\u0400\u0416\3\2\2\2\u0401\u0402\f\b\2\2\u0402\u0403\t\20"+
		"\2\2\u0403\u0415\5\u008eH\t\u0404\u0405\f\7\2\2\u0405\u0406\t\21\2\2\u0406"+
		"\u0415\5\u008eH\b\u0407\u0408\f\6\2\2\u0408\u0409\7\u0108\2\2\u0409\u0415"+
		"\5\u008eH\7\u040a\u040b\f\5\2\2\u040b\u040c\7\u0109\2\2\u040c\u0415\5"+
		"\u008eH\6\u040d\u040e\f\4\2\2\u040e\u040f\7\u0107\2\2\u040f\u0415\5\u008e"+
		"H\5\u0410\u0411\f\3\2\2\u0411\u0412\5\u00d0i\2\u0412\u0413\5\u008eH\4"+
		"\u0413\u0415\3\2\2\2\u0414\u0401\3\2\2\2\u0414\u0404\3\2\2\2\u0414\u0407"+
		"\3\2\2\2\u0414\u040a\3\2\2\2\u0414\u040d\3\2\2\2\u0414\u0410\3\2\2\2\u0415"+
		"\u0418\3\2\2\2\u0416\u0414\3\2\2\2\u0416\u0417\3\2\2\2\u0417\u008f\3\2"+
		"\2\2\u0418\u0416\3\2\2\2\u0419\u041a\bI\1\2\u041a\u041c\7)\2\2\u041b\u041d"+
		"\5\u00b8]\2\u041c\u041b\3\2\2\2\u041d\u041e\3\2\2\2\u041e\u041c\3\2\2"+
		"\2\u041e\u041f\3\2\2\2\u041f\u0422\3\2\2\2\u0420\u0421\7,\2\2\u0421\u0423"+
		"\5\u0088E\2\u0422\u0420\3\2\2\2\u0422\u0423\3\2\2\2\u0423\u0424\3\2\2"+
		"\2\u0424\u0425\7-\2\2\u0425\u0475\3\2\2\2\u0426\u0427\7)\2\2\u0427\u0429"+
		"\5\u0088E\2\u0428\u042a\5\u00b8]\2\u0429\u0428\3\2\2\2\u042a\u042b\3\2"+
		"\2\2\u042b\u0429\3\2\2\2\u042b\u042c\3\2\2\2\u042c\u042f\3\2\2\2\u042d"+
		"\u042e\7,\2\2\u042e\u0430\5\u0088E\2\u042f\u042d\3\2\2\2\u042f\u0430\3"+
		"\2\2\2\u0430\u0431\3\2\2\2\u0431\u0432\7-\2\2\u0432\u0475\3\2\2\2\u0433"+
		"\u0434\7V\2\2\u0434\u0435\7\u010d\2\2\u0435\u0436\5\u0088E\2\u0436\u0437"+
		"\7\t\2\2\u0437\u0438\5 \21\2\u0438\u0439\7\u010e\2\2\u0439\u0475\3\2\2"+
		"\2\u043a\u043b\7C\2\2\u043b\u043c\7\u010d\2\2\u043c\u043f\5\u0088E\2\u043d"+
		"\u043e\7r\2\2\u043e\u0440\7$\2\2\u043f\u043d\3\2\2\2\u043f\u0440\3\2\2"+
		"\2\u0440\u0441\3\2\2\2\u0441\u0442\7\u010e\2\2\u0442\u0475\3\2\2\2\u0443"+
		"\u0444\7E\2\2\u0444\u0445\7\u010d\2\2\u0445\u0448\5\u0088E\2\u0446\u0447"+
		"\7r\2\2\u0447\u0449\7$\2\2\u0448\u0446\3\2\2\2\u0448\u0449\3\2\2\2\u0449"+
		"\u044a\3\2\2\2\u044a\u044b\7\u010e\2\2\u044b\u0475\3\2\2\2\u044c\u044d"+
		"\7w\2\2\u044d\u044e\7\u010d\2\2\u044e\u044f\5\u008eH\2\u044f\u0450\7\32"+
		"\2\2\u0450\u0451\5\u008eH\2\u0451\u0452\7\u010e\2\2\u0452\u0475\3\2\2"+
		"\2\u0453\u0475\5\u00dan\2\u0454\u0475\7\u0116\2\2\u0455\u0456\5\u00bc"+
		"_\2\u0456\u0457\7\u010a\2\2\u0457\u0458\7\u0116\2\2\u0458\u0475\3\2\2"+
		"\2\u0459\u045a\7\u010d\2\2\u045a\u045b\5Z.\2\u045b\u045c\7\u010e\2\2\u045c"+
		"\u0475\3\2\2\2\u045d\u045e\5\u0092J\2\u045e\u046a\7\u010d\2\2\u045f\u0461"+
		"\5\u00e2r\2\u0460\u045f\3\2\2\2\u0460\u0461\3\2\2\2\u0461\u0462\3\2\2"+
		"\2\u0462\u0467\5\u0088E\2\u0463\u0464\7\u010f\2\2\u0464\u0466\5\u0088"+
		"E\2\u0465\u0463\3\2\2\2\u0466\u0469\3\2\2\2\u0467\u0465\3\2\2\2\u0467"+
		"\u0468\3\2\2\2\u0468\u046b\3\2\2\2\u0469\u0467\3\2\2\2\u046a\u0460\3\2"+
		"\2\2\u046a\u046b\3\2\2\2\u046b\u046c\3\2\2\2\u046c\u046d\7\u010e\2\2\u046d"+
		"\u0475\3\2\2\2\u046e\u0475\5\u00b0Y\2\u046f\u0475\5\u0094K\2\u0470\u0471"+
		"\7\u010d\2\2\u0471\u0472\5\u0088E\2\u0472\u0473\7\u010e\2\2\u0473\u0475"+
		"\3\2\2\2\u0474\u0419\3\2\2\2\u0474\u0426\3\2\2\2\u0474\u0433\3\2\2\2\u0474"+
		"\u043a\3\2\2\2\u0474\u0443\3\2\2\2\u0474\u044c\3\2\2\2\u0474\u0453\3\2"+
		"\2\2\u0474\u0454\3\2\2\2\u0474\u0455\3\2\2\2\u0474\u0459\3\2\2\2\u0474"+
		"\u045d\3\2\2\2\u0474\u046e\3\2\2\2\u0474\u046f\3\2\2\2\u0474\u0470\3\2"+
		"\2\2\u0475\u047d\3\2\2\2\u0476\u0477\f\6\2\2\u0477\u0478\7\u010b\2\2\u0478"+
		"\u0479\5\u008eH\2\u0479\u047a\7\u010c\2\2\u047a\u047c\3\2\2\2\u047b\u0476"+
		"\3\2\2\2\u047c\u047f\3\2\2\2\u047d\u047b\3\2\2\2\u047d\u047e\3\2\2\2\u047e"+
		"\u0091\3\2\2\2\u047f\u047d\3\2\2\2\u0480\u0481\5\u00bc_\2\u0481\u0093"+
		"\3\2\2\2\u0482\u0483\5\u00bc_\2\u0483\u0095\3\2\2\2\u0484\u0487\5\u00b0"+
		"Y\2\u0485\u0487\5\u0094K\2\u0486\u0484\3\2\2\2\u0486\u0485\3\2\2\2\u0487"+
		"\u0097\3\2\2\2\u0488\u048b\7(\2\2\u0489\u048c\5\u009aN\2\u048a\u048c\5"+
		"\u009eP\2\u048b\u0489\3\2\2\2\u048b\u048a\3\2\2\2\u048b\u048c\3\2\2\2"+
		"\u048c\u0099\3\2\2\2\u048d\u048f\5\u009cO\2\u048e\u0490\5\u00a0Q\2\u048f"+
		"\u048e\3\2\2\2\u048f\u0490\3\2\2\2\u0490\u009b\3\2\2\2\u0491\u0492\5\u00a2"+
		"R\2\u0492\u0493\5\u00b0Y\2\u0493\u0495\3\2\2\2\u0494\u0491\3\2\2\2\u0495"+
		"\u0496\3\2\2\2\u0496\u0494\3\2\2\2\u0496\u0497\3\2\2\2\u0497\u009d\3\2"+
		"\2\2\u0498\u049b\5\u00a0Q\2\u0499\u049c\5\u009cO\2\u049a\u049c\5\u00a0"+
		"Q\2\u049b\u0499\3\2\2\2\u049b\u049a\3\2\2\2\u049b\u049c\3\2\2\2\u049c"+
		"\u009f\3\2\2\2\u049d\u049e\5\u00a2R\2\u049e\u049f\5\u00b0Y\2\u049f\u04a0"+
		"\7c\2\2\u04a0\u04a1\5\u00b0Y\2\u04a1\u00a1\3\2\2\2\u04a2\u04a4\t\22\2"+
		"\2\u04a3\u04a2\3\2\2\2\u04a3\u04a4\3\2\2\2\u04a4\u04a5\3\2\2\2\u04a5\u04a8"+
		"\t\23\2\2\u04a6\u04a8\7\u0120\2\2\u04a7\u04a3\3\2\2\2\u04a7\u04a6\3\2"+
		"\2\2\u04a8\u00a3\3\2\2\2\u04a9\u04ab\7\t\2\2\u04aa\u04a9\3\2\2\2\u04aa"+
		"\u04ab\3\2\2\2\u04ab\u04ac\3\2\2\2\u04ac\u04ae\5\u00b2Z\2\u04ad\u04af"+
		"\5\u00acW\2\u04ae\u04ad\3\2\2\2\u04ae\u04af\3\2\2\2\u04af\u00a5\3\2\2"+
		"\2\u04b0\u04b2\7\t\2\2\u04b1\u04b0\3\2\2\2\u04b1\u04b2\3\2\2\2\u04b2\u04b3"+
		"\3\2\2\2\u04b3\u04b5\5\u00b2Z\2\u04b4\u04b6\5\u00acW\2\u04b5\u04b4\3\2"+
		"\2\2\u04b5\u04b6\3\2\2\2\u04b6\u00a7\3\2\2\2\u04b7\u04b8\5\u00b0Y\2\u04b8"+
		"\u04b9\5\u00aaV\2\u04b9\u00a9\3\2\2\2\u04ba\u04bb\7y\2\2\u04bb\u04bd\5"+
		"\u00b0Y\2\u04bc\u04ba\3\2\2\2\u04bd\u04be\3\2\2\2\u04be\u04bc\3\2\2\2"+
		"\u04be\u04bf\3\2\2\2\u04bf\u04c2\3\2\2\2\u04c0\u04c2\3\2\2\2\u04c1\u04bc"+
		"\3\2\2\2\u04c1\u04c0\3\2\2\2\u04c2\u00ab\3\2\2\2\u04c3\u04c4\7\u010d\2"+
		"\2\u04c4\u04c5\5\u00aeX\2\u04c5\u04c6\7\u010e\2\2\u04c6\u00ad\3\2\2\2"+
		"\u04c7\u04cc\5\u00b0Y\2\u04c8\u04c9\7\u010f\2\2\u04c9\u04cb\5\u00b0Y\2"+
		"\u04ca\u04c8\3\2\2\2\u04cb\u04ce\3\2\2\2\u04cc\u04ca\3\2\2\2\u04cc\u04cd"+
		"\3\2\2\2\u04cd\u00af\3\2\2\2\u04ce\u04cc\3\2\2\2\u04cf\u04d2\5\u00b2Z"+
		"\2\u04d0\u04d2\5\u00e6t\2\u04d1\u04cf\3\2\2\2\u04d1\u04d0\3\2\2\2\u04d2"+
		"\u00b1\3\2\2\2\u04d3\u04d8\5\u00b4[\2\u04d4\u04d8\5\u00b6\\\2\u04d5\u04d8"+
		"\5\u00e4s\2\u04d6\u04d8\5\u00e8u\2\u04d7\u04d3\3\2\2\2\u04d7\u04d4\3\2"+
		"\2\2\u04d7\u04d5\3\2\2\2\u04d7\u04d6\3\2\2\2\u04d8\u00b3\3\2\2\2\u04d9"+
		"\u04da\t\24\2\2\u04da\u00b5\3\2\2\2\u04db\u04dc\7\u0120\2\2\u04dc\u00b7"+
		"\3\2\2\2\u04dd\u04de\7*\2\2\u04de\u04df\5\u0088E\2\u04df\u04e0\7+\2\2"+
		"\u04e0\u04e1\5\u0088E\2\u04e1\u00b9\3\2\2\2\u04e2\u04e7\5\u00bc_\2\u04e3"+
		"\u04e4\7\u010f\2\2\u04e4\u04e6\5\u00bc_\2\u04e5\u04e3\3\2\2\2\u04e6\u04e9"+
		"\3\2\2\2\u04e7\u04e5\3\2\2\2\u04e7\u04e8\3\2\2\2\u04e8\u00bb\3\2\2\2\u04e9"+
		"\u04e7\3\2\2\2\u04ea\u04ee\7\u0124\2\2\u04eb\u04ed\7\u011e\2\2\u04ec\u04eb"+
		"\3\2\2\2\u04ed\u04f0\3\2\2\2\u04ee\u04ef\3\2\2\2\u04ee\u04ec\3\2\2\2\u04ef"+
		"\u00bd\3\2\2\2\u04f0\u04ee\3\2\2\2\u04f1\u04f5\t\25\2\2\u04f2\u04f4\t"+
		"\26\2\2\u04f3\u04f2\3\2\2\2\u04f4\u04f7\3\2\2\2\u04f5\u04f6\3\2\2\2\u04f5"+
		"\u04f3\3\2\2\2\u04f6\u00bf\3\2\2\2\u04f7\u04f5\3\2\2\2\u04f8\u04f9\7F"+
		"\2\2\u04f9\u04fa\5\u00c6d\2\u04fa\u00c1\3\2\2\2\u04fb\u04fc\7v\2\2\u04fc"+
		"\u04fd\7\33\2\2\u04fd\u04fe\7\35\2\2\u04fe\u00c3\3\2\2\2\u04ff\u0500\7"+
		"v\2\2\u0500\u0501\7\35\2\2\u0501\u00c5\3\2\2\2\u0502\u0503\7\u010d\2\2"+
		"\u0503\u0508\5\u00c8e\2\u0504\u0505\7\u010f\2\2\u0505\u0507\5\u00c8e\2"+
		"\u0506\u0504\3\2\2\2\u0507\u050a\3\2\2\2\u0508\u0506\3\2\2\2\u0508\u0509"+
		"\3\2\2\2\u0509\u050b\3\2\2\2\u050a\u0508\3\2\2\2\u050b\u050c\7\u010e\2"+
		"\2\u050c\u00c7\3\2\2\2\u050d\u0512\5\u00caf\2\u050e\u0510\7\u0102\2\2"+
		"\u050f\u050e\3\2\2\2\u050f\u0510\3\2\2\2\u0510\u0511\3\2\2\2\u0511\u0513"+
		"\5\u00ccg\2\u0512\u050f\3\2\2\2\u0512\u0513\3\2\2\2\u0513\u00c9\3\2\2"+
		"\2\u0514\u0518\5\u00b0Y\2\u0515\u0518\5\u0094K\2\u0516\u0518\7\u0120\2"+
		"\2\u0517\u0514\3\2\2\2\u0517\u0515\3\2\2\2\u0517\u0516\3\2\2\2\u0518\u00cb"+
		"\3\2\2\2\u0519\u051e\7\u0121\2\2\u051a\u051e\7\u0122\2\2\u051b\u051e\5"+
		"\u00e0q\2\u051c\u051e\7\u0120\2\2\u051d\u0519\3\2\2\2\u051d\u051a\3\2"+
		"\2\2\u051d\u051b\3\2\2\2\u051d\u051c\3\2\2\2\u051e\u00cd\3\2\2\2\u051f"+
		"\u0526\7\31\2\2\u0520\u0521\7\u0108\2\2\u0521\u0526\7\u0108\2\2\u0522"+
		"\u0526\7\30\2\2\u0523\u0524\7\u0107\2\2\u0524\u0526\7\u0107\2\2\u0525"+
		"\u051f\3\2\2\2\u0525\u0520\3\2\2\2\u0525\u0522\3\2\2\2\u0525\u0523\3\2"+
		"\2\2\u0526\u00cf\3\2\2\2\u0527\u0536\7\u0102\2\2\u0528\u0536\7\u0103\2"+
		"\2\u0529\u0536\7\u0104\2\2\u052a\u052b\7\u0104\2\2\u052b\u0536\7\u0102"+
		"\2\2\u052c\u052d\7\u0103\2\2\u052d\u0536\7\u0102\2\2\u052e\u052f\7\u0104"+
		"\2\2\u052f\u0536\7\u0103\2\2\u0530\u0531\7\u0105\2\2\u0531\u0536\7\u0102"+
		"\2\2\u0532\u0533\7\u0104\2\2\u0533\u0534\7\u0102\2\2\u0534\u0536\7\u0103"+
		"\2\2\u0535\u0527\3\2\2\2\u0535\u0528\3\2\2\2\u0535\u0529\3\2\2\2\u0535"+
		"\u052a\3\2\2\2\u0535\u052c\3\2\2\2\u0535\u052e\3\2\2\2\u0535\u0530\3\2"+
		"\2\2\u0535\u0532\3\2\2\2\u0536\u00d1\3\2\2\2\u0537\u0538\7\u0104\2\2\u0538"+
		"\u053f\7\u0104\2\2\u0539\u053a\7\u0103\2\2\u053a\u053f\7\u0103\2\2\u053b"+
		"\u053f\7\u0108\2\2\u053c\u053f\7\u0109\2\2\u053d\u053f\7\u0107\2\2\u053e"+
		"\u0537\3\2\2\2\u053e\u0539\3\2\2\2\u053e\u053b\3\2\2\2\u053e\u053c\3\2"+
		"\2\2\u053e\u053d\3\2\2\2\u053f\u00d3\3\2\2\2\u0540\u0541\t\27\2\2\u0541"+
		"\u00d5\3\2\2\2\u0542\u0543\t\30\2\2\u0543\u00d7\3\2\2\2\u0544\u0545\5"+
		"\u00bc_\2\u0545\u00d9\3\2\2\2\u0546\u0553\5\u00dco\2\u0547\u0553\5\u00de"+
		"p\2\u0548\u0553\5\u0098M\2\u0549\u054a\7\u0118\2\2\u054a\u0553\5\u00de"+
		"p\2\u054b\u0553\5\u00e0q\2\u054c\u0553\7\u0122\2\2\u054d\u0553\7\u0123"+
		"\2\2\u054e\u0550\7\33\2\2\u054f\u054e\3\2\2\2\u054f\u0550\3\2\2\2\u0550"+
		"\u0551\3\2\2\2\u0551\u0553\7\u0100\2\2\u0552\u0546\3\2\2\2\u0552\u0547"+
		"\3\2\2\2\u0552\u0548\3\2\2\2\u0552\u0549\3\2\2\2\u0552\u054b\3\2\2\2\u0552"+
		"\u054c\3\2\2\2\u0552\u054d\3\2\2\2\u0552\u054f\3\2\2\2\u0553\u00db\3\2"+
		"\2\2\u0554\u0555\7\u0120\2\2\u0555\u00dd\3\2\2\2\u0556\u0557\7\u0121\2"+
		"\2\u0557\u00df\3\2\2\2\u0558\u0559\t\16\2\2\u0559\u00e1\3\2\2\2\u055a"+
		"\u055b\t\31\2\2\u055b\u00e3\3\2\2\2\u055c\u055d\t\32\2\2\u055d\u00e5\3"+
		"\2\2\2\u055e\u055f\t\33\2\2\u055f\u00e7\3\2\2\2\u0560\u0561\t\34\2\2\u0561"+
		"\u00e9\3\2\2\2\u00a4\u00f2\u00f4\u00f9\u00fd\u0101\u0105\u0109\u010d\u010f"+
		"\u011f\u0123\u012f\u013f\u0144\u0148\u014c\u0150\u0153\u0157\u015c\u015f"+
		"\u0163\u016a\u017e\u0194\u01a1\u01a6\u01aa\u01b4\u01be\u01c2\u01c8\u01cc"+
		"\u01d0\u01d3\u01dc\u01e0\u01e7\u01ee\u0200\u0204\u020b\u0210\u0217\u021b"+
		"\u021f\u0223\u022b\u022f\u0237\u023b\u0246\u024f\u025c\u025f\u0263\u0266"+
		"\u0268\u026d\u0271\u0274\u0278\u0281\u0287\u028a\u028d\u0290\u0294\u029c"+
		"\u029f\u02a3\u02a6\u02b1\u02b6\u02b9\u02be\u02c2\u02c7\u02ca\u02d7\u02e2"+
		"\u02ed\u02f2\u02fe\u030a\u0316\u0322\u032f\u0334\u0340\u0345\u034a\u0352"+
		"\u035a\u0364\u0367\u0370\u0373\u0376\u037c\u0380\u0386\u0397\u0399\u03a1"+
		"\u03a3\u03a7\u03af\u03b8\u03be\u03cb\u03d0\u03dc\u03e1\u03e4\u03ea\u03ef"+
		"\u03f4\u03f9\u03ff\u0414\u0416\u041e\u0422\u042b\u042f\u043f\u0448\u0460"+
		"\u0467\u046a\u0474\u047d\u0486\u048b\u048f\u0496\u049b\u04a3\u04a7\u04aa"+
		"\u04ae\u04b1\u04b5\u04be\u04c1\u04cc\u04d1\u04d7\u04e7\u04ee\u04f5\u0508"+
		"\u050f\u0512\u0517\u051d\u0525\u0535\u053e\u054f\u0552";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}