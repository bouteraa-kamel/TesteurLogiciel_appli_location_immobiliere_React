import { useParams } from "react-router-dom";
import logements from "../data/data.json";
import "./Housing.scss";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
function Housing() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  return (
    <div className="housing">
      <Slideshow pictures={logement.pictures} />

      <div className="housing-info">
        <div className="housing-left">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="housing-tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing-right">
          <div className="housing-host">
            <p>{logement.host.name}</p>

            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="housing-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= Number(logement.rating) ? "active" : ""}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="housing-collapses">
        <Collapse title="Description">{logement.description}</Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Housing;
