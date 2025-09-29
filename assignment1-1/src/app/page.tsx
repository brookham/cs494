import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <table className={styles["my-table"]}>
        <thead>
          <tr>
            <th>
              Time
            </th>
            <th>
              Monday
            </th>
            <th>
              Tuesday
            </th>
            <th>
              Wednesday
            </th>
            <th>
              Thursday
            </th>
            <th>
              Friday
            </th>
            <th>
              Saturday
            </th>
            <th>
              Suday
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">8-9:50</th>
            <td>
              computer networks
            </td>
            <td>
              intro to AI
            </td>
            <td>
              computer networks
            </td>
            <td>
              intro to AI
            </td>
            <td></td>
            <td></td>
            <td></td>
            
          </tr>
          <tr>
            <th scope="row">10-11:50</th>
            <td>
            software engineering
            </td>
            <td>
            </td>
            <td>
            software engineering
            </td>
            <td>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">12-1:50</th>
            <td>
            adv web dev
            </td>
            <td>
            </td>
            <td>
            adv web dev
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
