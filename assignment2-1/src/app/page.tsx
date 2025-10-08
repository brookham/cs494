import { ImageInfo } from "@/type/imageInfo"

import ImageCard from "@/components/imageCard"

import { Box, Typography } from "@mui/material"

import ImageBox from "@/components/imageBox"


const url = "https://boringapi.com/api/v1/photos"



export default async function Home() {
  const r = await fetch(url)
  const data = await r.json()

  const photoData: ImageInfo[] = []



  for (let i = 0; i < data.photos.length; i++) {
    photoData.push(data.photos[i])
  }

  return (
    <main>
      <ImageBox photoData={photoData}/>
    </main>
  );
}