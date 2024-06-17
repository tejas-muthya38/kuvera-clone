import { footerCategories } from "../../constants";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/kuvera-logo-light.svg"
            alt="Kuvera"
          />
          <div className="social-links">
            <a href="https://www.facebook.com/kuvera.in">
              <img
                alt="Facebook"
                src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/facebook_Logo.svg"
              />
            </a>
            <a href="https://twitter.com/Kuvera_in">
              <img
                alt="Twitter"
                src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/Twitter_Logo.svg"
              />
            </a>
            <a href="https://www.youtube.com/c/Kuvera">
              <img
                alt="YouTube"
                src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/youtube_Logo.svg"
              />
            </a>
            <a href="https://in.linkedin.com/company/kuvera-in">
              <img
                alt="LinkedIn"
                src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/Linkeidn_Logo.svg"
              />
            </a>
            <a href="https://www.instagram.com/kuvera.in">
              <img
                alt="Instagram"
                src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/share/insta.svg"
              />
            </a>
          </div>
          <button>GET FINANCE INSIGHTS</button>
        </div>
        {footerCategories.map((category, index) => {
          return (
            <div key={index}>
              <h3>{category.title}</h3>
              <ul>
                {category.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.endpoint}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="footer-bottom">
        <p>2024 © Arevuk Advisory Services Pvt Ltd. Coded with ❤️ from India</p>
        <div>
          <p>Download mobile apps</p>
          <a href="https://play.google.com/store/apps/details?id=com.gooogle.android.kuvera.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dwebsite%26utm_campaign%3Dwebsite&pli=1">
            <img
              src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/mobile/apple/app-store.svg"
              alt="Download Kuvera"
            />
          </a>
          <a href="https://apps.apple.com/us/app/kuvera-stocks-mutual-funds/id1329701793">
            <img
              src="https://assets2.kuvera.in/production/babylon/1.0.26/assets/img/google-play-badge.svg"
              alt="Download Kuvera"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
