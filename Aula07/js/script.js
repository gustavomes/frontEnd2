let titulo = document.querySelector("h1");

titulo.addEventListener('mouseover', colorchange);
function colorchange () {
  titulo.style.color = "black";
  console.log ('passou aqui')
  
}
titulo.addEventListener('mouseout', () =>{
  titulo.style.color = "white";
  console.log ('saiu  daqui')
})


let campo1 = document.querySelector ("#field1")
let campo2 = document.querySelector ("#filed2")
let btn = document.querySelector ("#btn")

let list = document.querySelector ("ol")

btn.addEventListener ('click', (event) => {
  console.log("clicou em mim");

  event.preventDefault()

  let li = document.createElement('li')
  li.innerText = field1.value + " " +field2.value

  list.appendChild(li)

  let form = document.setAttribute ("action", ())

})
