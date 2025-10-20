'use client'

import { useEffect } from "react";

import ImageForm from "@/components/imageForm";


export default function Home() {

  // const apiKey = process.env.NEXT_PUBLIC_PEXELS_API

  // useEffect(()=>{
  //   fetch("https://api.pexels.com/v1/search?query=people",{
  //     headers: {Authorization: apiKey ?? ""}
  //   })
  //   .then((r)=>r.json())
  //   .then(data=>console.log(data))
  // },[])

  return (
    <main>
      <div><ImageForm/></div>
    </main>
  );
}
