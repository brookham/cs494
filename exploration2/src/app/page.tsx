'use client';

import mtgData from "@/data/mtg_cards.json"

import { MtgCard, mapMtgCard } from "@/types/mtgCard"

import MtgTable from "@/components/mtgTable";

import Image from "next/image"

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
