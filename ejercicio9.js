const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  let oldestXMen = []
  let oldestDate = xMen[0].year
  for (const member of xMen) {
    if (member.year < oldestDate) {
      oldestDate = member.year
      oldestXMen = []
      oldestXMen.push(member.name)
    } else if (member.year === oldestDate) {
      oldestXMen.push(member.name)
      oldestDate = member.year
    }
  }
  if (oldestXMen.length > 1) {
    console.log(`${oldestXMen} son los miembros más antiguos de los Xmen`)
  } else {
    console.log(`${oldestXMen} es el miembro más antiguo de los Xmen`)
  }
  return
}
findOldestXMen(xMen)
