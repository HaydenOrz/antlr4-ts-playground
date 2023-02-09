import { CommonTokenStream, CharStreams  } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { CodeCompletionCore } from "antlr4-c3";
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser, ProgramContext } from '../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from '../lib/flinksql/FlinkSqlParserListener'
import { FlinkSqlSplitListener } from './helpers/flinkSql/splitFlinkSqlListener'
import { FlinkParserErrorListener } from "./helpers/flinkSql/flinkParserErrorListener";

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

        /**
         * suggestTokenMap
         * key 插入位置
         * value 建议列表
         */
        const suggestTokenMap: Map<number, string[]> = new Map()

        errors.syntaxErrors.forEach(syntaxError => {
            const candidates = core.collectCandidates(syntaxError.offendingSymbol.tokenIndex);
            const insertIndex = syntaxError.offendingSymbol.startIndex;

            if(!suggestTokenMap.has(insertIndex)) {
                suggestTokenMap.set(insertIndex, [])
            }

            for (let candidate of candidates.tokens) {
                suggestTokenMap.get(insertIndex).push(this._parser.vocabulary.getDisplayName(candidate[0]));
            }

        })

        return suggestTokenMap
    }
    
}