const calculateResult = (files) => {
  let sum = 0;
  for (const file of files) {
    const equation = file.buffer.toString("utf8").trim();
    const result = eval(equation);
    sum += result;
  }
  return sum;
};

module.exports = { calculateResult };
