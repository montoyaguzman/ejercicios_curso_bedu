let numero = 0;
let a = "";

numero = prompt("Ingrese numero filas: ", "");

for (i = 1; i <= numero; i++) {
  for (j = 1; j <= i; j++) {
    a += "*";
  }
  document.write(a);
  document.write("<br>");
  a = "";
}
