const quotes = [
{
	quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",

},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
{
    quote: "Some people dream of success, while other people get up every morning and make it happen.",
	author: "Wayne Huizenga",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const images = ["1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);