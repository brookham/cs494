import { Box } from "@mui/material";
import Image from "next/image";
import { ImageInfo } from "@/types/imageInfo";

export default function ImageGallery(props: {images: ImageInfo[]}){
    return (
        <Box
                sx={{ display: 'flex', flexWrap: 'wrap' }}

            >
                {props.images.map((image: ImageInfo, i: number) =>
                    <Box key={i}
                        sx={{
                            position: 'relative',
                            height: 200,
                            m: 1,
                            aspectRatio: image.width / image.height, // update this to use the actual image  width / height to create a better aspect ratio
                        }}
                    >
                        <Image
                            src={image.url}
                            alt={image.url}
                            fill
                            style={{ objectFit: "cover"}} />

                    </Box>)}
            </Box>
    )
}