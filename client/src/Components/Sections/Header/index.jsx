import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header(){
    return <>
    <div className={styles.Header}>
      <Link to={"/pokemons"}>
        <h1>PokeApp</h1>
      </Link>
      <Link to={"/pokemon/create"}>
        <h4>Create Pokemon</h4>
      </Link>
    </div>
    </>
}