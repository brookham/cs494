import { ImageInfo } from "@/type/imageInfo"
import ImagesBox from "@/components/imagesBox"

import { fetchImageRGB } from '@/utils/imageData'


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
      <ImagesBox photoData={photoData} />
    </main>
  );
}