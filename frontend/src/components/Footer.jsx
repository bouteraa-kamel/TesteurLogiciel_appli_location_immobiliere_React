import "./Footer.scss";
import imgLogo from "../assets/logo_white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={imgLogo} alt="Kasa" />
      </div>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
