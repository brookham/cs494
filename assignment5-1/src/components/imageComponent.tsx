'use client'

import { useState } from "react"
import { Box } from "@mui/material"
import { ImageInfo } from "@/types/imageInfo"
import ImageForm from "./imageForm"
import ImageGallery from "./imageGallery"

export default function ImageComponent() {

    const [images, setImages] = useState<ImageInfo[]>([])

    return (
        <Box>
            <ImageForm setImages={setImages} />
            <ImageGallery images={images} />
        </Box>
    )
}