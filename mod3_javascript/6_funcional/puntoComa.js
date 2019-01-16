// CASO 1
console.log('hola mundo')
;[1, 2, 3].map(element => {
  console.log(element)
});  

// CASO 2
const nombre = 'montoya'
console.log('hola mundo')
;`${nombre} es un desarrollador`  

// CASO 3
// El salto de linea en un return, marca el fin de una sentencia
function calcularDoble(numero) {
  return {
    original: numero, doble: numero * 2
  }
}

console.log(calcularDoble(10))