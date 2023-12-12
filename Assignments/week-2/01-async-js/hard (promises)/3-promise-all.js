/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// function waitOneSecond() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("one second");
//     }, 1000);
//   });
// }

// function waitTwoSecond() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("second second");
//     }, 2000);
//   });
// }

// function waitThreeSecond() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("three second");
//     }, 3000);
//   });
// }

// function calculateTime() {
//   let startTime = Date.now();
//   let promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
//   Promise.all(promises)
//     .then((values) => {
//       console.log(Date.now() - startTime);
//       console.log(values);
//     })
//     .catch((e) => {
//       console.log(Date.now() - startTime);
//       console.log(e);
//     });
// }

// calculateTime();

function wait1(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, t * 1000);
  });
}

function calculateTime(t1 = 1, t2 = 2, t3 = 3) {
  let startTime = Date.now();
  let promises = [wait1(t1), wait2(t2), wait3(t3)];
  return Promise.all(promises).then((values) => {
    return Date.now() - startTime;
  });
}

module.exports = calculateTime;
