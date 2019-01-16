const axios = require("axios");

axios
  .get("https://pokeapi.co/api/v2/pokemon/7")
  .then(response => {
    console.log(response.data.name);
  })
  .catch(error => {
    console.log(error);
  });
// https://github.com/pitakill/es6-classes
// UrlSearchParams
// Prototype es para los objetos que se comportan como clases
// Array, String, objects, functions, etc
// curry in js
// agregar test a mis proyectos
