const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
]
function starsWarsHumans(charactersList) {
  const humanCharacters = []
  for (const character of charactersList) {
    if (character['species'] === 'Human') {
      humanCharacters.push(character['name'])
    }
  }
  return console.log(
    'Estos son los personajes de Star Wars humanos: ' + humanCharacters
  )
}
starsWarsHumans(characters)
