import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/Pages/LandingPage";
import Home from "./Components/Pages/Home";
import PokemonDetail from "./Components/Pages/Detail";
import CreatePokemon from "./Components/Pages/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route exact path={"/pokemons"} element={<Home />} />
          <Route exact path={"/pokemon/:id"} element={<PokemonDetail />} />
          <Route exact path={"/pokemon/create"} element={<CreatePokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
