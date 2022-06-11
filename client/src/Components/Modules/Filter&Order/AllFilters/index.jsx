import Order from "../Order/index";
import FilterType from "../FilterType";
import SearchBar from "../SearchBar";

export default function Filters({ loading, resetPage }) {
  if (loading) return <></>;

  return (
    <>
      <SearchBar resetPage={resetPage} />
      <Order />
      <FilterType resetPage={resetPage} />
    </>
  );
}
