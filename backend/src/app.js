import express from "express";
import healthRoutes from "./routes/health.js";
import setlistRoutes from "./routes/setlist.js";
import playlistRoutes from "./routes/playlist.js";


const app = express();
app.use("/health", healthRoutes);
/*
 * Middleware
 * Parses incoming JSON bodies so req.body works
 */

app.use(express.json());

// Mount the router at /api/setlists
app.use("/api/setlists", setlistRoutes);
app.use("/api/playlist", playlistRoutes);

export default app;