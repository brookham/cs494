import { NextRequest } from "next/server"

import { fetchImageRGB } from "@/utils/imageData"

export async function GET(request: NextRequest){
    const url = request.nextUrl.searchParams.get("url")

    if (!url){
        return Response.json({data: "No URL"})
    }

    return Response.json(await fetchImageRGB(url))
}