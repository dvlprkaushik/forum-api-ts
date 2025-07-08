import chalk from "chalk";
import type { RequestHandler } from "express";

export const endpointLogger: RequestHandler = (req, res, next) => {
    const now = new Date().toISOString();
    const log = `[${now}] - ${req.method} - ${req.originalUrl} - IP: ${req.ip}`;

    console.log(chalk.bold.magentaBright(log));

    next();
}