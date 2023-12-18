function soma(num1, num2){
    return num1+ num2
}
function mult(num1, num2){
    return num1*num2
}
function div(num1, num2){
    return num1/num2
}
function subt(num1, num2){
    return num1 - num2
}
function calculadora(numero1, numero2, operacao){
    return operacao(numero1, numero2)
}
console.log("Resultado soma:",calculadora(1, 2, soma))
console.log("Resultado multiplicação:",calculadora(2,4, mult))
console.log("Resultado subtração",calculadora(2,0, subt))
console.log("Resultado divisão",calculadora(4,2,div))