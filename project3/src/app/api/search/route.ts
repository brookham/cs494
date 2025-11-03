import { NextRequest } from "next/server"

import { mapTracks } from "@/types/tracks"

import { searchSpotify } from "@/lib/spotify"

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("track") ?? ""

  const search = await searchSpotify(query)
  
  return Response.json({search: search})
}

