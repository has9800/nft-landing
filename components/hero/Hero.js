/* eslint-disable @next/next/no-img-element */
import heroStyles from "./hero.module.css";

const Logos = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.squares}>
        <div className={heroStyles.content}>
          <h1 className={heroStyles.caption}>Non Fungible Tokens</h1>
          <h1 className={heroStyles.title}>A New NFT Experience</h1>
          <p className={heroStyles.desc}>Discover, Collect, and Sell</p>
          <div className={heroStyles.inputContainer}>
            <input
              type="text"
              className={heroStyles.input}
              placeholder="Items, collections, & creators"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
