import HeaderTable from "@/component/headerTable"

export default function Home() {
    return (
        <div>
            <HeaderTable/>
            <h3>My Favorite Video Games:</h3>
            <ul>
                <li>God of War</li>
                <li>The Last of Us</li>
                <li>Project Zomboid</li>
            </ul>
        </div>
    )
}