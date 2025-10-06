import Image from "next/image"
import HeaderTable from "@/component/header"
import styles from "@/app/page.module.css"



export default function Home() {
  return (
    <div>
      <HeaderTable />
      <h1>Home Page</h1>
      <div>
      <Image className={styles["profile-image"]}
        src={"/images/profile.jpg"}
        alt="picture of me"
        width={250}
        height={250}
      />
      </div>
      <div className={styles["intro-box"]}>
        <h3>Hello! I am Brook Hamilton</h3>
        <p>i am currently a student at Oregon STate University in Bend Oregon.
          i am pursuing a degree in computer science and live the outdoors and all types of fun stuff.
          if you would like to know more about me and what i have been working on,
          feel free to poke around my portfolio and and get in touch with me</p>
      </div>
    </div>
  );
}
