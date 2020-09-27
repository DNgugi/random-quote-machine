window.onload = init;
function init(){
    generateQuote();
}



function generateQuote(){
    let quotesLength = QUOTES.length;
    let randomQuote = Math.floor(Math.random() * quotesLength);
    let displayQuote = QUOTES[randomQuote];

    let authorUrl = displayQuote.author.replace(/ /g, "%20");
    let quoteUrl = displayQuote.quote.replace(/ /g, "%20");
    
    let tweetThis = "https://twitter.com/intent/tweet?text=" + quoteUrl + "-" + authorUrl

    
    
    document.getElementById("tweet-quote").href = tweetThis;

    console.log("quote generated");
    document.getElementById("text").innerText = displayQuote.quote;
    document.getElementById("author").innerText = displayQuote.author;

}

       