'use client'

import pokemon_data from "@/data/pokemon_data.json"

import { mapPokemon, Pokemon } from "@/categories/pokemon"

import PokemonTable from "@/components/pokemonTable";

export default function Home() {

  const cards = pokemon_data.map((data)=>mapPokemon(data))

  return (
    <main>
      <div>
      <PokemonTable cards={cards}/>
      </div>
    </main>
  );
}
