import {
    Token,
    Recognizer,
    ParserErrorListener,
    RecognitionException 
} from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator'

import { ParserError, SyntaxError } from '../../common/errorListener';

export class FlinkParserErrorListener<TSymbol extends Token = Token, ATNInterpreter extends ATNSimulator = any> implements ParserErrorListener {
    private _parserErrorSet: Set<ParserError> = new Set();
    private _syntaxErrorSet: Set<SyntaxError> = new Set();

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
        this._parserErrorSet.add({
            startLine: line,
            endLine: line,
            startCol: charPositionInLine,
            endCol: endCol,
            message: msg,
        })

        this._syntaxErrorSet.add ({
            e,
            line,
            msg,
            recognizer,
            offendingSymbol,
            charPositionInLine,
        })
    }

    clearErrors() {
        this._parserErrorSet.clear()
        this._syntaxErrorSet.clear()
    }

    get syntaxErrors () {
        return Array.from(this._syntaxErrorSet)
    }

    get parserErrors () {
        return Array.from(this._parserErrorSet) 
    }
}

