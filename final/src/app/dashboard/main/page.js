"use client";
import "../../../app/globals.css";
import { useState, useEffect } from "react";
import { books } from "@/assets/books";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import Book from "@/components/Book";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(20); //es
  const [isLoggedIn, setIsloggedIn] = useState(false); //es
  const [checkingLogin, setCheckingLogin] = useState(true);

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const router = useRouter();

  useEffect(() => {
    // now access your localStorage
    const isLogged = localStorage.getItem("isLoggedIn");
    setIsloggedIn(isLogged === "true");
    setCheckingLogin(false);
  }, []);

  useEffect(() => {
    if (!isLoggedIn && !checkingLogin) {
      router.push("/login");
    }
  }, [isLoggedIn, checkingLogin]);

  const fetchProducts = async () => {
    setProducts(books);
    setFilteredProducts(books);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (search) {
      const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
    } else {
      setFilteredProducts(products);
    }
    setVisibleCount(20); // Reset visible count whenever search changes
  }, [search, products]);

  console.log(products);

  const handleClear = () => {
    setSearchQuery("");
    // setFilteredProducts(products);
    // setVisibleCount(5);
    router.push(`/dashboard/main`);
  };

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 20); // es
  };

  const handleSearch = () => {
    router.push(`/dashboard/main?search=${searchQuery}`);
  };
  console.log(visibleCount, "ttt");
  console.log(filteredProducts.length, "eafearea");

  if (checkingLogin) {
    return <div>Checking login status...</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="flex w-1/2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className={`ml-2 px-3 py-2 rounded-md focus:outline-none focus:ring-1 ${
            searchQuery.length
              ? "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-300"
          }`}
          onClick={handleSearch}
          disabled={!searchQuery.length}
        >
          Search
        </button>
        <button
          className={`ml-2 px-3 py-2 rounded-md focus:outline-none focus:ring-1 ${
            searchQuery.length
              ? "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-300"
          }`}
          onClick={handleClear}
          disabled={!searchQuery.length}
        >
          Clear
        </button>
      </div>
      <div>
        <ul className="flex flex-wrap list-disc space-y-2">
          {filteredProducts.slice(0, visibleCount).map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-4">
            <button
              className="text-center w-1/6 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onClick={loadMoreProducts}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
