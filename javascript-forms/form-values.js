var $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var $form = {
    name: $contact.elements.name.value,
    email: $contact.elements.email.value,
    message: $contact.elements.message.value
  };

  console.log('messageData:', $form);
});
