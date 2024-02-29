const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return null
};

const numbers = [2,7,11,15];

console.log(twoSum(numbers, 98))