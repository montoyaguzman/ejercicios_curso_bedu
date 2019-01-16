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
  getDatos()
})

async function getDatos(){
  let response = await getPersonaje(1) // Luke
  console.log(`Hola, yo soy ${response.name}`)
  let response2 = await getPersonaje(2)
  console.log(`Hola, yo soy ${response2.name}`) // C-3PO
  let response3 = await getPersonaje(3)
  console.log(`Hola, yo soy ${response3.name}`) // R2 - D2
}

async function getPersonaje(id) {
  return new Promise(function(resolve, reject) {
    let url = `${API_URL}${PEOPLE.replace(':id', id)}`
    $.get(url, opcs, function(data, success, dataType) {
      resolve(data)
    }).fail(function(dataType) {
      reject(dataType)      
    })
  })

}


