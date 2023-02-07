var $lightBulb = document.querySelector('.switch');
var $backgroundColor = document.querySelector('.light-bulb');

$lightBulb.addEventListener('click', function () {
  if ($lightBulb.className === 'switch dark') {
    $lightBulb.className = 'switch light';
    $backgroundColor.className = 'light-bulb white';
  } else {
    $lightBulb.className = 'switch dark';
    $backgroundColor.className = 'light-bulb black';
  }
});
