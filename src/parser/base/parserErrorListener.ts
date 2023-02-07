import { Token, Recognizer, ParserErrorListener as BaseParserErrorListener } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts-sql';

export interface ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

export interface SyntaxError<TSymbol = any, ATNInterpreter extends ATNSimulator = any> {
    recognizer: Recognizer<TSymbol, ATNInterpreter>;
    offendingSymbol: Token;
    line: number;
    charPositionInLine: number;
    msg: string;
    e: any;
}

export type ErrorHandler = (err: ParserError, errOption: SyntaxError) => void;

export class ParserErrorCollector<TSymbol = any, ATNInterpreter extends ATNSimulator = any> implements BaseParserErrorListener {
    private _errors: ParserError[];

    constructor(error: ParserError[]) {
        this._errors = error;
    }

    syntaxError(
        _recognizer: Recognizer<TSymbol, ATNInterpreter>, offendingSymbol: Token, line: number,
        charPositionInLine: number, msg: string, _e: any,
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol &&offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        this._errors.push({
            startLine: line,
            endLine: line,
            startCol: charPositionInLine,
            endCol: endCol,
            message: msg,
        });
    }
}


export default class ParserErrorListener<TSymbol = any, ATNInterpreter extends ATNSimulator = any>  implements BaseParserErrorListener {
    private _errorHandler;

    constructor(errorListener: ErrorHandler) {
        this._errorHandler = errorListener;
    }

    syntaxError(
        recognizer: Recognizer<TSymbol, ATNInterpreter>, offendingSymbol: Token, line: number,
        charPositionInLine: number, msg: string, e: any,
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol &&offendingSymbol.text !== null) {
            endCol = charPositionInLine + offendingSymbol.text.length;
        }
        if (this._errorHandler) {
            this._errorHandler({
                startLine: line,
                endLine: line,
                startCol: charPositionInLine,
                endCol: endCol,
                message: msg,
            }, {
                e,
                line,
                msg,
                recognizer,
                offendingSymbol,
                charPositionInLine,
            });
        }
    }
}

