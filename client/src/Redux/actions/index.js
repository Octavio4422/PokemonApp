import axios from "axios";
import { LOCAL_API_POKEMONS, LOCAL_API_TYPES } from "../../Utils/globals";

export const ALL_POKEMONS = "ALL_POKEMONS";
export const ID_POKEMONS = "ID_POKEMONS";
export const QUERY_POKEMONS = "QUERY_POKEMONS";
export const CREATE_POKEMONS = "CREATE_POKEMONS"
export const ALL_TYPES = "ALL_TYPES";
export const ORDER = "ORDER";
export const FITLER = "FILTER";
export const EMPTY_INPUT = "EMPTY_INPUT";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const ERROR_CREATE = "ERROR_CREATE"
export const CLEAR_ERROR = "CLEAR_ERROR";

export const allPokemons = () => (dispatch) => {
  return axios
    .get(LOCAL_API_POKEMONS)
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
  return axios
    .get(`${LOCAL_API_POKEMONS}/${id}`)
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
  return axios
    .get(`${LOCAL_API_POKEMONS}?name=${query}`)
    .then((pokemon) => {
      dispatch({
        type: QUERY_POKEMONS,
        payload: [pokemon.data],
      });
    })
    .catch((e) => {
      dispatch({
        type: QUERY_POKEMONS,
        payload: [],
      });
    });
};

export const allTypes = () => (dispatch) => {
  return axios
    .get(LOCAL_API_TYPES)
    .then((types) => {
      dispatch({
        type: ALL_TYPES,
        payload: types.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: ERROR_MESSAGE,
        payload: e.response.data,
      });
    });
};

export const createPokemons = (data) => (dispatch) => {
  return axios.post(LOCAL_API_POKEMONS, data)
  .then((pokemon) => {
    dispatch({
      type:CREATE_POKEMONS,
      payload:pokemon.data
    })
  })
  .catch((e) => {
    dispatch({
      type: ERROR_CREATE,
      payload: e.response.data,
    })
  });
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const orderPokemons = (value) => {
  return {
    type: ORDER,
    payload: value,
  };
};

export const filterPokemons = (value) => {
  return {
    type: FITLER,
    payload: value,
  };
};

export const emptyInput = () => {
  return {
    type: EMPTY_INPUT,
  };
};
