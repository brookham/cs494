import adventureData from "@/data/adventure.json"

import Link from "next/link"

type Node = {
    text: string,
    options: {[key: string] : string}
}

type Nodes = {
    [key: string] : Node
}

const nodes = adventureData as Nodes

export default async function Home(props: {params: Promise<{slug: string}>}){
    const params = await props.params
    const slug = params.slug
    
    const node = nodes[slug]

    if (!node){
        return <div>your story has ended</div>
    }

    function getOptions(){
        const options = []
        const optionsData = Object.entries(node.options)
        for (let i = 0; i < optionsData.length; i++){
            const url = "/adventure/" + optionsData[i][0]
            options.push(<Link key={i} href={url}>{optionsData[i][1]}</Link>)
        }
        return options
    }

    return (
        <div>
            <div>{node.text}</div>
            <div>{getOptions()}</div>
        </div>
    )
}