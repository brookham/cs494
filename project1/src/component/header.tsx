import Link from "next/link"

export default function HeaderTable() {
    return (
        <div>
            <h1>Brooks Portfolio Page</h1>
        <table>
            <tbody>
                <tr>
                    <td><Link href="/">Home</Link></td>
                    <td><Link href="/projects">Projects</Link></td>
                    <td><Link href="/contact">Contact</Link></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}