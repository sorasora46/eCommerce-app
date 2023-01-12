import { CSSProperties, FC, FormEventHandler } from "react";
import { Textfield } from "./Textfield";

export const SearchBar: FC<{
  onSubmit: FormEventHandler;
  searchText: string;
  setSearchText: Function;
}> = ({ onSubmit, searchText, setSearchText }) => {
  const style: CSSProperties = {
    width: "100%",
    height: "50vh",
    gap: "1rem",
  };

  return (
    <div className="container flex-column center-items hero shadow" style={style}>
      <h2 className="hero-header shadow">
        <label htmlFor="searchbar">Search the product you want</label>
      </h2>
      <form onSubmit={onSubmit}>
        <Textfield
          id="searchbar"
          isRequired
          value={searchText}
          onChange={setSearchText}
        />
      </form>
    </div>
  );
};
