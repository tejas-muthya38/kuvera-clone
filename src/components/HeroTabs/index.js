import { useState } from "react";
import "./styles.css";
import SaveSmart from "./save-smart";
import { mutualFunds, stocks } from "../../constants";

export default function HeroTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const tab = tabIndex === 0 ? mutualFunds : stocks;
  return (
    <div className="hero-tabs">
      <ul>
        <li
          className={`${tabIndex === 0 ? "active" : ""}`}
          onClick={() => setTabIndex(0)}
        >
          Mutual Funds
        </li>
        <li
          className={`${tabIndex === 1 ? "active" : ""}`}
          onClick={() => setTabIndex(1)}
        >
          Stocks
        </li>
        <li
          className={`${tabIndex === 2 ? "active" : ""}`}
          onClick={() => setTabIndex(2)}
        >
          SaveSmart
        </li>
      </ul>
      {tabIndex !== 2 ? (
        <div className="tabs-data">
          {tab.map((ele, index) => {
            return (
              <div className="unit-data" key={index}>
                <p>{ele.name}</p>
                <div className="unit-info">
                  <div>
                    <span>Price</span>
                    <p>₹{ele.value}</p>
                  </div>
                  {ele.projection.map(({ term, value }, index) => {
                    return (
                      <div key={index}>
                        <span>{term}</span>
                        <p>{value}%</p>
                      </div>
                    );
                  })}
                  {ele.marketCap ? (
                    <div>
                      <span>Market cap</span>
                      <p>{ele.marketCap}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <SaveSmart />
      )}
    </div>
  );
}
