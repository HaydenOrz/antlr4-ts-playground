import { editor } from "monaco-editor";

const container = document.getElementById("container");

const editorIns = editor.create(container, {
  language: "typescript",
});
