const fs = require("fs");

console.log(1);
let data = "Nice to meet you";
function write(data) {
  fs.writeFile("a.txt", data, (err) => {
    console.log("Done writing");
  });
}

console.log(2);
write(data);
console.log(3);
