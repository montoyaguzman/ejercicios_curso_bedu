let numero = 0;
let a = "";

numero = prompt("Escribe un multiplo de 15: ", "");
palabra = "";
bandera = false;

for (i = 1; i <= numero; i++) {
  if (i % 3 === 0) {
    palabra = "Fizz";
    bandera = true;
  } else if (i % 5 === 0) {
    palabra = "Buzz";
    bandera = true;
  }
  if (i % 3 === 0 && i % 5 === 0) {
    palabra = "FizzBuzz";
    bandera = true;
  }

  if (bandera) {
    document.write(palabra + "<br>");
  } else {
    document.write(i + "<br>");
  }
  bandera = false;
}
