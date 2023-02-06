function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $buttonClick = document.querySelector('.click-button');
$buttonClick.addEventListener('click', handleClick);

function handleMouse(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $mouseHover = document.querySelector('.hover-button');
$mouseHover.addEventListener('mouseover', handleMouse);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
