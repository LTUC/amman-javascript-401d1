import React from 'react';
import uuid from 'uuid/v4';
import { When } from '../if';
import Modal from '../modal';

import './todo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: {},
      showDetails: false,
      details: {},
    };
  }

  handleInputChange = e => {
    this.setState({ item: {...this.state.item, [e.target.name]: e.target.value} });
  };

  handleSubmit = (e) => {
    this.props.handleSubmit(this.state.item);
  };

  addItem = (e) => {

    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete:false };
    const item = Object.assign({}, this.state.item, defaults);

    this.setState({
      todoList: [...this.state.todoList, item],
      item: {},
    });

  };

  deleteItem = id => {

    this.setState({
      todoList: this.state.todoList.filter(item => item._id !== id),
    });

  };

  saveItem = updatedItem => {

    this.setState({
      todoList: this.state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    });

  };

  toggleComplete = id => {
    let item = this.state.todoList.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  toggleDetails = id => {
    let showDetails = ! this.state.showDetails;
    let details = this.state.todoList.filter( item => item._id === id )[0] || {};
    this.setState({details, showDetails});
  }

  render() {

    return (
      <>
        <header>
          <h2>
            There are
            {this.state.todoList.filter( item => !item.complete ).length}
            Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <h3>Add Item</h3>
            <form onSubmit={this.addItem}>
              <label>
                <span>To Do Item</span>
                <input
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                <span>Difficulty Rating</span>
                <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={this.handleInputChange} />
              </label>
              <label>
                <span>Assigned To</span>
                <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
              </label>
              <label>
                <span>Due</span>
                <input type="date" name="due" onChange={this.handleInputChange} />
              </label>
              <button>Add Item</button>
            </form>
          </div>

          <div>
            <ul>
              { this.state.todoList.map(item => (
                <li
                  className={`complete-${item.complete.toString()}`}
                  key={item._id}
                >
                  <span onClick={() => this.toggleComplete(item._id)}>
                    {item.text}
                  </span>
                  <button onClick={() => this.toggleDetails(item._id)}>
                    Details
                  </button>
                  <button onClick={() => this.deleteItem(item._id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <When condition={this.state.showDetails}>
          <Modal title="To Do Item" close={this.toggleDetails}>
            <div className="todo-details">
              <header>
                <span>Assigned To: {this.state.details.assignee}</span>
                <span>Due: {this.state.details.due}</span>
              </header>
              <div className="item">
                {this.state.details.text}
              </div>
            </div>
          </Modal>
        </When>
      </>
    );
  }
}

export default ToDo;
