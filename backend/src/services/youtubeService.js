import { youtube } from "api_tool";

export async function searchYoutube(songName, artistName) {
  const query = `${artistName} ${songName}`;
  const results = await youtube.search({
    query,
    maxResults: 1
  });

  if (results.items && results.items.length > 0) {
    return `https://www.youtube.com/watch?v=${results.items[0].id}`;
  }

  return null;
}
