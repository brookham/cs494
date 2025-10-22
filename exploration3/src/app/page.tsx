'use client'

import { Box, TextField, Typography } from "@mui/material"

import { useEffect, useState } from "react";

export default function Home() {

  const [word, setWord] = useState<string>("") //sets up ability to type into box

  const [savedWord, setSavedWord] = useState<string>("") //saves submitted word

  const [response, setResponse] = useState<string | undefined>(undefined)

  useEffect(()=>{
    fetch("/api/word?word=test")                  //gets the GET function for route.ts
    .then((res)=>res.json())            //gets the json data from the response
    .then((data)=>setResponse(data.message))  //gets the data from the json
  }, [])

  useEffect(()=>{console.log(savedWord)}, [savedWord])

  return (
    <Box>
      <Typography variant="h4">{response ?? "loading"}</Typography>
      <TextField
      id="word-text"
      label="Word"
      value={word}
      onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setWord(event.target.value)}}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>)=>event.key === "Enter" && setSavedWord(word)} /> 
    </Box>    //onChange sets the value in text field
  );          //onKeyDown saves word when you press enter
}
