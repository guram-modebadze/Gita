"use client";

import { useState, useEffect } from "react";
import { books } from "@/assets/books";
import { usePathname, useRouter } from "next/navigation";

export default function ProductDetail({ params }) {
  const bookId = params.bookId;
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsloggedIn] = useState(false); //es
  const [checkingLogin, setCheckingLogin] = useState(true);

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

  useEffect(() => {
    const favs = localStorage.getItem("favs");

    if (favs) {
      setFavorites(JSON.parse(favs));
    }
  }, []);

  useEffect(() => {
    if (bookId) {
      const book = books.find((b) => b.id.toString() === bookId);
      setProduct(book);
    }
  }, [bookId]);

  console.log(product, "eeee");

  const addToFavorites = (bookId) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(bookId)) {
        const newFavorites = [...prevFavorites, bookId];
        localStorage.setItem("favs", JSON.stringify(newFavorites));
        return newFavorites;
      }
      return prevFavorites; 
    });
  };

  // Function to remove from favorites
  const removeFromFavorites = (bookId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((id) => id !== bookId);
      localStorage.setItem("favs", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  if (checkingLogin) {
    return <div>Checking login status...</div>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="p-5">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {product.title}
        </h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Author:{" "}
            <span className="font-medium text-gray-700">{product.author}</span>
          </p>
          <p className="text-sm text-gray-500">
            Year:{" "}
            <span className="font-medium text-gray-700">{product.year}</span>
          </p>
        </div>
      </div>
      <div className="px-5 py-3 bg-gray-50">
        {favorites.includes(product.id) ? (
          <button
            onClick={() => removeFromFavorites(product.id)}
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => addToFavorites(product.id)}
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}
