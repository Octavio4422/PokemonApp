import { useState } from "react";
import { useDispatch } from "react-redux"
import { emptyInput, queryPokemons } from "../../../../Redux/actions";

export default function SearchBar({ resetPage }){
   let dispatch = useDispatch();

   const [input, setInput] = useState("");
   
    const handleSumbit = (e) => {
        e.preventDefault();
        resetPage();
        if(input === "") return dispatch(emptyInput());
        dispatch(queryPokemons(input))
    }

   return<>
            <form onSubmit={(e) => handleSumbit(e)} >
                <input
                    type={'text'} 
                    placeholder='Search Pokemons'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleSumbit} >Search</button>
            </form>
    </>
}