const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.0 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
]
function duracionRockAlbums(albumsList) {
  let sumRockAlbum = 0
  for (const album of albumsList) {
    if (album['genre'] === 'Rock') {
      sumRockAlbum += album['duration']
    }
  }
  return console.log(
    'La duración total de los álbumes de rock es de: ' + sumRockAlbum
  )
}
duracionRockAlbums(albums)
