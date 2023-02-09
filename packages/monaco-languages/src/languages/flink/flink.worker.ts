import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import { FlinkWorker } from './FlinkWorker';

self.onmessage = () => {
	worker.initialize((ctx) => {
		return new FlinkWorker(ctx)
	});
};