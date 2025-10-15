import { NextRequest } from "next/server"

import { fetchImages } from "@/utils/images"

export async function GET(req: NextRequest){
    const imageCount = req.nextUrl.searchParams.get("images")
    
    if (!imageCount){
        return new Response(JSON.stringify({ error: "Missing 'images' query parameter" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        })
    }

    const imageCountNumber = Number(imageCount)

    const imageData = await fetchImages(imageCountNumber)

    return Response.json({data: imageData})

}