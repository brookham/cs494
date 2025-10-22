export type ImageInfo = {
  url: string,
  height: number,
  width: number,
  alt: string
}

type rawImageInfo = {
  height: number,
  width: number,
  alt: string,
  src: {original: string}
}

export function mapImageInfo(data: rawImageInfo[]): ImageInfo[]{
  //take the raw api data and convert it to large data
  return data.map((rawImage: any)=>{
    return{
    url:  rawImage.src.original,
    height: rawImage.height,
    width: rawImage.width,
    alt: rawImage.alt,
    }
  })
}