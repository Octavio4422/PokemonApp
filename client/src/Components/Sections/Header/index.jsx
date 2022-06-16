import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header(){
    return <>
    <div className={styles.header}>
      <nav className={styles.nav}>
      <Link to={"/pokemons"}>
        <h1 className={styles.links} >PokeApp</h1>
      </Link>
      <Link to={"/pokemon/create"}>
        <h4 className={styles.links} >Create Pokemon</h4>
      </Link>
      </nav>
    </div>
    </>
}