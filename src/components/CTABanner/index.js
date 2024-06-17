import "./styles.css";

export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="cta-banner-left">
        <div className="img-group">
          <img
            src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/android-blue.svg"
            alt="android"
          />
          <img
            src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/apple-blue.svg"
            alt="apple"
          />
        </div>
        <div className="cta-text-group">
          <p>Mobile First</p>
          <h1>Available on all devices</h1>
        </div>
      </div>
      <img
        className="cta-banner-image"
        src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/ill-cm.svg"
        alt="woman studies portfolio"
      />
    </div>
  );
}
