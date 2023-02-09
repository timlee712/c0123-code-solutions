var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target && event.target.nodeName === 'BUTTON') {
    var $closest = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', $closest);
    $closest.remove($closest);
  }
});
