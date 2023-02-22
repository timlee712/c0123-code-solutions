function countdown() {
  var $countdown = document.querySelector('.countdown-display');
  var currentCount = parseInt($countdown.textContent);
  if (currentCount > 1) {
    $countdown.textContent = currentCount - 1;
  } else {
    clearInterval(timer);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}

var timer = setInterval(countdown, 1000);
