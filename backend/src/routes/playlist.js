import express from "express";
import { getArtistSetlists } from "../services/setlistService.js";
import { searchYoutube } from "../services/youtubeService.js";

const router = express.Router();

router.get("/generate/:mbid", async (req, res) => {
  try {
    const { mbid } = req.params;
    const setlists = await getArtistSetlists(mbid);

    if (!setlists.length) return res.status(404).json({ message: "No setlists found" });

    const songs = setlists[0].sets.set.map(s => s.name); // first setlist
    const artistName = setlists[0].artist.name;

    const playlist = [];
    for (const song of songs) {
      const youtubeUrl = await searchYoutube(song, artistName);
      playlist.push({ song, youtubeUrl });
    }

    res.json({ artist: artistName, playlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
