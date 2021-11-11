/*
REQUISITOS
- Crie um formulário para capturar um texto inserido.
- Implemente o evento "submit", use-o para salvar o comentário em um array.
- Cada vez que um novo comentário é adicionado, renderize-o em uma tag "p" (remova o código permanente do HTML e torne-o dinâmico).
- Salve constantemente as informações em localStorage, caso a página seja recarregada os comentários devem ser mantidos.
*/



let marca = document.querySelector('#marca');
let modelo = document.querySelector('#modelo');
let placa = document.querySelector('#placa');
let btn = document.querySelector('#btn');
let p = document.querySelector('p');



let carrosArray = [];

let carroRec = localStorage.getItem('carros');

if (carroRec !== null) {
    carrosArray = carroRec.split('\n');
    p.innerText = carrosArray;
} else {
    p.innerText = 'Não há carros cadastrados';
}

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let Carro = {

        marca: marca.value,
        modelo: modelo.value,
        placa: placa.value,
    }
   
    //console.log(Carro);

let carroStr = JSON.stringify(Carro);

carrosArray.push(carroStr);

let vaiStorage = carrosArray.join('\n');

localStorage.setItem('carros', vaiStorage);

p.innerText = (JSON.parse(carroStr[1]));

});



/* let nome = document.querySelector('#field1');
let btn = document.querySelector('#btn');
let p = document.querySelector('p');

let nomesArray = [];

let nomesstrel = localStorage.getItem ('nomes')

if (nomesArray !== null)  {
nomesArray = nomesstrel.split (` `)
console.log (nomesArray)
}

btn.addEventListener('click', (event) => {
    event.preventDefault();

    nomesArray.push(field1.value)

    let nomeStg = nomesArray.join('\n');

    localStorage.setItem('nomes', nomeStg)
    console.log(nomeStg)
    console.log(nomesArray)

    p.innerText = nomesArray;
}); */


