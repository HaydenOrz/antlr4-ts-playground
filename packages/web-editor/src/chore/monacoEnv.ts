(window as any).MonacoEnvironment = {
	getWorkerUrl: function (_moduleId, label) {
		switch (label) {
			case 'flink': {
				return './flink.worker.js';
			}
			case 'typescript': {
				return './ts.worker.js'
			}
			default: {
				return './editor.worker.js';
			}
		}
	}
};
