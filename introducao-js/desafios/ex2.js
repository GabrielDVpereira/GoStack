const displayEvenNumbers = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) console.log(i);
  }
};

displayEvenNumbers(32, 321);
