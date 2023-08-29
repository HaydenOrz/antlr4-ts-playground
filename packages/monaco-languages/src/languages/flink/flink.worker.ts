import * as worker from 'monaco-editor/esm/vs/editor/editor.worker';
import { FlinkWorker, IFLinkCreateData } from './FlinkWorker';

self.onmessage = () => {
	worker.initialize((ctx, createData: IFLinkCreateData) => {
		return new FlinkWorker(ctx, createData)
	});
};
