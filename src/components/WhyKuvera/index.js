import { whyKuvera } from "../../constants";
import "./styles.css";
import Button from "../Shared/Button";

export default function WhyKuvera() {
  return (
    <div className="why-kuvera">
      <p>Why Kuvera</p>
      <h1>Because, your best interest is ours too.</h1>
      <div className="why-kuvera-hero">
        <div className="why-kuvera-info">
          {whyKuvera.map((why, index) => {
            return (
              <div key={index}>
                <h3>{why.title}</h3>
                <p>{why.description}</p>
                {why.anchor ? (
                  <a href={why.anchor.endpoint}>{why.anchor.text}</a>
                ) : null}
              </div>
            );
          })}
        </div>
        <img
          src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/why-kuvera-ill.svg"
          alt="Why Kuvera"
        />
      </div>
      <Button variant="primary" innerText="Start investing" />
    </div>
  );
}
