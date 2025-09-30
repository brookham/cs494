
import styles from "./page.module.css";

import HeaderTable from "@/component/headerTable";

export default function Home() {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday"]

  function greet(name: string) {
    return `Hello, ${name}`
  }

  const daysAndActivities = [
    {
      day: "Sunday",
      activity: "Work"
    },
    {
      day: "Monday",
      activity: "Class"
    },
    {
      day: "Tuesday",
      activity: "class"
    }

  ]

  return (
    <div className={styles.myDiv}>
      <HeaderTable/>
      <h1 className={styles.myHeader}>{greet("Brook")}</h1>

      <div>
        <h3>My Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>{daysAndActivities[0].day}</th>
              <th>{daysAndActivities[1].day}</th>
              <th>{daysAndActivities[2].day}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{daysAndActivities[0].activity}</td>
              <td>{daysAndActivities[1].activity}</td>
              <td>{daysAndActivities[2].activity}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div>
        <p>PI = {Math.PI}</p>
        <p>2PI = {2 * Math.PI}</p>
      </div>
    </div>
  );
}
