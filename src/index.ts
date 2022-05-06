let btnSumar = <HTMLButtonElement>document.getElementById("btn1");
let btnRestar = <HTMLButtonElement>document.getElementById("btn2");
let btnMultiplicar = <HTMLButtonElement>document.getElementById("btn3");
let btnDividir = <HTMLButtonElement>document.getElementById("btn4");
let btnpotenciar = <HTMLButtonElement>document.getElementById("btn5");
let btnBorrar = <HTMLButtonElement>document.getElementById("btn6");
let btn0 = <HTMLButtonElement>document.getElementById("btn0");
let btn7 = <HTMLButtonElement>document.getElementById("btn7");

let inputdato1 = <HTMLInputElement>document.getElementById("dato1");
let inputdato2 = <HTMLInputElement>document.getElementById("dato2");
let mostrarResultado = <HTMLElement>document.getElementById("mostrarResultado");

let numero1: number = 0;
let numero2: number = 0;

btn0.addEventListener("click", () => {
  numero1 = Number(inputdato1.value);
});

btn7.addEventListener("click", () => {
  numero2 = Number(inputdato2.value);
});

function sumar(num1: number, num2: number): number {
  let resultado1 = num1 + num2;
  return resultado1;
}

btnSumar.addEventListener("click", () => {
  let resultado: number = sumar(numero1, numero2);
  mostrarResultado.innerHTML = `El resultado es: ${resultado}`;
  console.log(`El resultado es: ${resultado}`);
});

function restar(num1: number, num2: number): number {
  let resultado2 = num1 - num2;
  return resultado2;
}

btnRestar.addEventListener("click", () => {
  let resultado: number = restar(numero1, numero2);
  mostrarResultado.innerHTML = `El resultado es: ${resultado}`;
  console.log(`El resultado es: ${resultado}`);
});

function multiplicar(num5: number, num6: number): number {
  let resultado3 = num5 * num6;
  return resultado3;
}

btnMultiplicar.addEventListener("click", () => {
  let resultado: number = multiplicar(numero1, numero2);
  mostrarResultado.innerHTML = `El resultado es: ${resultado}`;
  console.log(`El resultado es: ${resultado}`);
});

function dividir(dividendo: number, divisor: number): number {
  let resultado4 = dividendo / divisor;
  return resultado4;
}

btnDividir.addEventListener("click", () => {
  let resultado: number = dividir(numero1, numero2);
  mostrarResultado.innerHTML = `El resultado es: ${resultado}`;
  console.log(`El resultado es: ${resultado}`);
});

function potencia(base: number, exponente: number): number {
  return Math.pow(base, exponente);
}

btnpotenciar.addEventListener("click", () => {
  let resultado: number = potencia(numero1, numero2);
  mostrarResultado.innerHTML = `El resultado es: ${resultado}`;
  console.log("El resultado es: " + resultado);
});

btnBorrar.addEventListener("click", () => {
  (<HTMLInputElement>document.getElementById("dato1")).value = " ";

  (<HTMLInputElement>document.getElementById("dato2")).value = " ";

  mostrarResultado.innerHTML = "Ingresar nuevamente los digitos";
  console.log("Ingresar nuevamente los digitos");
  alert("Ingrese nuevamente los digitos");
});
