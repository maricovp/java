/*
Questão 24: Como você pode adicionar um evento de clique a um elemento 
HTML em JavaScript?
*/

const botao = document.getElementById("nomeTag");
botao.addEventListener("click", minhaFuncao);

function minhaFuncao(){
    console.log("o botao foi usado");
}