

let todoList = [];
let editing = false;

let itemsContainer = document.getElementById('items');
let header = document.getElementById('header');
let form = document.getElementById('todoForm');
let newItem = document.getElementById('item');

form.addEventListener('submit', handleSubmit);
itemsContainer.addEventListener('click', toggleComplete);
itemsContainer.addEventListener('submit', saveItem);

let itemsSource   = document.getElementById('item-template').innerHTML;
let itemsTemplate = Handlebars.compile(itemsSource);

let headerSource   = document.getElementById('header-template').innerHTML;
let headerTemplate = Handlebars.compile(headerSource);


function Item(text) {
  this.text = text;
  this.id = Math.random();
  this.complete = false;
}
Item.prototype.toggle = function() {
  this.complete = ! this.complete;
};
Item.prototype.update = function(text) {
  this.text = text;
};

function drawItems() {
  let count = todoList.filter( item => !item.complete ).length;
  header.innerHTML = headerTemplate({count});

  let list = todoList.map( item => {
    item.editing = editing === item.id;
    return item;
  });

  itemsContainer.innerHTML = itemsTemplate({list});
}

function handleSubmit(e) {
  e.preventDefault();
  todoList.push( new Item(newItem.value) );
  e.target.reset();
  drawItems();
}

function toggleComplete(e) {
  let id = parseFloat(e.target.id);
  let item = todoList.filter(i => i.id === id)[0] || {};
  if (item.id) {
    item.toggle();
    updateList(item);
    drawItems();
  }
}

function deleteItem(id) {
  todoList = todoList.filter(i => i.id !== id);
  drawItems();
}

function editItem(id) {
  editing = id;
  drawItems();
}

function saveItem(e) {
  e.preventDefault();
  let id = parseFloat(e.target.querySelector('input').name);
  let text = e.target.querySelector('input').value;

  let item = todoList.filter(i => i.id === id)[0] || {};
  if (item.id) {
    item.text = text;
    editItem(false); // disable edit mode
    updateList(item);
    drawItems();
  }
}

function updateList(updatedItem) {
  todoList =
    todoList.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
}
