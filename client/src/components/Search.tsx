import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <input
      type="text"
      value={search}
      placeholder="search products..."
      className="p-4 outline-none"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
    />
  );
};

export default Search;
