import express from "express";
import dotenv from "dotenv";
import { healthCheck } from "./utils/HealthCheck.js";
import { expressMiddlewares } from "./middlewares/express.middlewares.js";
import { endpointLogger } from "./middlewares/endpointLogger.middleware.js";
import {
  globalErrorMiddleware,
  notFoundHandler,
} from "./middlewares/errorHandler.middleware.js";
import { forumRouter } from "./routes/forum.routes.js";
import { listner } from "./listner.js";

dotenv.config({ quiet: true });

const app = express();
expressMiddlewares(app, express);
if (process.env.NODE_ENV === "development") {
  app.use(endpointLogger);
  healthCheck(app);
  // HealthCheck
}

// Routes
app.use("/api", forumRouter);

// global-middlewares
app.use(notFoundHandler);
app.use(globalErrorMiddleware);

// listner
listner(app);
