let parte_atual = 1;
const partes_totais = 3;

function atualizar_botoes() {
    const voltarBotao = document.getElementById("voltarBotao");
    const proximoBotao = document.getElementById("proximoBotao");

    voltarBotao.style.display = (parte_atual > 1) ? "inline-block" : "none";
    proximoBotao.style.display = (parte_atual === partes_totais) ? "none" : "inline-block";
}

function ProximaParte() {
    if (parte_atual < partes_totais) {
        document.getElementById(`parte${parte_atual}`).classList.remove("visivel");
        document.getElementById(`parte${parte_atual}`).classList.add("invisivel");
        parte_atual++;
        document.getElementById(`parte${parte_atual}`).classList.remove("invisivel");
        document.getElementById(`parte${parte_atual}`).classList.add("visivel");
        atualizar_botoes();
    }
}

function voltar() {
    if (parte_atual > 1) {
        document.getElementById(`parte${parte_atual}`).classList.remove("visivel");
        document.getElementById(`parte${parte_atual}`).classList.add("invisivel");
        parte_atual--;
        document.getElementById(`parte${parte_atual}`).classList.remove("invisivel");
        document.getElementById(`parte${parte_atual}`).classList.add("visivel");
        atualizar_botoes();
    }
}

atualizar_botoes();
