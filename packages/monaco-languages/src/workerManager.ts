import * as monaco from "monaco-editor-core";
import { LanguageServiceDefaults } from './_.contribution';

import Uri = monaco.Uri;
import { FlinkWorker } from './languages/flink/FlinkWorker';

const languageID = 'flink'

export class WorkerManager {
	private _worker: monaco.editor.MonacoWebWorker<FlinkWorker> = null;
	private _workerClientProxy: Promise<FlinkWorker>;
	private _defaults: LanguageServiceDefaults;

	constructor(defaults: LanguageServiceDefaults) {
		this._defaults = defaults;
		this._worker = null;
	}

	dispose () {
		this._worker.dispose()
	}

	private getClientproxy(): Promise<FlinkWorker> {

		if (!this._workerClientProxy) {
			this._worker = monaco.editor.createWebWorker<FlinkWorker>({
				moduleId: this._defaults.languageId,
				label: this._defaults.languageId,
				createData: {
					languageSettings: this._defaults.diagnosticsOptions,
					languageId: languageID,
				}
			});

			this._workerClientProxy = <Promise<FlinkWorker>><any>this._worker.getProxy();
		}

		return this._workerClientProxy;
	}

	async getLanguageServiceWorker(...resources: Uri[]): Promise<FlinkWorker> {
		const _client: FlinkWorker = await this.getClientproxy();
		await this._worker.withSyncedResources(resources)
		return _client;
	}
}