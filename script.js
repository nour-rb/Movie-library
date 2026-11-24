

const movies = [
    { title: "Legally Blonde", year: 2001, type: "movie", rating: 5, favorite: false, recent: false },
    { title: "The Woman King", year: 2022, type: "movie", rating: 5, favorite: false, recent: false },
    { title: "The Hunger Games", year: 2012, type: "movie", rating: 4, favorite: false, recent: false },
    { title: "Barbie", year: 2023, type: "movie", rating: 4, favorite: false, recent: false },
    { title: "Enola Holmes", year: 2020, type: "movie", rating: 4, favorite: false, recent: false },
    { title: "One Day", year: 2024, type: "show", rating: null, favorite: false, recent: true },
    { title: "Crazy Rich Asians", year: 2018, type: "movie", rating: 2, favorite: false, recent: false },
    { title: "The Notebook", year: 2004, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Me Before You", year: 2016, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Fault in Our Stars", year: 2014, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Titanic", year: 1997, type: "movie", rating: null, favorite: false, recent: false },
    { title: "10 Things I Hate About You", year: 1999, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Kissing Booth", year: 2018, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Devil Wears Prada", year: 2006, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Little Women", year: 2019, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Cruella", year: 2021, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Divergent", year: 2014, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Maze Runner", year: 2014, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Twilight", year: 2008, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Jumanji: Welcome to the Jungle", year: 2017, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Home Alone", year: 1990, type: "movie", rating: null, favorite: false, recent: false },
    { title: "White Chicks", year: 2004, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Frozen", year: 2013, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Gone Girl", year: 2014, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Now You See Me", year: 2013, type: "movie", rating: null, favorite: false, recent: false },
    { title: "After", year: 2019, type: "movie", rating: null, favorite: false, recent: false },
    { title: "A Quiet Place", year: 2018, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Bird Box", year: 2018, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Final Destination", year: 2000, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Jennifer's Body", year: 2009, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Zootopia", year: 2016, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Minions", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Finding Nemo", year: 2003, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Ratatouille", year: 2007, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Corpse Bride", year: 2005, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Age of Adaline", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Twilight Saga: New Moon", year: 2009, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Hunger Games: Catching Fire", year: 2013, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Gladiator II", year: 2024, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Up", year: 2009, type: "movie", rating: null, favorite: false, recent: false },
    { title: "WALL-E", year: 2008, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Platform", year: 2019, type: "movie", rating: null, favorite: false, recent: false },
    { title: "I Am Legend", year: 2007, type: "movie", rating: null, favorite: false, recent: false },
    { title: "World War Z", year: 2013, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Day After Tomorrow", year: 2004, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Love and Monsters", year: 2020, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Don't Look Up", year: 2021, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Hunger Games: Mockingjay – Part 1", year: 2014, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Hunger Games: Mockingjay – Part 2", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Maze Runner: The Scorch Trials", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Maze Runner: The Death Cure", year: 2018, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Divergent: Insurgent", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Divergent: Allegiant", year: 2016, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Twilight Saga: Eclipse", year: 2010, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Twilight Saga: Breaking Dawn – Part 1", year: 2011, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Twilight Saga: Breaking Dawn – Part 2", year: 2012, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Train to Busan", year: 2016, type: "movie", rating: null, favorite: false, recent: false },
    { title: "#Alive", year: 2020, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Lion King", year: 1994, type: "movie", rating: null, favorite: false, recent: false },
    { title: "How to Train Your Dragon", year: 2010, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Kung Fu Panda", year: 2008, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Madagascar", year: 2005, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Ice Age", year: 2002, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Vow", year: 2012, type: "movie", rating: null, favorite: true, recent: false },
    { title: "Interstellar", year: 2014, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Martian", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Passengers", year: 2016, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Snowpiercer", year: 2013, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Dune", year: 2021, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The Adam Project", year: 2022, type: "movie", rating: null, favorite: false, recent: false },
    { title: "The 100", year: null, type: "show", rating: null, favorite: false, recent: false },
    { title: "Jurassic Park", year: 1993, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Jurassic World", year: 2015, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Your Name", year: 2016, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Leave the World Behind", year: 2023, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Coco", year: 2017, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Toy Story", year: 1995, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Toy Story 2", year: 1999, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Cars", year: 2006, type: "movie", rating: null, favorite: false, recent: false },
    { title: "Just Breathe", year: null, type: "movie", genre: "thriller", rating: null, favorite: false, recent: true}
];

console.log(movies.length)


const movieTrack = document.querySelector("#movie-track");

const recentMovies = movies.filter(movie => movie.recent);


recentMovies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const details = [
        movie.type.toUpperCase(),
        movie.year,
        movie.genre?.toUpperCase()
    ].filter(Boolean).join(" · ");

    movieCard.innerHTML = `
        <div class="movie-poster-placeholder">
            <span>RECENTLY WATCHED</span>
            <h3>${movie.title}</h3>
        </div>

        <div class="movie-card-info">
            <p class="movie-meta">${details}</p>
            <p class="movie-rating">
                ${movie.rating === null ? "Not rated yet" : `★ ${movie.rating}/5`}
            </p>
        </div>
    `;

    movieTrack.appendChild(movieCard);
});

