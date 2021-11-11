/*
REQUISITOS
- Crie um formulário para capturar um texto inserido.
- Implemente o evento "submit", use-o para salvar o comentário em um array.
- Cada vez que um novo comentário é adicionado, renderize-o em uma tag "p" (remova o código permanente do HTML e torne-o dinâmico).
- Salve constantemente as informações em localStorage, caso a página seja recarregada os comentários devem ser mantidos.
*/


// selecionar o DOM
let marca = document.querySelector('#marca');
let modelo = document.querySelector('#modelo');
let placa = document.querySelector('#placa');
let btn = document.querySelector('#btn');
let p = document.querySelector('p');


// criar um array

let carrosArray = [];

//resgatar o localStorage

let carroRec = localStorage.getItem('carros');

if (carroRec !== null) {
    carrosArray = carroRec.split('\n');
    p.innerText = carrosArray;
} else {
    p.innerText = 'Não há carros cadastrados';
}

//Evento de botão

btn.addEventListener('click', (event) => {
    event.preventDefault();


    //criar um objeto

    let Carro = {

        marca: marca.value,
        modelo: modelo.value,
        placa: placa.value,
    }

  //transformar o objeto em string
let carroStr = JSON.stringify(Carro);
  
//adicionar o objeto no array
carrosArray.push(carroStr);

//adicionar no localStorage
let vaiStorage = carrosArray.join('\n');

localStorage.setItem('carros', vaiStorage);

    //enviar para o html
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


