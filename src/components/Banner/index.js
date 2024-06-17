import "./styles.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-body">
        <img
          src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/home/completely-free-ill.svg"
          alt="Happy investors"
        />
        <div>
          <h1>The first free investment management platform</h1>
          <p>No conflict of interest. Nada.</p>
        </div>
      </div>
    </div>
  );
}
