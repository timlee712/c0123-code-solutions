var $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var $form = {
    name: document.getElementById('contact-form').name.value,
    email: document.getElementById('contact-form').email.value,
    message: document.getElementById('contact-form').message.value
  };

  console.log('messageData:', $form);
});
