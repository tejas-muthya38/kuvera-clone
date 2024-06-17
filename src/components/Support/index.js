import { support } from "../../constants";
import "./styles.css";

export default function Support() {
  return (
    <div className="support">
      <div className="support-areas">
        {support.map((point, index) => {
          return (
            <div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          );
        })}
      </div>
      <p>
        Reach us at <a href="mailto:support@kuvera.in">support@kuvera.in</a>
      </p>
    </div>
  );
}
