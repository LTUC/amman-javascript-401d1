import React, {useReducer} from 'react';
import uuid from 'uuid/v4';
import { When } from '../if';
import TodoForm from './form.js';
import TodoList from './list.js';
import TodoItem from './item.js';

import './todo.scss';

const initialState = { todoList: [], showDetails: null, details: {} };

function reducer(state, action) {
  switch (action.type) {
  case 'add':
    return { ...state, todoList: [...state.todoList, action.payload] };
  case 'delete':
    return {...state, todoList: state.todoList.filter( item => item._id !== action.payload )};
  case 'toggle':
    return { ...state, todoList: state.todoList.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item ) };
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

  const _addItem = (data) => {
    data._id = uuid();
    data.complete = false;
    dispatch({type: 'add', payload:data});
  };

  const _deleteItem = (id) => {
    dispatch({type:'delete', payload:id});
  };

  const _toggleComplete = (id) => {
    dispatch({type: 'toggle', payload:id});
  };

  const _toggleDetails = id => {
    dispatch({type: 'details', payload:id});
  };

  return (
    <>
      <header>
        <h2>
          There are {state.todoList.filter( item => !item.complete ).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

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
    </>
  );
};

export default ToDo;
