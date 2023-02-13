import { CommonTokenStream, CharStreams  } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { CodeCompletionCore } from "antlr4-c3";
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser, ProgramContext } from '../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from '../lib/flinksql/FlinkSqlParserListener'
import { FlinkSqlSplitListener } from './helpers/flinkSql/splitFlinkSqlListener'
import { FlinkParserErrorListener } from "./helpers/flinkSql/flinkParserErrorListener";

/**
 * ICandidatesMap
 * key 插入位置
 * value 建议列表
 */
export type ICandidatesMap = Map<number, string[]>

export class FlinkParser {
    private _lexer: FlinkSqlLexer = null;
    private _parser: FlinkSqlParser = null;
    private _ast: ProgramContext = null;
    private _errorListener: FlinkParserErrorListener = null;

    get lexer () {
        return this._lexer
    }

    get parser () {
        return this._parser
    }

    get ast () {
        return this._ast
    }

    get errors () {
        return {
            syntaxErrors: this._errorListener.syntaxErrors,
            parserErrors: this._errorListener.parserErrors
        }
    }

    private createLexer(input: string) {
        const inputStream = CharStreams.fromString(input);
        const lexer = new FlinkSqlLexer(inputStream);
        this._lexer = lexer
        return lexer
    }

    createParser (input: string) {
        this.dispose()
        const lexer = this.createLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new FlinkSqlParser(tokens);
        this._parser = parser;
        this._errorListener = new FlinkParserErrorListener()
        parser.addErrorListener(this._errorListener)
        return this.parser
    }

    dispose () {
        this._lexer = null;
        this._parser = null;
        this._ast = null
        this._errorListener = null;
    }

    parse (sql: string) {
        const parser = this.createParser(sql)
        this._parser = parser
        this._ast = parser.program();
        return {
            ast: this._ast,
            errors: this.errors
        }
    }

    split(sql: string) {
        const { ast } = this.parse(sql)
        const walker = new ParseTreeWalker();
        const listener = new FlinkSqlSplitListener();
        walker.walk(listener as FlinkSqlParserListener, ast);

        return {
            positions: listener.sqlStatementsPosition,
            totalCount: listener.totalCount,
        }
    }

    getSuggestionListAtSyntaxErrors(sql: string) {
        const { errors } = this.parse(sql)
        const core = new CodeCompletionCore(this._parser);

        // core.preferredRules = new Set([
        //     FlinkSqlParser.RULE_uid, // uid 用于 create 语句中对应的名称

        // ]);


        const suggestTokenMap: ICandidatesMap = new Map()

        errors.syntaxErrors.forEach(syntaxError => {
            const candidates = core.collectCandidates(syntaxError.offendingSymbol.tokenIndex);
            const insertIndex = syntaxError.offendingSymbol.startIndex;

            if(!suggestTokenMap.has(insertIndex)) {
                suggestTokenMap.set(insertIndex, [])
            }

            for (let candidate of candidates.tokens) {
                suggestTokenMap.get(insertIndex).push(this._parser.vocabulary.getDisplayName(candidate[0]));
            }

            for (let candidate of candidates.rules) {
                suggestTokenMap.get(insertIndex).push(`${candidate[0]}`)
            }
        })

        return suggestTokenMap
    }
    
}


const allRules = [
	FlinkSqlParser.RULE_statement,
	FlinkSqlParser.RULE_sqlStatements,
	FlinkSqlParser.RULE_sqlStatement,
	FlinkSqlParser.RULE_emptyStatement,
	FlinkSqlParser.RULE_ddlStatement,
	FlinkSqlParser.RULE_dmlStatement,
	FlinkSqlParser.RULE_describeStatement,
	FlinkSqlParser.RULE_explainStatement,
	FlinkSqlParser.RULE_useStatement,
	FlinkSqlParser.RULE_showStatememt ,
	FlinkSqlParser.RULE_createTable ,
	FlinkSqlParser.RULE_columnOptionDefinition ,
	FlinkSqlParser.RULE_columnName ,
	FlinkSqlParser.RULE_columnNameList ,
	FlinkSqlParser.RULE_columnType ,
	FlinkSqlParser.RULE_lengthOneDimension ,
	FlinkSqlParser.RULE_commentSpec ,
	FlinkSqlParser.RULE_watermarkDefinition ,
	FlinkSqlParser.RULE_tableConstraint ,
	FlinkSqlParser.RULE_selfDefinitionClause ,
	FlinkSqlParser.RULE_partitionDefinition ,
	FlinkSqlParser.RULE_transformList ,
	FlinkSqlParser.RULE_transform ,
	FlinkSqlParser.RULE_transformArgument ,
	FlinkSqlParser.RULE_likeDefinition ,
	FlinkSqlParser.RULE_likeOption ,
	FlinkSqlParser.RULE_createCatalog ,
	FlinkSqlParser.RULE_createDatabase ,
	FlinkSqlParser.RULE_createView ,
	FlinkSqlParser.RULE_createFunction ,
	FlinkSqlParser.RULE_alterTable ,
	FlinkSqlParser.RULE_renameDefinition ,
	FlinkSqlParser.RULE_setKeyValueDefinition ,
	FlinkSqlParser.RULE_alterDatabase ,
	FlinkSqlParser.RULE_alterFunction ,
	FlinkSqlParser.RULE_dropTable ,
	FlinkSqlParser.RULE_dropDatabase ,
	FlinkSqlParser.RULE_dropView ,
	FlinkSqlParser.RULE_dropFunction ,
	FlinkSqlParser.RULE_insertStatement ,
	FlinkSqlParser.RULE_insertPartitionDefinition ,
	FlinkSqlParser.RULE_valuesDefinition ,
	FlinkSqlParser.RULE_valuesRowDefinition ,
	FlinkSqlParser.RULE_queryStatement ,
	FlinkSqlParser.RULE_valuesCaluse ,
	FlinkSqlParser.RULE_selectStatement ,
	FlinkSqlParser.RULE_selectClause ,
	FlinkSqlParser.RULE_projectItemDefinition ,
	FlinkSqlParser.RULE_fromClause ,
	FlinkSqlParser.RULE_tableExpression ,
	FlinkSqlParser.RULE_tableReference ,
	FlinkSqlParser.RULE_tablePrimary ,
	FlinkSqlParser.RULE_joinCondition ,
	FlinkSqlParser.RULE_whereClause ,
	FlinkSqlParser.RULE_groupByClause ,
	FlinkSqlParser.RULE_groupItemDefinition ,
	FlinkSqlParser.RULE_havingClause ,
	FlinkSqlParser.RULE_orderByCaluse ,
	FlinkSqlParser.RULE_orderItemDefition ,
	FlinkSqlParser.RULE_limitClause ,
	FlinkSqlParser.RULE_windowClause ,
	FlinkSqlParser.RULE_namedWindow ,
	FlinkSqlParser.RULE_windowSpec ,
	FlinkSqlParser.RULE_sortItem ,
	FlinkSqlParser.RULE_windowFrame ,
	FlinkSqlParser.RULE_frameBound ,
	FlinkSqlParser.RULE_expression ,
	FlinkSqlParser.RULE_booleanExpression ,
	FlinkSqlParser.RULE_predicate ,
	FlinkSqlParser.RULE_valueExpression ,
	FlinkSqlParser.RULE_primaryExpression ,
	FlinkSqlParser.RULE_functionName ,
	FlinkSqlParser.RULE_dereferenceDefinition ,
	FlinkSqlParser.RULE_qualifiedName ,
	FlinkSqlParser.RULE_interval ,
	FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval ,
	FlinkSqlParser.RULE_multiUnitsInterval ,
	FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval ,
	FlinkSqlParser.RULE_unitToUnitInterval ,
	FlinkSqlParser.RULE_intervalValue ,
	FlinkSqlParser.RULE_columnAlias ,
	FlinkSqlParser.RULE_tableAlias ,
	FlinkSqlParser.RULE_errorCapturingIdentifier ,
	FlinkSqlParser.RULE_errorCapturingIdentifierExtra ,
	FlinkSqlParser.RULE_identifierList ,
	FlinkSqlParser.RULE_identifierSeq ,
	FlinkSqlParser.RULE_identifier ,
	FlinkSqlParser.RULE_strictIdentifier ,
	FlinkSqlParser.RULE_unquotedIdentifier ,
	FlinkSqlParser.RULE_quotedIdentifier ,
	FlinkSqlParser.RULE_whenClause ,
	FlinkSqlParser.RULE_uidList ,
	FlinkSqlParser.RULE_uid ,
	FlinkSqlParser.RULE_plusUid ,
	FlinkSqlParser.RULE_withOption ,
	FlinkSqlParser.RULE_ifNotExists ,
	FlinkSqlParser.RULE_ifExists ,
	FlinkSqlParser.RULE_tablePropertyList ,
	FlinkSqlParser.RULE_tableProperty ,
	FlinkSqlParser.RULE_tablePropertyKey ,
	FlinkSqlParser.RULE_tablePropertyValue ,
	FlinkSqlParser.RULE_logicalOperator ,
	FlinkSqlParser.RULE_comparisonOperator ,
	FlinkSqlParser.RULE_bitOperator ,
	FlinkSqlParser.RULE_mathOperator ,
	FlinkSqlParser.RULE_unaryOperator ,
	FlinkSqlParser.RULE_fullColumnName ,
	FlinkSqlParser.RULE_constant ,
	FlinkSqlParser.RULE_stringLiteral ,
	FlinkSqlParser.RULE_decimalLiteral ,
	FlinkSqlParser.RULE_booleanLiteral ,
	FlinkSqlParser.RULE_setQuantifier ,
	FlinkSqlParser.RULE_ansiNonReserved ,
	FlinkSqlParser.RULE_strictNonReserved ,
	FlinkSqlParser.RULE_nonReserved ,
]