import { editor } from "monaco-editor";

// import './chore/flinkContribution'

import './chore/monacoEnv';
import './myLang/register'
import './myLang/languageConf'
import './myLang/theme'
import './myLang/autoCompletion'
// import { setMark } from './myLang/setMark'


const container = document.getElementById("container");

const editorIns = editor.create(container, {
  language: "myLang",
  theme: "myTheme",
});

// setMark(editorIns.getModel())
