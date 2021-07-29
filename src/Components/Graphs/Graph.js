import React from "react";
import BitcoinGraph from "./CryptoGraph/BitcoinGraph";
import EthereumGraph from "./CryptoGraph/EthereumGraph";
import CardanoGraph from "./CryptoGraph/CardanoGraph";
import DogeGraph from "./CryptoGraph/DogeGraph";
import PolygonGraph from "./CryptoGraph/PolygonGraph";
import TetherGraph from "./CryptoGraph/TetherGraph";
import BinanceCoinGraph from "./CryptoGraph/BinanceCoinGraph";
import RippleGraph from "./CryptoGraph/RippleGraph";
import BittorrentGraph from "./CryptoGraph/BittorrentGraph";
import EthereumClassicGraph from "./CryptoGraph/EthereumClassicGraph";
import styles from "./Graph.module.css";

//All Graphs will be imported to this component and then to app component
const Graph = () => {
  return (
    <React.Fragment>
      <div id={"graphs"} className={styles.heading}>
        <h2>Top Cryptocurrency Graphs</h2>
        <div className={styles.graph}>
          <BitcoinGraph />
          <EthereumGraph />
          <TetherGraph />
          <CardanoGraph />
          <BinanceCoinGraph />
          <RippleGraph />
          <DogeGraph />
          <PolygonGraph />
          <EthereumClassicGraph />
          <BittorrentGraph />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Graph;
