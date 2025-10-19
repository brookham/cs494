export type Pokemon = {
    id: number,
    image: string,
    shiny: string,
    name: string,
    types: string[],
    abilities: string[],
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefense: number,
    speed: number
    meters: number,
    inches: number,
    kilo: number,
    pounds: number

}

export function mapPokemon(data: any): Pokemon{
    return {
        id: data.id,
        image: data.image,
        shiny: data.shiny_image,
        name: data.name,
        types: data.types,
        abilities: data.abilities,
        hp: data.stats.hp,
        attack: data.stats.attack,
        defense: data.stats.defense,
        specialAttack: data.stats["special-attack"],
        specialDefense: data.stats["special-defense"],
        speed: data.stats.speed,
        meters: data.height.meters,
        inches: data.height.inches,
        kilo: data.weight.kilograms,
        pounds: data.weight.pounds

    }
}
