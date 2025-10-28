'use client'

import { Box, TextField, Typography, List, ListItem, ListItemText } from "@mui/material"

import { useEffect, useState } from "react";

import { Word } from "@/types/word";


export default function Home() {

  const [word, setWord] = useState<string>("") //sets up ability to type into box

  const [savedWord, setSavedWord] = useState<string>("") //saves submitted word

  const [response, setResponse] = useState<Word | undefined>(undefined)

  useEffect(() => {
    if (savedWord !== "") {
      fetch(`/api/word?word=${savedWord}`)      //gets the GET function for route.ts
        .then((res) => res.json())                  //gets the json data from the response
        .then((data) => setResponse(data.definitions))  //gets the data from the json

    }
  }, [savedWord])




  return (
    <Box>

      <TextField
        id="word-text"
        label="Word"
        value={word}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setWord(event.target.value) }}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => event.key === "Enter" && setSavedWord(word)}
      />
      {
        response !== undefined ?
          <Box>
            <Typography variant="h4">{response.name}</Typography>
            <List>
              {
                response.definitions.map((definition, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={definition.definition}
                      secondary={definition.partOfSpeech}
                    />
                  </ListItem>
                ))
              }
            </List>
            </Box>

            :
            <></>
        }

          </Box> 
  );
}
