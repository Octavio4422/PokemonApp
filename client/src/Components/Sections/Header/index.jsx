import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export default function Header(){
    return <>
    <div className={styles.header}>
      <nav className={styles.nav}>
      {/* <img src="https://w7.pngwing.com/pngs/18/924/png-transparent-ash-ketchum-misty-pikachu-pokemon-battle-revolution-pokemon-go-pikachu-hand-fictional-character-cartoon-thumbnail.png" alt="Ash-Image"/> */}
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