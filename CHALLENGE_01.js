const data = new Promise((resolve) => {
  fetch("https://codember.dev/data/message_01.txt")
    .then((res) => res.text())
    .then((res) => {
      resolve(res);
    });
});

data.then((text) => {
  const arr = text.trim().split(" ");
  let res = {};

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let ii = 0; ii < arr.length; ii++) {
      if (arr[i] === arr[ii]) {
        count++;
        res[arr[i]] = count;
      }
    }
  }
  console.log(resString(res));
});

const resString = (obj) => {
  let res = "";
  Object.entries(obj).forEach(([key, value]) => {
    res += `${key}${value}`;
  });
  return res;
};
