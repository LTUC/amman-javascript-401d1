let state = {};

let source = $('#handlebars').html();
let template = Handlebars.compile(source);

$('#clicker').on('click', handleClick);
$('#wordsInput').on('change', handleWords);

function handleWords(e) {
  state.words = $(this).val();
  console.log('handleWords()', state);
}

function handleClick() {
  state.words = state.words.split('').reverse().join('');
  render();
}

function init() {
  state.words = 'no words have been added yet';
  render();
}

function render() {
  $('#content').html(template(state));
}

init();



