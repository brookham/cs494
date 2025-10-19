import { TableContainer, Table, TableHead, TableBody } from "@mui/material"

import StyledTableRow from "@/components/styledTableRow"

import StyledTableCell from "@/components/styledTableCell"

import { Pokemon } from "@/categories/pokemon"

import Image from "next/image"

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'

import { useState, useEffect } from "react"

import { Box } from "@mui/material"


export default function PokemonTable(props: { cards: Pokemon[] }) {

    const [isShiny, setIsShiny] = useState(false)

    const [sorted, setSorted] = useState<Pokemon[]>(props.cards)

    const [ascending, setAscending] = useState<boolean>(true)

    const [typeFilter, setTypeFilter] = useState<string[]>([])

    const [abilityFilter, setAbilityFilter] = useState<string[]>([])

    const [filteredType, setFilteredType] = useState<Pokemon[]>(props.cards)

    useEffect(()=>{
        let tmp = sorted
        for (let i = 0; i < typeFilter.length; i++){
            tmp = tmp.filter((card)=>card.types.includes(typeFilter[i]))
        }
        for (let i = 0; i < abilityFilter.length; i ++){
            tmp = tmp.filter((card)=>card.abilities.includes(abilityFilter[i]))
        }

        setFilteredType([...tmp])

    }, [typeFilter, abilityFilter, sorted])

    const typeColors: Record<string, string> = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    }

    function imageType(){
        setIsShiny(!isShiny)
    }

    function sort(col: "id" | "name" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "meters" | "kilo"){
        if (col == "name")
            setSorted([...sorted.sort((a: Pokemon, b: Pokemon) => ascending ? a[col].localeCompare(b[col]) : b[col].localeCompare(a[col]))])
        

        else{
            setSorted([...sorted.sort((a: Pokemon, b: Pokemon) => ascending ? a[col] - b[col] : b[col] - a[col])])
        }

        setAscending(!ascending)
    }
    function deleteTypeFilter(filter:string){
        setTypeFilter([...typeFilter.filter(x => x != filter)])
    }
    function deleteAbilityFilter(filter: string){
        setAbilityFilter([...abilityFilter.filter(x => x != filter)])
    }

    function getTypeFromTypes(type: string, i: number, add: boolean){
        if (["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "dragon", "dark", "steel", "fairy"].includes(type))
            return (<Box key={i} sx={{
                backgroundColor: typeColors[type],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                borderRadius: '9999px',
                padding: '4px 14px',
                fontSize: 14,
                fontWeight: 500,
                width: 'fit-content',
                textTransform: 'capitalize',
                margin: '4px auto',
                cursor: "pointer"
            }} onClick={()=>{add ? addTypeFilter(type) : deleteTypeFilter(type)}}>{type}</Box>)
        else{
            return <span key={i}>{type}</span>
        }
    }
    function getAblityFromAbilities(type: string, i:number, add: boolean){
        return (<Box key={i} sx={{
                backgroundColor: "#615f5fff",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffffff',
                borderRadius: '9999px',
                padding: '4px 14px',
                fontSize: 14,
                fontWeight: 500,
                width: 'fit-content',
                textTransform: 'capitalize',
                margin: '4px auto',
                cursor: "pointer"
            }} onClick={()=>{add ? addAbilityFilter(type) : deleteAbilityFilter(type)}}>{type}</Box>)
    }

    function addTypeFilter(filter: string){
        if (!typeFilter.includes(filter)){
            setTypeFilter([...typeFilter, filter])
        }
    }

    function addAbilityFilter(filter: string){
        if (!abilityFilter.includes(filter)){
            setAbilityFilter([...abilityFilter, filter])
        }
    }

    

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>No.<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("id")}} /></StyledTableCell>
                        <StyledTableCell onClick={imageType} sx={{cursor: "pointer"}}>{isShiny ? "Shiny" : "Image"}</StyledTableCell>
                        <StyledTableCell>Name<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("name")}} /></StyledTableCell>
                        <StyledTableCell>Types {typeFilter.map((filter, i)=>getTypeFromTypes(filter, i, false))}</StyledTableCell>
                        <StyledTableCell>Abilities {abilityFilter.map((filter, i)=>getAblityFromAbilities(filter, i, false))}</StyledTableCell>
                        <StyledTableCell>Hp<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("hp")}} /></StyledTableCell>
                        <StyledTableCell>Atk<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("attack")}} /></StyledTableCell>
                        <StyledTableCell>Def<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("defense")}} /></StyledTableCell>
                        <StyledTableCell>Special Atk<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("specialAttack")}} /></StyledTableCell>
                        <StyledTableCell>Special Def<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("specialDefense")}} /></StyledTableCell>
                        <StyledTableCell>Speed<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("speed")}} /></StyledTableCell>
                        <StyledTableCell>Height(M)<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("meters")}} /></StyledTableCell>
                        <StyledTableCell>Weight(Kg)<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("kilo")}} /></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredType.map((card, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell>{card.id}</StyledTableCell>
                                <StyledTableCell><Image alt={card.name} width={70} height={70} src={isShiny ? card.shiny : card.image}/></StyledTableCell>
                                <StyledTableCell>{card.name}</StyledTableCell>
                                <StyledTableCell>{card.types.map((type, i) =>
                                    getTypeFromTypes(type, i, true)
                                )}</StyledTableCell>
                                <StyledTableCell>{card.abilities.map((type, i) =>
                                    getAblityFromAbilities(type, i, true)
                                )}</StyledTableCell>
                                <StyledTableCell>{card.hp}</StyledTableCell>
                                <StyledTableCell>{card.attack}</StyledTableCell>
                                <StyledTableCell>{card.defense}</StyledTableCell>
                                <StyledTableCell>{card.specialAttack}</StyledTableCell>
                                <StyledTableCell>{card.specialDefense}</StyledTableCell>
                                <StyledTableCell>{card.speed}</StyledTableCell>
                                <StyledTableCell>{card.meters}</StyledTableCell>
                                <StyledTableCell>{card.kilo}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
