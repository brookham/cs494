'use client';

import mtgData from "@/data/mtg_cards.json"

import { mapMtgCard } from "@/types/mtgCard"

import MtgTable from "@/components/mtgTable";


export default function Home() {

  const cards = mtgData.map((data)=>mapMtgCard(data))
  console.log(cards)

  return (
    <main>
      <div>
      <MtgTable cards={cards}/>
      </div>
    </main>
  );
}
