import { useState } from "react"
import { Box, TextField, Button } from "@mui/material"
import { ImageInfo } from "@/types/imageInfo"

// TODO 2: Update this component to use the new image data type
// Update the Image mapping to also include the height, width, and description of the image as the alt

export default function ImageForm(props: {setImages: (images: ImageInfo[])=>void}) {

    const [query, setQuery] = useState<string>("")
    const [limit, setLimit] = useState<number>(10)

    function submitSearch() {
        const url = `/api/images?query=${query}&limit=${limit}`

        fetch(url)
            .then(r => r.json())
            .then(data => props.setImages(data.images))
    }

    


    return (
        <Box>
            <TextField
                id="image-query"
                label="Image Query"
                value={query}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setQuery(event.target.value);
                }}
            />
            <TextField
                id="limit"
                label="Limit"
                value={limit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setLimit(Number(event.target.value));
                }}
            />
            <Button
                onClick={() => { submitSearch() }}>
                Search
            </Button>
        </Box>
    )
}