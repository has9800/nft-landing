/* eslint-disable @next/next/no-img-element */
import styles from "./featuresInfo.module.css";

function FeaturesInfo({ url, title, caption, desc, children }) {
  return (
    <div className={styles.featuresInfoContainer}>
      <div className={styles.featuresContent}>
        <p className={styles.featuresCaption}>{caption}</p>
        <h1 className={styles.featuresTitle}>{title}</h1>
        <p className={styles.featuresDesc}>{desc}</p>
        <div className={styles.featuresChildren}>{children}</div>
        <div className={styles.featuresBtnContainer}>
          <button type="button" className={styles.featuresPrimaryBtn}>
            Get Started
          </button>
          <button type="button" className={styles.featuresSecondaryBtn}>
            Learn More
          </button>
        </div>
      </div>
      <div className={styles.featuresImageContainer}>
        <img src={url} alt="" className={styles.featuresImage} />
      </div>
    </div>
  );
}

export default FeaturesInfo;
