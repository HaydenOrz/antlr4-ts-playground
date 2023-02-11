import { editor } from 'monaco-editor-core';
import './flinkEditor'

(window as any).MonacoEnvironment = {
	getWorkerUrl: function (_moduleId, label) {
		switch (label) {
			case 'flink': {
				return './flink.worker.js';
			}
			default: {
				return './editor.worker.js';
			}
		}
	}
};

const container = document.getElementById('container');

editor.create(container, {
    language: 'flink'
})