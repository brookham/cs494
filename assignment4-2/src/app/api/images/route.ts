import { NextRequest } from "next/server"

import { mapImageInfo } from "@/types/imageInfo"

// TODO 1: Create a new type /scr/types/imageInfo.tsx
// This type should hold the src url (original size), height, width, and alt text
// You should also add a mapImageInfo() function which will map the raw data from the API to your new type
// The json that should be returned by the GET function should be { images: ImageInfo[] } (key: images, value: your array of results as the new ImageInfo[])

export async function GET(request: NextRequest){

    const query = request.nextUrl.searchParams.get("query")

    if (!query){
        return Response.json({message: "Must include query"})
    }

    const limit = Number(request.nextUrl.searchParams.get("limit") ?? 10)

    return Response.json({images: await getImages(query, limit)})
}

async function getImages(query: string, limit: number){
      const apiKey = process.env.NEXT_PUBLIC_PEXELS_API // Make sure your Pexels API key is in your .env

      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${limit}`

      const r = await fetch(url, {headers: {Authorization: apiKey ?? ""}})

      const data = await r.json()

      return mapImageInfo(data.photos)
}