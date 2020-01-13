import React, { useContext, useState } from 'react';
import {connect} from 'react-redux';

import { Unless, When } from '../if/';
import { SettingsContext } from '../../context/settings.js';
import * as actions from '../../store/todo.store.js';

const TodoList = (props) => {

  const [page, setPage] = useState(0);
  const context = useContext(SettingsContext);

  const start = context.maxVisible * page;
  const end = start + context.maxVisible;
  const list = props.todo.todoList ? props.todo.todoList.slice(start, end) : [];

  return (
    <>
      <ul>
        {list.map(item => (
          <Unless condition={item.complete && !context.showCompleted}>
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.toggleComplete(item._id)}>
                {item.text}
              </span>
              <button onClick={() => props.toggleDetails(item._id)}>
                Details
              </button>
              <button onClick={() => props.deleteItem(item._id)}>
                  Delete
              </button>
            </li>
          </Unless>
        ))}
      </ul>

      <When condition={page > 0}>
        <button onClick={() => setPage(page - 1)}>Previous</button>
      </When>

      <When condition={props.todo.todoList.length > end}>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </When>

    </>
  );
};

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch, getState) => ({
  addItem: payload => dispatch(actions.addItem(payload)),
  deleteItem: id => dispatch(actions.deleteItem(id)),
  toggleComplete: id => dispatch(actions.toggleComplete(id)),
  toggleDetails: id => dispatch(actions.toggleDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

