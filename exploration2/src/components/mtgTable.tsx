import { TableContainer, Table, TableHead, TableBody } from "@mui/material"

import StyledTableRow from "@/components/styledTableRow"

import StyledTableCell from "@/components/styledTableCell"

import { MtgCard } from "@/types/mtgCard"


import Image from "next/image"

export default function MtgTable(props: { cards: MtgCard[] }) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>ManaCost</StyledTableCell>
                        <StyledTableCell>CMC</StyledTableCell>
                        <StyledTableCell>Oracle Text</StyledTableCell>
                        <StyledTableCell>Flavor Text</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        props.cards.map((card, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell>{card.name}</StyledTableCell>
                                <StyledTableCell><Image alt={card.name} width={50} height={70} src={card.image}/></StyledTableCell>
                                <StyledTableCell>{card.manaCost.join(", ")}</StyledTableCell>
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