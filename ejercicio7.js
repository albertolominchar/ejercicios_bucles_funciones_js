const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

function agruparPorGeneros(songsList) {
  const cancionesAgrupadas = {}
  for (song of songsList) {
    const genero = song.genre
    if (!cancionesAgrupadas[genero]) {
      cancionesAgrupadas[genero] = []
    }
    cancionesAgrupadas[genero].push(song.title)
  }
  return console.log(cancionesAgrupadas)
}
agruparPorGeneros(tracks)
