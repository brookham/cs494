import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"

import { MtgCard } from "@/types/mtgCard"

import Image from "next/image"

export default function MtgTable(props: { cards: MtgCard[] }) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>ManaCost</TableCell>
                        <TableCell>CMC</TableCell>
                        <TableCell>Oracle Text</TableCell>
                        <TableCell>Flavor Text</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.cards.map((card, i) => (
                            <TableRow key={i}>
                                <TableCell>{card.name}</TableCell>
                                <TableCell><Image alt={card.name} width={50} height={70} src={card.image}/></TableCell>
                                <TableCell>{card.manaCost}</TableCell>
                                <TableCell>{card.cmc}</TableCell>
                                <TableCell>{card.oracleText}</TableCell>
                                <TableCell>{card.flavorText}</TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}