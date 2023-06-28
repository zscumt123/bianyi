// Generated from .\src\antlr4\LibExpr.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./LibExprParser";
import { PrintExprContext } from "./LibExprParser";
import { AssignContext } from "./LibExprParser";
import { BlankContext } from "./LibExprParser";
import { ClearContext } from "./LibExprParser";
import { ParensContext } from "./LibExprParser";
import { MulDivContext } from "./LibExprParser";
import { AddSubContext } from "./LibExprParser";
import { IdContext } from "./LibExprParser";
import { IntContext } from "./LibExprParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LibExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LibExprVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LibExprParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by the `printExpr`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintExpr?: (ctx: PrintExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `assign`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;
	/**
	 * Visit a parse tree produced by the `blank`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlank?: (ctx: BlankContext) => Result;
	/**
	 * Visit a parse tree produced by the `clear`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClear?: (ctx: ClearContext) => Result;
	/**
	 * Visit a parse tree produced by the `parens`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;
	/**
	 * Visit a parse tree produced by the `MulDiv`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDiv?: (ctx: MulDivContext) => Result;
	/**
	 * Visit a parse tree produced by the `AddSub`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;
	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
}

