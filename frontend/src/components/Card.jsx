import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.cover} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Card;
