const palindromeNumber = (int) => {
  const IntString = String(int);
  const reversedIntString = IntString.split("").reverse().join("");

  if (IntString === reversedIntString) return true;

  return false;
};

console.log(palindromeNumber(-121));
