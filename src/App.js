import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [img, setImg] = useState([]);

  const handleSubmit = async (term) => {
    let resultado = await searchImages(term);
    setImg(resultado);
  };

  return (
    <div>
      <SearchBar enSubmit={handleSubmit} />
      <ImageList images={img} />
    </div>
  );
}

export default App;
