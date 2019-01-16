const multiplicar = (a, b, fn) => {
  if (isNaN(a) && isNaN(b)) return fn("Uno de los valores no es numero");
  fn(null, a * b);
};

const fn = (error, data) => {
  if (error) return console.error(error);
  console.log(data);
};

multiplicar(3, 'a', fn);
multiplicar(3, 5, fn);
