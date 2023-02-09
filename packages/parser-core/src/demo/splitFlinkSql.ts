

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { FlinkSqlLexer } from '../lib/flinksql/FlinkSqlLexer';
import { FlinkSqlParser } from '../lib/flinksql/FlinkSqlParser';
import FlinkSqlSplitListener from '../parser/flinkSql/splitFlinkSql'
import { flinkSql1 } from '../sqlSample/flinkSqlSample';

function main(sql) {
    const input = CharStreams.fromString(sql);
    const lexer = new FlinkSqlLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new FlinkSqlParser(tokens);
    const parseTree: any = parser.program();

    const walker = new ParseTreeWalker();
    const listener = new FlinkSqlSplitListener();
    walker.walk(listener as any, parseTree);
    const sqlStatementsPosition = listener.getSqlStatementsPosition();
    console.log(sqlStatementsPosition);
    sqlStatementsPosition.forEach(({ start, end }, index) => {
        console.log(`=========== 第${index + 1}段 ===========`);
        console.log(flinkSql1.slice(start, end + 1));
        console.log('\n');
    });
}

main(flinkSql1);

