export type Track = {
  name: string,
  artists: string[],
  uri: string,
  image: string
}

type Artists = {
  name: string
}

type RawImage = {
  height: number,
  width: number,
  url: string
}

type rawTrackInfo = {
  name: string,
  artists: Artists[],
  uri: string,
  album: {images: RawImage[]}
}

export function mapTracks(rawTrack: rawTrackInfo[]): Track[]{

  const tracks =  rawTrack.map((track)=>{
    return{
      name: track.name,
      artists: track.artists.map(artists => artists.name),
      uri: track.uri,
      image: track.album?.images?.[0]?.url
    }
  })

  return tracks

}