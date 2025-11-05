'use client'

import { useState } from "react"
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from "@mui/material"
import Submission from "@/app/components/submission"
import { Track } from "@/types/tracks"
import SpotifyPlayer from "@/app/components/spotifyPlayer"

export default function Home() {
    const [track, setTrack] = useState<Track[]>([])
    const [uri, setUri] = useState<string | null>(null)

    return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    minHeight: '100vh',
                }}
            >
                {uri ? (
                    <Box >
                        <SpotifyPlayer uri={uri} />
                    </Box>
                ) : null}

                <Box>
                    <Submission setTrack={setTrack} />
                    <Box>
                        <List >
                            {track.map(track => (
                                <ListItem key={track.uri} sx={{ border: '1px solid grey', backgroundColor: 'lightgreen' }}>
                                    <ListItemButton onClick={() => setUri(track.uri)}>
                                        <ListItemAvatar>
                                            <Avatar src={track.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={track.name}
                                            secondary={track.artists}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
    );
}