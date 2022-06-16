import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Pokemon from "../../Modules/PokemonCard";
import { idPokemons } from "../../../Redux/actions";
import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";

import styles from "./Detail.module.css";

export default function PokemonDetail({}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const pokemon = useSelector((state) => state.pokemon);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(idPokemons(id));
  }, []);

  useEffect(() => {
    if (error) {
      navigate("*");
    }
  });

  return (
    <div className={styles.flexContainer}>
      <Header />
      <div>
        <Pokemon
          detail={true}
          name={pokemon.name}
          img={pokemon.image}
          types={pokemon.types}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      </div>
      <Footer />
    </div>
  );
}
