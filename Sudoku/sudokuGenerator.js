let table = Array.from({ length: 9 }, () => Array(9).fill(null));

function fillFirstDigits(){
let arr=[...Array(9).fill([...Array(9).fill(null)])];
for (let i=0;i<9;i+=3){
  arr[i]=[i+1,null,null,i+2,null,null,i+3,null,null];
  arr[i+1]=[(i+1+2)>=10?((i+1+2)%10)+1:(i+1+2),null,null,(i+2+2)>=10?((i+2+2)%10)+1:(i+2+2),null,null,(i+3+2>=10?((i+3+2)%10)+1:(i+3+2)),null,null];
  arr[i+2]=[null,null,i+1+1,null,null,i+1+2,null,null,(i+1+3)>=10?1:(i+1+3)];
}
  return arr;
}
function filledSudoku(arr=table){
   
  for (let i=0;i<3;i++){
    for (let j=0;j<9;j++){
      table[i][j]=(j+1+(3*i))>=10?((j+1+(3*i))%10)+1:(j+1+(3*i));
      table[i+3][j]=(j+1+1+(3*i))>=10?((j+1+1+(3*i))%10)+1:(j+1+1+(3*i));
      table[i+6][j]=(j+1+2+(3*i))>=10?((j+1+2+(3*i))%10)+1:(j+2+1+(3*i));
    }
  }
  return arr;
}
function showSudokuWithoutThisMuchFields(n=15){
  filledSudoku();
  for (let m=1; m<=n;m++){
    table[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 9)]=null;
  }
return table;
}
let sudoku3 = [[7,null,4,8,null,null,3,null,1],[8,2,null,5,null,null,null,4,null],[null,null,9,4,3,null,5,null,null],[3,1,null,null,null,null,8,null,7],[null,8,null,null,null,null,null,1,null],[9,null,7,null,null,null,null,3,2],[null,null,6,null,1,5,4,null,null],[null,7,null,null,null,9,null,6,5],[5,null,8,null,null,2,1,null,3]];
module.exports={
    sudoku1: fillFirstDigits,
    sudoku2: showSudokuWithoutThisMuchFields,
    sudoku3: sudoku3
  
}