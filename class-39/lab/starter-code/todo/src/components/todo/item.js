import React from 'react';
import {connect} from 'react-redux';
import Modal from '../modal';

const Item = (props) => {

  const item = props.todo.details || {};

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

const mapStateToProps = state => ({
  todo: state.todo,
});

export default connect(
  mapStateToProps,
)(Item);
