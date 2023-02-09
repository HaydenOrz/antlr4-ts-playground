import {
	diagnosticDefault,
	LanguageServiceDefaults,
	LanguageServiceDefaultsImpl,
	modeConfigurationDefault,
	registerLanguage
} from '../../_.contribution';
import { languages } from 'monaco-editor-core';

const languageId = 'flink';

registerLanguage({
	id: languageId,
	extensions: ['.flink'],
	aliases: ['FlinkSQL'],
	loader: () => import('./flink')
});

const flinkDefaults: LanguageServiceDefaults = new LanguageServiceDefaultsImpl(
	languageId,
	diagnosticDefault,
	modeConfigurationDefault
);

languages.onLanguage(languageId, () => {
	import('../../setupLanguageMode').then((mode) => mode.setupLanguageMode(flinkDefaults));
});
