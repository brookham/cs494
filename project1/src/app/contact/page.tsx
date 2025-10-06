import HeaderTable from "@/component/header";
import Link from "next/link"
import Image from "next/image"
import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <div>
      <HeaderTable />
      <h1>Contact Page</h1>
      <div className={styles["contact-container"]}>
      <div className={styles["contact-item"]}>
        <Link href="https://www.linkedin.com/in/brook-hamilton-b837a5332/"><Image src={"/images/LI-In-Bug.png"}
          alt="linkedin logo"
          width={100}
          height={100} /></Link>
          <h3>LinkedIn</h3>
      </div>
      <div className={styles["contact-item"]}>
        <Link href="https://github.com/brookham"><Image src={"/images/github-mark.png"}
          alt="github logo"
          width={100}
          height={100} /></Link>
          <h3>GitHub</h3>
      </div>
      <div className={styles["contact-item"]}>
      <Link href="mailto:bhamilton3264@gmail.com"><Image src={"/images/gmail.png"}
        alt="gmail logo"
        width={100}
        height={100} /></Link>
        <h3>Gmail</h3>
        </div>
    </div>
    </div>
  );
}