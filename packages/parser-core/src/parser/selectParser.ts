import { CommonTokenStream, CharStreams } from 'antlr4ts';
import { ParserErrorListener } from 'antlr4ts';
import { CodeCompletionCore } from "antlr4-c3";
import { SelectStatementLexer } from '../lib/selectStatement/SelectStatementLexer';
import { SelectStatementParser } from '../lib/selectStatement/SelectStatementParser';

export class SelectParser {

    private _errorListener = new SelectErrorListener();

    createLexer(input: string) {
        const inputStream = CharStreams.fromString(input);
        const lexer = new SelectStatementLexer(inputStream);
        this._errorListener.clear();
        lexer.removeErrorListeners();
        lexer.addErrorListener(this._errorListener)
        return lexer
    }

    createParser(input: string) {
        const lexer = this.createLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new SelectStatementParser(tokens);
        parser.removeErrorListeners()
        parser.addErrorListener(this._errorListener);
        return parser
    }

    parse(sql: string) {
        const parser = this.createParser(sql);
        const parseTree = parser.selectStatement();
        return {
            parseTree,
            errors: this._errorListener.parserErrors,
        };
    }
}

export class SelectErrorListener implements ParserErrorListener {
    private _parserErrorSet: Set<any> = new Set();

    syntaxError(_rec, _ofSym, line, charPosInLine, msg) {
        let endCol = charPosInLine + 1;
        this._parserErrorSet.add({
            startLine: line,
            endLine: line,
            startCol: charPosInLine,
            endCol: endCol,
            message: msg,
        })
    }

    clear() {
        this._parserErrorSet.clear();
    }

    get parserErrors() {
        return Array.from(this._parserErrorSet)
    }
}


/**
 * input 源文本
 * caretPosition 编辑器光标位置
 */
export function getSuggestions(input: string, caretPosition?: any) {
    const selectParser = new SelectParser();
    const parserIns = selectParser.createParser(input)
    let core = new CodeCompletionCore(parserIns);

    core.preferredRules= new Set([
        SelectStatementParser.RULE_tablePath,
        SelectStatementParser.RULE_columnPath
    ])

    const parserContext = parserIns.selectStatement();
    // const tokenIndex = caretPosition2TokenIndex(caretPosition);

    const tokenIndex= 2;
    let candidates = core.collectCandidates(tokenIndex, parserContext);

    const rule = [];
    const keywords = []

    for (let candidate of candidates.rules) {
        const [ruleType] = candidate;
        let syntaxContextType;
        switch (ruleType) {
            case SelectStatementParser.RULE_tablePath: {
                syntaxContextType = 'table';
                break;
            }
            case SelectStatementParser.RULE_columnPath: {
                syntaxContextType = 'column';
                break;
            }
            default:
                break;
        }
        if (syntaxContextType) {
            rule.push(syntaxContextType)
        }
    }

    for (let candidate of candidates.tokens) {
        const symbolicName = parserIns.vocabulary.getSymbolicName(candidate[0]);
        const displayName = parserIns.vocabulary.getDisplayName(candidate[0]);
        if(symbolicName && symbolicName.startsWith('KW_')) {
            const keyword = displayName.startsWith("'") && displayName.endsWith("'")
                ? displayName.slice(1, -1)
                : displayName
            keywords.push(keyword);
        }
    }

    console.log('===== suggest keywords: ',keywords);
    console.log('===== suggest rules:', rule);
}


