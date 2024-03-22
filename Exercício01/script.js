// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

let numberOne = Number(prompt("Por favor, insira o primeiro número:"))
let numberTwo = Number(prompt("Por favor, insira o segundo número:"))

const sum = () => {
  return numberOne + numberTwo
}

const subtraction = () => {
  return numberOne - numberTwo
}

const multiplication = () => {
  return numberOne * numberTwo
}

const division = () => {
  return numberOne / numberTwo
}

const restOfDivision = () => {
  return numberOne % numberTwo
}

let oddOrEven = numberOne % numberTwo == 0 ? `A soma dos numeros é par: ${sum()}` : `A soma dos numeros é impar: ${sum()}`

let equalOrDifferent = numberOne === numberTwo ? "Os numeros sao iguais." : "Os numeros sao diferentes"

alert(`A soma é: ${sum()}`)
alert(`A subtracao é: ${subtraction()}`)
alert(`A multiplicacao é: ${multiplication()}`)
alert(`A divisao é: ${division().toFixed(2)}`)
alert(`O resto da divisao é: ${restOfDivision()}`)
alert(oddOrEven)
alert(equalOrDifferent)