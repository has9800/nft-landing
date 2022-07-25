/* eslint-disable @next/next/no-img-element */
import statsData from "./statsData";
import styles from "./stats.module.css";

function Stats() {
  return (
    <div className={styles.statsContainer}>
      {statsData.map(({ id, src, text }) => (
        <div key={id} className={styles.statsCard}>
          <img src={src} alt="text" className={styles.statsImage} />
          <p className={styles.statsText}>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
