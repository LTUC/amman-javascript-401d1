import uuid from 'uuid/v4';
const initialState = { todoList: [], showDetails: null, details: {} };

export default function reducer (state=initialState, action) {
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
    return state;
  }
}

// Action Creators
export const addItem = (data) => {
  data._id = uuid();
  data.complete = false;
  return {type: 'add', payload:data};
};

export const deleteItem = (id) => {
  return {type:'delete', payload:id};
};

export const toggleComplete = (id) => {
  return {type: 'toggle', payload:id};
};

export const toggleDetails = id => {
  return {type: 'details', payload:id};
};

