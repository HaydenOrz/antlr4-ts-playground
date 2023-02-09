import { CalculatorParser } from "../parser/calculatorParser";

describe('Calculator Parser Tests', () => {
    const calculatorParser = new CalculatorParser();

    test('Calculator Test1', () => {
        const res = calculatorParser.calculate(`1+2*3 + 4+6+7`)
        expect(res).toBe(1+2*3+4+6+7);
    });

    test('Calculator Test2', () => {
        const res = calculatorParser.calculate(`1 + 2 + 3 + 6 * 7`)
        expect(res).toBe(1+2+3+6*7);
    });
    test('Calculator Test3', () => {
        const res = calculatorParser.calculate(`3+4*5+9+9*11`)
        expect(res).toBe(3+4*5+9+9*11);
    });
});