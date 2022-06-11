import { useDispatch } from "react-redux";
import { orderPokemons } from "../../../../Redux/actions";

export default function Order() {
  const dispatch = useDispatch();

  function onSelect(e) {
    dispatch(orderPokemons(e.target.value));
  }

  return (
    <>
      <select name="select" onChange={onSelect}>
        <option value="">Select a Distribution</option>
        <option value="ASCENDENTE">A to Z</option>
        <option value="DESCENDENTE">Z to A</option>
        <option value="ATTACK">Attack</option>
        <option value="DEFENSE">Defense</option>
      </select>
    </>
  );
}
