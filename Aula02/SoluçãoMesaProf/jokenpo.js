
let maoUsuario = parseInt(prompt("Pedra(1), papel(2) ou tesoura(3)?"))
let random = parseInt(Math.random() * 3 + 1)
let maoMaquina = random

alert("A mão que o usuário escolheu foi: " + maoUsuario)
alert("A mão que o computador escolheu foi: " + maoMaquina)

let resultado = "Sem resultado"

if (maoUsuario == 1) {
    if (maoMaquina == 1) {
        resultado = "Empate"
    } else if (maoMaquina == 2) {
        resultado = "Derrota"
    } else {
        resultado = "Vitória"
    }
}

if (maoUsuario == 2) {
    if (maoMaquina == 1) {
        resultado = "Vitoria"
    } else if (maoMaquina == 2) {
        resultado = "Empate"
    } else {
        resultado = "Derrota"
    }
}

if (maoUsuario == 3) {
    if (maoMaquina == 1) {
        resultado = "Derrota"
    } else if (maoMaquina == 2) {
        resultado = "Vitoria"
    } else {
        resultado = "Empate"
    }
}

alert("O resultado da partida foi: " + resultado)