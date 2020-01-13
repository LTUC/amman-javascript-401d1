import React, { useContext, useState } from 'react';
import { Unless, When } from '../if/';
import { SettingsContext } from '../../context/settings.js';
import Auth from '../auth/auth.js';

const TodoList = (props) => {

  const [page, setPage] = useState(0);
  const context = useContext(SettingsContext);

  const start = context.maxVisible * page;
  const end = start + context.maxVisible;
  const list = props.list ? props.list.slice(start, end) : [];

  return (
    <>
      <ul>
        {list.map(item => (
          <Unless condition={item.complete && !context.showCompleted}>
            <li
              className={`complete-${item.complete.toString()}`}
              key={item._id}
            >
              <span onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
              <button onClick={() => props.handleDetails(item._id)}>
                Details
              </button>
              <Auth capability="delete">
                <button onClick={() => props.handleDelete(item._id)}>
                  Delete
                </button>
              </Auth>
            </li>
          </Unless>
        ))}
      </ul>

      <When condition={page > 0}>
        <button onClick={() => setPage(page - 1)}>Previous</button>
      </When>

      <When condition={props.list.length > end}>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </When>

    </>
  );
};

export default TodoList;
