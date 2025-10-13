'use client'

import {Box, Typography} from "@mui/material"
import ImageCard from "./imageCard"
import { ImageInfo } from "@/type/imageInfo"

export default function ImagesBox(props: {photoData: ImageInfo[]}) {
    return (
        <Box sx={{
            component: "div",
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
        }}>
            <Typography variant="h5">My Images</Typography>
            {
                props.photoData.map((data, i) => (
                    <ImageCard key={i} imageInfo={data} />
                ))
            }
        </Box>
    )
}