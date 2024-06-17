import "./styles.css";
import Button from "../Shared/Button";

export default function BottomCTA() {
  return (
    <div className="bottom-cta">
      <div className="bottom-cta-body">
        <img
          src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/start-investing-today-ill.svg"
          alt="Investor looks at his screen"
        />
        <div>
          <h1>Start investing today</h1>
          <p>
            Don't wait. ₹1L today will buy a lot less in 10 years if not
            invested to grow. Take 2 minutes to sign up. The future you will be
            grateful.
          </p>
          <Button variant="primary" innerText="Start investing" />
        </div>
      </div>
    </div>
  );
}
