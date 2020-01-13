import React from 'react';
import Modal from '../modal';

const Item = (props) => {

  const item = props.item || {};

  return (
    <Modal title="To Do Item" close={props.handleDetails}>
      <div className="todo-details">
        <header>
          <span>Assigned To: {item.assignee}</span>
          <span>Due: {item.due}</span>
        </header>
        <div className="item">
          {item.text}
        </div>
      </div>
    </Modal>
  );
};

export default Item;
