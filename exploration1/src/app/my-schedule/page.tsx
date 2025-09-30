import style from "./page.module.css";

export default function Home() {

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
      <div>
        <h3>My Schedule</h3>
        <table className={style.scheduleTable}>
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
  );
}
