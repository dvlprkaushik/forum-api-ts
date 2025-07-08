import { AppError } from "@/utils/AppError.js";
import chalk from "chalk";
import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundHandler: RequestHandler = (req, res) => {
    res.status(404).json({ success: false, message: "OOPs!! Route not found" });
}

export const globalErrorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
    if (process.env.NODE_ENV === "development") {
        console.log(chalk.bold.redBright("Error Stack:"));
        console.log(chalk.red(err.stack || err.message));
    }
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
}