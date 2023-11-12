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

  let res = [
    year + " year",
    day + " day",
    hour + " hour",
    min + " minute",
    seconds + " second",
  ];

  res = res.filter((e) => !e.startsWith(0));

  if (res.length === 0) {
    return "now";
  }
  res = res.map((e) => {
    if (e.startsWith("1 ")) {
      return e;
    } else {
      return e + "s";
    }
  });

  for (let i = 0; i < res.length; i++) {
    if (res.length - i > 2) {
      res[i] += ", ";
    } else if (res.length - i == 2) {
      res[i] += " and ";
    }
  }

  return res.join("");
}

formatDuration(126241);
