const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${Math.floor(
  Math.random() * 500
)}`;

const main = document.getElementById("main");
const places = document.getElementById("seat");
const related = document.getElementById("related");

const data = localStorage.getItem("movieData");

const movie = JSON.parse(data);

const payEl = document.createElement("button");
payEl.classList.add("button");
payEl.addEventListener("click", (e) => {
  console.log("clicked on button");
  window.open("./pay.html", "_blank");
});

payEl.innerHTML = payEl.innerHTML = `
<div>
<div>
Your Seats
</div>
<div>
you have chosen ${0} Seats
</div>
<div>
Price ${0}
</div>

</div>
`;

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

  // Choose Seats
  seatEl.innerHTM = ``;
  seatEl.addEventListener("click", (e) => {
    const elements = document.querySelectorAll(".seat_class");
    const count = elements.length;

    if (!seatEl.classList.contains("seat_class")) {
      seatEl.classList.add("seat_class");
      payEl.innerHTML = `
      <div>
      <div>Your Seats</div>
      <div>
      you have chosen ${count + 1} Seats
      </div>
      <div id='priceLast'>
      Price ${(count + 1) * 25}GEL
      </div>
      <div>
      Pay Here
      </div>
      `;
    } else {
      seatEl.classList.remove("seat_class");
      payEl.innerHTML = `
      <div>
      <div>
     Your Seats
      </div>
      <div>
      you have chosen ${count - 1} Seats
      </div>
      <div id='priceLast'>
      Price ${(count - 1) * 25}GEL
      </div>
      <div>
      Pay Here
      </div>
      </div>
      `;
    }
  });

  main.appendChild(movieEl);
  places.appendChild(seatEl);
  places.appendChild(payEl);
});

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  const shortedList = data.results.slice(0, 3);
  showMovies(shortedList);
}

function showMovies(movies) {
  related.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `

    <div class="movie_banner">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie_info">
                    <h3>${title}</h3>
                   
                    <p>
                        ${overview}
                    </p>
                </div>
                </div>
            `;
    related.appendChild(movieEl);

    movieEl.addEventListener("click", (e) => {
      localStorage.setItem("movieData", JSON.stringify(movie));
      window.location.href = "./movie.html";
    });
  });
}
