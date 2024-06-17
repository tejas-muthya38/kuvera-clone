import "./styles.css";
import { features } from "../../constants";
import Button from "../Shared/Button";

export default function Features() {
  return (
    <div className="features">
      <p>Invest your way</p>
      <h1>One login. All features.</h1>
      <div className="features-list">
        {features.map((feature, index) => {
          return (
            <div className="feature-data">
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="/">Learn more</a>
              <Button variant="secondary" innerText={feature.buttonText} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
