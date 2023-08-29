import * as monaco from "monaco-editor";
import { LanguageServiceDefaults } from './_.contribution';
import { FlinkWorker } from './languages/flink/FlinkWorker';

import Uri = monaco.Uri;

export class WorkerManager {
	private _worker: monaco.editor.MonacoWebWorker<FlinkWorker> = null;
	private _workerClientProxy: Promise<FlinkWorker>;
	private _defaults: LanguageServiceDefaults;

	constructor(defaults: LanguageServiceDefaults) {
		this._defaults = defaults;
		this._worker = null;
	}

	dispose () {
		if(this._worker) {
			this._worker.dispose()
			this._worker = null;
		}
	}

	private getClientProxy(): Promise<FlinkWorker> {

		if (!this._workerClientProxy) {
			this._worker = monaco.editor.createWebWorker<FlinkWorker>({
				moduleId: this._defaults.languageId,
				label: this._defaults.languageId,
				createData: {
					languageSettings: this._defaults.diagnosticsOptions,
					languageId: this._defaults.languageId,
				}
			});

			this._workerClientProxy = <Promise<FlinkWorker>><any>this._worker.getProxy();
		}

		return this._workerClientProxy;
	}

	async getLanguageServiceWorker(...resources: Uri[]): Promise<FlinkWorker> {
		const _client: FlinkWorker = await this.getClientProxy();
		await this._worker.withSyncedResources(resources)
		return _client;
	}
}