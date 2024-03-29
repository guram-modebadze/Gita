"use client";
import { useState, useEffect } from "react";
import { books } from "@/assets/books";
import { usePathname, useRouter } from "next/navigation";
export default function Favourites() {
  // State to hold the favorite books
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isLoggedIn, setIsloggedIn] = useState(false); //es
  const [checkingLogin, setCheckingLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
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
    const favIds = localStorage.getItem("favs");

    if (favIds) {
      const favoriteIds = JSON.parse(favIds);

      const favBooks = books.filter((book) => favoriteIds.includes(book.id));

      setFavoriteBooks(favBooks);
    }
  }, []);

  
  const removeFromFavorites = (bookId) => {
    localStorage.setItem(
      "favs",
      JSON.stringify(
        favoriteBooks
          .filter((book) => book.id !== bookId)
          .map((book) => book.id)
      )
    );

    setFavoriteBooks((prevFavoriteBooks) =>
      prevFavoriteBooks.filter((book) => book.id !== bookId)
    );
  };

  if (checkingLogin) {
    return <div>Checking login status...</div>;
  }

  return (
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Favorite Books</h2>
      <ul class="space-y-4">
        {favoriteBooks.map((book) => (
          <li
            key={book.id}
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">{book.title}</h3>
              <p class="text-gray-700 mt-2">{book.description}</p>
              <p class="text-gray-600">Author: {book.author}</p>
              <p class="text-gray-600">Year: {book.year}</p>
              <button
                onClick={() => removeFromFavorites(book.id)}
                class="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Remove from Favorites
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
