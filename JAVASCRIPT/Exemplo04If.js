const botaoNumeroPositivo = document.getElementById("numeroPositivo");
const botaoNumeroPar = document.getElementById("numeroPar");
const botaoNumeroMaior8000 = document.getElementById("numeroMaior8000");
const textareaResultado = document.getElementById("resultado")
const inputNumero1 = document.getElementById("numero1")
const imagem = document.getElementsByTagName("img")[0]

function verificarNumeroPositivo() {
    const numero1 = parseInt(inputNumero1.value)
    // se número1 for maior que 0 então apresentará o alert de número positivo
    if (numero1 > 0) {
        textareaResultado.value = textareaResultado.value + numero1 + " Número positivo\n"
    }// senão apresentára o alert de número não positivo
    else if (numero1) {
        textareaResultado.value = textareaResultado.value + numero1 + " Número Negativo\n"
    }
    else {
        textareaResultado.value = textareaResultado.value + numero1 + " Número igual a 0(Zero)\n"
    }
}
function verificarNumeroPar() {
    const numero1 = parseInt(inputNumero1.value)
    if (numero1 % 2 === 0) {
        textareaResultado.value = textareaResultado.value + " é Par\n";
    }
    else {
        textareaResultado.value = textareaResultado.value + " é Impar\n";
    }

}
function verificarNumeroMaior8000() {
    const numero1 = parseInt(inputNumero1.value)
    if (numero1 === 8001) {
        botaoNumeroMaior8000.style.display = "none"
        imagem.setAttribute("src", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXlmYzZxNmZhdjc2eGk3YXN6MTBwNHdieWJvcmh2cXl0ZnBmaXJ0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MvedbKot538WY/giphy.gif")
    }
}
function resetButton(){
    const numero1 = parseInt(inputNumero1.value)
    if (numero1 !== 8001){
        botaoNumeroMaior8000.style.display = "Inline-block";
        imagem.setAttribute("src", "")
    }
}
inputNumero1.onkeyup = resetButton;
botaoNumeroPositivo.onclick = verificarNumeroPositivo;
botaoNumeroPar.onclick = verificarNumeroPar;
botaoNumeroMaior8000.onclick = verificarNumeroMaior8000