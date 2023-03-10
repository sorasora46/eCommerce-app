import axios from "axios";
import { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { ProductShowcase } from "../components/ProductShowcase";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
  // TODO: Change API endpoint
    axios
      .get(`http://127.0.0.1:8000/product/search?text=${searchText}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <SearchBar
        onSubmit={(e) => {
          handleSearch();
          setSearchText("");
          e.preventDefault();
        }}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ProductShowcase />
    </div>
  );
};
