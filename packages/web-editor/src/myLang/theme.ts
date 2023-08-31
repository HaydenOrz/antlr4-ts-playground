import { editor } from "monaco-editor";

editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
	rules: [
        { token: 'comment', foreground: 'ff4400' },
        { token: 'string', foreground: '0000ff' }
    ],
    colors: {
    },
});