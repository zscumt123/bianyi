// Generated from ./src/chapter2/script/PlayScript.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { LiteralContext } from "./PlayScriptParser";
import { PrimitiveTypeContext } from "./PlayScriptParser";
import { StatementContext } from "./PlayScriptParser";
import { ExpressionStatementContext } from "./PlayScriptParser";
import { DeclarationContext } from "./PlayScriptParser";
import { InitializerContext } from "./PlayScriptParser";
import { ExpressionContext } from "./PlayScriptParser";
import { AssignmentExpressionContext } from "./PlayScriptParser";
import { AssignmentOperatorContext } from "./PlayScriptParser";
import { AdditiveExpressionContext } from "./PlayScriptParser";
import { MultiplicativeExpressionContext } from "./PlayScriptParser";
import { PrimaryExpressionContext } from "./PlayScriptParser";
import { ArgumentExpressionListContext } from "./PlayScriptParser";
import { CompoundStatementContext } from "./PlayScriptParser";
import { BlockItemListContext } from "./PlayScriptParser";
import { BlockItemContext } from "./PlayScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PlayScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class PlayScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PlayScriptParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.blockItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItemList?: (ctx: BlockItemListContext) => Result;
	/**
	 * Visit a parse tree produced by `PlayScriptParser.blockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItem?: (ctx: BlockItemContext) => Result;
}

