function login(){
const elementoUser = document.querySelector("#user");
const elementoSenha = document.querySelector("#senha");

let usuario = elementoUser.value;
let senha = elementoSenha.value;
let confirmarEntrada = usuario + " " + senha;
alert("Dados : " + confirmarEntrada) 
}