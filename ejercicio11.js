const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
]
function averageMovieDuration(movies) {
  let durationAllMovies = 0
  for (const movie of movies) {
    durationAllMovies += movie.duration
  }
  if (movies.length === 0) {
    console.log(
      '¡Introduce algunas peliculas para calcular la duración promedio de las mismas!'
    )
  } else {
    let averageMovies = durationAllMovies / movies.length
    console.log(
      `La duración promedio del conjunto de peliculas es ${averageMovies} min.`
    )
  }
  return
}

averageMovieDuration(movies)
