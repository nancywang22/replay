import express from "express";

const app = express();

/*
 * Middleware
 * Parses incoming JSON bodies so req.body works
 */

app.use(express.json());

export default app;