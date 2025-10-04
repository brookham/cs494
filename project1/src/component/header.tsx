import Link from "next/link"

export default function HeaderTable() {
    return (
        <table>
            <tbody>
                <tr>
                    <td><Link href="/">Home</Link></td>
                    <td><Link href="/projects">Projects</Link></td>
                    <td><Link href="/contact">Contact</Link></td>
                </tr>
            </tbody>
        </table>
    )
}