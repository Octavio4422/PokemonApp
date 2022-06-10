

export default function Pokemons({pokemons, loading}){

    if(loading){
       return <img src={"https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif" } alt="loading gif" />
    }
    
    return <>
        <h1>Hola</h1>
    </>
}