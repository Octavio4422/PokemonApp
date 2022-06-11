import filter from "../../Utils/Functions/filter";
import order from "../../Utils/Functions/order";
import {
  ALL_POKEMONS,
  ID_POKEMONS,
  QUERY_POKEMONS,
  ALL_TYPES,
  ERROR_MESSAGE,
  CLEAR_ERROR,
  ORDER,
  FITLER,
  EMPTY_INPUT,
} from "../actions/index";

const initialState = {
  originalPokemons: [],
  pokemons: [],
  pokemon: {},
  types: [],
  error: false,
};

let lastOrder = "";

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
      lastOrder = payload;
      return {
        ...state,
        pokemons: [...newOrder],
      };

    case FITLER:
      let newFilter = [...state.originalPokemons];
      newFilter = filter(newFilter, payload, lastOrder);
      if (payload === "") {
        return {
          ...state,
          pokemons: [...state.pokemons],
        };
      }
      return {
        ...state,
        pokemons: [...newFilter],
      };

      case EMPTY_INPUT:
        return{
          ...state,
          pokemons: [...state.originalPokemons]
        }

      default:
      return { ...state };
  }
}

export default rootReducer;
