const division = (a, b) =>
  new Promise((resolve, reject) => {
    if (b == 0) reject(`El dividendo tiene que ser un numero distinto de 0`);
    resolve(a / b);
  });

const getNumber = () => 1000;

async function pintar() {
  try {
    const response = await division(1, 2);
    const number = await getNumber();
    console.log(`El resultado es ${response * number}`);
  } catch (e) {
    console.error("Tuvimos un error", e);
  }
}

pintar(1 / 2);
