function showMessage() {
  var $message = document.querySelector('.message');
  $message.textContent = 'Hello There';
}

setTimeout(showMessage, 2000);
