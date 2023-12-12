function clock(duration) {
  setInterval(() => {
    let time = new Date();
    // console.log(
    //   time.getHours() + ":" + time.getMinutes() + "::" + time.getSeconds()
    // );
    console.log(time.toLocaleTimeString());
  }, duration);
}

clock(1000);
