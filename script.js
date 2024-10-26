
function saudacao() {
    const saudacao = "Olá, bem-vindo ao nosso site!";
    console.log(saudacao);
    document.getElementById("mensagem").textContent = saudacao;
}


function exibirDataAtual() {
    const dataAtual = new Date().toLocaleDateString();
    document.getElementById("data").textContent = `Data de hoje: ${dataAtual}`;
}


window.onload = () => {
    saudacao();
    exibirDataAtual();
};
console.log()