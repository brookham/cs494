'use client'

import { Box, TextField } from "@mui/material"

import { useEffect, useState } from "react";

export default function Home() {

  const [word, setWord] = useState<string>("") //sets up ability to type into box

  const [savedWord, setSavedWord] = useState<string>("") //saves submitted word

  useEffect(()=>{console.log(savedWord)}, [savedWord])

  return (
    <Box>
      <TextField
      id="word-text"
      label="Word"
      value={word}
      onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setWord(event.target.value)}}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>)=>event.key === "Enter" && setSavedWord(word)} /> 
    </Box>    //onChange sets the value in text field
  );          //onKeyDown saves word when you press enter
}
