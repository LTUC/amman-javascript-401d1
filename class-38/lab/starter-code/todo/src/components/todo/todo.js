import React, { useEffect, useReducer } from 'react';
import { callAPI } from '../../lib/api.js';
import { When } from '../if';
import TodoForm from './form.js';
import TodoList from './list.js';
import TodoItem from './item.js';

import Auth from '../auth/auth.js';
import useQ from '../../hooks/q.js';

import './todo.scss';

// Should be in .env as REACT_APP_API_SERVER instead of hard coded
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const initialState = { todoList: [], showDetails: null, details: {} };

function reducer(state, action) {
  switch (action.type) {
  case 'get':
    return { ...state, todoList: action.payload };
  case 'add':
    return { ...state, todoList: [...state.todoList, action.payload] };
  case 'delete':
    return { ...state, todoList: state.todoList.filter(item => item._id !== action.payload) };
  case 'update':
    return { ...state, todoList: state.todoList.map((item) => item._id === action.payload ? action.payload : item) };
  case 'details': {
    let item = state.todoList.filter(item => item._id === action.payload)[0] || {};
    return {...state, showDetails: !state.showDetails, details: item};
  }
  default:
    throw new Error();
  }
}

const ToDo = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [subscribe] = useQ('database');

  useEffect(() => {
    subscribe('create', (payload) => dispatch({ type: 'add', 'payload': payload.record }));
    subscribe('delete', (payload) => dispatch({ type: 'delete', 'payload': payload.id }));
  }, [subscribe]);

  const _addItem = (item) => {
    callAPI(todoAPI, 'POST', item)
      .then(() => { })
      .catch(console.error);
  };

  const _deleteItem = (id) => {
    callAPI(`${todoAPI}/${id}`, 'DELETE')
      .then(() => dispatch({ type: 'delete', payload: id }))
      .catch(console.error);
  };

  const _saveItem = updatedItem => {
    return callAPI(`${todoAPI}/${updatedItem._id}`, 'PUT', updatedItem);
  };

  const _toggleComplete = id => {
    let item = state.todoList.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      _saveItem(item)
        .then(data => dispatch({ type: 'update', payload: data }))
        .catch(console.error);
    }
  };

  const _toggleDetails = id => {
    dispatch({ type: 'details', payload: id });
  };

  const _getTodoItems = () => {
    callAPI(todoAPI, 'GET', undefined)
      .then(items => dispatch({ type: 'get', payload: items.results }))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

  return (
    <Auth>
      <header>
        <h2>
          There are {state.todoList.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header >

      <section className="todo">

        <Auth capability="create">
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>
        </Auth>

        <div>
          <TodoList
            list={state.todoList}
            handleComplete={_toggleComplete}
            handleDetails={_toggleDetails}
            handleDelete={_deleteItem}
          />
        </div>
      </section>

      <When condition={state.showDetails}>
        <TodoItem handleDetails={_toggleDetails} item={state.details} />
      </When>
    </Auth>
  );
};

export default ToDo;
