// Seleciona os elementos DOM necessários
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Define o array de perguntas e alternativas
const perguntas = [
    {
        enunciado: "Você acabou de adquirir um assistente virtual que pode controlar toda a sua casa. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é incrível, mal posso esperar para usá-lo!",
                afirmacao: "afirmação"
            },
            {
                texto: "Tenho receio de que ele saiba demais sobre mim.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Seu assistente virtual sugere ajustar a temperatura da casa com base no seu histórico de preferências. O que você faz?",
        alternativas: [
            {
                texto: "Aceito a sugestão, adoro quando ele me conhece tão bem.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro ajustar manualmente para ter mais controle.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você percebe que seu assistente virtual está sempre ouvindo para atender seus comandos. Como você se sente sobre isso?",
        alternativas: [
            {
                texto: "Confortável, é assim que ele pode ser mais eficiente.",
                afirmacao: "afirmação"
            },
            {
                texto: "Incomodado, não gosto da ideia de estar sempre sendo ouvido.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Seu assistente virtual pode fazer compras online para você, com base nas suas preferências e necessidades. Qual é a sua atitude?",
        alternativas: [
            {
                texto: "Adoro a conveniência, deixo ele cuidar das compras.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro escolher e comprar por conta própria.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem a opção de permitir que seu assistente virtual interaja com outros dispositivos inteligentes na sua casa, como luzes, câmeras e trancas. O que você faz?",
        alternativas: [
            {
                texto: "Permito a integração, quero uma casa completamente inteligente.",
                afirmacao: "afirmação"
            },
            {
                texto: "Limito a interação para manter mais controle.",
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Função para mostrar a pergunta atual
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// Função para mostrar as alternativas da pergunta atual
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.classList.add("botao-alternativa"); // Adiciona uma classe CSS
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Função chamada quando uma resposta é selecionada
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049, sua casa inteligente...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

// Inicia o questionário
mostraPergunta();
