import type { Info } from "@/types/Env.types.js";
import chalk from "chalk";
import type { Application, RequestHandler } from "express";

export const healthCheck = (app: Application): void => {
    const health: RequestHandler = (req, res) => {
        res.json({ status: "OK" });
    }
    app.get("/", health);
}