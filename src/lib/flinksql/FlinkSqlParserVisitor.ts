// Generated from /Users/hayden/Desktop/antlr/antlr4-ts-playground/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ValueExpressionDefaultContext } from "./FlinkSqlParser";
import { ArithmeticUnaryContext } from "./FlinkSqlParser";
import { ArithmeticBinaryContext } from "./FlinkSqlParser";
import { ComparisonContext } from "./FlinkSqlParser";
import { SearchedCaseContext } from "./FlinkSqlParser";
import { SimpleCaseContext } from "./FlinkSqlParser";
import { CastContext } from "./FlinkSqlParser";
import { FirstContext } from "./FlinkSqlParser";
import { LastContext } from "./FlinkSqlParser";
import { PositionContext } from "./FlinkSqlParser";
import { ConstantDefaultContext } from "./FlinkSqlParser";
import { StarContext } from "./FlinkSqlParser";
import { SubqueryExpressionContext } from "./FlinkSqlParser";
import { FunctionCallContext } from "./FlinkSqlParser";
import { SubscriptContext } from "./FlinkSqlParser";
import { ColumnReferenceContext } from "./FlinkSqlParser";
import { DereferenceContext } from "./FlinkSqlParser";
import { ParenthesizedExpressionContext } from "./FlinkSqlParser";
import { UnquotedIdentifierAlternativeContext } from "./FlinkSqlParser";
import { QuotedIdentifierAlternativeContext } from "./FlinkSqlParser";
import { AnsiNonReservedKeywordsContext } from "./FlinkSqlParser";
import { NonReservedKeywordsContext } from "./FlinkSqlParser";
import { ErrorIdentContext } from "./FlinkSqlParser";
import { RealIdentContext } from "./FlinkSqlParser";
import { IdentityTransformContext } from "./FlinkSqlParser";
import { ApplyTransformContext } from "./FlinkSqlParser";
import { LogicalNotContext } from "./FlinkSqlParser";
import { ExistsContext } from "./FlinkSqlParser";
import { PredicatedContext } from "./FlinkSqlParser";
import { LogicalBinaryContext } from "./FlinkSqlParser";
import { ProgramContext } from "./FlinkSqlParser";
import { StatementContext } from "./FlinkSqlParser";
import { SqlStatementsContext } from "./FlinkSqlParser";
import { SqlStatementContext } from "./FlinkSqlParser";
import { EmptyStatementContext } from "./FlinkSqlParser";
import { DdlStatementContext } from "./FlinkSqlParser";
import { DmlStatementContext } from "./FlinkSqlParser";
import { DescribeStatementContext } from "./FlinkSqlParser";
import { ExplainStatementContext } from "./FlinkSqlParser";
import { UseStatementContext } from "./FlinkSqlParser";
import { ShowStatememtContext } from "./FlinkSqlParser";
import { CreateTableContext } from "./FlinkSqlParser";
import { ColumnOptionDefinitionContext } from "./FlinkSqlParser";
import { ColumnNameContext } from "./FlinkSqlParser";
import { ColumnNameListContext } from "./FlinkSqlParser";
import { ColumnTypeContext } from "./FlinkSqlParser";
import { LengthOneDimensionContext } from "./FlinkSqlParser";
import { CommentSpecContext } from "./FlinkSqlParser";
import { WatermarkDefinitionContext } from "./FlinkSqlParser";
import { TableConstraintContext } from "./FlinkSqlParser";
import { SelfDefinitionClauseContext } from "./FlinkSqlParser";
import { PartitionDefinitionContext } from "./FlinkSqlParser";
import { TransformListContext } from "./FlinkSqlParser";
import { TransformContext } from "./FlinkSqlParser";
import { TransformArgumentContext } from "./FlinkSqlParser";
import { LikeDefinitionContext } from "./FlinkSqlParser";
import { LikeOptionContext } from "./FlinkSqlParser";
import { CreateCatalogContext } from "./FlinkSqlParser";
import { CreateDatabaseContext } from "./FlinkSqlParser";
import { CreateViewContext } from "./FlinkSqlParser";
import { CreateFunctionContext } from "./FlinkSqlParser";
import { AlterTableContext } from "./FlinkSqlParser";
import { RenameDefinitionContext } from "./FlinkSqlParser";
import { SetKeyValueDefinitionContext } from "./FlinkSqlParser";
import { AlterDatabaseContext } from "./FlinkSqlParser";
import { AlterFunctionContext } from "./FlinkSqlParser";
import { DropTableContext } from "./FlinkSqlParser";
import { DropDatabaseContext } from "./FlinkSqlParser";
import { DropViewContext } from "./FlinkSqlParser";
import { DropFunctionContext } from "./FlinkSqlParser";
import { InsertStatementContext } from "./FlinkSqlParser";
import { InsertPartitionDefinitionContext } from "./FlinkSqlParser";
import { ValuesDefinitionContext } from "./FlinkSqlParser";
import { ValuesRowDefinitionContext } from "./FlinkSqlParser";
import { QueryStatementContext } from "./FlinkSqlParser";
import { ValuesCaluseContext } from "./FlinkSqlParser";
import { SelectStatementContext } from "./FlinkSqlParser";
import { SelectClauseContext } from "./FlinkSqlParser";
import { ProjectItemDefinitionContext } from "./FlinkSqlParser";
import { FromClauseContext } from "./FlinkSqlParser";
import { TableExpressionContext } from "./FlinkSqlParser";
import { TableReferenceContext } from "./FlinkSqlParser";
import { TablePrimaryContext } from "./FlinkSqlParser";
import { JoinConditionContext } from "./FlinkSqlParser";
import { WhereClauseContext } from "./FlinkSqlParser";
import { GroupByClauseContext } from "./FlinkSqlParser";
import { GroupItemDefinitionContext } from "./FlinkSqlParser";
import { HavingClauseContext } from "./FlinkSqlParser";
import { OrderByCaluseContext } from "./FlinkSqlParser";
import { OrderItemDefitionContext } from "./FlinkSqlParser";
import { LimitClauseContext } from "./FlinkSqlParser";
import { WindowClauseContext } from "./FlinkSqlParser";
import { NamedWindowContext } from "./FlinkSqlParser";
import { WindowSpecContext } from "./FlinkSqlParser";
import { SortItemContext } from "./FlinkSqlParser";
import { WindowFrameContext } from "./FlinkSqlParser";
import { FrameBoundContext } from "./FlinkSqlParser";
import { ExpressionContext } from "./FlinkSqlParser";
import { BooleanExpressionContext } from "./FlinkSqlParser";
import { PredicateContext } from "./FlinkSqlParser";
import { ValueExpressionContext } from "./FlinkSqlParser";
import { PrimaryExpressionContext } from "./FlinkSqlParser";
import { FunctionNameContext } from "./FlinkSqlParser";
import { DereferenceDefinitionContext } from "./FlinkSqlParser";
import { QualifiedNameContext } from "./FlinkSqlParser";
import { IntervalContext } from "./FlinkSqlParser";
import { ErrorCapturingMultiUnitsIntervalContext } from "./FlinkSqlParser";
import { MultiUnitsIntervalContext } from "./FlinkSqlParser";
import { ErrorCapturingUnitToUnitIntervalContext } from "./FlinkSqlParser";
import { UnitToUnitIntervalContext } from "./FlinkSqlParser";
import { IntervalValueContext } from "./FlinkSqlParser";
import { ColumnAliasContext } from "./FlinkSqlParser";
import { TableAliasContext } from "./FlinkSqlParser";
import { ErrorCapturingIdentifierContext } from "./FlinkSqlParser";
import { ErrorCapturingIdentifierExtraContext } from "./FlinkSqlParser";
import { IdentifierListContext } from "./FlinkSqlParser";
import { IdentifierSeqContext } from "./FlinkSqlParser";
import { IdentifierContext } from "./FlinkSqlParser";
import { StrictIdentifierContext } from "./FlinkSqlParser";
import { UnquotedIdentifierContext } from "./FlinkSqlParser";
import { QuotedIdentifierContext } from "./FlinkSqlParser";
import { WhenClauseContext } from "./FlinkSqlParser";
import { UidListContext } from "./FlinkSqlParser";
import { UidContext } from "./FlinkSqlParser";
import { PlusUidContext } from "./FlinkSqlParser";
import { WithOptionContext } from "./FlinkSqlParser";
import { IfNotExistsContext } from "./FlinkSqlParser";
import { IfExistsContext } from "./FlinkSqlParser";
import { TablePropertyListContext } from "./FlinkSqlParser";
import { TablePropertyContext } from "./FlinkSqlParser";
import { TablePropertyKeyContext } from "./FlinkSqlParser";
import { TablePropertyValueContext } from "./FlinkSqlParser";
import { LogicalOperatorContext } from "./FlinkSqlParser";
import { ComparisonOperatorContext } from "./FlinkSqlParser";
import { BitOperatorContext } from "./FlinkSqlParser";
import { MathOperatorContext } from "./FlinkSqlParser";
import { UnaryOperatorContext } from "./FlinkSqlParser";
import { FullColumnNameContext } from "./FlinkSqlParser";
import { ConstantContext } from "./FlinkSqlParser";
import { StringLiteralContext } from "./FlinkSqlParser";
import { DecimalLiteralContext } from "./FlinkSqlParser";
import { BooleanLiteralContext } from "./FlinkSqlParser";
import { SetQuantifierContext } from "./FlinkSqlParser";
import { AnsiNonReservedContext } from "./FlinkSqlParser";
import { StrictNonReservedContext } from "./FlinkSqlParser";
import { NonReservedContext } from "./FlinkSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FlinkSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FlinkSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `first`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirst?: (ctx: FirstContext) => Result;

	/**
	 * Visit a parse tree produced by the `last`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast?: (ctx: LastContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `star`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ansiNonReservedKeywords`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnsiNonReservedKeywords?: (ctx: AnsiNonReservedKeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonReservedKeywords`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorIdent?: (ctx: ErrorIdentContext) => Result;

	/**
	 * Visit a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealIdent?: (ctx: RealIdentContext) => Result;

	/**
	 * Visit a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentityTransform?: (ctx: IdentityTransformContext) => Result;

	/**
	 * Visit a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyTransform?: (ctx: ApplyTransformContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatements?: (ctx: SqlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDmlStatement?: (ctx: DmlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeStatement?: (ctx: DescribeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainStatement?: (ctx: ExplainStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.useStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseStatement?: (ctx: UseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.showStatememt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatememt?: (ctx: ShowStatememtContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameList?: (ctx: ColumnNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnType?: (ctx: ColumnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthOneDimension?: (ctx: LengthOneDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentSpec?: (ctx: CommentSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionDefinition?: (ctx: PartitionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.transformList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformList?: (ctx: TransformListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransform?: (ctx: TransformContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.transformArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformArgument?: (ctx: TransformArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.likeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeDefinition?: (ctx: LikeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.likeOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeOption?: (ctx: LikeOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createCatalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateCatalog?: (ctx: CreateCatalogContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.createFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTable?: (ctx: AlterTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.renameDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameDefinition?: (ctx: RenameDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.alterFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterFunction?: (ctx: AlterFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabase?: (ctx: DropDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valuesDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesDefinition?: (ctx: ValuesDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatement?: (ctx: QueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valuesCaluse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesCaluse?: (ctx: ValuesCaluseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableExpression?: (ctx: TableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableReference?: (ctx: TableReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePrimary?: (ctx: TablePrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.joinCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCondition?: (ctx: JoinConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.orderByCaluse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByCaluse?: (ctx: OrderByCaluseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.orderItemDefition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderItemDefition?: (ctx: OrderItemDefitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowClause?: (ctx: WindowClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedWindow?: (ctx: NamedWindowContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowSpec?: (ctx: WindowSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.columnAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAlias?: (ctx: ColumnAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.identifierSeq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrictIdentifier?: (ctx: StrictIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.uidList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUidList?: (ctx: UidListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.uid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUid?: (ctx: UidContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.plusUid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusUid?: (ctx: PlusUidContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.withOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithOption?: (ctx: WithOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyKey?: (ctx: TablePropertyKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyValue?: (ctx: TablePropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOperator?: (ctx: LogicalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.bitOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOperator?: (ctx: BitOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.mathOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMathOperator?: (ctx: MathOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.fullColumnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullColumnName?: (ctx: FullColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.ansiNonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.strictNonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrictNonReserved?: (ctx: StrictNonReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `FlinkSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;
}

