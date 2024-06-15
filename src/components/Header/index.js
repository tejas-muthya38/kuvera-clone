import "./styles.css";

export default function Header() {
  return (
    <div class="header">
      <div className="header-left">
        <img
          src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/kuvera-logo-dark.svg"
          alt="Kuvera logo"
        />
        <ul>
          <li>Invest</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="header-right">
        <img
          src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/search.svg"
          alt="Search"
        />
        <ul>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
}
