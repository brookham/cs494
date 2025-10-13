import sharp from 'sharp'

export async function fetchImageRGB(url: string){
    const imageData = await fetchImageData(url)
    return getAverageRGB(imageData)
}

async function fetchImageData(url: string){
    const r = await fetch(url)

    const arrayBuffer = await r.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const sharpData = await sharp(buffer)
        .raw()
        .ensureAlpha()
        .toBuffer({ resolveWithObject: true })

    return { data: sharpData.data, info: sharpData.info }
}

function getAverageRGB(imageData: {data: Buffer, info: sharp.OutputInfo}){

    const totalPixels = imageData.info.height * imageData.info.width


    let r = 0
    let g = 0
    let b = 0

    for (let i = 0; i < imageData.data.length; i += imageData.info.channels){
        r += imageData.data[i]
        g += imageData.data[i + 1]
        b += imageData.data[i + 2]
    }

    return {
        r: Math.floor(r / totalPixels),
        g: Math.floor(g / totalPixels),
        b: Math.floor(b / totalPixels),
    }

}