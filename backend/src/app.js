import express from "express";
import healthRoutes from "./routes/health.js";


const app = express();
app.use("/health", healthRoutes);
/*
 * Middleware
 * Parses incoming JSON bodies so req.body works
 */

app.use(express.json());

export default app;