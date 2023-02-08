import {
    Token,
    Recognizer,
    RecognitionException 
} from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts-sql';

export interface ParserError {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;
}

export interface SyntaxError<TSymbol extends Token  = Token, ATNInterpreter extends ATNSimulator = any> {
    recognizer: Recognizer<TSymbol, ATNInterpreter>;
    offendingSymbol: Token;
    line: number;
    charPositionInLine: number;
    msg: string;
    e: RecognitionException | undefined;
}

export type ParserErrorHandler<
    TSymbol extends Token = Token, 
    ATNInterpreter extends ATNSimulator = any
> = (err: ParserError, errOption: SyntaxError<TSymbol, ATNInterpreter>) => void;