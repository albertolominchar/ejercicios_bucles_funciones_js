const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
]
function beforeAfter2000movies(moviesList) {
  let bef2000 = 0
  let aft2000 = 0
  for (const movie of moviesList) {
    if (movie['releaseYear'] < 2000) {
      bef2000++
    } else {
      aft2000++
    }
  }
  console.log('Peliculas que son de antes del año 2000: ' + bef2000)
  console.log('Peliculas que son de después del año 2000: ' + aft2000)
  return
}
beforeAfter2000movies(movies)
