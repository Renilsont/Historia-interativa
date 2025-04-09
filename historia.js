document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const parte = urlParams.get('parte') || '1';

document.querySelectorAll('.parte').forEach(div => div.classList.remove('visivel'));

const parteDiv = document.getElementById(`parte${parte}`);
if(parteDiv){
    parteDiv.classList.add('visivel');
} else {
    document.body.innerHTML += '<p>Parte não encontrada.</p>';
}
});
