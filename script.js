const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de terminar o ensino médio, e uma pergunta é feita a você, o que você pretende fazer?",
        alternativas: [
            {
                texto: "Não sei ainda, não pensei em nada.",
                afirmacao: "Você ficou tranquilo enquanto estudava e nem pensou nisso. "
            },
            {
                texto: "Não tenho certeza mas já tenho uma direção.",
                afirmacao: "Pensou bastante nisso procurou saber mais."
            }
        ]
    },
    {
        enunciado: "Você acaba de saber por um amigo que averá um vestibular para uma faculdade publica. Qual a sua decisão? ",
        alternativas: [
            {
                texto: "Acha que é uma perda de tempo investir em um curso superior, e vai buscar um emprego para ser independente.",
                afirmacao: "Prefere buscar trabalhar e ter independencia."
            },
            {
                texto: "Se interessa e decide estudar para a prova.",
                afirmacao: "Prefere investir no curso superior."
            }
        ]
    },
    {
        enunciado: "Você vai fazer a escolha do curso especifico, como você fara isso?",
        alternativas: [
            {
                texto: "Escolho o mais que da dinheiro sem me importar com o que eu quero.",
                afirmacao: "Escolhe levando em consideração o que melhor o dara beneficios financeiros."
            },
            {
                texto: "Levo em consideração o que eu gosto mas pensando nos beneficios e dificuldades.",
                afirmacao: "Analiza com caltela, levando em consideração o que gosta."
            }
        ]
    },
    {
        enunciado: "Em sua realidade Você acha possivel, fazer um curso superior",
        alternativas: [
            {
                texto: "Não pois não gosto de estudar e não quero gastar dinheiro.",
                afirmacao: "Prefere pensar no que está afrente e não além ."
            },
            {
                texto: "É pé no chão, não tem totais condições, mas acredita que com o esforço é possivel sim fazer.",
                afirmacao: "Acredita de forma realista e aproveita as oportunidades"
            }
        ]
    },
    {
        enunciado: "Numa ipotese você reprova nas provas, o que você faz? ",
        alternativas: [
            {
                texto: "Desisto procuro trabalho não quero perder tempo.",
                afirmacao: "Não quer insistir muito desiste na primeira tentativa."
            },
            {
                texto: "Não desiste procura melhorar e estudar mais, continua trabalhando e fazendo o melhor que pode.",
                afirmacao: "Quer muito conseguir se esforça pra isso. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas atitudes São:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
