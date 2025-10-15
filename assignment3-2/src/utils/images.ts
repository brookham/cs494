import sharp from 'sharp'

import { ImageData } from '@/types/imageData'

export async function fetchImages(imageCount: number): Promise<ImageData[]> {
    const url = `https://boringapi.com/api/v1/photos?limit=${imageCount}`

    const r = await fetch(url)
    const data = await r.json()

    const photoData = await Promise.all(
        data.photos.map(async (photo: ImageData) => ({
            title: photo.title,
            description: photo.description,
            url: photo.url,
            rgb: await getAverageColor(photo.url),
        }))
    )

    return photoData

}

async function getAverageColor(url: string) {
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());

    const imageData = await sharp(buffer)
        .resize(1, 1)
        .raw()
        .toBuffer({ resolveWithObject: true });

    const [r, g, b] = imageData.data;
    return { r, g, b };
}