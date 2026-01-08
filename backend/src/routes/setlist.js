import express from "express";
import { getArtistSetlists } from "../services/setlistService.js";

const router = express.Router();

router.get("/artist/:mbid", async (req, res) => {
  try {
    const { mbid } = req.params;
    const setlists = await getArtistSetlists(mbid);
    res.json(setlists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
