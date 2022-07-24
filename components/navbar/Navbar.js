import navStyles from "./navbar.module.css";

function Navbar() {
  const navLinks = ["Auctions", "Roadmap", "Discover", "Community"];

  return (
    <div className={navStyles.navbar}>
      <div>Logo</div>
      <div>
        <ul className={navStyles.navList}>
          {navLinks.map((item) => (
            <li key={item} className={navStyles.navItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button type="button" className={navStyles.navBtn}>
          My Account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
