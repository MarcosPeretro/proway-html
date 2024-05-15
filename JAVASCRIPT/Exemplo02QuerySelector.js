/*
    document.querySelector é utilizado para encontrar o primeiro elemento que contenha o seletor
    document.querySelector("seletor")
    Exemplo de seletores
    document.querySelector("#idDoElemento"); Selecionar o elemento que contenha o id
    document.querySelector(".nomeClasseDoElemento"); Seçecionar o elemento que contenha a classe
    document.querySelector("input");Selecionar o elemento que contenha tag

Criando uma constante elementoH1 que será atribuído o primeiro elemento que contem a tag h1*/
const elementoH1 = document.querySelector("h1");

function apresentarNomeCompleto(){
/*Selecionar elemento que contenha o id nome */
const elementoNome = document.querySelector("#nome");
const elementoSobrenome = document.querySelector("#sobrenome");

let nome = elementoNome.value;
let sobrenome = elementoSobrenome.value;
let nomeCompleto = nome + " " + sobrenome;
alert("Nome completo: " + nomeCompleto);
}
