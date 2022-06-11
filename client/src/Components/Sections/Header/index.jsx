import { Link } from "react-router-dom";

export default function Header(){
    return <>
    <div>
      <Link to={"/pokemons"}>
        <h1>PokeApp</h1>
      </Link>
      <Link to={"/pokemon/create"}>
        <h4>Create Pokemon</h4>
      </Link>
    </div>
    </>
}