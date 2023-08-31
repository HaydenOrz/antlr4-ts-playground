import { editor, languages, Position, CancellationToken, Range  } from "monaco-editor";

languages.registerCompletionItemProvider('myLang', {
	triggerCharacters: ['.', '*'],
	provideCompletionItems(
		model: editor.IReadOnlyModel,
		position: Position,
		context: languages.CompletionContext,
		token: CancellationToken
	){
		const wordInfo = model.getWordUntilPosition(position);
        const wordRange = new Range(
            position.lineNumber,
            wordInfo.startColumn,
            position.lineNumber,
            wordInfo.endColumn
        );
		return new Promise((resolve) => {
			resolve({
				suggestions: [
					{
						label: "SELECT",
						kind: languages.CompletionItemKind.Keyword,
						insertText: "SELECT",
						range: wordRange,
						detail: '关键字',
					},
					{
						label: "SET",
						kind: languages.CompletionItemKind.Keyword,
						insertText: "SET",
						range: wordRange,
						detail: '关键字',
					},
					{
						label: "SHOW",
						kind: languages.CompletionItemKind.Keyword,
						insertText: "SHOW",
						range: wordRange,
						detail: '关键字',
					},
				]
			})
		})
	}
})