import {
    Token,
    Recognizer,
    ParserErrorListener,
    RecognitionException 
} from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts-sql';

import { ParserErrorHandler } from '../common/errorListener';

export class FlinkParserErrorListener<TSymbol extends Token = Token, ATNInterpreter extends ATNSimulator = any> implements ParserErrorListener {
    private _errorHandler;

    constructor(errorListener: ParserErrorHandler) {
        this._errorHandler = errorListener;
    }
    syntaxError(
        recognizer: Recognizer<TSymbol, ATNInterpreter>, 
        offendingSymbol: Token, 
        line: number, 
        charPositionInLine: number, 
        msg: string, 
        e: RecognitionException | undefined
    ) {
        let endCol = charPositionInLine + 1;
        if (offendingSymbol && offendingSymbol.text !== null) {
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

