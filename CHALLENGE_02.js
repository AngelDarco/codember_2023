const solution = (str) => {
  const arr = str.split("");
  let inicialValue = 0;
  let res = "";

  const operators = {
    INCREASE: "#",
    DECREASE: "@",
    MULTIPLY: "*",
    PRINT: "&",
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === operators.INCREASE) {
      inicialValue += 1;
    } else if (arr[i] === operators.DECREASE) {
      inicialValue -= 1;
    } else if (arr[i] === operators.MULTIPLY) {
      inicialValue *= inicialValue;
    } else if (arr[i] === operators.PRINT && arr.length - 1 > i) {
      res += inicialValue.toString();
    }
  }
  return res + inicialValue;
};
console.log(
  solution(
    "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
  )
);
module.exports = solution;
