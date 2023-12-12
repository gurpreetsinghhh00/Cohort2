console.log("Hello");

// counter using setInterval
function counter(duration) {
  let count = 0;
  setInterval(() => {
    console.log(count);
    count++;
  }, duration);
}

counter(1000);

// counter using setTimer
let count = 1;
function counter2(duration) {
  setTimeout(() => {
    console.log(count);
    count++;
    counter2(duration);
  }, duration);
}

counter2(1000);
