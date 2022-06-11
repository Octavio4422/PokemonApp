import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { allPokemons, clearError } from "../../../Redux/actions";

import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import Pokemons from "../../Modules/Pokemons";
import Pagination from "../../Modules/Pagination";
import Filters from "../../Modules/Filter&Order/AllFilters";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemons = useSelector((state) => state.pokemons);
  const error = useSelector((state) => state.error);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(clearError());
    dispatch(allPokemons()).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (error) {
      navigate("*");
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indecOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = pokemons.slice(indecOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const resetPage = () => setCurrentPage(1);

  return (
    <>
      <div>
        <Header />
        <div>
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
        </div>
        <Footer />
      </div>
    </>
  );
}
