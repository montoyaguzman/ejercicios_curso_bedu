function heredaDe(prototipoHijo, prototipoPadre) {
  let fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, estatura){
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
}

Persona.prototype.saluda = function() {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

Persona.prototype.esAlto = function() {
  if(this.estatura >= 1.80){
    console.log(`Soy alto :D`)
  } else {
    console.log(`Estoy chiquito :c`)
  }
}
// this es windows, dentro de una () => 

function Desarrollador(nombre, apellido, estatura){
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saluda = function() {
  console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`)
}

let persona = new Persona('Jose', 'Montoya', 1.77)
let persona2 = new Persona('David', 'Lopez', 1.80)
let persona3 = new Persona('Victor', 'Godoy', 1.75)
let desarrollador = new Desarrollador('Daniel', 'Gomez', 1.85)

console.log(persona)
persona.saluda()
persona.esAlto()
persona2.esAlto()
console.log('...')
desarrollador.saluda()
desarrollador.esAlto()