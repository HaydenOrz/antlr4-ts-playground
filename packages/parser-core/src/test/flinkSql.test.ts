

import { FlinkParser } from "../parser/flinkParser";
import { flinkSql1, flinkSql2 } from "./samples/flinkSqlSample";

describe('Flink SQL Parser Tests', () => {
    const flinkParser = new FlinkParser()

    test('Split flink sql test', () => {
        const { positions, totalCount } = flinkParser.split(flinkSql1);

        expect(totalCount).toBe(9)
        expect(positions.length).toBe(9)
        expect(flinkSql1.slice(positions[0].start, positions[0].end + 1))
            .toBe('SELECT * FROM AA;')
        
    });

    test('Flink sql suggestion list', () => {
        const suggestions = flinkParser.getSuggestionListAtSyntaxErrors(flinkSql2)
        const { parserErrors, syntaxErrors } = flinkParser.errors;
        const firstSuggestList = suggestions.get(syntaxErrors[0].offendingSymbol.startIndex)
        
        expect(parserErrors.length).toBe(3)
        expect(syntaxErrors.length).toBe(3)
        expect(suggestions.size).toBe(3)
      
        expect(firstSuggestList).toEqual([ "'CATALOG'", "'TEMPORARY'", "'VIEW'", "'DATABASE'", "'TABLE'" ])
    });


});
