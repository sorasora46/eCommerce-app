import { CSSProperties, FC, FormEventHandler, useState } from "react";
import { Textfield } from "./Textfield";

export const SearchBar: FC<{ onSubmit: FormEventHandler, searchText: string, setSearchText: Function }> = ({ onSubmit, searchText, setSearchText }) => {

  const style: CSSProperties = {
    width: "100%",
    height: "40vh",
  };

  return (
    <div className="container center-items" style={style}>
      <form onSubmit={onSubmit}>
        <Textfield value={searchText} onChange={setSearchText} />
      </form>
    </div>
  );
};
