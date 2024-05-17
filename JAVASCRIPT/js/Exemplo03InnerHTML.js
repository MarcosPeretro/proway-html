// obter o primeiro elemento que contenha o id "idioma-ingles"
const botaoIngles = document.querySelector("#idioma-ingles")
// obter o elemento que contenha o id "idioma-portugues"
const botaoPortugues = document.getElementById("idioma-portugues")
const botaoEspanhol = document.querySelector("#idioma-espanhol")
// obter os elementos da tag h1
const elementosH1 = document.getElementsByTagName("h1");
// obter a primeira tag h1
const h1 = elementosH1[0];

function removeCorTitulo(){
    h1.classList.remove("titulo-portugues")
    h1.classList.remove("titulo-espanhol")
    h1.classList.remove("titulo-ingles")
}
function alterarIdiomaIngles(){
    // alterar o conteúdo do elemento h1
    h1.innerHTML = "Hello world";
    removeCorTitulo();
    h1.classList.add("titulo-ingles")
}
function alterarIdiomaPortugues(){
    h1.innerHTML = "Ola mundo";
    removeCorTitulo();
    h1.classList.add("titulo-portugues")
}
function alterarIdiomaEspanhol(){
    h1.innerHTML = "Hola mundo";
    removeCorTitulo();
    h1.classList.add("titulo-espanhol")
}
botaoIngles.onclick = alterarIdiomaIngles;
botaoPortugues.onclick = alterarIdiomaPortugues;
botaoEspanhol.onclick = alterarIdiomaEspanhol;

