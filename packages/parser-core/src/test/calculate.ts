import { CalculatorParser } from "../parser/calculatorParser";

const calculatorParser = new CalculatorParser();

console.log(calculatorParser.calculate(`1+2*3 + 4+6+7`));