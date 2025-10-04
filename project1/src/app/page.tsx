import Image from "next/image"
import HeaderTable from "@/component/header"
import Profile from "@/images/profile.jpg"


export default function Home() {
  return (
      <div>
        <HeaderTable/>
        <h1>Home Page</h1>
        <Image
        src={Profile}
        alt="picture of me"
        width={500}
        height={500}
        />
      </div>
  );
}
