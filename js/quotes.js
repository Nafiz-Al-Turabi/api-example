const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quotes => displayQuotes(quotes))
}
const displayQuotes = quote => {
    const blockQuotes=document.getElementById('quotes')
    blockQuotes.innerText=quote.quote
}
loadQuotes();