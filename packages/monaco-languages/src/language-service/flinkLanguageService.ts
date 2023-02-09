import { FlinkParser, ParserError } from '@antlr-ts/parser-core'

export default class FlinkLanguageService {
    validate(code: string): ParserError[] {
        const flinkParser = new FlinkParser()
        const { errors } = flinkParser.parse(code)

        return errors.parserErrors
    }
}