import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CalculatorLexer } from '@/lib/calculator/CalculatorLexer';
import { CalculatorParser} from '@/lib/calculator/CalculatorParser';
import CalculateByVisitor from '@/parser/calculatorVisitor';

function main() {
    function run(expr: string) {
        const input = new ANTLRInputStream(expr);
        const lexer = new CalculatorLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalculatorParser(tokens);
        const tree = parser.cal();
        const visitor = new CalculateByVisitor();
        const res = visitor.visit(tree);
        console.log('======= result ====');
        console.log(res);
        console.log('******** end ******');
    }
    run(`1+2*3 + 4+6+7`);
};

main();