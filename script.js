/* =========================
   CARROSSEL DE IMAGENS
========================= */

/* Troque os links abaixo pelas imagens que você quiser usar */
const imagens = [
    "https://plain-enam-prod-public.komododecks.com/202606/20/K5XaLqE5ONXidvNbj1eq/image.png",
    "https://plain-enam-prod-public.komododecks.com/202606/20/6v7A4hLYpII2vNl03UJF/image.png",
    "https://plain-enam-prod-public.komododecks.com/202606/24/gxljDcKy12tsF4WCB4kn/image.png"
];

let indiceAtualImagem = 0;

function proximaImagem() {
    const imagemProduto = document.getElementById("imagem-produto");

    indiceAtualImagem++;
    if (indiceAtualImagem >= imagens.length) {
        indiceAtualImagem = 0;
    }

    imagemProduto.src = imagens[indiceAtualImagem];
}

function voltarImagem() {
    const imagemProduto = document.getElementById("imagem-produto");

    indiceAtualImagem--;
    if (indiceAtualImagem < 0) {
        indiceAtualImagem = imagens.length - 1;
    }

    imagemProduto.src = imagens[indiceAtualImagem];
}

/* =========================
   ABRIR / FECHAR DESCRIÇÃO
========================= */
function toggleDescricao() {
    const painel = document.getElementById("descricao");
    const seta = document.getElementById("seta");

    if (painel.classList.contains("aberto")) {
        painel.classList.remove("aberto");
        painel.style.maxHeight = null;
        seta.style.transform = "rotate(0deg)";
    } else {
        painel.classList.add("aberto");
        painel.style.maxHeight = painel.scrollHeight + "px";
        seta.style.transform = "rotate(180deg)";
    }
}

/* =========================
   CARROSSEL DE DESCRIÇÕES
========================= */
const descricoes = [
    {
        titulo: "Design e Silhueta",
        texto: "Inspirado no formato robusto e dinâmico do aclamado Jordan Tatum 2, o modelo traz um cabedal estruturado em mesh balístico preto, sobreposições de couro roxo fosco e linhas fluidas que abraçam o pé, garantindo o visual marcante dos anos dourados dos sneakers."
    },
    {
        titulo: "Conforto e Performance",
        texto: "A entressola foi pensada para absorção de impacto e resposta rápida, oferecendo estabilidade para movimentos explosivos e conforto prolongado tanto nas quadras quanto no uso urbano."
    },
    {
        titulo: "Estilo Futurista",
        texto: "Com detalhes neon, contrastes marcantes e acabamento agressivo, o Alien X mistura tecnologia, streetwear e identidade visual de ficção científica em um sneaker único."
    }
];

let indiceDescricao = 0;

/* Atualiza o título e o texto da descrição */
function atualizarDescricao() {
    const titulo = document.getElementById("titulo-descricao");
    const texto = document.getElementById("texto-descricao");
    const painel = document.getElementById("descricao");

    titulo.textContent = descricoes[indiceDescricao].titulo;
    texto.textContent = descricoes[indiceDescricao].texto;

    /* Se o painel estiver aberto, recalcula a altura
       para o texto não ficar cortado */
    if (painel.classList.contains("aberto")) {
        painel.style.maxHeight = null;
        painel.style.maxHeight = painel.scrollHeight + "px";
    }
}

/* Próxima descrição */
function proximaDescricao() {
    indiceDescricao++;
    if (indiceDescricao >= descricoes.length) {
        indiceDescricao = 0;
    }
    atualizarDescricao();
}

/* Descrição anterior */
function descricaoAnterior() {
    indiceDescricao--;
    if (indiceDescricao < 0) {
        indiceDescricao = descricoes.length - 1;
    }
    atualizarDescricao();
}