import Image from "next/image"

import { ImageInfo } from "@/type/imageInfo"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ImageCard(props: { imageInfo: ImageInfo }) {

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
                    {props.imageInfo.description}
                </Typography>
            </CardContent>
        </Card>

    )
}        