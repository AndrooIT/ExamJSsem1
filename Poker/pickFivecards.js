const { deck, figures } = require("./createDeck.js");

function pickFiveCards(Deck = deck) {
  let random5cards = [];
  for (let i = 0; i < 5; i++) {
    random5cards[i] = Deck[Math.floor(Math.random() * (51 - i))];
    Deck.splice(Deck.indexOf(random5cards[i]), 1);
  }

  console.log(
    "     ----we picked 5 cards and in the Deck still remained:-----   "
  );
  console.table(Deck);
  return random5cards;
}

module.exports={
    pickFiveCards: pickFiveCards(Deck = deck),
    figures: figures
}