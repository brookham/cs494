import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {

    const query = request.nextUrl.searchParams.get("query")

    if (!query){
        return Response.json({message: "must include query"})
    }

    const limit = Number(request.nextUrl.searchParams.get("limit") ?? "10")

    return Response.json(await getImages(query, limit))
}

async function getImages(query: string, limit: number){
    const apiKey = process.env.NEXT_PUBLIC_PEXELS_API
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${limit}`
    const r = await fetch(url, {headers: {Authorization: apiKey ?? ""}})

    const data = await r.json()
    return data

}