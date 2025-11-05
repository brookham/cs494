import { NextRequest, NextResponse } from "next/server"

export async function proxy(request: NextRequest){

  if(request.nextUrl.pathname.startsWith("/secret")){
    const userNameArr = request.nextUrl.pathname.split("/") 

    if (userNameArr.length === 3){
      const userName = userNameArr[2]

      const hash = hashCode(userName)
      const favePokemon = await getFavoritePokemon(hash)

      const urlString = `/secret?user=${userName}&pokemon=${favePokemon.pokemonName}&img=${favePokemon.imgUrl}`

      return NextResponse.rewrite(new URL(urlString, request.url))

    }
    // const user = request.nextUrl.searchParams.get("user")

    // if (user){
    //   return NextResponse.next()
    // }
    else{
      return NextResponse.redirect(new URL("/", request.url))
    }

  }

  return NextResponse.next()
}

function hashCode(str: string){
  let hash = 0
  for (let i = 0; i < str.length; i ++){
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

async function getFavoritePokemon(hash: number){
  let r = await fetch("https://pokeapi.co/api/v2/pokemon")
  let data = await r.json()

  const count = data.count

  const pokemonId = hash % count + 1

  r = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  data = await r.json()

  const pokemonName = data.name
  const imgUrl = data.sprites.other["official-artwork"]["front_default"]

  return{
    pokemonName,
    imgUrl
  }

  
}