

import { FlinkParser } from "../parser/flinkParser";
import { flinkSql1, flinkSql2 } from "../sqlSample/flinkSqlSample";

const flinkParser = new FlinkParser()

const { positions, totalCount } = flinkParser.split(flinkSql1);

console.log(`总共有 ${totalCount} 段 sql\n`);

positions.forEach(({ start, end }, index) => {
    console.log(`=========== 第${index + 1}段 ===========`);
    console.log(flinkSql1.slice(start, end + 1));
    console.log('\n');
});

const suggestions = flinkParser.getSuggestionListAtSyntaxErrors(flinkSql2)
console.log(flinkParser.errors);
console.log(suggestions);
