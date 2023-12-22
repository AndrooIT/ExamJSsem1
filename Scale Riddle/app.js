// 4. EXAM Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball. Indexes are to be chosen at random. Use weights comparison only two times.

function setRandomPosition() {
  let position = Math.floor(Math.random() * 8);
    return position;
}

function createBallsSet(heavierIndex = setRandomPosition()) {
  let arr = Array(8).fill(1);
  arr[heavierIndex] = 2;
  return arr;
}
let BallsSet=createBallsSet();
let position=BallsSet.indexOf(2);

function firstWeights(arr=BallsSet) {
  let arrForSecondWeight = [];
  let sum02 = arr[0] + arr[1] + arr[2];
  let sum35 = arr[3] + arr[4] + arr[5];
  sum02 > sum35
    ? (arrForSecondWeight = [0, 1, 2])
    : sum02 < sum35
    ? (arrForSecondWeight = [3, 4, 5])
    : (arrForSecondWeight = [6, 7]);
  console.log('First weights awarded following set indexes, which contain heavier ball '+arrForSecondWeight)
  return arrForSecondWeight;
}

function secondWeights(ballset=BallsSet, arr = firstWeights()) {
  let theIndexOfHeavierBall = null;

  ballset[arr[0]] > ballset[arr[1]]
    ? (theIndexOfHeavierBall = arr[0])
    : ballset[arr[1]] > ballset[arr[0]]
    ? (theIndexOfHeavierBall = arr[1])
    : (theIndexOfHeavierBall = arr[2]);
    console.log('Second weights awarded the index '+theIndexOfHeavierBall+', which contains the heavier ball ')
  return theIndexOfHeavierBall;
}

console.log("Welcome in our Scale riddle");
setTimeout(()=>console.log("our secret position is chosen,"),2000);
setTimeout(()=>console.log("the table has been generated and VOILA:"),4000);
setTimeout(()=>console.log("our table is: "+ BallsSet),6000);
setTimeout(()=>console.log( 'and position of index for hidden ball is '+ position),6000);
setTimeout(()=>secondWeights(),9000);
setTimeout(()=>console.log(),14000);
