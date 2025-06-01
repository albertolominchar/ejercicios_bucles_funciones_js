const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]
let power = 'telepathy'
function findMutantByPower(mutants, power) {
  const mutantWithPower = []
  for (const mutant of mutants) {
    if (mutant.power.includes(power)) {
      mutantWithPower.push(mutant.name)
    }
  }
  if (mutantWithPower.length === 0) {
    console.log(`No se ha encontrado ningún mutante con el poder ${power}`)
  } else if (mutantWithPower.length === 1) {
    console.log(`El mutante ${mutantWithPower} tiene el poder ${power}`)
  } else {
    console.log(`Los mutantes ${mutantWithPower} tienen el poder ${power}`)
  }
}

findMutantByPower(mutants, power)
