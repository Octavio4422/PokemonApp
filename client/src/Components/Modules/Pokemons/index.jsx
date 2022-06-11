import Pokemon from "../PokemonCard";

export default function Pokemons({ pokemons, loading }) {
  if (loading) {
    return (
      <img
        src={"https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif"}
        alt="loading gif"
      />
    );
  }

  return (
    <>
      {!pokemons.length ? (
        <h1>Oh no! I think it´s not in my Pokedex, let´s look for another</h1>
      ) : (
        pokemons.map((p) => {
          return (
            <Pokemon
              key={p.id}
              id={p.id}
              name={p.name}
              img={p.image}
              types={p.types}
            />
          );
        })
      )}
    </>
  );
}
