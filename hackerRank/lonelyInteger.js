const uniqueOccurrence = (arr) => {
  return arr.filter(element => arr.filter(value => element === value).length === 1)
};

const arr = [1, 2, 3, 4, 3, 2, 1];

console.log(uniqueOccurrence(arr));
