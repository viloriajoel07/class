// EJERCICIO DE CONTADOR

const buttonSuma = document.getElementById("btn_suma");
const buttonResta = document.getElementById("btn_restar");
const contadorSpan = document.getElementById("contador");
const btn_restaurar = document.getElementById("btn_restaurar");
const n = document.getElementById("num");
let contador = 0;

buttonSuma.addEventListener("click", () => {
  contador++;
  contadorSpan.innerHTML = contador;
});

buttonResta.addEventListener("click", () => {
  if (contador === 0) return;

  contador = contador - 1;
  contadorSpan.innerHTML = contador;
});

btn_restaurar.addEventListener("click", () => {
  contador = 0;
  contadorSpan.innerHTML = contador;
});
function num(event) {
  console.log(n.value);
  const g = n.value;
  contador = g;
  contadorSpan.innerHTML = contador;
  n.value = "";
}

// EJERCICIO DE CALCULADORA

// const n = document.getElementById("val1");
// const n2 = document.getElementById("val2");
// const resultado = document.getElementById("resultado");
// function suma() {
//   let r;
//   const num1 = parseInt(n.value);
//   const num2 = parseInt(n2.value);
//   r = num1 + num2;
//   mostrar(r);
// }
// function resta() {
//   let r;
//   const num1 = n.value;
//   const num2 = n2.value;
//   r = num1 - num2;
//   mostrar(r);
// }
// function mult() {
//   let r;
//   const num1 = parseInt(n.value);
//   const num2 = parseInt(n2.value);
//   r = num1 * num2;
//   mostrar(r);
// }
// function div() {
//   let r;
//   const num1 = parseInt(n.value);
//   const num2 = parseInt(n2.value);
//   if (num2 === 0) {
//     alert("DIVIDIR ENTRE 0 NO SE PUEDE");
//     return;
//   }
//   r = num1 / num2;
//   mostrar(r);
// }
// function mostrar(r) {
//   resultado.innerHTML = r;
// }
// function limpiar() {
//   n.value = "";
//   n2.value = "";
//   resultado.innerHTML = "0";
// }
