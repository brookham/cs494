'use client';

import mtgData from "@/data/mtg_cards.json"

import { MtgCard, mapMtgCard } from "@/types/mtgCard"

import Image from "next/image"

export default function Home() {

  const cards = mtgData.map((data)=>mapMtgCard(data))
  console.log(cards)

  return (
    <main>
      <div>{cards.map((card: MtgCard, i) => ( //i acts as the itterator
          <Image alt={card.name} width={100} height={139} key={i} src={card.image}/>

      ))}</div>
    </main>
  );
}
