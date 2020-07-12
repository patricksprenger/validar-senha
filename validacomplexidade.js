var letrasMaiusculas = /[A-Z]/
var letrasMinusculas = /[a-z]/
var numeros = /[0-9]/
var especiais = /[\W]/

function validaComplexidade(valor) {
    if (valor.length >= 8 && valor.length <=32) {
        if (letrasMinusculas.test(valor) && letrasMaiusculas.test(valor) && numeros.test(valor) && especiais.test(valor) != 1){
            return 1
        }
        else return 0
    }
    else return 0
}

console.log(validaComplexidade('a1234567A'))