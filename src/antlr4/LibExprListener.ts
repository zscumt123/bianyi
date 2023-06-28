// Generated from .\src\antlr4\LibExpr.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `LibExprParser`.
 */
export default class LibExprListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LibExprParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `LibExprParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by the `printExpr`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterPrintExpr?: (ctx: PrintExprContext) => void;
	/**
	 * Exit a parse tree produced by the `printExpr`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitPrintExpr?: (ctx: PrintExprContext) => void;
	/**
	 * Enter a parse tree produced by the `assign`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by the `assign`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;
	/**
	 * Enter a parse tree produced by the `blank`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterBlank?: (ctx: BlankContext) => void;
	/**
	 * Exit a parse tree produced by the `blank`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitBlank?: (ctx: BlankContext) => void;
	/**
	 * Enter a parse tree produced by the `clear`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	enterClear?: (ctx: ClearContext) => void;
	/**
	 * Exit a parse tree produced by the `clear`
	 * labeled alternative in `LibExprParser.stat`.
	 * @param ctx the parse tree
	 */
	exitClear?: (ctx: ClearContext) => void;
	/**
	 * Enter a parse tree produced by the `parens`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParens?: (ctx: ParensContext) => void;
	/**
	 * Exit a parse tree produced by the `parens`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParens?: (ctx: ParensContext) => void;
	/**
	 * Enter a parse tree produced by the `MulDiv`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDiv`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDiv?: (ctx: MulDivContext) => void;
	/**
	 * Enter a parse tree produced by the `AddSub`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSub`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSub?: (ctx: AddSubContext) => void;
	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by the `int`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `int`
	 * labeled alternative in `LibExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;
}

