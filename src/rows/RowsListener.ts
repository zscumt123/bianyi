// Generated from ./src/rows/Rows.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./RowsParser";
import { RowContext } from "./RowsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RowsParser`.
 */
export default class RowsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RowsParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `RowsParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by `RowsParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `RowsParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;
}

