/* eslint-disable @next/next/no-img-element */
import styles from "./services.module.css";
import topNft from "../../assets/top-nft.png";
import hotSale from "../../assets/hot-sale.png";
import getStarted from "../../assets/get-started.png";

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.serviceImageContainer}>
        <img src={hotSale.src} alt="sale" className="" />
      </div>
      <div className={styles.serviceImageContainer}>
        <img src={getStarted.src} alt="get-started" className="" />
      </div>
      <div className={styles.serviceImageContainer}>
        <img src={topNft.src} alt="top-nft" className="" />
      </div>
    </div>
  );
}

export default Services;
