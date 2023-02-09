import { FlinkSqlParserListener } from '../../../lib/flinksql/FlinkSqlParserListener'
import { SqlStatementsContext, SqlStatementContext } from '../../../lib/flinksql/FlinkSqlParser'

export interface IPosition {
    start: number,
    end?: number,
}

export class FlinkSqlSplitListener implements FlinkSqlParserListener {
    private _sqlStatementsPosition: IPosition[] = [];
    private _totalCount: number = 0

    exitSqlStatements = (ctx: SqlStatementsContext) => {
        this._totalCount = ctx.childCount
    }

    exitSqlStatement = (ctx: SqlStatementContext) => {
        this._sqlStatementsPosition.push({
            start: ctx.start.startIndex,
            end: ctx.stop?.stopIndex,
        })
    }
    
    get sqlStatementsPosition () {
        return this._sqlStatementsPosition
    }

    get totalCount () {
        return this._totalCount
    }
}