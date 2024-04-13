export const calculateCountdownTime = (second: number) => {
  let countdownTime = {
    minutes: "00",
    seconds: "00",
  };

  if (second > 0) {
    let minutes = Math.floor(second / 60).toString();
    let seconds = Math.floor(second % 60).toString();

    if (minutes.length === 1) minutes = "0" + minutes;
    if (seconds.length === 1) seconds = "0" + seconds;
    countdownTime = {
      minutes,
      seconds,
    };
  }

  return countdownTime;
};
