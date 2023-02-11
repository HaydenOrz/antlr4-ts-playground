import { Uri, IDisposable, languages } from 'monaco-editor-core';
import { WorkerManager} from './workerManager';
import { LanguageServiceDefaults } from './_.contribution';
import DiagnosticsAdapter from './diagnosticsAdapter';
import CompletionItemAdapter from './completionItemAdapter';
import { WorkerAccessor, IWorker } from './basicWorker' 

export function setupLanguageMode<T extends IWorker>(
	defaults: LanguageServiceDefaults
): IDisposable {
	const disposables: IDisposable[] = [];
	const providers: IDisposable[] = [];


	const workerManager = new WorkerManager(defaults);
	disposables.push(workerManager);

	/**
	 * 获取到 language worker 代理对象
	 */
	const worker: WorkerAccessor<T> = (...uris: Uri[]): Promise<any> => {
		return workerManager.getLanguageServiceWorker(...uris);
	};

	function registerProviders(): void {
		const { languageId, modeConfiguration } = defaults;

		disposeAll(providers);

		if (modeConfiguration.diagnostics) {
			providers.push(new DiagnosticsAdapter(languageId, worker, defaults));
		}

		if(modeConfiguration.completionItems) {
			providers.push(languages.registerCompletionItemProvider(defaults.languageId, new CompletionItemAdapter(worker)));
		}
	}

	registerProviders();

	disposables.push(asDisposable(providers));

	return asDisposable(disposables);
}

function asDisposable(disposables: IDisposable[]): IDisposable {
	return { dispose: () => disposeAll(disposables) };
}

function disposeAll(disposables: IDisposable[]) {
	while (disposables.length) {
		disposables.pop()?.dispose();
	}
}
