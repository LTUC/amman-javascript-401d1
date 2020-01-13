import React from 'react';
import {connect} from 'react-redux';

import Form from 'react-jsonschema-form';

import * as actions from '../../store/todo.store.js';

import schema from './schema.json';

const uiSchema = {
  difficulty: { 'ui:widget': 'range' },
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};


function TodoForm(props) {

  const handleSubmit = (form) => {
    props.addItem(form.formData);
  };

  return (
    <div>
      <h3>Add Item</h3>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      />

    </div>
  );
}

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch, getState) => ({
  addItem: payload => dispatch(actions.addItem(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

// const TodoFormX = props => {
//
//   return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
//           </label>
//           <label>
//             <span>Due</span>
//             <input type="date" name="due" onChange={handleChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
// };
