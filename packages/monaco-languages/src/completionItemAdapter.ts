import {
    languages as Languages,
    editor as Editor,
    Uri,
    Range,
    Position,
    CancellationToken,
} from "monaco-editor";
import { WorkerAccessor, IWorker } from "./basicWorker";

export type CompletionTriggerCharacter = " " | "." | "$" | "!";

export const TriggerCharacters: CompletionTriggerCharacter[] = [
    " ",
    ".",
    "$",
];

export default class CompletionItemAdapter<T extends IWorker> implements Languages.CompletionItemProvider {
    triggerCharacters = TriggerCharacters;
    constructor(private worker: WorkerAccessor<T>) { }

    /**
     * Provide completion items for the given position and document.
     */
    public provideCompletionItems(
        model: Editor.ITextModel,
        position: Position,
        _context: Languages.CompletionContext,
        _token: CancellationToken
    ): Promise<Languages.CompletionList | undefined> {
        const wordInfo = model.getWordUntilPosition(position);
        const wordRange = new Range(
            position.lineNumber,
            wordInfo.startColumn,
            position.lineNumber,
            wordInfo.endColumn
        );
        const uri = model.uri;
        const offset = model.getOffsetAt(position);

        return this.worker(uri)
            .then((worker) => {
                return worker.getCompletionItemsAtOffset(offset);
            })
            .then((tokens) => {
                if (!tokens || model.isDisposed()) {
                    return;
                }
                const insertTexts = tokens.map(token2InsertText)
                const suggestions: Languages.CompletionItem[] = insertTexts.map((insertText) => {
                    const range = wordRange;
                    return {
                        uri,
                        position,
                        offset,
                        detail: '关键字',
                        insertText: insertText + ' ',
                        range,
                        label: insertText,
                        kind: Languages.CompletionItemKind.Keyword,
                        insertTextRules: Languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    };
                });

                return {
                    suggestions,
                };
            });
    }
}

function token2InsertText (token: string) {
    if(token.startsWith("'") && token.endsWith("'")) {
        return token.slice(1, -1)
    } else {
        return token
    }
}
