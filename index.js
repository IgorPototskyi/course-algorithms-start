const readline = require("readline");

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Write a number: ", answer => {
    if (answer && Number.isInteger(+answer)) printSuitableNumbers(+answer);
    else console.log("Please, write a number!");
    rl.close();
  });
}

function printSuitableNumbers(num) {
  var numArray = [];
  var min = num - num.toString().length * 9;
  min = min > 0 ? min : 0;
  for (var i = min; i < num; i++) {
    var sum = i;
    var iStr = i.toString();
    for (var y = 0; y < iStr.length; y++) {
      sum += +iStr[y];
    }
    if (sum === num) numArray.push(i);
  }
  console.log(numArray.length);
  for (var j = 0; j < numArray.length; j++) {
    console.log(numArray[j]);
  }
}

main();
