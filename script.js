function toggleDescricao() {
    const painel = document.getElementById("descricao");
    const seta = document.getElementById("seta");

    if (painel.classList.contains("aberto")) {
        // FECHAR
        painel.classList.remove("aberto");
        painel.style.maxHeight = null;
        seta.style.transform = "rotate(0deg)";
    } else {
        // ABRIR
        painel.classList.add("aberto");
        painel.style.maxHeight = painel.scrollHeight + "px";
        seta.style.transform = "rotate(180deg)";
    }
}