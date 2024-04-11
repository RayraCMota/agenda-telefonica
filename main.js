const form = document.getElementById('form');
let linhas = '';
const pessoa = [];
const numero = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaAgenda();
    totalNomesCadastrados();

});

function adicionarLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (pessoa.includes(inputNome.value)){
        alert(`O contato já foi inserido`);
    } else{

        pessoa.push(inputNome.value);
        numero.push(parseInt(inputTelefone.value));

        let linha = "<tr>";
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += "</tr>";

        linhas += linha;


        inputNome.value='';
        inputTelefone.value='';
    }
}

function atualizaAgenda(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function totalNomesCadastrados(){

    document.getElementById('total-cadastro').innerHTML = pessoa.length;
    
}

