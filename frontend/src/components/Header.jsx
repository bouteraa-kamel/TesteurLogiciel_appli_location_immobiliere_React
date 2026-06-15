import "./Header.scss";
import imgLogo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={imgLogo} alt="Kasa" />
      </div>

      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  );
}

export default Header;
