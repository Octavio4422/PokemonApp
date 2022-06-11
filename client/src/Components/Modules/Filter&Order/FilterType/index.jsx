import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTypes, filterPokemons } from "../../../../Redux/actions";
import orderTypes from "../../../../Utils/Functions/orderTypes";

export default function FilterType({resetPage}) {
  const dispatch = useDispatch();
  let types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(allTypes());
  }, []);

  function onSelect(e) {
    resetPage();    
    dispatch(filterPokemons(e.target.value));
  }

  types = orderTypes(types)

  return (
    <>
      <select name="select" onChange={onSelect}>
        <option value="">Select a Filter</option>
        <option value="EXISTING">EXISTING</option>
         <option value="CREATED">CREATED</option>
        {types &&
          types.map((t) => {
            return (
              <option key={t.id} value={t.name.toUpperCase()}>
                Type = {t.name.toUpperCase()}
              </option>
            );
          })}
      </select>
    </>
  );
}
