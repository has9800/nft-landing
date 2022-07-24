/* eslint-disable @next/next/no-img-element */
import navStyles from "./navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/Sygnet.png";

function Navbar() {
  const navLinks = ["Auctions", "Roadmap", "Discover", "Community"];

  return (
    <div className={navStyles.navbar}>
      <div>
        <img src={logo.src} alt="nftea" className={navStyles.logo} />
      </div>
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
        <AiOutlineMenu className={navStyles.menuIcon} />
      </div>
    </div>
  );
}

export default Navbar;
