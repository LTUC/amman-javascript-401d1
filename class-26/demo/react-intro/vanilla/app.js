let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('wordsInput');
input.addEventListener('change', handleWords);

function handleWords(e) {
  state.words = e.target.value;
  console.log('state:', state);
}

function handleClick(event) {
  console.log('cool');
  event.preventDefault(); // does nothing but if it was a form would not reload page
  state.words = state.words.split('').reverse().join('');
  // state.clicks++;
  render();
}

function init() {
  state.clicks = 0;
  state.words = 'no words have been added yet'; // initial state
  render();
}

function render() {
  document.getElementById('words').textContent = state.words;
}

init();



