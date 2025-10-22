'use client'

import { Box, TextField, Button } from "@mui/material"

import { useState } from "react"

import Image from "next/image"



export default function ImageForm(){
    const [query, setQuery] = useState<string>("")

    const [imageUrls, setImageUrls] = useState<string[]>([])

    function submitSearch(){
        const url = `api/images?query=${query}`

        fetch(url)
        .then(r=>r.json)
        .then(data=>getUrls(data))
    }
    function getUrls(data: any){
        setImageUrls(data.photos.map((photo: any)=>photo.src.original))

    }

    return (
        <Box>
            <TextField
            id="image-query"
            label="Image Query"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                setQuery(event.target.value)
            }}
            />
            <Button onClick={()=>{submitSearch()}}>Submit</Button>
            <Box>
                {imageUrls.map((url: string, i: number)=>(
                <Image key={i} 
                src={url} 
                alt={url} 
                width={400} 
                height={400}/>))}
            </Box>
        </Box>
    )
}