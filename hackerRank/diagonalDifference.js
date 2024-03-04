const absoluteDifference = (squareProportion, arr) => {
  const position = squareProportion - 1;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        leftDiagonalSum += arr[i][j];
      }

      if (i + j === position) {
        rightDiagonalSum += arr[i][j];
      }
    }
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
};

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(absoluteDifference(3, arr));
