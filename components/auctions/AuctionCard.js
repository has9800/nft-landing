/* eslint-disable @next/next/no-img-element */
import styles from "./auctionCard.module.css";
import first from "../../assets/01.png";
import second from "../../assets/02.png";
import third from "../../assets/03.png";
import fourth from "../../assets/04.png";
import heartOutline from "../../assets/heart-outline.png";
import timer from "../../assets/timer.png";

function AuctionCard({ title, price, time, bids, likes, url }) {
  return (
    <div className={styles.cardContainer}>
      <div className="">
        <img src={url} alt="it aint workin" className={styles.cardImage} />
      </div>

      <div className={styles.cardHeadingContainer}>
        <div className={styles.cardHeading}>
          <h1 className={styles.cardTitle}>{title}</h1>
          <p className={styles.cardPrice}>{price}</p>
        </div>
        <div className={styles.cardTimeContainer}>
          <img src={timer.src} alt="timer" className={styles.cardTimeIcon} />
          <p className={styles.cardTime}>{time}</p>
        </div>
      </div>

      <div className={styles.cardDivider} />

      <div className={styles.cardFooter}>
        <div className={styles.cardAvatarContainer}>
          <img src={first.src} alt="" className={styles.cardAvatar} />
          <img src={second.src} alt="" className={styles.cardAvatar} />
          <img src={third.src} alt="" className={styles.cardAvatar} />
          <img src={fourth.src} alt="" className={styles.cardAvatar} />
        </div>
        <div className={styles.cardBids}>{bids}</div>
        <div className={styles.cardLikesContainer}>
          <img
            src={heartOutline.src}
            alt=""
            className={styles.cardLikesImage}
          />
          <p className={styles.cardLikes}>{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default AuctionCard;
