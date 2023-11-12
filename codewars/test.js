function high(x) {
  const getCodeVal = (letter) => (letter ? letter.charCodeAt(0) - 96 : 0);

  let numArr = x
    .split(" ")
    .map((letter) => letter.split("").reduce((a, b) => a + getCodeVal(b), 0));
  console.log(Math.max(...numArr));
  let resIndex = numArr.indexOf(Math.max(...numArr));

  return x[resIndex];
}

console.log(high("man i need a taxi up to ubud"));
