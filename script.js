const MOVIE_LIST = document.getElementById("movie-list");
const INTERVAL = 4000;
const swiperEl = document.querySelector("swiper-container");

const swiper = new Swiper(".swiper", {
  // Default parameters
  effect: "fade",
  depth: 100,
  modifier: 1,
  rotate: 50,
  scale: 1,
  loop: true,
  stretch: 0,
  slideShadows: true,
  // spaceBetween: 10,
  // Responsive breakpoints
});

setInterval(() => {
  swiper.slideNext();
}, INTERVAL);

const MOVIES = [
  {
    id: 1,
    url: "p_moana2_payoff_5787a994.jpeg",
    title: "Moana 2",
    date: "2024",
    duration: 100,
  },

  {
    id: 2,
    url: "venom.jpeg",
    title: "Venom",
    date: "2024",
    duration: 120,
  },

  {
    id: 3,
    url: "p_moana2_payoff_5787a994.jpeg",
    title: "Moana 2",
    date: "2024",
    duration: 100,
  },

  {
    id: 4,
    url: "venom.jpeg",
    title: "Venom",
    date: "2024",
    duration: 120,
  },
];

function displayMovies() {
  for (let movie of MOVIES) displayMovie(movie);
}

function displayMovie(movie) {
  const card = `
    <div class="movie-card" onclick="openMovie(${movie.id})">
        <img src="/movies/${movie.url}" alt="" />
        <p>${movie.title}</p>
        <div class="movie-details">
          <span>${movie.date} - ${movie.duration}</span>
          <div>Movie</div>
        </div>
    </div>
    `;

  MOVIE_LIST.innerHTML += card;
}

function openMovie(id) {
  window.location.href = "movie.html?id=" + id;
}

displayMovies();
displayMovies();
