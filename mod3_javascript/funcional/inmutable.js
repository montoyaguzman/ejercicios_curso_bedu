let montoya = {
  nombre: 'José',
  apellido: 'Montoya',
  edad: 25
}

/*const cumpleaños = persona => persona.edad++
cumpleaños(montoya)
console.log(montoya)
cumpleaños(montoya)
console.log(montoya)
cumpleaños(montoya)
console.log(montoya)*/

const cumpleañosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})
console.log(cumpleañosInmutable(montoya))
console.log(montoya)