// MODULES
// import { montoya } from './data'
const data = require('./data.js')
let personas = [data.modules.montoya, data.modules.tania, data.modules.carlos, data.modules.peter]
console.log('personas: ', personas)
console.log('personas[0]: ', personas[0])
console.log('personas[0].apellido: ', personas[0].apellido)
console.log('personas[0][apellido]: ', personas[0]['apellido'])


// FILTER
let esAlta = persona => persona.estatura > 1.80
let personasAltas = personas.filter(esAlta)
console.log('personasAltas: ', personasAltas)


// MAP
let metrosToCentimetros = ( persona ) => ({
    ...persona,
    estatura: persona.estatura * 100
})
let personasCent = personas.map(metrosToCentimetros)
console.log('personasCent: ', personasCent)
console.log('personas: ', personas)


// REDUCE
let totalLibros = personas.reduce((total, persona) => {
  return total += persona.totalLibros
}, 0)
console.log('total libros: ', totalLibros)