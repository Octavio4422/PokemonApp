import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPokemons } from "../../../Redux/actions";

import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import Pokemons from "../../Modules/Pokemons";
import Pagination from "../../Modules/Pagination";

export default function Home() {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);
  const error = useSelector((state) => state.error.all);
  console.log(error);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loestoyhaciendo");
    dispatch(allPokemons()).then(() => setLoading(false));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indecOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = pokemons.slice(indecOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <Header />
        <div>
          {error ? (
            <h1>Cagamos</h1>
          ) : (
            <div>
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={pokemons.length}
                paginate={paginate}
              />
              <Pokemons pokemons={currentCard} loading={loading} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
