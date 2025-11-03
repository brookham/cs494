'use client'

import { Box, Typography, Button, TextField } from "@mui/material"
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useNameContext } from "@/context/nameContext";
import { useThemeContext } from "@/context/themeContext";

export default function Home() {
  // const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  const {setName} = useNameContext()
  const { darkMode } = useThemeContext()


  return (
    <body className={darkMode ? "dark" : "light"}>
      <Box>
        <Typography variant="h5">Set Your Name: </Typography>
        <TextField
        placeholder="Name"
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setText(event.target.value)}}
        />
        <Button variant="contained" onClick={()=>setName(text)}>Submit</Button>
        <Typography></Typography>
      </Box>
      <Link href="/">Go Home</Link>
    </body>
  );
}
