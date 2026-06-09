import "./Banner.scss";
import bannerHome from "../assets/banner-home.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerHome} alt="Paysage côtier" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
