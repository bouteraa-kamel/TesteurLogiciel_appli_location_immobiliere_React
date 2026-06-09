import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/data.json";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="cards-container">
        {data.map((logement) => (
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
