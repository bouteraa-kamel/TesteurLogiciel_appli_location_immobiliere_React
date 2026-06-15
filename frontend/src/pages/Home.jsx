import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/data.json";
import bannerHome from "../assets/banner-home.png";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

      <div className="cards-container">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/housing/${logement.id}`}>
            <Card title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
