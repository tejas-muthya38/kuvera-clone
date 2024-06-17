import "./styles.css";
import { fundHouses } from "../../constants";
export default function FundHouses() {
  return (
    <div className="fundhouses">
      <div className="fundhouses-hero">
        <p>Industry Leading</p>
        <h1>46 Fund houses</h1>
        <img
          src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/38-funds-ill.svg"
          alt="fund houses"
        />
      </div>
      <div className="fundhouses-list">
        {fundHouses.map((fundHouse, index) => (
          <a key={index} href={fundHouse.endpoint}>
            {fundHouse.name}
          </a>
        ))}
      </div>
    </div>
  );
}
