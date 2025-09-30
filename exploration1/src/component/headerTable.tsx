import Link from "next/link"

export default function HeaderTable() {
    return (
        <table>
            <tbody>
                <tr>
                    <td><Link href="/">Home</Link></td>
                    <td><Link href="/favorite-video-games">My Favorite Video Games</Link></td>
                    <td><Link href="/my-schedule">My Schedule</Link></td>
                </tr>
            </tbody>
        </table>
    )
}