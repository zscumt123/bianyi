// Generated from ./src/chapter2/script/PlayScript.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `PlayScriptParser`.
 */
export default class PlayScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PlayScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	enterArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	exitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	enterBlockItemList?: (ctx: BlockItemListContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	exitBlockItemList?: (ctx: BlockItemListContext) => void;
	/**
	 * Enter a parse tree produced by `PlayScriptParser.blockItem`.
	 * @param ctx the parse tree
	 */
	enterBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `PlayScriptParser.blockItem`.
	 * @param ctx the parse tree
	 */
	exitBlockItem?: (ctx: BlockItemContext) => void;
}

