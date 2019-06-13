/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Kevin Haire
June 12th 2019
******************************************/

// array of objects with quotes
var quotes = [
  {
    quote: "Great men are not born great, they grow great.",
    source: "Mario Puzo",
    citation: "The Godfather",
    year: "1972",
    tags: "Drama"
  },
  {
    quote: "Some people can’t believe in themselves until someone else believes in them first.",
    source: "Sean Maguire",
    citation: "",
    year: "",
    tags: "Drama"
  },
  {
    quote: "Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.",
    source: "Dory",
    citation: "Finding Nemo",
    year: "",
    tags: ""
  },
  {
    quote: "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",
    source: "Ferris",
    citation: "Ferris Bueller’s Day Off",
    year: "1986",
    tags: ""
  },
  {
    quote: "What we do in life echoes in eternity.",
    source: "Maximus",
    citation: "",
    year: "",
    tags: "Action"
  },
  {
    quote: "Every man dies, but not every man really lives.",
    source: "William Wallace",
    citation: "",
    year: "",
    tags: "Drama"
  },
  {
    quote: "Get busy livin’, or get busy dyin’.",
    source: "Andy Dufresne",
    citation: "The Shawshank Redemption",
    year: "1994",
    tags: ""
  }
]

// gets random number between 0 and the length of the array of objects
function getRandomQuote() {
  ranNum = Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}

// function to create random rgb color
function randomRGB() {
  var rgbOutput = '';
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  rgbOutput = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return rgbOutput;
}

// function for getting random quote, building html and putting it on the page
function printQuote(){
  // calls randomRGB function and uses it to change background color
  document.body.style.background = randomRGB();
  // empty variable for the html
  var quoteHTML = '';
  // getting random quote and putting it inside variable
  var ranQuote = getRandomQuote();
  // putting the element where the quote is going into variable
  var outputElement = document.getElementById("quote-box");
  // building the html
  quoteHTML = '<p class="quote">' + ranQuote["quote"] + '</p>';
  quoteHTML += '<p class="source">' + ranQuote["source"];
  // checking if there is a citation in the object
  if(ranQuote["citation"]) {
    quoteHTML += '<span class="citation">' + ranQuote["citation"] + '</span>';
  }
  // checking if there is a year in the object
  if(ranQuote["year"]) {
    quoteHTML += '<span class="year">' + ranQuote["year"] + '</span>';
  }
  quoteHTML += '</p>';
  if(ranQuote["tags"]) {
    quoteHTML += '<p class="tags">' + ranQuote["tags"] + '</p>';
  }
  // outputting the quote html into the quote-box div
  outputElement.innerHTML = quoteHTML;
}

// event listener for the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// changes the quote automatically by calling the print function every 15 seconds.
// could be done better. calls function even if you've clicked the button within the 15 seconds
window.setInterval(printQuote, 15000);
