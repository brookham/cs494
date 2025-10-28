import { type NextRequest } from "next/server"

import { Word, wordFromJson } from "@/types/word"

import { redis } from "@/lib/redis"

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('word') ?? ""
    const definitions = await getDefinitions(query)
    return Response.json({definitions: definitions})
}



async function getDefinitions(word: string){
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY_DICTIONARY}`
    const cached = await redis.get(word)

    if (cached){
        console.log("found")
        return cached
    }

    console.log("not found")

    const response = await fetch(url)
    const data = await response.json()

    const definitions =  wordFromJson(word, data)
    await redis.set(word, definitions)
    return definitions
}