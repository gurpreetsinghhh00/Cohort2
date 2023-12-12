const fs = require("fs");

function fileCleaner(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    let str = data.trim();
    let newStr = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] == " ") {
        if (newStr[newStr.length - 1] != " ") newStr += " ";
        else continue;
      } else {
        newStr += str[i];
      }
    }
    fs.writeFile(file, newStr, (err) => {
      console.log("Done");
    });
  });
}

fileCleaner("file.txt");
