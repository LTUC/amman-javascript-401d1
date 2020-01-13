

function handleDrag(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function handleDrop(e) {
  console.log('drop');
  let id = e.dataTransfer.getData('text/plain');
  e.target.appendChild( document.getElementById(id) );
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function dragStatus(e) {
  if ( e.target.classList.contains('over') ) {
    e.target.classList.remove('over');
  }
  else {
    e.target.classList.add('over');
  }
}

