import { type NextRequest } from "next/server"

export function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams

    const query = searchParams.get('word')

    return Response.json({message: `Your Word is ${query}`})
}