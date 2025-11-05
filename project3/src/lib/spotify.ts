import { mapTracks } from "@/types/tracks";
import { redis } from "./redis";

export async function getAccessToken(): Promise<string>{
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const credentials = btoa(`${clientId}:${clientSecret}`);

  const token = await redis.get('token') as string | null

  if (token){
    return token
  }

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await res.json();

  await redis.set('token', data.access_token, {ex: 3540})
  return data.access_token;
}

export async function searchSpotify(query: string){

  const token = await getAccessToken()
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`

  const r = await fetch(url, {headers: {Authorization: `Bearer ${token}`}})
  const data = await r.json()
  
  return mapTracks(data.tracks.items)

}