// this bindeo al scope de una arrow function
// hoisting
// eventListener

console.log("En el JS...");

let divRoot = document.getElementById("root");
divRoot.style.border = "1px solid red";
document.getElementById("root").innerHTML = "Este es un div rojo";

function addTitulo() {
  let helement = document.createElement("H1");
  helement.innerHTML = "Titulo 1";
  document.getElementById("titulo").appendChild(helement);
}

function muestraNombre(event) {
  let nombre = document.getElementById("nombreInput").value;
  let nombreSpan = document.getElementById("nombreSpan");
  let chCode = "charCode" in event ? event.charCode : event.keyCode;
  let letra = String.fromCharCode(chCode);
  nombre = nombre.concat(letra);
  nombreSpan.innerHTML = nombre;
}
