document.addEventListener('DOMContentLoaded', () => {    
    // Obter referências para os elementos HTML        
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const numberQuote = document.getElementById('number-quote');
    const quoteText = document.getElementById('quote');
    const authorName = document.getElementById('author');
    const yourNameSpan = document.getElementById('your-name');

    function addYourName() {
        yourNameSpan.textContent = 'Ana Clara Rodrigues';
    }

    // --- Array de Citações ---
    const quotes = [
        {
            citacao: "Ter fé não é dizer: “eu determino”. Ter fé é dizer: “Senhor Jesus seja feita a tua vontade.",
            autor: "Augustus Nicodemus"
        },
        {
            citacao: "O amor de Deus é como o oceano: é profundo, vasto e não tem fim.",
            autor: "Billy Graham"
        },
        {
            citacao: "Você pode fazer mais do que orar, depois de orar; mas você não pode fazer mais do que orar, até orar.",
            autor: "A. C. Dixon"
        },
        {
            citacao: "A fé é dar o primeiro passo, mesmo quando você não vê a escada completa.",
            autor: "Martin Luther King Jr."
        },
        {
            citacao: "Não me preocupo com o que pode acontecer daqui a cem anos. Aquele que governava o mundo antes de eu nascer cuidará disso igualmente, quando eu estiver morto. A minha parte é melhorar o momento presente.",
            autor: "John Wesley"
        },
        {
            citacao: "O analfabetismo bíblico da nossa geração é a causa maior de um cristianismo aguado e sem consistência.",
            autor: "Hernandes Dias Lopes"
        },
        {
            citacao: "Quando estamos em sintonia com Deus, temos a força para suportar todas as tempestades da vida.",
            autor: "Rick Warren"
        },
        {
            citacao: "Acredito no Cristianismo como acredito que o sol nasceu: não só porque o vejo, mas porque através dele vejo todo o resto.",
            autor: "C. S. Lewis"
        }
    ];


    // --- Função para Gerar e Exibir uma Citação Aleatória ---
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];

        numberQuote.textContent = `${randomIndex + 1}`;
        quoteText.textContent = selectedQuote.citacao;
        authorName.textContent = `– ${selectedQuote.autor}`;
    }

    // --- Adicionar Event Listener ao Botão ---
    newQuoteBtn.addEventListener('click', displayRandomQuote);

    // --- Exibir uma Citação Inicial ao Carregar a Página ---
    displayRandomQuote();
    addYourName();
});