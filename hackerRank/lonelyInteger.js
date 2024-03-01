const uniqueOccurrence = (arr) => {
  let singleOccurrence = {};
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];  
    singleOccurrence[number] = (singleOccurrence[number] || 0) + 1;
    }

  for (const number in singleOccurrence) {
    if (singleOccurrence[number] === 1) {
      return parseInt(number);
    }
  }
  return null
};

const arr = [1, 2, 3, 4, 3, 2, 1];

console.log(uniqueOccurrence(arr));
