import {
  ALL_POKEMONS,
  ID_POKEMONS,
  QUERY_POKEMONS,
  ALL_TYPES,
  ERROR_MESSAGE
} from "../actions/index";

const initialState = {
  originalPokemons: [],
  pokemons: [],
  pokemon: {},
  types: {},
  error: {
    all: "",
    id: "",
    query: "",
    types: "",
    post: "",
  },
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
        error : {
            id: "",
        }
      };
    
    case QUERY_POKEMONS:
      return {
        ...state,
        pokemons:payload,
        error:{
            query: ""
        }
      };
    
      case ALL_TYPES:
      return {
        ...state,
        type: payload,
        error:{
            types: ""
        }
      };

      case ERROR_MESSAGE:
        return{
            ...state,
           error:{
                ...state.error,
                all: payload
            }
        }

    default:
      return { ...state };
  }
}

export default rootReducer;
