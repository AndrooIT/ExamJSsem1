const sudokuGenerator = require("./sudokuGenerator.js");
const testOptionsForField = require("./testOptionsForField.js");

//można wpisać inne od sudoku1-sudoku3:
//sudokuGenerator.sudoku1 jest zbyt trudne na prosty algorytm, ponieważ to schemat wstępny do budowy działającego sudoku
//sudokuGenerator.sudoku2(n) to sudoku z losowo zasłoniętymi n polami - do ok 30 pól rozwiązuje
//sudokuGenerator.sudoku3 to sudoku z zadania egzaminacyjnego
let sudoku = sudokuGenerator.sudoku2(15); 

const getEmptyFieldsToArray = () => {
  let positionOfEmptyFields = new Array;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if ((typeof sudoku[i][j] !== 'number')|| (sudoku[i][j]==0)|| isNaN((sudoku[i][j]==0))) {
        positionOfEmptyFields.push([i, j])}      
        }
  }
  return positionOfEmptyFields;
};

const getOptionsToEmptyFieldsArray=(arr=getEmptyFieldsToArray())=>{
  tableWithOptions=[];
  arr.forEach((el)=>{tableWithOptions.push(testOptionsForField.testOptionsForField(sudoku ,el[0], el[1]))});
  console.log(tableWithOptions);
return tableWithOptions;
  }
  console.table(sudoku);
  console.log(getOptionsToEmptyFieldsArray());

const fillEmptyWithOneOption = ()=>{
 do {getOptionsToEmptyFieldsArray().map(
    (m)=> (m[1].length==1)? sudoku[m[0][0]][m[0][1]]= m[1][0]:null
    );}
    while (getOptionsToEmptyFieldsArray().some(el => el[1].length == 1));

 return sudoku
}

console.log('Zadane sudoku');
console.table(sudoku)

fillEmptyWithOneOption();

if (Object.keys(getEmptyFieldsToArray()).length==0) {
  console.log('Rozwiązanie sudoku');
  console.table(sudoku);
} 
// else {getOptionsToEmptyFieldsArray()[]}