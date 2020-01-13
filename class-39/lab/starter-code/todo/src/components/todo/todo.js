import React from 'react';
import { connect } from 'react-redux';

import { When } from '../if';
import TodoForm from './form.js';
import TodoList from './list.js';
import TodoItem from './item.js';

import './todo.scss';
import * as actions from '../../store/todo.store.js';

const ToDo = (props) => {

  return (
    <>
      <header>
        <h2>
          There are {props.todo.todoList.filter( item => !item.complete ).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm />
        </div>

        <div>
          <TodoList />
        </div>

      </section>

      <When condition={props.todo.showDetails}>
        <TodoItem handleDetails={props.toggleDetails} item={props.todo.details} />
      </When>
    </>
  );
};

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch, getState) => ({
  toggleDetails: id => dispatch(actions.toggleDetails(id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDo);

