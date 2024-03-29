import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearError } from "../../../Redux/actions";
import Footer from "../../Sections/Footer";

export default function Error() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  });

  return (
    <div>
      <div>
        <h1>Oh No, the team Rocket did it again</h1>
        <img
          src="https://www.pngkey.com/png/detail/224-2246263_team-rocket-pokemon-team-rocket-png.png"
          alt="Team Rocktet"
        />

        <Link to={"/pokemons"}>
          <button>Let´s Beat Them</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
