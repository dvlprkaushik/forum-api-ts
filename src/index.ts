// 🌱 Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config({ quiet: true });

// 🔧 Express core imports
import express from "express";

// 🛠️ Custom utilities and middleware
import { healthCheck } from "./utils/HealthCheck.js";
import { expressMiddlewares } from "./middlewares/express.middlewares.js";
import { endpointLogger } from "./middlewares/endpointLogger.middleware.js";
import {
    globalErrorMiddleware,
    notFoundHandler,
} from "./middlewares/errorHandler.middleware.js";

// 🧭 Route handlers
import { forumRouter } from "./routes/forum.routes.js";

// 🚀 App listener
import { listener } from "./listener.js";

// ---------------------------------------------
// 📦 Initialize Express app
// ---------------------------------------------
const app = express();

// ---------------------------------------------
// 🧰 Apply core express middleware (parsers, cors, etc.)
// ---------------------------------------------
expressMiddlewares(app, express);

// ---------------------------------------------
// 🩺 Health check & endpoint logging (only in development)
// ---------------------------------------------
if (process.env.NODE_ENV === "development") {
    app.use(endpointLogger);    // Logs each incoming request endpoint
    healthCheck(app);           // /healthz route for container/infra monitoring
}

// ---------------------------------------------
// 🚦 Mount application routes under /api prefix
// ---------------------------------------------
app.use("/api", forumRouter);

// ---------------------------------------------
// 🧱 Global error handlers (404 + error middleware)
// ---------------------------------------------
app.use(notFoundHandler);         // Handle unmatched routes
app.use(globalErrorMiddleware);  // Handle thrown errors gracefully

// ---------------------------------------------
// 🚀 Start the server using custom listener
// ---------------------------------------------
listener(app);
