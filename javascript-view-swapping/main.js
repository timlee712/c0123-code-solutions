var $tabContainer = document.querySelector('.tab-container');

var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

  }
  var $dataView = event.target.getAttribute('data-view');
  for (var k = 0; k < $view.length; k++) {
    if ($dataView === $view[k].getAttribute('data-view')) {
      $view[k].className = 'view';
    } else {
      $view[k].className = 'view hidden';
    }
  }
});
