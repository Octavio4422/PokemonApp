import Pokemon from "../PokemonCard"


export default function Pokemons({pokemons, loading}){

    if(loading){
       return <img src={"https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif" } alt="loading gif" />
    }
    
    return <>
        {pokemons && pokemons.map((p) => {
            return <Pokemon
                key={p.id}
                id={p.id}
                name={p.name}
                attack={p.attack}
                defense={p.defense}
                speed={p.speed}
                height={p.height}
                weight={p.weight}
                img={p.image}
                types={p.types}
            />
        })}
    </>
}