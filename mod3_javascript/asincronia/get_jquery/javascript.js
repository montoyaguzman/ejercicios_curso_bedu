const API_URL = 'https://swapi.co/api/'
const DARTH_VADER = 'people/:id'
const opcs = { crossDomain: true }

let id = 1
let url = `${API_URL}${DARTH_VADER.replace(':id', id)}`

$(document).ready(function(){
  console.log('API: ', url)
});
  
$('p').click(function(){
  console.log('has dado click...')
})

$('button').click(function(){
  handlerClick()
  $.get(url, opcs, onResponse)
})

function handlerClick() {
  console.log('has dado click en el button')
}

const onResponse = function(data, success, dataType) {
  console.log('data: ', data)
  console.log('success: ', success)
  console.log(`Peticion exitosa : ${dataType.status}`)
}




