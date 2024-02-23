import { generarListaNumero,generarFizzBuzz } from "./generarFizzBuzz";

const numero_input = document.querySelector("#primer-numero");
const form = document.querySelector("#generar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = numero_input.value;

  div.innerHTML = "<p>" + generarListaNumero(numero) + "</p>";
});
