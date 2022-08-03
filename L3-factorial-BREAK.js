//Factorial BREAK

let factorial = 10
let resultado = factorial
let i = 1

while (i<=20) {
    resultado = resultado * i;
    i++;
    if (i===12) {
        break
    }
    console.log(resultado);
}
