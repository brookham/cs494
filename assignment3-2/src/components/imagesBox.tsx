'use client'

import { useEffect, useState } from "react"
import { Box, Button } from "@mui/material"
import { ImageData } from "@/types/imageData"
import ImageCard from "./imageCard"
import { getColorValue } from "@/utils/colrs"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function ImagesBox() {
    const [images, setImages] = useState<ImageData[]>([])

    const [color, setColor] = useState<"r" | "g" | "b">("r")

    const [ascending, setAscending] = useState(true)


    useEffect(() => {
        fetch("/api?images=50")
            .then(r => r.json())
            .then(data => setImages(data.data))
    }, [])

    useEffect(() => {
        console.log(images)
    }, [images])

    function isAscending(){
        if 
    }

    function sortImages(){
        const tmpImages = [...images]
        tmpImages.sort((a, b) => getColorValue(b.rgb, color) - getColorValue(a.rgb, color))
        setImages(tmpImages)
    }

    function setColorVal (event: SelectChangeEvent){
        setColor(event.target.value as ("r" | "g" | "b"))
    }

    return (
        images.length > 0 ?
            <Box>
                    <FormControl sx={{ minWidth: 50}}>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={color}
                            label="color"
                            onChange={setColorVal}
                        >
                            <MenuItem value={"r"}>Red</MenuItem>
                            <MenuItem value={"g"}>Green</MenuItem>
                            <MenuItem value={"b"}>Blue</MenuItem>
                        </Select>
                    </FormControl>
                    <Button onClick={sortImages} variant="contained" sx={{m: 2}}>Sort</Button>
                    <Button onClick={} variant="contained" sx={{m: 2}}>Sort</Button>

                <Box display="flex" flexWrap="wrap" gap={2}>
                    {images.map((image: ImageData, i: number) => (
                        <ImageCard key={i} image={image} />
                    ))}
                </Box>
            </Box>
            :
            <></>
    )

}