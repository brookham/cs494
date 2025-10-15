import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import { TableContainer, Table, TableHead, TableBody } from "@mui/material"

import StyledTableRow from "@/components/styledTableRow"

import StyledTableCell from "@/components/styledTableCell"

import { MtgCard } from "@/types/mtgCard"

import Image from "next/image"

import { useState } from "react"

export default function MtgTable(props: { cards: MtgCard[] }) {

    const [sortedCards, setSortedCards] = useState<MtgCard[]>(props.cards)

    const [ascending, setAscending] = useState<boolean>(true)

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
                        <StyledTableCell>ManaCost</StyledTableCell>
                        <StyledTableCell width={60}>CMC<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("cmc")}} /></StyledTableCell>
                        <StyledTableCell>Oracle Text<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("oracleText") }}/></StyledTableCell>
                        <StyledTableCell>Flavor Text<UnfoldMoreIcon sx={{verticalAlign: "middle", cursor: "pointer"}} onClick={()=>{sort("flavorText") }}/></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedCards.map((card, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell>{card.name}</StyledTableCell>
                                <StyledTableCell><Image alt={card.name} width={50} height={70} src={card.image}/></StyledTableCell>
                                <StyledTableCell>{card.manaCost.map((cost, i) =>
                                getElementFromCost(cost, i)
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

function getElementFromCost(cost: string, i: number){
    if (["{W}", "{B}", "{U}", "{R}", "{G}"].includes(cost)){
        return <Image key={i} style={{verticalAlign: "middle"}} alt={cost} width={20} height={20}src={`/images/${cost.slice(1, -1)}.svg`}/>
    }
    else return <span key={i}>{cost}</span>
}