import HeaderTable from "@/component/header";
import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <div>
      <HeaderTable />
      <h1>Projects Page</h1>
      <div className={styles["project-container"]}>
        <div className={styles["project-box"]}>
          <h3>SMAF page</h3>
          <p>I built a front and back end website for the soil management assessment framework known as SMAF
            for one of my buddies currently in the field of computer science. i am not quite finished with it, stll needs a few finishing touches,
            but it helped me learn alot about web development and implementation.
          </p>
        </div>
        <div className={styles["project-box"]}>
          <h3>Portfolio project</h3>
          <p>I am currently working on a portfolio project/merchendice website using the Next.js framework for my cousing that will alloe him to showcase and
            sell his photography. this is a really cool project for a few reasons; there are some fun challanges with figuring out how
            the sales and other aspects will work, i get to practice my requiremnts gatherng skills, and hopefully make something that will be
            used by many people
          </p>
        </div>
        <div className={styles["project-box"]}>
          <h3>Vampire Survival Clone</h3>
          <p>I made a cool vampire survivor clone a few months ago using the Gadot engine, this was a super fun project that introduced
            me to game development. this project inspired me to start working on more personla projects that i am passionate about.
            it was also really fun being able to be more creative in the world of computer science and just do stuff i think is cool
          </p>
        </div>
      </div>
    </div>
  );
}