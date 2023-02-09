import { FlinkSqlParserListener } from '../../lib/flinksql/FlinkSqlParserListener'
import { SqlStatementsContext, SqlStatementContext } from '../../lib/flinksql/FlinkSqlParser'

export interface IPosition {
    start: number,
    end?: number,
}

export default class FlinkSqlSplitListener implements FlinkSqlParserListener {
    private sqlStatementsPosition: IPosition[] = [];

    exitSqlStatements = (ctx: SqlStatementsContext) => {
        console.log('总共有', ctx.childCount, '段 sql');
    }

    exitSqlStatement = (ctx: SqlStatementContext) => {
        // sql grammar 中的换行和空格被忽略，所以这个text 中已经trim掉了所有的空格
        // console.log(ctx.text);
        this.sqlStatementsPosition.push({
            start: ctx.start.startIndex,
            end: ctx.stop?.stopIndex,
        })
    }
    
    getSqlStatementsPosition = () => {
        return this.sqlStatementsPosition
    }
}