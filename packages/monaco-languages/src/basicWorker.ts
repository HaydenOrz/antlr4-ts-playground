import { Uri } from 'monaco-editor-core'
import { ParserError } from '@antlr-ts/parser-core'
import { ICandidatesMap } from '@antlr-ts/parser-core'

export interface IWorker {
	doValidation(uri: string): Promise<ParserError[]>;
    getCompletionItemsAtOffset(offset: number): Promise<string[]>;
}

export interface WorkerAccessor<T extends IWorker = IWorker> {
	(first: Uri, ...more: Uri[]): Promise<T>;
}