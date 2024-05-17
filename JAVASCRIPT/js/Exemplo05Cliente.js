const campoTipoPF = document.getElementById("tipoPessoaFisica")
const campoTipoPJ = document.getElementById("tipoPessoaJuridica")
const botaoSalvar = document.getElementById("botao-salvar")

function apresentarCamposPJ() {
    apresentarCampos("campo-pj");
    removerCampos("campo-pf");
}
function apresentarCamposPF() {
    apresentarCampos("campo-pf");
    removerCampos("campo-pj");
}

function apresentarCampos(tipoPessoa) {
    // Obter todas as divs que contém a classe
    const divs = document.getElementsByClassName(tipoPessoa)
    let i = 0;
    //percorrer cada uma das divs com a classe campo-pj
    while (i < divs.length) {
        //pegar a div que está sendo iterada da lista de divs
        let div = divs[i]
        //remover a class inactive da div, para que seja apresentada
        div.classList.remove("inactive")
        //incrementar a variavel indice para ir para a proxima div
        i++;
    }
}
function removerCampos(tipoPessoa) {
    // Obter todas as divs que contém a classe
    const divs = document.getElementsByClassName(tipoPessoa)
    let i = 0;
    //percorrer cada uma das divs com a classe campo-pj
    while (i < divs.length) {
        //pegar a div que está sendo iterada da lista de divs
        let div = divs[i]
        //adiciona a class inactive da div, para que seja apresentada
        div.classList.add("inactive")
        //incrementar a variavel indice para ir para a proxima div
        i++;
    }
}
function salvarCliente() {
    debugger;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const apelido = document.getElementById("apelido").value;
    const razaoSocial = document.getElementById("razaoSocial").value;
    const cnpj = document.getElementById("cnpj").value;

    // Criar um elemento de tr no javascript
    const novaLinha = document.createElement("tr");
    
    // Criar um elemento de coluna para o código
    const novaCelulaCodigo = document.createElement("td");
    // Definir o conteúdo dessa coluna do código
    novaCelulaCodigo.innerHTML = "2";
    
    // Criar um elemento de coluna para o nome
    const novaCelulaNome = document.createElement("td");
    // Definir o conteúdo dessa coluna do nome com o nome que o usuário digitou
    novaCelulaNome.innerHTML = nome;

    // Adicionar as colunas na linha
    novaLinha.appendChild(novaCelulaCodigo);
    novaLinha.appendChild(novaCelulaNome);

    // Obter a tabela para adicionarmos a nova linha criada
    const tabela = document.getElementsByClassName("table")[0];
    // Adicionar a linha na tabela
    tabela.appendChild(novaLinha);
}

campoTipoPF.onclick = apresentarCamposPF;
campoTipoPJ.onclick = apresentarCamposPJ;
botaoSalvar.onclick = salvarCliente;