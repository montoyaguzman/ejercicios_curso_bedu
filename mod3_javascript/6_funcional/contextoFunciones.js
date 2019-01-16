//this por defecto apunta a window
let montoya = {
  nombre: 'José',
  apellido: 'Montoya',
  edad: 25
}

let dany = {
  nombre: 'Daniel',
  apellido: 'Gomez',
  edad: 25
}

function saluda(saludo = 'Hola') {
  console.log(`${saludo} Mi nombre es ${this.nombre}`)
}

// const saludarAMont = saluda.bind(montoya)
// const saludarADany = saluda.bind(dany)

// setTimeout(saluda.bind(montoya, 'Hola we'), 1000)

// saluda.call(montoya, 'Hola we')

saluda.apply(montoya, ['Hola we'])