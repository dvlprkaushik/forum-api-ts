import type { Info } from "@/types/Env.types.js";
import chalk from "chalk";
import type { Application, RequestHandler } from "express";

export const healthCheck = (app: Application): void => {
    const health: RequestHandler = (req, res) => {
        res.json({ status: "OK" });
    }
    app.get("/", health);

    const info: Info = {
        PORT: process.env.PORT,
        BASE_URL: process.env.BASE_URL
    }
    try {
        app.listen((info.PORT), () => console.log(chalk.bold.greenBright(`Server running on : ${info.BASE_URL}:${info.PORT}/`)))
    } catch (error) {
        console.log(chalk.bold.redBright(`Error running the server -> ${error}`));
    }
}