let persona1 = {
  nombre: 'Jose',
  app: 'Montoya',
  edad: 25,
  empleo: 'desarrollador'  
}

let persona2 = {
  nombre: 'Luis',
  app: 'Trejo',
  edad: 20,
  empleo: 'diseñador'  
}

let persona3 = {
  nombre: 'Daniel',
  app: 'Gomez',
  edad: 26,
  empleo: 'programador de videojuegos'  
}


function saludar(persona, fn) {
  console.log(`Hola ${persona.nombre} ${persona.apellido}`)
  if(fn) {
    fn(persona.empleo)
  }
}

function isDev(empleo) {
  if(empleo) {
    console.log(`tu empleo es => ${empleo}`)
  }
}

saludar(persona1)
saludar(persona1, isDev)
saludar(persona2, isDev)
saludar(persona3, isDev)