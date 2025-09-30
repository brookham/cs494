
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.myDiv}>
      <h1 className={styles.myHeader}>My Exploration!</h1>
      <div>
        <h3>My Favorite Video Games:</h3>
        <ul>
          <li>God of War</li>
          <li>The Last of Us</li>
          <li>Project Zomboid</li>
        </ul>
      </div>
      <div>
        <h3>My Schedule</h3>
        <table>
          <thead>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
          </thead>
          <tbody>
            <tr>
              <td>class</td>
              <td>class</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
