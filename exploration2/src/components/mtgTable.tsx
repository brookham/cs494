import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import { TableContainer, Table, TableHead, TableBody } from "@mui/material"

import StyledTableRow from "@/components/styledTableRow"

import StyledTableCell from "@/components/styledTableCell"

import { MtgCard } from "@/types/mtgCard"

import Image from "next/image"

import { useState, useEffect } from "react"

export default function MtgTable(props: { cards: MtgCard[] }) {

    const [sortedCards, setSortedCards] = useState<MtgCard[]>(props.cards)

    const [filteredCards, setFilteredCards] = useState<MtgCard[]>(props.cards)

    const [ascending, setAscending] = useState<boolean>(true)

    const [colorFilters, setColorFilters] = useState<string[]>([])

    useEffect(()=>{
        let tmpArray = sortedCards

        for (let i = 0; i < colorFilters.length; i++){
            tmpArray = tmpArray.filter((card)=>card.manaCost.includes(colorFilters[i]))
        }

        setFilteredCards([...tmpArray])

    }, [colorFilters, sortedCards])

    function addColorFilter(filter: string){
        if (!colorFilters.includes(filter)){
            setColorFilters([...colorFilters, filter])
        }
        
    }

    function deleteColorFilter(filter: string){
        setColorFilters([...colorFilters.filter(x => x != filter)])
    }
    
    function getElementFromCost(cost: string, i: number, add: boolean){
        if (["{W}", "{B}", "{U}", "{R}", "{G}"].includes(cost)){
            return <Image key={i} style={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{add ? addColorFilter(cost) : deleteColorFilter(cost)}} alt={cost} width={20} height={20}src={`/images/${cost.slice(1, -1)}.svg`}/>
        }
        else {
            return <span key={i}>{cost}</span>
        }
    }

    function sort(col: "cmc" | "name" | "oracleText" | "flavorText"){
        if (col == "cmc"){
            //number sort
        setSortedCards([...sortedCards.sort((a: MtgCard, b: MtgCard) => ascending ? a[col] - b[col] : b[col] - a[col])])
        }
        else {
        //string sort
         setSortedCards([...sortedCards.sort((a: MtgCard, b: MtgCard) => ascending ? a[col].localeCompare(b[col]) : b[col].localeCompare(a[col]))])
        }

    setAscending(!ascending)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("name")}}/></StyledTableCell>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>ManaCost {colorFilters.map((filter, i) => getElementFromCost(filter, i, false))}</StyledTableCell>
                        <StyledTableCell width={60}>CMC<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("cmc")}} /></StyledTableCell>
                        <StyledTableCell>Oracle Text<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("oracleText") }}/></StyledTableCell>
                        <StyledTableCell>Flavor Text<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("flavorText") }}/></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredCards.map((card, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell>{card.name}</StyledTableCell>
                                <StyledTableCell><Image alt={card.name} width={50} height={70} src={card.image}/></StyledTableCell>
                                <StyledTableCell>{card.manaCost.map((cost, i) =>
                                getElementFromCost(cost, i, true)
                                )}</StyledTableCell>
                                <StyledTableCell>{card.cmc}</StyledTableCell>
                                <StyledTableCell>{card.oracleText}</StyledTableCell>
                                <StyledTableCell>{card.flavorText}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}

