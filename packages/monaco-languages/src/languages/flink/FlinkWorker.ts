import * as monaco from "monaco-editor-core";
import { FlinkParser, ParserError } from '@antlr-ts/parser-core'
import { IWorker } from '../../basicWorker'
import IWorkerContext = monaco.worker.IWorkerContext;

export class FlinkParserService {
    validate(code: string): ParserError[] {
        const flinkParser = new FlinkParser()
        const { errors } = flinkParser.parse(code)
        return errors.parserErrors
    }
    getCandidates(code: string) {
        const flinkParser = new FlinkParser()
        const candidates = flinkParser.getSuggestionListAtSyntaxErrors(code);
        return candidates
    }
}

export interface IFLinkCreateData {
    languageId: string;
    languageSettings: any;
}

export class FlinkWorker implements IWorker {
    private _ctx: IWorkerContext;
    private _flinkParserService: FlinkParserService;
    constructor(ctx: IWorkerContext, _createData: IFLinkCreateData) {
        this._ctx = ctx;
        this._flinkParserService = new FlinkParserService();
        console.log('******** Initialize Flink Worker Success ! ******');
    }

    private getTextDocument(): string {
        const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
        const value = model.getValue()
        return value ? value.toUpperCase() : value;
    }

    doValidation(): Promise<ParserError[]> {
        let code = this.getTextDocument();
        return Promise.resolve(this._flinkParserService.validate(code));
    }

    getCompletionItemsAtOffset(_offset: number) {
        let code = this.getTextDocument();
        const candidatesMap = this._flinkParserService.getCandidates(code);
        const suggestionsList =  Array.from(candidatesMap.values()).flat()
        return Promise.resolve(suggestionsList)
    }
}
