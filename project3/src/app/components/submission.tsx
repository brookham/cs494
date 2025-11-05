
import { useState } from "react"
import { Track } from "@/types/tracks"
import { Button, TextField, Box } from "@mui/material"

export default function Submission(props: { setTrack: (track: Track[]) => void }) {
    const [query, setQuery] = useState<string>("")

    function submitSearch() {
        const url = `/api/search?search=${query}&limit=20`
        fetch(url)
            .then(r => r.json())
            .then(data => props.setTrack(data.search || []))
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <TextField
                id="query"
                value={query}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setQuery(event.target.value)}}
            />
            <Button onClick={submitSearch}>
                Search
            </Button>
        </Box>
    );
}
