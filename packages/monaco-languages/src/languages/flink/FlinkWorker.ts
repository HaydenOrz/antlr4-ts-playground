import * as monaco from "monaco-editor-core";
import { ParserError } from '@antlr-ts/parser-core'
import IWorkerContext = monaco.worker.IWorkerContext;
import FlinkLanguageService from "../../language-service/flinkLanguageService";

export class FlinkWorker {
    private _ctx: IWorkerContext;
    private languageService: FlinkLanguageService;
    constructor(ctx: IWorkerContext) {
        this._ctx = ctx;
        this.languageService = new FlinkLanguageService();
    }

    doValidation(): Promise<ParserError[]> {
        const code = this.getTextDocument();
        return Promise.resolve(this.languageService.validate(code));
    }
    private getTextDocument(): string {
        const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
        return model.getValue();
    }
}