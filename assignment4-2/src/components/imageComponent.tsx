'use client'

import { useState } from "react"
import { Box } from "@mui/material"
import { ImageInfo } from "@/types/imageInfo"
import ImageForm from "./imageForm"
import ImageGallery from "./imagesGallery"

// TODO 2: Update this component to use the new image data type
// Update the Image mapping to also include the height, width, and description of the image as the alt

export default function ImageComponent() {

    const [images, setImages] = useState<ImageInfo[]>([])

    return (
        <Box>
            <ImageForm setImages={setImages}/>
            <ImageGallery images={images}/>
        </Box>
    )
}