import fetch from "node-fetch";

const BASE_URL = "https://api.setlist.fm/rest/1.0";

export async function getArtistSetlists(mbid) {
  // mbid = MusicBrainz ID of the artist
  const res = await fetch(`${BASE_URL}/artist/${mbid}/setlists`, {
    headers: {
      "x-api-key": process.env.SETLISTFM_API_KEY,
      "Accept": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch setlists: ${res.status}`);
  }

  const data = await res.json();
  return data.setlist || [];
}
