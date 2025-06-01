const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}
let country = 'Austria'

function getCapital(country) {
  if (Object.keys(capitals).includes(country)) {
    console.log(`La capital de ${country} es ${capitals[country]}.`)
  } else {
    console.log(`Desconozco la capital de ${country}.`)
  }
  return
}
getCapital(country)
