import { Link } from "react-router-dom";
import Footer from "../../Sections/Footer";
import styles from "./LandingPage.module.css"

export default function LandingPage() {
  return (
    <div  className={styles.flexContainer}>
      <div>
        <Link to={"/pokemons"}>
          <button>Let's catch them</button>
        </Link>
      </div>
      <section className={styles.footer} >
      <Footer />
      </section>
    </div>
  );
}
