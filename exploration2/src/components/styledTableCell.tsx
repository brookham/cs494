'use client'
import { TableCell, tableCellClasses } from '@mui/material'
import { styled } from '@mui/system'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: { //backticks for template litterals
        backgroundColor: '#003366',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: '12px',
    }
}))

export default StyledTableCell