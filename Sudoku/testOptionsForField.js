function testOptionsForField(sudoku = sudoku3, testedFieldRaw, testedFieldCol) {
  const generateTable1to9 = () => {
    let set = new Set();
    do {
      set.add(generateNumber1to9());
    } while (set.size < 9);
    return [...set];
  };
  const generateNumber1to9 = () => {
    return Math.ceil(Math.random() * 9);
  };
  function filteredBytestRaw() {
    for (let i = 0; i < 9; i++) {
      num.includes(sudoku[testedFieldRaw][i]) &&
        num.splice(num.indexOf(sudoku[testedFieldRaw][i]), 1);
    }
    return num;
  }
  function filteredBytestColumn() {
    for (let i = 0; i < 9; i++) {
      num.includes(sudoku[i][testedFieldCol]) &&
        num.splice(num.indexOf(sudoku[i][testedFieldCol]), 1);
    }
    return num;
  }
  function filteredBytestInnerSquare() {
    let rawRatio = 0;
    let colRatio = 0;
    testedFieldRaw > 2 && testedFieldRaw < 6
      ? (rawRatio = 3)
      : testedFieldRaw >= 6 && (rawRatio = 6);
    testedFieldCol > 2 && testedFieldCol < 6
      ? (colRatio = 3)
      : testedFieldCol >= 6 && (colRatio = 6);
    for (i = 0 + rawRatio; i < 3 + rawRatio; i++) {
      for (j = 0 + colRatio; j < 3 + colRatio; j++) {
        num.includes(sudoku[i][j]) && num.splice(num.indexOf(sudoku[i][j]), 1);
      }
    }
    return num;
  }
  let num = generateTable1to9();
  num = filteredBytestRaw(num, testedFieldRaw);
  num = filteredBytestColumn(num, testedFieldCol);
  num = filteredBytestInnerSquare(num, testedFieldRaw, testedFieldCol);
  return [[testedFieldRaw, testedFieldCol], num];
}

module.exports = {
  testOptionsForField: testOptionsForField,
};
