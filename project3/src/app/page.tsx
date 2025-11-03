'use client'

import SpotifyPlayer from "./components/spotifyPlayer";

import { Box, TextField, Typography } from "@mui/material"

import { useEffect, useState,  } from "react"

export default function Home() {

  const [track, setTrack] = useState<string>("")
  const [savedTrack, setSavedTrack] = useState<string>("")
  const [response, setResponse] = useState<string | undefined>(undefined)

  useEffect(()=>{

    if (savedTrack != ""){

      fetch(`/api/search?track=${savedTrack}`)
      .then((res)=>res.json())
      .then((data)=>setResponse(data.message))
      
    }
  }, [savedTrack])


  return (
    <Box>
      <Typography variant="h3">{response ?? "Loading"}</Typography>
      <TextField
      id="track"
      label="track"
      value={track}
      onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{ setTrack(event.target.value) }}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>)=> event.key === "Enter" && setSavedTrack(track)}
      />
    </Box>
  );
}
