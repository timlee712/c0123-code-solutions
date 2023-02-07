var $openModal = document.querySelector('.open');
var $no = document.querySelector('.no');
var $survey = document.querySelector('.survey');

$openModal.addEventListener('click', function () {
  $survey.className = 'survey show';

});
$no.addEventListener('click', function () {
  $survey.className = 'survey not-show';
});
