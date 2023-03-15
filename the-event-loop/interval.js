let currentCount = 3;

const countdown = () => {
  if (currentCount > 0) {
    console.log(currentCount);
  }
  currentCount--;
  if (currentCount < 0) {
    clearInterval(intervalID);
    console.log('Blast off!');
  }
};

const intervalID = setInterval(countdown, 1000);
