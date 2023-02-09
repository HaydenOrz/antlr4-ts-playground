import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CalculatorLexer } from '../lib/calculator/CalculatorLexer';
import { CalculatorParser} from '../lib/calculator/CalculatorParser';
import { CalculateByVisitor } from '../parser/calculatorVisitor';

function main(expr: string) {
        const input = CharStreams.fromString(expr);
        const lexer = new CalculatorLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalculatorParser(tokens);
        const tree = parser.cal();
        const visitor = new CalculateByVisitor();
        const res = visitor.visit(tree);
        console.log('======= result ====');
        console.log(res);
        console.log('******** end ******');
};

main(`1+2*3 + 4+6+7`);