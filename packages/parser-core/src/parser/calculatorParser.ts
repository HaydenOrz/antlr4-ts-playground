import { FlinkSqlLexer } from "@/lib/flinksql/FlinkSqlLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { CalculatorLexer } from "../lib/calculator/CalculatorLexer";
import { CalculatorParser as CalculatorBaseParser, CalContext } from "../lib/calculator/CalculatorParser";
import { CalculateByVisitor } from "./helpers/calculatorVisitor";


export class CalculatorParser {
    private _lexer: FlinkSqlLexer = null;
    private _parser: CalculatorBaseParser = null;
    private _ast: CalContext = null;

    private createLexer(input: string) {
        const inputStream = CharStreams.fromString(input);
        const lexer = new CalculatorLexer(inputStream);
        this._lexer = lexer
        return lexer
    }

    createParser (input: string) {
        this.dispose()
        const lexer = this.createLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new CalculatorBaseParser(tokens);
        this._parser = parser
        return this.parser
    }

    dispose () {
        this._lexer = null;
        this._parser = null
    }

    get lexer () {
        return this._lexer
    }

    get parser () {
        return this._parser
    }

    parse (sql: string) {
        this.dispose()
        const parser = this.createParser(sql)
        this._parser = parser
        this._ast = parser.cal();
        return {
            ast: this._ast,
        }
    }

    calculate (expr: string) {
        const { ast } = this.parse(expr)
        const visitor = new CalculateByVisitor();
        const res = visitor.visit(ast);
        return res
    }
}
