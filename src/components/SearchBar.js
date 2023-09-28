import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ enSubmit }) {
  const [term, setTerm] = useState("");

  function handleInputChange(e) {
    setTerm(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    enSubmit(term);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Ingrese su búsqueda</label>
        <input onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
