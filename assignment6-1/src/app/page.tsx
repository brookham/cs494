'use client'

import { Box, Typography, Switch } from "@mui/material"
import Link from "next/link";
import { useNameContext } from "@/context/nameContext";
import { useThemeContext } from "@/context/themeContext";


export default function Home() {

  const {name} = useNameContext()
  
  const {darkMode, setDarkMode} = useThemeContext()


  return (
    <body className={darkMode ? "dark" : "light"}>
      <Box>
        <Switch
        checked={darkMode}
        onChange={(e)=>setDarkMode(e.target.checked)}
        />
        <Typography variant="h5">Hello {name ? name : "World"}</Typography>
        <Link href="/name">Set name</Link>
      </Box>
    </body>
  );
}
