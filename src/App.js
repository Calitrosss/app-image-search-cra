import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
  const handleSubmit = async (term) => {
    let resultado = await searchImages(term);
    console.log(resultado);
  };

  return (
    <div>
      <SearchBar enSubmit={handleSubmit} />
    </div>
  );
}

export default App;
