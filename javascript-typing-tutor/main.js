
var $letter = document.querySelectorAll('.default');
var $button = document.querySelector('.play-again');
var currentLetter = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $letter[currentLetter].textContent) {
    $letter[currentLetter].className = 'correct';
    currentLetter++;
    if (currentLetter === $letter.length) {
      $button.className = 'play-again show';
    } else {
      $letter[currentLetter].className = 'underline';
    }
  } else {
    $letter[currentLetter].className = 'incorrect';
  }
});

$button.addEventListener('click', function () {
  currentLetter = 0;
  for (var i = 0; i < $letter.length; i++) {
    $letter[i].className = 'default';
  }
  $letter[0].className = 'underline';
  $button.className = 'play-again not-show';
});
