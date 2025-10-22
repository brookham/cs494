import { type NextRequest } from "next/server"

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('word') ?? ""
    const definitions = await getDefinitions(query)
    return Response.json({definitions: definitions})
}



async function getDefinitions(word: string){
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY_DICTIONARY}`
    const response = await fetch(url)
    const data = await response.json()

    return data.map((datum: any)=>datum.shortdef)
}