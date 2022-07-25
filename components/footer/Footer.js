import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h1 className={styles.footerContentTitle}>NFT Landing</h1>
      </div>
      <div className={styles.footerNavbar}>
        <p className={styles.footerNavbarItem}>Support</p>
        <p className={styles.footerNavbarItem}>License</p>
        <p className={styles.footerNavbarItem}>Terms of Service</p>
      </div>
      <div>
        <button className={styles.footerBtn}>Get Started</button>
      </div>
    </div>
  );
}

export default Footer;
