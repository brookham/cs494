type SearchParams = {
  [key: string]: string | undefined
}

export default async function Home(props: { searchParams: Promise<SearchParams> }) {
  const searchParams = await props.searchParams
  const user = searchParams.user ?? "user"
  const pokemon = searchParams.pokemon ?? "None"
  const imageUrl = searchParams.img ?? ""

  return (
    <div>
      <h1>you found the secret page {user}</h1>
      <div> your favorite pokemon is {pokemon}</div>
      <div><img src={imageUrl} /></div>
    </div>
  )
}