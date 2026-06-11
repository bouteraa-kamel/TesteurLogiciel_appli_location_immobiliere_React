import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/data.json";
import bannerHome from "../assets/banner-home.png";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
