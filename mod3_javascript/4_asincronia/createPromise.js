const fn = (error, data) => {
  if (error) return console.error(error);
  console.log(data);
};

const multiplicar = (a, b, fn) => {
  if (isNaN(a) && isNaN(b)) return fn("Uno de los valores no es numero");
  fn(null, a * b);
};

let promiseMultiplicar = (a, b) =>
  new Promise((resolve, reject) => {
    multiplicar(3, 4, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });

  console.log(typeof promiseMultiplicar);
