import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
import { FlinkParserErrorListener } from "../parser/flinkSql/flinkParserErrorListener";
import { ParserErrorHandler } from '@/parser/common/errorListener';
import { flinkSql2 } from '../sqlSample/flinkSqlSample';

const parserErrorHandler: ParserErrorHandler = (parserError, syntaxError) => {
    console.log(parserError);
    console.log(syntaxError.e.expectedTokens);
}

function main(sql) {
    const input = CharStreams.fromString(sql);
    console.log(sql);
    const lexer = new FlinkSqlLexer(input);
    lexer.getTokenTypeMap
    /** lexer 的 errorListener 与 parser 的 errorListener 不同 */
    // lexer.addErrorListener(new FlinkErrorListener(callback))
    const tokens = new CommonTokenStream(lexer);
    const parser = new FlinkSqlParser(tokens);
    parser.addErrorListener(new FlinkParserErrorListener(parserErrorHandler))
    const parseTree: any = parser.program();
}

main(flinkSql2);