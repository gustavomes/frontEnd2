let formulario = document.createElement('form')
let titulo = document.createElement('h1')
let email = document.createElement('input')
let senha = document.createElement('input')
let BtnEnviar = document.createElement('button')
let BtnReset = document.createElement('button')

document.querySelector('body').appendChild(formulario);
document.querySelector('form').appendChild(titulo);
document.querySelector('form').appendChild(email);
document.querySelector('form').appendChild(senha);
document.querySelector('form').appendChild(BtnEnviar);
document.querySelector('form').appendChild(BtnReset);

formulario.setAttribute ('method', 'post');
formulario.style.padding = '10px';
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.alignItems = "center";
email.setAttribute('placeholder', 'email');
email.disabled = true;
email.style.marginBottom = '5px';
senha.setAttribute('placeholder', 'senha', 'type', 'password');
senha.style.marginBottom = '30px';
BtnEnviar.setAttribute ('type', 'submit', 'name', 'enviar');
BtnEnviar.innerText = 'Enviar'
BtnEnviar.style.width = '20%';
BtnEnviar.setAttribute ('type', 'reset', 'name', 'enviar');
BtnReset.innerText = 'Cancelar'
BtnReset.style.width = '20%';
email.removeAttribute ('placeholder')
