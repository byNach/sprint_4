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
  let result = averageScore.toFixed(2);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
let allMoviesTitle = array.map(e => e.title);
let first20movies = [];
for (i = 20; i > 0; i--){
first20movies.push(allMoviesTitle[i]);
}
let result = first20movies.sort((a,b) => {if(a == b) { return 0;} if (a < b){return -1;} return 1;});
return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesAlphabetAscendent = array.sort(function (a, b) {
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
console.log(result);
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

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
