class Persona {
  constructor(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
  }

  saluda() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
  }

  esAlto() {
    if(this.estatura >= 1.80){
      console.log(`Soy alto :D`)
    } else {
      console.log(`Estoy chiquito :c`)
    }
  }

}

class Desarrollador extends Persona{
  constructor(nombre, apellido, estatura) {
    super(nombre, apellido, estatura)
  }

  saluda() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`)
  }

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