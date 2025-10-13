import Image from "next/image"
import { ImageInfo } from "@/type/imageInfo"
import { Card, CardContent, Typography } from "@mui/material"

import { useEffect, useState } from "react"


export default function ImageCard(props: { imageInfo: ImageInfo }) {

    const [RGB, setRGB] = useState<{r: number, g: number, b: number} | undefined>(undefined)

    useEffect(()=>{
        const url = `/api?url=${props.imageInfo.url}`
        fetch(url)
        .then(r=>r.json()
        .then(data=>setRGB(data)))
    },[])

    return (
        <Card sx={{ maxWidth: 500, m:3 }}>
            <Image
                alt={props.imageInfo.title}
                src={props.imageInfo.url}
                height={300}
                width={500}
                style={{ objectFit: "cover" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.imageInfo.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {
                        RGB?
                            <>Red: {RGB.r}, Green: {RGB.g}, Blue: {RGB.b}</>//if it exists
                        :
                        <>NO RGB FOUND</>//if iti doesnt exist

                    }
                </Typography>
            </CardContent>
        </Card>

    )
}