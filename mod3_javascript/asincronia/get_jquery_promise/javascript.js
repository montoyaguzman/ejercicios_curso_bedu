const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opcs = { crossDomain: true }

let id = 1

$(document).ready(function(){
  console.log('API: ', API_URL)
});
  
$('p').click(function(){
  console.log('has dado click...')
})

$('button').click(function() {
  getPersonaje(1)
})


function getPersonaje(id) {
  return new Promise(function(resolve, reject) {
    let url = `${API_URL}${PEOPLE.replace(':id', id)}`
    $.get(url, opcs, function(data, success, dataType) {
      resolve(data)
    }).fail(function(dataType) {
      reject(dataType)      
    })
  }).then(function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)
    getPersonaje(id + 1)
    // Se podrias colocar n .then para rellamar al get
    // y obtener otro personaje. .then recibe la ultima
    // respuesta obtenida
  }).catch(function(dataType) {
    console.log(`Error en ${id} con estaus: ${dataType.status}`)
  })
}


