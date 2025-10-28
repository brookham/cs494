export type Word = {
    name: string,
    definitions: Definition[]

}

type Definition = {
    definitions: string[]
    partOfSpeech: string
}

type rawDef = {
    shortdef: string[],
    fl:string
}

export function wordFromJson(name: string, rawDefs: rawDef[]): Word{

    const defs = rawDefs.map((rawDef)=>{return {partOfSpeech: rawDef.fl, definitions: rawDef.shortdef}})

    return {
        name: name, 
        definitions: defs
    }
}