// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directorsInMovies = array.map(e => e.director);
  const directorsInMoviesSet = new Set(directorsInMovies);
  let result = [...directorsInMoviesSet];
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(e => e.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  let moviesFromDirectorScore = moviesFromDirector.map(e => e.score);
  let scoreReduce = moviesFromDirectorScore.reduce((a, b) => a + b);
  let averageScore = scoreReduce / moviesFromDirector.length;
  let result = Number(averageScore.toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let allMoviesTitle = array.map(e => e.title);
  console.log(allMoviesTitle);
  allMoviesTitle.sort((a, b) => { if (a == b) { return 0; } if (a < b) { return -1; } return 1; });
  console.log(allMoviesTitle);
  const result = allMoviesTitle.slice(0 ,20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayCopy = [...array];
  let moviesAlphabetAscendent = arrayCopy.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  let result = moviesAlphabetAscendent.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    return 0;
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const moviesWithGenre = (movies.filter(movie => movie.genre.includes(genre)));
  let moviesWithGenreScore = moviesWithGenre.map(e => e.score);
  let scoreReduce = moviesWithGenreScore.reduce((a, b) => a + b);
  let averageScore = scoreReduce / moviesWithGenreScore.length;
  let result = averageScore.toFixed(2);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const allMovies = array.map((x) => x);
  const regex = /\d+/g;

  for (let i = 0; i < allMovies.length; i++) {

    let duration = allMovies[i].duration;

    if (duration.includes("h" && "min")) {
      let durationNumbers = duration.match(regex);
      let horas = durationNumbers[0] * 60;
      let minutos = durationNumbers[1] * 1;
      let durationInMinutes = horas + minutos;
      allMovies[i].duration = durationInMinutes;
    }
    if (duration.includes("h") == false) {
      let durationNumbers = duration.match(regex);
      let durationInMinutes = durationNumbers[0] * 1;
      allMovies[i].duration = durationInMinutes;

    }
    if (duration.includes("min") == false) {
      let durationNumbers = duration.match(regex);
      let durationInMinutes = durationNumbers[0] * 60;
      allMovies[i].duration = durationInMinutes;
    }
  }
  const result = allMovies;
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  
  result = [];
  
  const yearFound = array.filter(e => e.year === year);
  if(yearFound.length == 0){
    alert("No tenemos películas con este año. Introduce otro por favor.");    
  }

  let moviesScoreDescendent = array.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  });
  console.log(moviesScoreDescendent);
  const filmsOnThatYear = moviesScoreDescendent.filter(e => e.year === year);
  const bestFilmOnThatYear = filmsOnThatYear.shift();
  result.push(bestFilmOnThatYear);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
