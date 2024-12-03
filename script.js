const INTERVAL = 3000;

const SLIDER = document.getElementById("slider");
const SLIDER_TITLE = document.getElementById("slider-title");
const SLIDER_DESCRIPTION = document.getElementById("slider-description");

const MOVIE_LIST = document.getElementById("movie-list");

var slideIndex = 0;

const SLIDES = [
  {
    url: "wp7946869.jpg",
    title: "Fast & Furious",
    description:
      "When a crime brings them back to L.A., fugitive ex-con Dom Toretto reignites his feud with agent Brian O'Conner. But as they are forced to confront a shared enemy, Dom and Brian must give in to an uncertain new trust if they hope to outmaneuver him. And the two men will find the best way to get revenge: push the limits of what's possible behind the wheel.",
  },
  {
    url: "24.jpg.webp",
    title: "Dark Knight",
    description:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
  },
  {
    url: "tom_holland_spider_man_hd_spider_man_no_way_home-2560x1440.jpg",
    title: "Spider Man",
    description:
      "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers.",
  },
];

const MOVIES = [
  {
    url: "p_moana2_payoff_5787a994.jpeg",
    title: "Moana 2",
    date: "2024",
    duration: 100,
  },

  {
    url: "venom.jpeg",
    title: "Venom",
    date: "2024",
    duration: 120,
  },

  {
    url: "p_moana2_payoff_5787a994.jpeg",
    title: "Moana 2",
    date: "2024",
    duration: 100,
  },

  {
    url: "venom.jpeg",
    title: "Venom",
    date: "2024",
    duration: 120,
  },
];

updateSlide();

setInterval(() => {
  updateSlide();
}, INTERVAL);

function updateSlide() {
  SLIDER_TITLE.innerText = SLIDES[slideIndex].title;
  SLIDER_DESCRIPTION.innerText = SLIDES[slideIndex].description;
  SLIDER.style.backgroundImage = `url("assets/${SLIDES[slideIndex].url}")`;
  slideIndex++;
  if (slideIndex === 3) slideIndex = 0;
}

function displayMovies() {
  for (let movie of MOVIES) displayMovie(movie);
}

function displayMovie(movie) {
  const card = `
    <div class="movie-card">
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

displayMovies();
displayMovies();
