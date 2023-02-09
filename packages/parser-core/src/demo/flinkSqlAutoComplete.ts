import { CodeCompletionCore } from "antlr4-c3";
import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
import { FlinkParserErrorListener } from "../parser/flinkSql/flinkParserErrorListener";
import { ParserErrorHandler } from '../parser/common/errorListener';
import { flinkSql2 } from '../sqlSample/flinkSqlSample';


function main(sql) {
    const input = CharStreams.fromString(sql);
    const lexer = new FlinkSqlLexer(input);

    /** lexer 的 errorListener 与 parser 的 errorListener 不同 */
    // lexer.addErrorListener(new FlinkErrorListener(callback))

    const tokens = new CommonTokenStream(lexer);
    const parser = new FlinkSqlParser(tokens);
    let core = new CodeCompletionCore(parser);
    
    const parserErrorHandler: ParserErrorHandler = (_parserError, syntaxError) => {
        let candidates = core.collectCandidates(syntaxError.offendingSymbol.tokenIndex);
        const suggestToken = []

        for (let candidate of candidates.tokens) {
            suggestToken.push(parser.vocabulary.getDisplayName(candidate[0]));
        }
    }

    parser.addErrorListener(new FlinkParserErrorListener(parserErrorHandler))

    const parseTree: any = parser.program();
}

main(flinkSql2);