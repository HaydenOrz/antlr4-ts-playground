// Generated from /Users/hayden/Desktop/antlr/antlr4-parser-demo/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `FlinkSqlParser`.
 */
export interface FlinkSqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSearchedCase?: (ctx: SearchedCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `searchedCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSearchedCase?: (ctx: SearchedCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCase?: (ctx: SimpleCaseContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleCase`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCase?: (ctx: SimpleCaseContext) => void;

	/**
	 * Enter a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by the `cast`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by the `first`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFirst?: (ctx: FirstContext) => void;
	/**
	 * Exit a parse tree produced by the `first`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFirst?: (ctx: FirstContext) => void;

	/**
	 * Enter a parse tree produced by the `last`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLast?: (ctx: LastContext) => void;
	/**
	 * Exit a parse tree produced by the `last`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLast?: (ctx: LastContext) => void;

	/**
	 * Enter a parse tree produced by the `position`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by the `position`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `constantDefault`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantDefault?: (ctx: ConstantDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `star`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStar?: (ctx: StarContext) => void;
	/**
	 * Exit a parse tree produced by the `star`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStar?: (ctx: StarContext) => void;

	/**
	 * Enter a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `subscript`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDereference?: (ctx: DereferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `dereference`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDereference?: (ctx: DereferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by the `ansiNonReservedKeywords`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAnsiNonReservedKeywords?: (ctx: AnsiNonReservedKeywordsContext) => void;
	/**
	 * Exit a parse tree produced by the `ansiNonReservedKeywords`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAnsiNonReservedKeywords?: (ctx: AnsiNonReservedKeywordsContext) => void;

	/**
	 * Enter a parse tree produced by the `nonReservedKeywords`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;
	/**
	 * Exit a parse tree produced by the `nonReservedKeywords`
	 * labeled alternative in `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;

	/**
	 * Enter a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorIdent?: (ctx: ErrorIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `errorIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorIdent?: (ctx: ErrorIdentContext) => void;

	/**
	 * Enter a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterRealIdent?: (ctx: RealIdentContext) => void;
	/**
	 * Exit a parse tree produced by the `realIdent`
	 * labeled alternative in `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitRealIdent?: (ctx: RealIdentContext) => void;

	/**
	 * Enter a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	enterIdentityTransform?: (ctx: IdentityTransformContext) => void;
	/**
	 * Exit a parse tree produced by the `identityTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	exitIdentityTransform?: (ctx: IdentityTransformContext) => void;

	/**
	 * Enter a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	enterApplyTransform?: (ctx: ApplyTransformContext) => void;
	/**
	 * Exit a parse tree produced by the `applyTransform`
	 * labeled alternative in `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	exitApplyTransform?: (ctx: ApplyTransformContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by the `exists`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	enterSqlStatements?: (ctx: SqlStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.sqlStatements`.
	 * @param ctx the parse tree
	 */
	exitSqlStatements?: (ctx: SqlStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlStatement?: (ctx: SqlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlStatement?: (ctx: SqlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	enterDdlStatement?: (ctx: DdlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	exitDdlStatement?: (ctx: DdlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 */
	enterDmlStatement?: (ctx: DmlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.dmlStatement`.
	 * @param ctx the parse tree
	 */
	exitDmlStatement?: (ctx: DmlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 */
	enterDescribeStatement?: (ctx: DescribeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.describeStatement`.
	 * @param ctx the parse tree
	 */
	exitDescribeStatement?: (ctx: DescribeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 */
	enterExplainStatement?: (ctx: ExplainStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.explainStatement`.
	 * @param ctx the parse tree
	 */
	exitExplainStatement?: (ctx: ExplainStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.useStatement`.
	 * @param ctx the parse tree
	 */
	enterUseStatement?: (ctx: UseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.useStatement`.
	 * @param ctx the parse tree
	 */
	exitUseStatement?: (ctx: UseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.showStatememt`.
	 * @param ctx the parse tree
	 */
	enterShowStatememt?: (ctx: ShowStatememtContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.showStatememt`.
	 * @param ctx the parse tree
	 */
	exitShowStatememt?: (ctx: ShowStatememtContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.columnOptionDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.columnName`.
	 * @param ctx the parse tree
	 */
	enterColumnName?: (ctx: ColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.columnName`.
	 * @param ctx the parse tree
	 */
	exitColumnName?: (ctx: ColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.columnNameList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameList?: (ctx: ColumnNameListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.columnNameList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameList?: (ctx: ColumnNameListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.columnType`.
	 * @param ctx the parse tree
	 */
	enterColumnType?: (ctx: ColumnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.columnType`.
	 * @param ctx the parse tree
	 */
	exitColumnType?: (ctx: ColumnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 */
	enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.lengthOneDimension`.
	 * @param ctx the parse tree
	 */
	exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	enterCommentSpec?: (ctx: CommentSpecContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.commentSpec`.
	 * @param ctx the parse tree
	 */
	exitCommentSpec?: (ctx: CommentSpecContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 */
	enterWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.watermarkDefinition`.
	 * @param ctx the parse tree
	 */
	exitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 */
	enterSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.selfDefinitionClause`.
	 * @param ctx the parse tree
	 */
	exitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.partitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.transformList`.
	 * @param ctx the parse tree
	 */
	enterTransformList?: (ctx: TransformListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.transformList`.
	 * @param ctx the parse tree
	 */
	exitTransformList?: (ctx: TransformListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	enterTransform?: (ctx: TransformContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.transform`.
	 * @param ctx the parse tree
	 */
	exitTransform?: (ctx: TransformContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.transformArgument`.
	 * @param ctx the parse tree
	 */
	enterTransformArgument?: (ctx: TransformArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.transformArgument`.
	 * @param ctx the parse tree
	 */
	exitTransformArgument?: (ctx: TransformArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.likeDefinition`.
	 * @param ctx the parse tree
	 */
	enterLikeDefinition?: (ctx: LikeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.likeDefinition`.
	 * @param ctx the parse tree
	 */
	exitLikeDefinition?: (ctx: LikeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.likeOption`.
	 * @param ctx the parse tree
	 */
	enterLikeOption?: (ctx: LikeOptionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.likeOption`.
	 * @param ctx the parse tree
	 */
	exitLikeOption?: (ctx: LikeOptionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.createCatalog`.
	 * @param ctx the parse tree
	 */
	enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.createCatalog`.
	 * @param ctx the parse tree
	 */
	exitCreateCatalog?: (ctx: CreateCatalogContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.createDatabase`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.createDatabase`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.createView`.
	 * @param ctx the parse tree
	 */
	enterCreateView?: (ctx: CreateViewContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.createView`.
	 * @param ctx the parse tree
	 */
	exitCreateView?: (ctx: CreateViewContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAlterTable?: (ctx: AlterTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAlterTable?: (ctx: AlterTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.renameDefinition`.
	 * @param ctx the parse tree
	 */
	enterRenameDefinition?: (ctx: RenameDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.renameDefinition`.
	 * @param ctx the parse tree
	 */
	exitRenameDefinition?: (ctx: RenameDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 */
	enterSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.setKeyValueDefinition`.
	 * @param ctx the parse tree
	 */
	exitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.alterDatabase`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.alterFunction`.
	 * @param ctx the parse tree
	 */
	enterAlterFunction?: (ctx: AlterFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.alterFunction`.
	 * @param ctx the parse tree
	 */
	exitAlterFunction?: (ctx: AlterFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	enterDropDatabase?: (ctx: DropDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.dropDatabase`.
	 * @param ctx the parse tree
	 */
	exitDropDatabase?: (ctx: DropDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.dropView`.
	 * @param ctx the parse tree
	 */
	enterDropView?: (ctx: DropViewContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.dropView`.
	 * @param ctx the parse tree
	 */
	exitDropView?: (ctx: DropViewContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	enterInsertStatement?: (ctx: InsertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.insertStatement`.
	 * @param ctx the parse tree
	 */
	exitInsertStatement?: (ctx: InsertStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 */
	enterInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.insertPartitionDefinition`.
	 * @param ctx the parse tree
	 */
	exitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.valuesDefinition`.
	 * @param ctx the parse tree
	 */
	enterValuesDefinition?: (ctx: ValuesDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.valuesDefinition`.
	 * @param ctx the parse tree
	 */
	exitValuesDefinition?: (ctx: ValuesDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 */
	enterValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.valuesRowDefinition`.
	 * @param ctx the parse tree
	 */
	exitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	enterQueryStatement?: (ctx: QueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.queryStatement`.
	 * @param ctx the parse tree
	 */
	exitQueryStatement?: (ctx: QueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.valuesCaluse`.
	 * @param ctx the parse tree
	 */
	enterValuesCaluse?: (ctx: ValuesCaluseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.valuesCaluse`.
	 * @param ctx the parse tree
	 */
	exitValuesCaluse?: (ctx: ValuesCaluseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectStatement?: (ctx: SelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectStatement?: (ctx: SelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.selectClause`.
	 * @param ctx the parse tree
	 */
	enterSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.selectClause`.
	 * @param ctx the parse tree
	 */
	exitSelectClause?: (ctx: SelectClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 */
	enterProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.projectItemDefinition`.
	 * @param ctx the parse tree
	 */
	exitProjectItemDefinition?: (ctx: ProjectItemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tableExpression`.
	 * @param ctx the parse tree
	 */
	enterTableExpression?: (ctx: TableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tableExpression`.
	 * @param ctx the parse tree
	 */
	exitTableExpression?: (ctx: TableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tableReference`.
	 * @param ctx the parse tree
	 */
	enterTableReference?: (ctx: TableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tableReference`.
	 * @param ctx the parse tree
	 */
	exitTableReference?: (ctx: TableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tablePrimary`.
	 * @param ctx the parse tree
	 */
	enterTablePrimary?: (ctx: TablePrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tablePrimary`.
	 * @param ctx the parse tree
	 */
	exitTablePrimary?: (ctx: TablePrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.joinCondition`.
	 * @param ctx the parse tree
	 */
	enterJoinCondition?: (ctx: JoinConditionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.joinCondition`.
	 * @param ctx the parse tree
	 */
	exitJoinCondition?: (ctx: JoinConditionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 */
	enterGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.groupItemDefinition`.
	 * @param ctx the parse tree
	 */
	exitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.orderByCaluse`.
	 * @param ctx the parse tree
	 */
	enterOrderByCaluse?: (ctx: OrderByCaluseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.orderByCaluse`.
	 * @param ctx the parse tree
	 */
	exitOrderByCaluse?: (ctx: OrderByCaluseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.orderItemDefition`.
	 * @param ctx the parse tree
	 */
	enterOrderItemDefition?: (ctx: OrderItemDefitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.orderItemDefition`.
	 * @param ctx the parse tree
	 */
	exitOrderItemDefition?: (ctx: OrderItemDefitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.windowClause`.
	 * @param ctx the parse tree
	 */
	enterWindowClause?: (ctx: WindowClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.windowClause`.
	 * @param ctx the parse tree
	 */
	exitWindowClause?: (ctx: WindowClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	enterNamedWindow?: (ctx: NamedWindowContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.namedWindow`.
	 * @param ctx the parse tree
	 */
	exitNamedWindow?: (ctx: NamedWindowContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	enterWindowSpec?: (ctx: WindowSpecContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.windowSpec`.
	 * @param ctx the parse tree
	 */
	exitWindowSpec?: (ctx: WindowSpecContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	enterSortItem?: (ctx: SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.sortItem`.
	 * @param ctx the parse tree
	 */
	exitSortItem?: (ctx: SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	enterWindowFrame?: (ctx: WindowFrameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.windowFrame`.
	 * @param ctx the parse tree
	 */
	exitWindowFrame?: (ctx: WindowFrameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	enterFrameBound?: (ctx: FrameBoundContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.frameBound`.
	 * @param ctx the parse tree
	 */
	exitFrameBound?: (ctx: FrameBoundContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 */
	enterDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.dereferenceDefinition`.
	 * @param ctx the parse tree
	 */
	exitDereferenceDefinition?: (ctx: DereferenceDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.errorCapturingMultiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.multiUnitsInterval`.
	 * @param ctx the parse tree
	 */
	exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.errorCapturingUnitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.unitToUnitInterval`.
	 * @param ctx the parse tree
	 */
	exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	enterIntervalValue?: (ctx: IntervalValueContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	exitIntervalValue?: (ctx: IntervalValueContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.columnAlias`.
	 * @param ctx the parse tree
	 */
	enterColumnAlias?: (ctx: ColumnAliasContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.columnAlias`.
	 * @param ctx the parse tree
	 */
	exitColumnAlias?: (ctx: ColumnAliasContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.errorCapturingIdentifier`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	enterErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.errorCapturingIdentifierExtra`.
	 * @param ctx the parse tree
	 */
	exitErrorCapturingIdentifierExtra?: (ctx: ErrorCapturingIdentifierExtraContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.identifierSeq`.
	 * @param ctx the parse tree
	 */
	exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	enterStrictIdentifier?: (ctx: StrictIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.strictIdentifier`.
	 * @param ctx the parse tree
	 */
	exitStrictIdentifier?: (ctx: StrictIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.unquotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenClause?: (ctx: WhenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.whenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenClause?: (ctx: WhenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.uidList`.
	 * @param ctx the parse tree
	 */
	enterUidList?: (ctx: UidListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.uidList`.
	 * @param ctx the parse tree
	 */
	exitUidList?: (ctx: UidListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.uid`.
	 * @param ctx the parse tree
	 */
	enterUid?: (ctx: UidContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.uid`.
	 * @param ctx the parse tree
	 */
	exitUid?: (ctx: UidContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.plusUid`.
	 * @param ctx the parse tree
	 */
	enterPlusUid?: (ctx: PlusUidContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.plusUid`.
	 * @param ctx the parse tree
	 */
	exitPlusUid?: (ctx: PlusUidContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.withOption`.
	 * @param ctx the parse tree
	 */
	enterWithOption?: (ctx: WithOptionContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.withOption`.
	 * @param ctx the parse tree
	 */
	exitWithOption?: (ctx: WithOptionContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyList?: (ctx: TablePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tablePropertyKey`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.tablePropertyValue`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyValue?: (ctx: TablePropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.bitOperator`.
	 * @param ctx the parse tree
	 */
	enterBitOperator?: (ctx: BitOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.bitOperator`.
	 * @param ctx the parse tree
	 */
	exitBitOperator?: (ctx: BitOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.mathOperator`.
	 * @param ctx the parse tree
	 */
	enterMathOperator?: (ctx: MathOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.mathOperator`.
	 * @param ctx the parse tree
	 */
	exitMathOperator?: (ctx: MathOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.fullColumnName`.
	 * @param ctx the parse tree
	 */
	enterFullColumnName?: (ctx: FullColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.fullColumnName`.
	 * @param ctx the parse tree
	 */
	exitFullColumnName?: (ctx: FullColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.setQuantifier`.
	 * @param ctx the parse tree
	 */
	exitSetQuantifier?: (ctx: SetQuantifierContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.ansiNonReserved`.
	 * @param ctx the parse tree
	 */
	enterAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.ansiNonReserved`.
	 * @param ctx the parse tree
	 */
	exitAnsiNonReserved?: (ctx: AnsiNonReservedContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.strictNonReserved`.
	 * @param ctx the parse tree
	 */
	enterStrictNonReserved?: (ctx: StrictNonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.strictNonReserved`.
	 * @param ctx the parse tree
	 */
	exitStrictNonReserved?: (ctx: StrictNonReservedContext) => void;

	/**
	 * Enter a parse tree produced by `FlinkSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `FlinkSqlParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;
}

