export type Word = {
    name: string,
    definitions: Definition[]

}

type Definition = {
    definition: string,
    partOfSpeech: string
}

type rawDef = {
    shortdef: string[],
    fl:string
}

export function wordFromJson(name: string, rawDefs: rawDef[]): Word{
    const definitions: Definition[] = []

    for (let i = 0; i < rawDefs.length; i++){

        const partOfSpeech = rawDefs[i].fl

        for (let j = 0; j < rawDefs[i].shortdef.length; j++){
            const definition = {
                partOfSpeech: partOfSpeech,
                definition: rawDefs[i].shortdef[j]
            }
            definitions.push(definition)
        }
    }

    return {
        name: name,
        definitions: definitions
    }
}