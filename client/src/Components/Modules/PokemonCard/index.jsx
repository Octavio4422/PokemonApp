import { Link } from "react-router-dom";
import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";

import styles from "./PokemonCard.module.css";

export default function Pokemon({
  detail,
  id,
  name,
  attack,
  defense,
  speed,
  height,
  weight,
  img,
  types,
}) {
  if (detail) {
    return (
      <>
        <div>
          <h1>{name}</h1>
          <img src={img} alt={name} />
          <ul>
            types:
            {types &&
              types.map((t) => {
                return <h4 key={t}>{t}</h4>;
              })}
          </ul>
          <h3>attack:{attack}</h3>
          <h3>defense:{defense}</h3>
          <h3>speed:{speed}</h3>
          <h3>height:{height}</h3>
          <h3>weight:{weight}</h3>
        </div>
      </>
    );
  }

  return (
    <div className={styles.whole}>
      <Link to={`/pokemon/${id}`}>
        <div>
          <h3>{name}</h3>
          <img className={styles.image} src={img} alt={name} />
          <ul>
            {types &&
              types.map((t) => {
                return <h4 key={t}>{t}</h4>;
              })}
          </ul>
        </div>
      </Link>
    </div>
  );
}
