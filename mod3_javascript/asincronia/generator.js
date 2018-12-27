// async
function* NaturalNumbers() {
  let number = 1;
  while (true) {
    yield number;
    number++;
  }
}

const numbers = NaturalNumbers();

/*console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);*/

function* Saludador() {
  yield "hola";
  yield "adios";
}

const holas = Saludador();

console.log(holas.next());
console.log(holas.next());
console.log(holas.next());
