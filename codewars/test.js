function high(x) {
  const getCodeVal = (letter) => (letter ? letter.charCodeAt(0) - 96 : 0);

  let numArr = x
    .split(" ")
    .map((letter) => letter.split("").reduce((a, b) => a + getCodeVal(b), 0));
  console.log(Math.max(...numArr));
  let resIndex = numArr.indexOf(Math.max(...numArr));

  return x[resIndex];
}

function formatDuration(seconds) {
  // Complete this function
  let year = Math.floor(seconds / 60 / 60 / 24 / 365);
  year > 0 ? (seconds -= 60 * 60 * 24 * 365 * year) : null;
  let day = Math.floor(seconds / 60 / 60 / 24);
  day > 0 ? (seconds -= 60 * 60 * 24 * day) : null;
  let hour = Math.floor(seconds / 60 / 60);
  hour > 0 ? (seconds -= 60 * 60 * hour) : null;
  let min = Math.floor(seconds / 60);
  min > 0 ? (seconds -= 60 * min) : null;
  let res = "";
  let obj = {
    year: year,
    day: day,
    hour: hour,
    min: min,
    seconds: seconds,
  };
}

formatDuration(3600);
