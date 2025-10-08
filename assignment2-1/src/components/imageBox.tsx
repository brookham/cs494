'use client'

import { Box, Typography } from "@mui/material"
import ImageCard from "./imageCard"
import { ImageInfo } from "@/type/imageInfo"


export default function ImageBox(props: {photoData: ImageInfo[]}) {
    return (
        <Box sx={{
            allignItems: "center",
            display: "flex",
            flexDirection: "column",

        }} >
            <Typography variant="h5">Images</Typography>
            {
                props.photoData.map((data, i) => (
                    <ImageCard key={i} imageInfo={data} />
                ))
            }
        </Box>
    )
}