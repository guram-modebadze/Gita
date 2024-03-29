"use client";

import React from "react";
import Link from "next/link";
import "../../app/globals.css";

const Header = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center my-5 mx-10">
      <div className="space-x-4">
        <Link href="/dashboard/main">Main</Link>
        <Link href="/dashboard/favourites">Favourites</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
