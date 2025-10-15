
import Image from "next/image"
import { ImageData } from "@/types/imageData"

import { Card, CardContent, Typography } from '@mui/material'

export default function ImageCard(props: {image: ImageData}) {
    return (
        <Card sx={{ width: 345 }}>
            <Image 
                width={345}
                height={200}
                style={{objectFit: "cover"}}
                src={props.image.url}
                alt={props.image.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.image.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.image.description}
                </Typography>
            </CardContent>
        </Card>
    );

}