import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTypes, createPokemons } from "../../../Redux/actions";
import Header from "../../Sections/Header";
import Footer from "../../Sections/Footer";
import validation from "../../../Utils/Functions/validation";
import typesController from "../../../Utils/Functions/typesController";
import styles from "./Create.module.css";
import orderTypes from "../../../Utils/Functions/orderTypes";

let resetinput = {
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
  types = orderTypes(types);

  let [error, setError] = useState({});

  useEffect(() => {
    dispatch(allTypes());
  }, []);

  let handleChange = (e) => {
    if (e.target.name === "types") {
      if (input.types.includes(e.target.value)) {
        input.types = input.types.filter((t) => t !== e.target.value);
        setError(typesController(input));
        return;
      }

      input = { ...input, [e.target.name]: [...input.types, e.target.value] };
      setError(typesController(input));
      return;
    }

    input = { ...input, [e.target.name]: e.target.value };
    setError(validation(input));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemons(input));
    input = resetinput;
  };

  return (
    <>
      <div>
        <Header />
        <div className={styles.whole}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Name:
              <input
                type={"text"}
                name={"name"}
                value={input.name}
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
                value={input.image}
                onChange={(e) => handleChange(e)}
              />
              {error.image ? <p></p> : <p>{error.image}</p>}
            </label>
            <p></p>
            <label>
              Height (m):
              <input
                type={"number"}
                name={"height"}
                value={input.height}
                min="0"
                max="255"
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
                value={input.weight}
                min="0"
                max="255"
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
                  value={input.health}
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
                  value={input.attack}
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
                  value={input.defense}
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
                  value={input.speed}
                  min="0"
                  max="100"
                  step="10"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            <div>
              <label>Types:</label>
              <div className={styles.types}>
                {types &&
                  types.map((t, i) => {
                    return (
                      <div key={i}>
                        <input
                          type="checkbox"
                          name="types"
                          value={t.name}
                          onChange={(e) => handleChange(e)}
                        />
                        <label>{t.name}</label>
                      </div>
                    );
                  })}
                {error.types && <p>{error.types}</p>}
              </div>
            </div>
            <button
              disabled={
                Object.values(error).length ||
                input.name === "" ||
                input.image === "" ||
                input.types.length > 2
              }
              type={"submit"}
              onSubmit={(e) => handleSubmit(e)}
            >
              Create Pokemon
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
