import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allPokemons, allTypes, createPokemons } from "../../../Redux/actions";

import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";

export default function CreatePokemon() {
  const dispatch = useDispatch();

  let types = useSelector((state) => state.types);
  const created = useSelector((state) => state.created);

  useEffect(() => {
    dispatch(allPokemons());
    dispatch(allTypes());
  }, []);

  return (
    <>
      <div>
        <Header />
        <div>
          <form>
            <label>
              Name:
              <input type={"text"} name={"name"} />
            </label>
            <label>
              Height (m):
              <input
                type="number"
                name="height"
                min="0"
                max="255"
                defaultValue={50}
              />
            </label>
            <label>
              Weight (kg):
              <input
                type="number"
                name="weight"
                min="0"
                max="255"
                defaultValue={50}
              />
            </label>

            <div>
              <label>
                Health:
                <input type="range" name="health" min="0" max="100" step="10" />
              </label>
              <label>
                Attack:
                <input type="range" name="attack" min="0" max="100" step="10" />
              </label>
              <label>
                Defense:
                <input
                  type="range"
                  name="defense"
                  min="0"
                  max="100"
                  step="10"
                />
              </label>
              <label>
                Speed:
                <input type="range" name="speed" min="0" max="100" step="10" />
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
                          value={t.name}
                          name="types"
                          id={`${t.name}-${index}`}
                        />
                        <label htmlFor={`${t.name}-${index}`}>{t.name}</label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <button>Create Pokemon</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
