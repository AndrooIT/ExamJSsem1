let figures = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];
function createDeck() {
    let Deck = [];
    let colors = ["Hearts", "Diamond", "Club", "Spade"];
    figures.map((m) => {
      for (color of colors) {
        Deck.push([m, color]);
      }
    });
    console.log(
      "     -------------Our Deck is:--------------------------------------   "
    );
    console.table(Deck);
    return Deck;
  }

  module.exports ={
    deck: createDeck(),
    figures: figures
}
  