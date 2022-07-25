import styles from "./stats.module.css";
import { FaUserAlt } from "react-icons/fa";

const statsNumbers = [
  {
    id: 1.1,
    text: "300k",
    desc: "Users Active",
  },
  {
    id: 1.2,
    text: "52.5k",
    desc: "Artworks",
  },
  {
    id: 1.3,
    text: "17.5k",
    desc: "Artists",
  },
  {
    id: 1.4,
    text: "35.58",
    desc: "ETH Spent",
  },
];

function StatsNumbers() {
  return (
    <div className={styles.statsNumbersContainer}>
      <div className={styles.statsNumbers}>
        {statsNumbers.map(({ id, text, desc }) => (
          <div key={id} className={styles.statNumberDiv}>
            <h1 className={styles.statNumber}>{text}</h1>
            <p className={styles.statNumberDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsNumbers;
