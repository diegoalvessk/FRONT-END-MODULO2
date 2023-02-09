let numero = 0
let soma = 0

for (let index = 0; index <8; index++) {
    numero = parseInt(prompt("Informe o número"))
    soma = soma + numero
}

let contador = 0
soma = 0

while(contador<8){
    numero = parseInt(prompt("Informe o número"))
    soma = soma + numero
    contador++
}

contador = 0
soma = 0
do {
    numero = parseInt(prompt("Informe o número"))
    soma = soma + numero
    contador++
} while (contador<8);