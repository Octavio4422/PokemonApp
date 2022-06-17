import Pokemon from "../PokemonCard";
import styles from "./Pokemons.module.css";

export default function Pokemons({ pokemons, loading }) {
  if (loading) {
    return (
      <div className={styles.gifContainer} >
        <img
          className={styles.gif} 
          src={"https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif"}
          alt="loading gif"
        />
      </div>
    );
  }

  return (
    <>
      {!pokemons.length ? (
        <h1>Oh no! I think it´s not in my Pokedex, let´s look for another</h1>
      ) : (
        <div className={styles.pokemon}>
          {pokemons.map((p) => {
            return (
              <Pokemon
                key={p.id}
                id={p.id}
                name={p.name}
                img={p.image}
                types={p.types}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
