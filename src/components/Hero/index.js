import Button from "../Shared/Button";
import "./styles.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/intro-ill.svg"
        alt="Two investors meet"
      />
      <h1>Online investing in India simplified - Kuvera</h1>
      <p>Zero fee. Higher return.</p>
      <div className="btn-group">
        <Button innerText="Log in" variant="primary" />
        <Button innerText="Sign up" variant="secondary" />
      </div>
    </div>
  );
}
