import axios from "axios"
import { LOCAL_API_POKEMONS, LOCAL_API_TYPES } from "../../Utils/globals";

export const ALL_POKEMONS = "ALL_POKEMONS";
export const ID_POKEMONS = "ID_POKEMONS";
export const QUERY_POKEMONS = "QUERY_POKEMONS";
export const ALL_TYPES = "ALL_TYPES";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const ORDER = "ORDER";

export const allPokemons = () => (dispatch) => {
    return axios.get(LOCAL_API_POKEMONS)
    .then((pokemons) => {
      dispatch({
        type: ALL_POKEMONS,
        payload: pokemons.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: ERROR_MESSAGE,
        payload: true,
      });
    });
};

export const idPokemons = (id) => (dispatch) => {
  return axios.get(`${LOCAL_API_POKEMONS}/${id}`)
    .then((pokemon) => {
      dispatch({
        type: ID_POKEMONS,
        payload: pokemon.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: ERROR_MESSAGE,
        payload: true,
      });
    });
};

export const queryPokemons = (query) => (dispatch) => {
  return axios.get(`${LOCAL_API_POKEMONS}?name=${query}`)
    .then((pokemons) => {
      dispatch({
        type: QUERY_POKEMONS,
        payload: pokemons.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: ERROR_MESSAGE,
        payload: e.response.data,
      });
    });
};

export const allTypes = () => (dispatch) => {
  return axios.get(LOCAL_API_TYPES)
    .then((types) => {
      dispatch({
        type: ALL_TYPES,
        payload: types.data,
      });
    })
    .cath((e) => {
      dispatch({
        type: ERROR_MESSAGE,
        payload: e.response.data,
      });
    });
};

// export const createPokemons = (data) => (dispatch) => {
  //     return axios.post(LOCAL_API_POKEMONS, data)
  //     .then()
  //     .catch()
  // }
  
  
  export const clearError = () => {
    return {
      type: CLEAR_ERROR
    }
  }

  export const orderPokemons = (value) => {
    return  {
      type: ORDER,
      payload: value,
    }
  }