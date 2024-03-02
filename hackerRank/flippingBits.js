const flippingBits = (number) => {
  let binaryNumber = number.toString(2);
  let flippedBinaryNumber = "";

  while (binaryNumber.length < 32) {
    binaryNumber = 0 + binaryNumber;
  }

  for (let i = 0; i < binaryNumber.length; i++) {
    flippedBinaryNumber += binaryNumber[i] === "0" ? "1" : "0";
  }

  return parseInt(flippedBinaryNumber, 2);
};

console.log(flippingBits(12));
