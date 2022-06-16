import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPokemons, clearError } from "../../../Redux/actions";

import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import Pokemons from "../../Modules/Pokemons";
import Pagination from "../../Modules/Pagination";
import Filters from "../../Modules/Filter&Order/AllFilters";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  const dataCheck = useSelector((state) => state.originalPokemons)
  const pokemons = useSelector((state) => state.pokemons);
  const error = useSelector((state) => state.error);
  let loading = true;

  if (dataCheck.length > 10) {
    loading = false;
  }

  useEffect(() => {
    if (dataCheck.length > 10) {
      return;
    }
    dispatch(clearError());
    dispatch(allPokemons());
  }, []);

  if (error) {
    dispatch(clearError());
    dispatch(allPokemons());
  }

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indecOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = pokemons.slice(indecOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const resetPage = () => setCurrentPage(1);

  return (
    <>
      <div className={styles.whole}>
        <div className={styles.header}>
          <Header />
        </div>
        <div>
          <Filters loading={loading} resetPage={resetPage} />
          <Pagination
            loading={loading}
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            totalCards={pokemons.length}
            paginate={paginate}
          />
          <Pokemons pokemons={currentCard} loading={loading} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
