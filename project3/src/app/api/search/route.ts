import { NextRequest } from "next/server"


import { searchSpotify } from "@/lib/spotify"
import { mapTracks } from "@/types/tracks"

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("search") ?? ""

  const search = await searchSpotify(query)
  
  return Response.json({search})
}

