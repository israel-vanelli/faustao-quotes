const quotes = [
    "Ô loco meu!",
    "Você destruiu meu ovo!",
    "Churrasqueira elétrica novinha",
    "Faustão pentelho vem aqui!",
    "Ô loco deus, já chegou a minha hora? CALMA GORDO",
    "P#ta vida, tá pegando fogo bixo!",
    "É um país da Europa",
    "Se fala o holandês",
    "ERROU"
];

function getRandomFaustaoQuote(logToConsole=True) {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    if (logToConsole) {
        console.log(quote);
    }

    return quote;
}

getRandomFaustaoQuote();

export default getRandomFaustaoQuote;