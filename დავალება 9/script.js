"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.getElementById("movie-list");

  const movies = [
    {
      name: "The Shawshank Redemption",
      year: "Year: 1994",
      length: "Duration: 2h 22m",
      imdb: "IMDB: 9.3",
    },
    {
      name: "The Godfather",
      year: "Year: 1972",
      length: "Duration: 2h 55m",
      imdb: "IMDB: 9.2",
    },
    {
      name: "Pulp Fiction",
      year: "Year: 1994",
      length: "Duration: 2h 34m",
      imdb: "IMDB: 8.9",
    },
    {
      name: "Inception",
      year: "Year: 2010",
      length: "Duration: 2h 28m",
      imdb: "IMDB: 8.8",
    },
    {
      name: "Gladiator",
      year: "Year: 2000",
      length: "Duration: 2h 35m",
      imdb: "IMDB: 8.5",
    },
  ];

  movies.forEach((movies) => {
    const movieItem = document.createElement("li");
    movieItem.classList.add("movie-item");

    const movieInfo = document.createElement("div");

    const movieName = document.createElement("h2");
    movieName.textContent = movies.name;
    movieInfo.appendChild(movieName);

    const movieYear = document.createElement("p");
    movieYear.textContent = movies.year;
    movieInfo.appendChild(movieYear);

    const movieLength = document.createElement("p");
    movieLength.textContent = movies.length;
    movieInfo.appendChild(movieLength);

    const movieRating = document.createElement("p");
    movieRating.textContent = movies.imdb;
    movieInfo.appendChild(movieRating);

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";

    likeButton.addEventListener("click", function () {
      alert("Added to Favourites");
    });

    movieInfo.appendChild(likeButton);
    movieItem.appendChild(movieInfo);
    movieList.appendChild(movieItem);
  });
});
