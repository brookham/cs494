import { NextRequest } from "next/server"

import { mapImageInfo } from "@/types/imageInfo"

import { setCashedImages, getCashedImages } from "@/lib/redis"
import { runInThisContext } from "vm"

export async function GET(request: NextRequest){

    const query = request.nextUrl.searchParams.get("query")

    if (!query){
        return Response.json({message: "Must include query"})
    }

    const limit = Number(request.nextUrl.searchParams.get("limit") ?? 10)

    return Response.json({images: await getImages(query, limit)})
}

async function getImages(query: string, limit: number){

      const cached = await getCashedImages(query.toLowerCase())

      if (cached && limit <= cached.length){
            return cached.slice(0, limit)
      }
    
      const apiKey = process.env.NEXT_PUBLIC_PEXELS_API // Make sure your Pexels API key is in your .env

      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${limit}`

      const r = await fetch(url, {headers: {Authorization: apiKey ?? ""}})

      const data = await r.json()

      const mappedData =  mapImageInfo(data.photos)

      setCashedImages(query.toLowerCase(), mappedData)

      return mappedData
}