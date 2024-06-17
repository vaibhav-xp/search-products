import { useEffect, useState } from "react";
import Search from "./components/Search";
import Products from "./components/Products";

const API = import.meta.env.VITE_API;

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const productFetch = async () => {
    try {
      const response = await fetch(`${API}/product/all?search=${search}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      productFetch();
    }, 500);

    return () => clearInterval(searchTimeout);
  }, [search]);

  return (
    <main className="w-screen min-h-screen bg-gray-300">
      {/* container  */}
      <div className="md:container mx-auto px-8 py-10 flex flex-col gap-4">
        <Search search={search} setSearch={setSearch} />
        <Products products={products} />
      </div>
    </main>
  );
}

export default App;
