const campoTipoPF = document.getElementById("tipoPessoaFisica")
const campoTipoPJ = document.getElementById("tipoPessoaJuridica")
const botaoSalvar = document.getElementById("botao-salvar")
const campoNome = document.getElementById("nome");
const campoDataNascimento = document.getElementById("dataNascimento");
const campoApelido = document.getElementById("apelido");
const campoRazaoSocial = document.getElementById("razaoSocial");

//clientes sera utilizado para armazenar a nossa lista de clientes
const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const campoCpf = document.getElementById("cpf");
const mascaraCPF = { mask: "000.000.000-00" };
const mascaraCampoCpf = IMask(campoCpf, mascaraCPF);

const campoCNpj = document.getElementById("cnpj");
const mascaraCNpj = {
    mask: "000.000.000/0000-00"
};
const mascaraCampoCnpj = IMask(campoCNpj, mascaraCNpj);


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
    const nome = campoNome.value;
    const cpf = campoCpf.value;
    const dataNascimento = campoDataNascimento.value;
    const apelido = campoApelido.value;
    const razaoSocial = campoRazaoSocial.value;
    const cnpj = campoCNpj.value;
    // document.querySelector("input") irá retornar o primeiro input que encontrar
    // document.querySelector("input[name='tipoPessoa']") irá retornar o primeiro input que contenha o name 'tipoPessoa', neste cenário é o campo de Pessoa Física
    // document.querySelector("input[name='tipoPessoa':checked]") irá retornar o primeiro input que contenha o name 'tipoPessoa' que está selecionado, neste cenário é o campo que o usuário escolheu.
    const tipoPessoa = document.querySelector("input[name='tipoPessoa']:checked").value;
    console.log(tipoPessoa)

    criarLinha(nome, cpf, dataNascimento, apelido, cnpj, razaoSocial, tipoPessoa);
    limparCampos()

    const cliente = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        apelido: apelido,
        cnpj: cnpj,
        razaoSocial: razaoSocial,
        tipoPessoa: tipoPessoa
    };
    clientes.push(cliente)
    const clientesString = JSON.stringify(clientes)
    localStorage.setItem("clientes", clientesString)
}

function limparCampos() {
    campoNome.value = "";
    campoCpf.value = "";
    campoDataNascimento.value = "";
    campoApelido.value = "";
    campoRazaoSocial.value = "";
    campoCNpj.value = "";
    campoNome.focus();
}

function criarLinha(nome, cpf, dataNascimento, apelido, cnpj, razaoSocial, tipoPessoa) {
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

    const novaCelulapCpfCNpj = document.createElement("td")
    if (tipoPessoa === "pf") {
        novaCelulapCpfCNpj.innerHTML = cpf
    }
    else if (tipoPessoa === "pj") {
        novaCelulapCpfCNpj.innerHTML = cnpj
    }
    const novaCelulaBotoes = document.createElement("td")
    const novoBotaoEditar = document.createElement("button")
    const novoBotaoApagar = document.createElement("button")
    const novoIconeEditar = document.createElement("i")
    const novoIconeApagar = document.createElement("i")

    novoIconeEditar.classList.add("fa-solid", "fa-pencil")
    novoIconeApagar.classList.add("fa-solid", "fa-trash")

    novoBotaoEditar.classList.add("botao-editar");
    novoBotaoApagar.classList.add("botao-apagar");

    novoBotaoEditar.appendChild(novoIconeEditar)
    novoBotaoEditar.innerHTML += "Editar"

    novoBotaoApagar.appendChild(novoIconeApagar)
    novoBotaoApagar.innerHTML += "Apagar"

    novaCelulaBotoes.appendChild(novoBotaoEditar)
    novaCelulaBotoes.appendChild(novoBotaoApagar)

    // Adicionar as colunas na linha
    novaLinha.appendChild(novaCelulaCodigo);
    novaLinha.appendChild(novaCelulaNome);
    novaLinha.appendChild(novaCelulapCpfCNpj);
    novaLinha.appendChild(novaCelulaBotoes);

    // Obter a tabela para adicionarmos a nova linha criada
    const tabela = document.getElementsByClassName("table")[0];
    // Adicionar a linha na tabela
    const tbodytabela = tabela.getElementsByTagName("tbody")[0]
    tbodytabela.appendChild(novaLinha);
}

carregarClientesNaTabela();
campoTipoPF.onclick = apresentarCamposPF;
campoTipoPJ.onclick = apresentarCamposPJ;
botaoSalvar.onclick = salvarCliente;


// Local Storage: é um local que permite armazenar dados sem tempo de expiração
// Create: cadastrar um item por chave nome
// localStorage.setItem("nome", "Francisco Lucas Sens");
// Read: obter um item por chave
// const nomeProfessor = localStorage.getItem("nome");
// Update: atualizar um item por chave
// localStorage.setItem("nome", "Francisco Lucas Janesch Lange Sens");
// Delete: remover um item por chave
// localStorage.removeItem("nome");
function carregarClientesNaTabela() {
    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i]
        criarLinha(
            cliente.nome,
            cliente.cpf,
            cliente.dataNascimento,
            cliente.apelido,
            cliente.cnpj,
            cliente.razaoSocial,
            cliente.tipoPessoa)
    }
}
