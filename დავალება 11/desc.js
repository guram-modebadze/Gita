const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const main = document.getElementById("main");
const places = document.getElementById("seat");

const data = localStorage.getItem("movieData");

const movie = JSON.parse(data);

// console.log(movie);

places.innerHTML = "";
main.innerHTML = "";

const seats = [
  {
    seat: "seat1",
    price: "25GEL",
  },
  {
    seat: "seat2",
    price: "25GEL",
  },
  {
    seat: "seat3",
    price: "25GEL",
  },
  {
    seat: "seat4",
    price: "25GEL",
  },
  {
    seat: "seat5",
    price: "25GEL",
  },
];

const movieEl = document.createElement("div");

movieEl.classList.add("single_movie_info");

movieEl.innerHTML = `
<div class="banner_img">
    <img src="${IMG_PATH + movie.backdrop_path}" alt="${movie.title}">
</div>
<div class="row">
    <div class="col-6">
    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
    </div>
    <div class="col-6">
            <div class="single_movie_info">
                <h3>${movie.title}</h3>
                <p>
                    ${movie.vote_average}
                </p>
                <p>
                    ${movie.overview}
                </p>
                <p>
                ${movie.original_language}
                </p>
                <p>
                ${movie.release_date}
                </p>
            </div>
    </div>
</div>
`;

seats.forEach((seat) => {
  const seatEl = document.createElement("div");
  seatEl.classList.add("seat_places");
  seatEl.innerHTML = `
  <h1>${seat.seat}</h1>
  <h2>${seat.price}</h2>
  `;

  // ------------------------------------------------------------------------Homework 1-------------------------------------------
  // Choose Seats
  seatEl.innerHTM = ``;
  seatEl.addEventListener("click", (e) => {
    // console.log("clicked");
    const elements = document.querySelectorAll(".seat_class");
    const count = elements.length;

    if (!seatEl.classList.contains("seat_class")) {
      seatEl.classList.add("seat_class");
      // console.log("choose");
      movieEl.innerHTML += `
      <div class="choose">
      <div>Your Seats</div>
      <div>
      you have chosen ${count + 1} Seats
      </div>
      <div>
      Price ${(count + 1) * 25}
      </div>
      <button class="button" id="but">
      Pay Now
      </button>
      
      `;

      const but = document.getElementById("but");
      but.addEventListener("click", (e) => {
        console.log("clicked on button");
        window.open("./pay.html", "_blank");
      });
    } else {
      seatEl.classList.remove("seat_class");
      // console.log("undo");
      movieEl.innerHTML += `
      <div class="choose">
      <div>
     Your Seats
      </div>
      <div>
      you have chosen ${count - 1} Seats
      </div>
      <div>
      Price ${(count - 1) * 25}
      </div>
      <div class="button" id="but">
      Pay Now
      </div>
      </div>
      `;
      // -------------------------------------------------------------აქ გავჭედე
      const but = document.getElementById("but");
      but.addEventListener("click", (e) => {
        console.log("clicked on button");
        window.open("./pay.html", "_blank");
      });
    }
  });

  main.appendChild(movieEl);
  places.appendChild(seatEl);
});

const related = document.getElementById("related");
related.innerHTML = ``;
// console.log(movieEl);
related.innerHTML = `
<div class="related">
<div>Related Movies</div>
<div class="rel_movies">
<div>${movieEl.vote_average}</div>
<div>movies</div>
<div>here</div>
<div>for u</div>
</div>
</div>


`;
