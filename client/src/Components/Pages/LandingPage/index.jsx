import { Link } from "react-router-dom";

export default function LandingPage(){
    return <>
        <Link to={'/pokemons'} ><button>Let's catch them</button></Link>
    </>
}