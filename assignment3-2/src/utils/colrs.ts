import { RGB } from "@/types/imageData";

export function getColorValue(rgb: RGB, color: ("r" | "g" | "b" )){
    const options = ["r", "g", "b"]

    const others = options.filter((c)=>c !== color) as ("r" | "g" | "b")[]

    const averageOthers = (rgb[others[0]] + rgb[others[1]]) / 2

    return rgb[color] - averageOthers
}