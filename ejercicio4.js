const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
]
function oldestCartoon(cartoonSeries) {
  let iniCartoon = cartoonSeries[0]
  let oldDate = iniCartoon['debut']
  let oldSerie = iniCartoon['name']
  for (const cartoon of cartoonSeries) {
    if (cartoon['debut'] < oldDate) {
      oldDate = cartoon['debut']
      oldSerie = cartoon['name']
    }
  }
  return console.log('La serie de dibujos mas antigüa es: ' + oldSerie)
}
oldestCartoon(cartoons)
