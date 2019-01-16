function diasVividos(fechaNacimiento, fechaActual) {
  console.log('Cumpleaños: ', fechaNacimiento)
  console.log('Hoy es: ', fechaActual)
  const dia = 1000 * 60 * 60 * 24
  const diferencia = Math.abs(fechaActual - fechaNacimiento)
  return Math.floor(diferencia/dia)
}

const fechaNacimiento = new Date(1993, 9, 29)
const fechaActual = new Date()

let edadDias = diasVividos(fechaNacimiento, fechaActual)
let edad = edadDias / 365

console.log(`Has vivido ${edadDias} y tienes ${edad}`)