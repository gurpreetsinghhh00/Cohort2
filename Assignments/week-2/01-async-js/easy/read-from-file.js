const fs = require("fs");

console.log(1);
function readFromFile() {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
  });
}

console.log(2);
readFromFile();
console.log(3);

const first = Date.now();
while (Date.now() - first <= 10000) {
  //   let second = Date.now();
  //   if (second - first >= 10000) break;
}

console.log(4);
