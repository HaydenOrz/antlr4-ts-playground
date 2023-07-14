import { CalculatorParser } from "../parser/calculatorParser";

const testCases = [
    {
        expr: '1+2*3 + 4+6+7',
        value: 1+2*3+4+6+7,
    },
    {
        expr: '1 + 2 + 3 + 6 * 7',
        value: 1+2+3+6*7,
    },
    {
        expr: '3+4*5+9+9*11',
        value: 3+4*5+9+9*11,
    },
    {
        expr: '4*(9-3)/6',
        value: 4*(9-3)/6,
    },
];

describe('Calculator Parser Tests', () => {
    const calculatorParser = new CalculatorParser();

    testCases.forEach(({ expr, value }) => {
        it(expr, () => {
            const res = calculatorParser.calculate(expr);
            expect(res).toBe(value)
        })
    })
});