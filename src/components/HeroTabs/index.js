import { useState } from "react";
import "./styles.css";
import SaveSmart from "./save-smart";

const mutualFunds = [
  {
    name: "LIC MF Infrastructure Growth Direct Plan",
    value: 54.6185,
    projection: [
      {
        term: "1Y",
        value: 86.23,
      },
      {
        term: "3Y",
        value: 38.63,
      },
    ],
  },
  {
    name: "Invesco India Infrastructure Growth Direct Plan",
    value: 79.41,
    projection: [
      {
        term: "1Y",
        value: 85.06,
      },
      {
        term: "3Y",
        value: 38.39,
      },
    ],
  },
  {
    name: "Quant Infrastructure Growth Direct Plan",
    value: 46.3138,
    projection: [
      {
        term: "1Y",
        value: 82.37,
      },
      {
        term: "3Y",
        value: 38.36,
      },
    ],
  },
];

const stocks = [
  {
    name: "Bharat Heavy Electricals Ltd",
    value: 305.65,
    projection: [
      {
        term: "1Y",
        value: 259.42,
      },
    ],
    marketCap: "1.1 Lac Cr",
  },
  {
    name: "REC Ltd",
    value: 532.45,
    projection: [
      {
        term: "1Y",
        value: 244.29,
      },
    ],
    marketCap: "1.4 Lac Cr",
  },
  {
    name: "Power Finance Corp Ltd",
    value: 509.8,
    projection: [
      {
        term: "1Y",
        value: 213.76,
      },
    ],
    marketCap: "1.7 Lac Cr",
  },
];

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
