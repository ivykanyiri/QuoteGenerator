const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");




//random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    //fetching random quotes from api and parsing them
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");

    });
}


soundBtn.addEventListener("click", () => {

    // SpeechSynethsisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} uttered by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //this method speaks the utterance
});

copyBtn.addEventListener("click", () => {
    //copying the quote once the copy button is clicked
    //writeText() property copies the specified text string to the clipboard
    navigator.clipboard.writeText(`${quoteText.innerText} - ${authorName.innerText}`);
    // alert("copied");
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} - ${authorName.innerText}`;
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);
