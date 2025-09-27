function sum(a, b) {
  return a + b;
}

function multiplyTotalSum(sum1, sum2) {
  return sum1 * sum2;
}

function exampleOfSum() {
  const sum1 = sum(1, 2);
  const sum2 = sum(2, 3);

  const resultOfMultiplySum = multiplyTotalSum(sum1, sum2);

  console.log(resultOfMultiplySum, "total");
}

exampleOfSum();
