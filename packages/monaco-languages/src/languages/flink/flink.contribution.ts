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
	loader: () => import('./flink') // language 配置包括高亮等
});

const flinkDefaults: LanguageServiceDefaults = new LanguageServiceDefaultsImpl(
	languageId,
	diagnosticDefault,
	modeConfigurationDefault
);

/**
 * 当一个 language 第一次被使用时调用
 */
languages.onLanguage(languageId, () => {
	/**
	 * 设置/初始化 language 相关的功能
	 */
	import('../../setupLanguageMode').then((mode) => mode.setupLanguageMode(flinkDefaults));
});

console.log('******** Register Flink Language Success ! ******');