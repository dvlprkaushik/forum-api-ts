import type { Application } from "express"

export const expressMiddlewares = (app: Application, express: typeof import("express")): void => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

/*
🧠 Why typeof import("express")?

Because express is a function with attached properties like json, Router, etc.
You’re passing the entire module — so we type it as the full typeof import("express").
*/