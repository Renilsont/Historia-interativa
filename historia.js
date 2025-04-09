// Espera o DOM carregar para executar o codigo
document.addEventListener("DOMContentLoaded", () => {
    //Pega os parametros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const parte = urlParams.get('parte') || '1'; //obtem o valor do parametro ou mostra a parte 1 por padrão

//Remover a classe visivel das divs parte
document.querySelectorAll('.parte').forEach(div => div.classList.remove('visivel'));

//Seleciona a div da parte especificada na URL

document.title.add("Teste");

const parteDiv = document.getElementById(`parte${parte}`);
if(parteDiv){
    parteDiv.classList.add('visivel');//adiciona a classe visivel a div para exibi-la
} else {
    document.body.innerHTML += '<p>Parte não encontrada.</p>';
}
});
