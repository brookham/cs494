'use client';

import mtgData from "@/data/mtg_cards.json"

import { MtgCard, mapMtgCard } from "@/types/mtgCard"

export default function Home() {

  const cards = mtgData.map((data)=>mapMtgCard(data))
  console.log(cards)

  return (
    <main>
      <div>Hello world!</div>
    </main>
  );
}
