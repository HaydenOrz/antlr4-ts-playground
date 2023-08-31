import { editor, MarkerSeverity } from "monaco-editor";

export function setMark (model) {
    editor.setModelMarkers(model, 'myLang', [
        {
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: 2,
            endColumn: 2,
            message: "语法错误",
            severity: MarkerSeverity.Error
        }
    ])
}


