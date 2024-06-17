import Button from "../Shared/Button";
import "./styles.css";
import { heroVariants } from "../../constants";

export default function Hero({ tabIndex }) {
  const hero = heroVariants[tabIndex];
  return (
    <div className="hero">
      <img src={hero.image} alt="Two investors meet" />
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      <div className="btn-group">
        <Button innerText="Log in" variant="primary" />
        <Button innerText="Sign up" variant="secondary" />
      </div>
    </div>
  );
}
