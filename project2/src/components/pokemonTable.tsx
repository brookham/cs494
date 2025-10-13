import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"

import { Pokemon } from "@/categories/pokemon"

import Image from "next/image"

export default function PokemonTable(props: { cards: Pokemon[] }) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Types</TableCell>
                        <TableCell>Abilities</TableCell>
                        <TableCell>Hp</TableCell>
                        <TableCell>Atk</TableCell>
                        <TableCell>Def</TableCell>
                        <TableCell>Special Atk</TableCell>
                        <TableCell>Special Def</TableCell>
                        <TableCell>Speed</TableCell>
                        <TableCell>Height</TableCell>
                        <TableCell>Weight</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.cards.map((card, i) => (
                            <TableRow key={i}>
                                <TableCell>{card.id}</TableCell>
                                <TableCell><Image alt={card.name} width={50} height={70} src={card.image}/></TableCell>
                                <TableCell>{card.name}</TableCell>
                                <TableCell>{card.types}</TableCell>
                                <TableCell>{card.abilities}</TableCell>
                                <TableCell>{card.stats.hp}</TableCell>
                                <TableCell>{card.stats.atk}</TableCell>
                                <TableCell>{card.stats.def}</TableCell>
                                <TableCell>{card.stats.spA}</TableCell>
                                <TableCell>{card.stats.spD}</TableCell>
                                <TableCell>{card.stats.speed}</TableCell>
                                <TableCell>{card.meters}</TableCell>
                                <TableCell>{card.kilo}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
