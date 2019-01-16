const API_URL = 'https://swapi.co/api/'
const PEOPLKE = 'people/:id'
const opcs = { crossDomain: true }

let id = 1

$(document).ready(function(){
  console.log('API: ', API_URL)
});
  
$('p').click(function(){
  console.log('has dado click...')
})

$('button').click(function(){
  handlerClick()
  
  /* Asincronia
  getPersonaje(1) // Luke
  getPersonaje(2) // C-3PO
  getPersonaje(3) // R2 - D2
  */

  // Sincronia con calbacks
  getPersonaje(1, function (){
    getPersonaje(2, function(){
        getPersonaje(3)
      })
    })
})

function handlerClick() {
  console.log('has dado click en el button')
}

const onResponse = function(data, success, dataType) {
  console.log('data: ', data)
  console.log(`Peticion exitosa : ${dataType.status}`)
}

function getPersonaje(id, fn) {
  let url = `${API_URL}${PEOPLKE.replace(':id', id)}`
  $.get(url, opcs, onResponse)
  if(fn) {
    fn()
  }
}



