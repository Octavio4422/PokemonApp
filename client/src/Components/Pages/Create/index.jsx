import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allPokemons, allTypes, createPokemons } from "../../../Redux/actions";

import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import validation from "../../../Utils/Functions/validation";
import typeParser from "../../../Utils/Functions/typesParser";

let input = {
  name: "",
  image: "",
  health: 50,
  attack: 50,
  defense: 50,
  speed: 50,
  height: 50,
  weight: 50,
  types: [],
};
export default function CreatePokemon() {
  
  const dispatch = useDispatch();
  
  let types = useSelector((state) => state.types);
  const create = useSelector((state) => state.create);
  const apiError = useSelector((state) => state.errorCreate);

  useEffect(() => {
    dispatch(allPokemons());
    dispatch(allTypes());
  }, []);

  let [error, setError] = useState({});

  let handleChange = (e) => {
    if(e.target.name === "types"){
      input = {...input, [e.target.name]: [...input.types,e.target.value]}
    } 

    input = {...input,  [e.target.name]: e.target.value}
    setError(validation(input));
    console.log(input)
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemons(input));
  };

  return (
    <>
      <div>
        <Header />
        <div>
          <form>
            <label>
              Name:
              <input
                type={"text"}
                name={"name"}
                onChange={(e) => handleChange(e)}
              />
              {error.name && <p>{error.name}</p>}
            </label>
            <p></p>
            <label>
              Image:
              <input
                type={"url"}
                name={"image"}
                onChange={(e) => handleChange(e)}
              />
              {error.image && <p>{error.image}</p>}
            </label>
            <p></p>
            <label>
              Height (m):
              <input
                type={"number"}
                name={"height"}
                min="0"
                max="255"
                defaultValue={50}
                onChange={(e) => handleChange(e)}
              />
              {error.height && <p>{error.height}</p>}
            </label>
            <p></p>
            <label>
              Weight (kg):
              <input
                type={"number"}
                name={"weight"}
                min="0"
                max="255"
                defaultValue={50}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <p></p>
            <div>
              <label>
                Health:
                <input
                  type="range"
                  name="health"
                  min="0"
                  max="100"
                  step="10"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label>
                Attack:
                <input
                  type="range"
                  name="attack"
                  min="0"
                  max="100"
                  step="10"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label>
                Defense:
                <input
                  type="range"
                  name="defense"
                  min="0"
                  max="100"
                  step="10"
                  onChange={(e) => handleChange(e)}
                />
              </label>
              <label>
                Speed:
                <input
                  type="range"
                  name="speed"
                  min="0"
                  max="100"
                  step="10"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            <div>
              <label>Types:</label>
              <div>
                {types &&
                  types.map((t, i) => {
                    return (
                      <div key={i}>
                        <input
                          type="checkbox"
                          name="types"
                          value={t.name}
                          id={`${t.name}-${i}`}
                          onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor={`${t.name}-${i}`}>{t.name}</label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <button  disabled={Object.values(error).length} type={"submit"} onSubmit={(e) => handleSubmit(e)}>
              Create Pokemon
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
