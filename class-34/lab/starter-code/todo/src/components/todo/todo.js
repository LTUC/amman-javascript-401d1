import React from 'react';
import uuid from 'uuid/v4';
import Counter from '../counter/counter.js';
import { When } from '../if';

import './todo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], item: {}, editing: false };
  }

  handleInputChange = e => {
    let item = {
      text: e.target.value,
      complete: !!e.target.complete,
      id: e.target.id || uuid(),
    };
    this.setState({ item });
  };

  addItem = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({ todoList: [...this.state.todoList, this.state.item] });
  };

  updateItem = e => {
    e.preventDefault();
    this.saveItem(this.state.item);
  };

  toggleComplete = id => {
    let item = this.state.todoList.filter(i => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  saveItem = updatedItem => {
    this.setState({
      todoList: this.state.todoList.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      ),
      editing: false,
    });
  };

  toggleEdit = id => {
    let editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };

  render() {
    return (
      <>
        <section className="todo">
          <div>
            <Counter count={this.state.todoList.length} />
          </div>

          <div>
            <form onSubmit={this.addItem}>
              <input
                placeholder="Add To Do List Item"
                onChange={this.handleInputChange}
              />
            </form>
          </div>

          <div>
            <ul>
              {this.state.todoList &&
                this.state.todoList.map(item => (
                  <li
                    className={`complete-${item.complete.toString()}`}
                    key={item.id}
                  >
                    <span onClick={() => this.toggleComplete(item.id)}>
                      {item.text}
                    </span>
                    <button onClick={() => this.toggleEdit(item.id)}>
                      edit
                    </button>
                    <When condition={this.state.editing === item.id}>
                      <form onSubmit={this.updateItem}>
                        <input
                          onChange={this.handleInputChange}
                          id={item.id}
                          complete={item.complete}
                          defaultValue={item.text}
                        />
                      </form>
                    </When>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;
