let numero = 0;

numero = prompt("¿Cuantos numeros?");
let aux1 = 0;
let aux2 = 1;

document.write("1 <br>")

for (i = 1; i <= numero; i++) {
  let actual = aux1 + aux2
  document.write(actual)
  aux1 = aux2
  aux2 = actual
  document.write("<br>")
}
