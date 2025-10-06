import Link from "next/link"
import styles from "@/app/page.module.css"

export default function HeaderTable() {
    return (
        <div className={styles["my-header"]}>
            <h1>Brooks Portfolio Page</h1>
            <header>
                <table>
                    <tbody>
                        <tr>
                            <td><Link href="/">Home</Link></td>
                            <td><Link href="/projects">Projects</Link></td>
                            <td><Link href="/contact">Contact</Link></td>
                        </tr>
                    </tbody>
                </table>
            </header>
        </div>
    )
}