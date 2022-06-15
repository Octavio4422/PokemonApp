import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import Home from "./Components/Pages/Home";
import PokemonDetail from "./Components/Pages/Detail";
import CreatePokemon from "./Components/Pages/Create";
import Error from "./Components/Pages/Error";
// import Header from "./Components/Sections/Header";
// import Footer from "./Components/Sections/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route exact path={"/pokemons"} element={<Home />} />
          <Route exact path={"/pokemon/:id"} element={<PokemonDetail />} />
          <Route exact path={"/pokemon/create"} element={<CreatePokemon />} />
          <Route exact path={"*"} element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
