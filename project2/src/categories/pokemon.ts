export type Pokemon = {
    id: number,
    image: string,
    shiny: string,
    name: string,
    types: string,
    abilities: string,
    stats: {
        hp: number,
        atk: number,
        def: number,
        spA: number,
        spD: number,
        speed: number
    },
    
    meters: number,
    inches: number,
    kilo: number,
    pounds: number

}

export function mapPokemon(data: any): Pokemon{
    return {
        id: data.id,
        image: data.image,
        shiny: data.shiny,
        name: data.name,
        types: data.types,
        abilities: data.abilities,
        stats:{
            hp: data.hp,
            atk: data.atk,
            def: data.def,
            spA: data.spA,
            spD: data.spD,
            speed: data.speed
        },
   
        meters: data.meters,
        inches: data.inches,
        kilo: data.kilo,
        pounds: data.pounds

    }
}