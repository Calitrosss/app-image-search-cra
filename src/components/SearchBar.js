import { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
