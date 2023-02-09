import { CommonTokenStream, CharStreams  } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { CodeCompletionCore } from "antlr4-c3";
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
import { FlinkSqlParserListener } from '../lib/flinksql/FlinkSqlParserListener'
import { FlinkSqlSplitListener } from './helpers/flinkSql/splitFlinkSqlListener'
import { FlinkParserErrorListener } from "./helpers/flinkSql/flinkParserErrorListener";

export class FlinkParser {
    private _lexer: FlinkSqlLexer = null;
    private _parser: FlinkSqlParser = null;
    private _errorListener: FlinkParserErrorListener = null;

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
        this._errorListener = null;
    }

    get lexer () {
        return this._lexer
    }

    get parser () {
        return this._parser
    }

    get errors () {
        return {
            syntaxErrors: this._errorListener.syntaxErrors,
            parserErrors: this._errorListener.syntaxErrors
        }
    }

    split (sql: string) {
        const parser = this.createParser(sql)
        const parseTree = parser.program();
        const walker = new ParseTreeWalker();
        const listener = new FlinkSqlSplitListener();
        walker.walk(listener as FlinkSqlParserListener, parseTree);

        return {
            positions: listener.sqlStatementsPosition,
            totalCount: listener.totalCount,
        }
    }

    getSuggestionListAtSyntaxErrors(sql: string) {
        const parser = this.createParser(sql)
        const core = new CodeCompletionCore(parser);
        parser.program();
        
        /**
         * suggestTokenMap
         * key 插入位置
         * value 建议列表
         */
        const suggestTokenMap: Map<number, string[]> = new Map()

        this._errorListener.syntaxErrors.forEach(syntaxError => {
            const candidates = core.collectCandidates(syntaxError.offendingSymbol.tokenIndex);
            const insertIndex = syntaxError.offendingSymbol.startIndex;
            if(!suggestTokenMap.has(insertIndex)) {
                suggestTokenMap.set(insertIndex, [])
            }
            for (let candidate of candidates.tokens) {
                suggestTokenMap.get(insertIndex).push(parser.vocabulary.getDisplayName(candidate[0]));
            }
        })

        return suggestTokenMap
    }
    
}