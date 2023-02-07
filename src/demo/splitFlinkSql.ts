

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
import FlinkSqlSplitListener from '../parser/flinkSql/splitFlinkSql'
import { flinkSql1 } from '../sqlSample/flinkSqlSample';

function main(jsonStr) {
    const input = new ANTLRInputStream(jsonStr);
    const lexer = new FlinkSqlLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new FlinkSqlParser(tokens);
    const parseTree: any = parser.program();

    const walker = new ParseTreeWalker();
    const listener = new FlinkSqlSplitListener();
    walker.walk(listener as any, parseTree);
    const sqlStatementsPosition = listener.getSqlStatementsPosition();
    console.log(sqlStatementsPosition);
    sqlStatementsPosition.forEach(({ start, end }) => {
        console.log(flinkSql1.slice(start, end));
    });
}

main(flinkSql1);

