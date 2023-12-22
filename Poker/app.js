// 5. EXAM Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set. Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart

const { pickFiveCards, figures } = require("./pickFivecards.js");

// For tests you can toggle comented line beneath and first line of code: 

// function bestPockerSet(
//   set = [
//     [9, "Hearts"],
//     [8, "Spade"],
//     [7, "Club"],
//     [10, "Diamonds"],
//     ["J", "Hearts"],
//   ]
// ) {
function bestPockerSet(set = pickFiveCards) {
  console.log(
    "     -------------5 picked cards are:----------------------------   "
  );
  console.table(set);
  function tidySet() {
    let tidySet = [];
    figures.map((m) => set.map((n) => m == n[0] && tidySet.push(n)));
    console.log(
      "     -------------Tidied set of 5 picked cards is: ---------------    "
    );
    console.table(tidySet);
    return tidySet;
  }
  const tidiedSet = tidySet();
  
  function isTheSameColor() {
    let firstColor = set[0][1];
    let unifiedCOlor = true;
    set.forEach((m) => {
      firstColor !== m[1] && (unifiedCOlor = false);
    });
    // console.log(unifiedCOlor);
    return unifiedCOlor;
  }
  function isRawOfFigures() {
    let isAraw = true;
    let initPos = figures.indexOf(tidiedSet[0][0]);
    for (let i = initPos; i < initPos + 5; i++) {
      figures[i] !== tidiedSet[i - initPos][0] && (isAraw = false);
    }
    return isAraw;
  }

  function givePatternOfFigures() {
    let pickedFigures = [];
    tidiedSet.map((m) => pickedFigures.push(m[0]));
    const counts = {};
    for (const num of pickedFigures) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let pattern = Object.values(counts).sort().reverse();

    return pattern;
  }

  function isRoyalPocker() {
    if (isTheSameColor() && isRawOfFigures() && tidiedSet[0][0] == "A") {
      console.log("          --WYGRANA---ROYAL POCKER-----");
    } else {
      console.log(
        "Royal Poker  złożony jest z kart od asa do dziesiątki w kolorze. To najwyższy możliwy układ w grze. Niestety nie tym razem"
      );
      isPocker();
    }
  }
  function isPocker() {
    if (isTheSameColor() && isRawOfFigures() && tidiedSet[0][0] !== "A") {
      console.log("          --WYGRANA---POCKER-------");
    } else {
      console.log(
        "Poker złożony jest z kolejnych po sobie kart w kolorze. Niestety nie tym razem"
      );
      isKareta();
    }
  }
  function isKareta() {
    if (JSON.stringify(givePatternOfFigures()) == JSON.stringify([4, 1])) {
      console.log("          --WYGRANA---KARETA-------");
    } else {
      console.log(
        "Kareta to cztery karty o tej samej wartości. Niestety nie tym razem"
      );
      isFull();
    }
  }
  function isFull() {
    if (JSON.stringify(givePatternOfFigures()) == JSON.stringify([3, 2])) {
      console.log("          --WYGRANA---FULL-------");
    } else {
      console.log(
        "Full to trzy karty o tej samej wartości oraz 2 o innej, tej samej wartości. Niestety nie tym razem"
      );
      isKolor();
    }
  }
  function isKolor() {
    if (isTheSameColor() && !isRawOfFigures()) {
      console.log("          --WYGRANA---Kolor-------");
    } else {
      console.log(
        "Kolor Pięć kart w tym samym kolorze, nienastępujących po sobie. Niestety nie tym razem"
      ),
        isStrit();
    }
  }
  function isStrit() {
    if (!isTheSameColor() && isRawOfFigures()) {
      console.log("          --WYGRANA---STRIT-------");
    } else {
      console.log(
        "Kolor Pięć kart nie w tym samym kolorze, następujących po sobie. Niestety nie tym razem"
      );
      isThree();
    }
  }
  function isThree() {
    if (JSON.stringify(givePatternOfFigures()) == JSON.stringify([3, 1, 1])) {
      console.log("          --WYGRANA---TRÓJKA-------");
    } else {
      console.log(
        "Full to trzy karty o tej samej wartości oraz a pozostałe karty bez pary. Niestety nie tym razem"
      );
      isTwoPair();
    }
  }
  function isTwoPair() {
    if (JSON.stringify(givePatternOfFigures()) == JSON.stringify([2, 2, 1])) {
      console.log("          --WYGRANA---Two PAIRs-------");
    } else {
      console.log("Two PAIR to dwie pary. Niestety nie tym razem");
      isPair();
    }
  }
  function isPair() {
    if (
      JSON.stringify(givePatternOfFigures()) == JSON.stringify([2, 1, 1, 1])
    ) {
      console.log("          --WYGRANA--- PAIR-------");
    } else {
      console.log("PAIR to para kart. Niestety nie tym razem");
      console.log("          --WYGRANA--- HIGH CARD-------");
      console.log(
        "Wysoka karta- Każdy układ kart, który nie kwalifikuje się do powyższych układów. Gdy kilku graczy ma podany układ, wygrywa układ z najwyższą kolejną kartą."
      );
    }
  }

  console.log("Czy set ma wszystkie takie same kolory? : " + isTheSameColor());
  console.log("Czy set ma zachowaną kolejność figur? : " + isRawOfFigures());
  console.log("Czy zaczyna się od Asa 'A'? : " + (tidiedSet[0][0] == "A"));
  console.log(
    "Jaki jest rozkład tych samych figur? : " + givePatternOfFigures()
  );
  console.log(
    " Możliwe układy to: Royal Poker , Poker, Kareta, Ful, Kolor, Strit, Dwie Pary, Para lub Wysoka Karta"
  );
  isRoyalPocker();

}
bestPockerSet();
