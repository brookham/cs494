export type ImageInfo = {
    url: string,
    height: number,
    width: number,
    alt: string
}

type RawImageInfo = {
    height: number,
    width: number,
    alt: string,
    src: {original: string}
}

export function mapImageInfo(data: RawImageInfo[]): ImageInfo[]{
    return data.map((rawImage)=>{
        return {
            url: rawImage.src.original,
            height: rawImage.height,
            width: rawImage.width, 
            alt: rawImage.alt
        }
    })
}