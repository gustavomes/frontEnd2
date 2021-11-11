let jogador1 = prompt("Digite: 1 - Pedra, 2 - papel e 3 - tesoura:") 



const comput = [1, 2, 3]
let aleat = comput[Math.floor((Math.random() * comput.length))]
console.log(aleat)

const opcoes = []
if (aleat == 1){
    opcoes[0] = "Pedra";
}
if (aleat == 2){
    opcoes[1] = "Papel";
}
if (aleat == 3){
    opcoes[2] = "Tesoura";
}
// console.log(aleat)
// console.log(opcoes)
alert(`Você digitou ${jogador1} e a máquina colocou ${opcoes}`)

if (jogador1 == 1 && aleat == 2){
    alert('Perdeu!')
}
else if(jogador1 == 1 && aleat == 3){
    alert('Ganhou!')
}
else if(jogador1 == 2 && aleat == 1){
    alert('Ganhou!')
}
else if(jogador1 == 2 && aleat == 3){
    alert('Perdeu!')
}
else if(jogador1 == 3 && aleat == 1){
    alert('Perdeu!')
}
else if(jogador1 == 3 && aleat == 2){
    alert('Ganhou!')
}
else{
    alert('Empatou!')
}