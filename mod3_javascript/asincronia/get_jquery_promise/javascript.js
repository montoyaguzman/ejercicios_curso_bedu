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
    if(id < 17) {
      $.get(url, opcs, function(data) {
        resolve(data)
      }).fail(function(){
        reject(id)
      })
    }
  }).then(function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)
    getPersonaje(id + 1)
  }).catch(function(id) {
    console.log(`Error en ${id}`)
  })
}


/*function getPersonaje(id) {
  
  let url = `${API_URL}${PEOPLE.replace(':id', id)}`
  return new Promise((resolve, reject) => {
    $.get(url, opcs, function(){
      if (dataType.status === '200') {
        resolve()
      }
      console.log('data: ', data)
      console.log(`Peticion exitosa : ${dataType.status}`)
    })
  })
}
*/




