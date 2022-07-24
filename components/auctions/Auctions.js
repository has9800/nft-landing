import AuctionCard from "./AuctionCard";
import auctionData from "./auctionData";
import auctionStyles from "./auctions.module.css";

function Auctions() {
  return (
    <div>
      <div className={auctionStyles.headingContainer}>
        <div className={auctionStyles.auctionsHeadingContainer}>
          <h1 className={auctionStyles.heading}>Latest Live Auctions </h1>
          <div
            className={`${auctionStyles.circle} ${auctionStyles.pulse} `}
          ></div>
        </div>
      </div>
      <div className={auctionStyles.auctionsContainer}>
        {auctionData.map(({ id, url, title, likes, bids, price, time }) => (
          <AuctionCard
            key={id}
            url={url}
            title={title}
            likes={likes}
            bids={bids}
            price={price}
            time={time}
          />
        ))}
      </div>
    </div>
  );
}

export default Auctions;
