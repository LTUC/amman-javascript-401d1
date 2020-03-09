let initialState = [
  { name: 'Mahmoud', votes: 0 },
  { name: 'Trump', votes: 0 },
  { name: 'Rashid', votes: 0 },
  { name: 'Abu Aseel', votes: 0 }
];

export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    case 'INCREMENT':
      return state.map(candidate => {
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }

        return candidate;
      })

    case 'DISABLE':
      return state.map(candidate => candidate.name === payload.name ? {...candidate, disable: true} : candidate);

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const increment = (person) => {
  return {
    type: 'INCREMENT',
    payload: person
  }
}

export const disable = (person) => {
  return {
    type: 'DISABLE',
    payload: person
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}