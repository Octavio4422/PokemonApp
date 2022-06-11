import order from "../../Utils/Functions/order";
import {
  ALL_POKEMONS,
  ID_POKEMONS,
  QUERY_POKEMONS,
  ALL_TYPES,
  ERROR_MESSAGE,
  CLEAR_ERROR,
  ORDER,
} from "../actions/index";

const initialState = {
  originalPokemons: [],
  pokemons: [],
  pokemon: {},
  types: {},
  error: false,
  queryError: "",
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_POKEMONS:
      return {
        ...state,
        originalPokemons: payload,
        pokemons: payload,
      };

    case ID_POKEMONS:
      return {
        ...state,
        pokemon: payload,
      };

    case QUERY_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        queryError: "",
      };

    case ALL_TYPES:
      return {
        ...state,
        types: payload,
        error: "",
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        error: true,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: false,
      };

    case ORDER:
      let newOrder = [...state.pokemons];
      newOrder = order(newOrder, payload);
      if (payload === "") {
        return {
          ...state,
          pokemons: [...state.pokemons],
        };
      }
      return {
        ...state,
        pokemons: [...newOrder],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
