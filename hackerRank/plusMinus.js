const getPositiveRatio = (arr) => {
  const positiveQuantity = arr.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue > 0);
  }, 0);
  return (positiveQuantity / arr.length).toFixed(6);
};

const getNegativeRatio = (arr) => {
  const negativeQuantity = arr.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue < 0);
  }, 0);
  return (negativeQuantity / arr.length).toFixed(6);
};

const getZeroRatio = (arr) => {
  const zeroQuantity = arr.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue === 0);
  }, 0);
  return (zeroQuantity / arr.length).toFixed(6);
};

