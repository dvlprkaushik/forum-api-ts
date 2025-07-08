import express from "express";
import dotenv from "dotenv";
import { healthCheck } from "./utils/HealthCheck.js";
import { expressMiddlewares } from "./middlewares/express.middlewares.js";

dotenv.config();

const app = express();
expressMiddlewares(app, express);

// health-check
healthCheck(app);