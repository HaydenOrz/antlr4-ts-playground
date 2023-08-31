import { languages } from "monaco-editor";

export const conf: languages.LanguageConfiguration = {
    comments: {
      lineComment: "--",
      blockComment: ["/*", "*/"],
    },
    brackets: [
      ["(", ")"],
    ],
    autoClosingPairs: [
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
    surroundingPairs: [
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
    ],
  };
  
  export const language: languages.IMonarchLanguage = {
      ignoreCase: true,
      tokenizer: {
          root: [
              { include: '@comments' },
              { include: '@whitespace' },
              { include: '@strings' },
          ],
          whitespace: [[/\s+/, 'white']],
          comments: [
              [/--+.*/, 'comment'],
              [/\/\*/, { token: 'comment.quote', next: '@comment' }]
          ],
          comment: [
              [/[^*/]+/, 'comment'],
              [/\*\//, { token: 'comment.quote', next: '@pop' }],
              [/./, 'comment']
          ],
          strings: [
              [/'/, { token: 'string', next: '@string' }]
          ],
          string: [
              [/[^']+/, 'string'],
              [/''/, 'string'],
              [/'/, { token: 'string', next: '@pop' }]
          ],
      }
  };

languages.setLanguageConfiguration("myLang", conf);
languages.setMonarchTokensProvider("myLang", language);