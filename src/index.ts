import express from "express";
import dotenv from "dotenv";
import { healthCheck } from "./utils/HealthCheck.js";
import { expressMiddlewares } from "./middlewares/express.middlewares.js";
import { endpointLogger } from "./middlewares/endpointLogger.middleware.js";

dotenv.config();

const app = express();
expressMiddlewares(app, express);
app.use(endpointLogger);

// health-check
healthCheck(app);