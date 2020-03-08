let initialState = {
  candidates: [
    { name: 'Ayman', votes: 0 },
    { name: 'Rashid', votes: 0 },
    { name: 'Ashar', votes: 0 }
  ],
  totalVotes: 0
}

export default (state = initialState, action ) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':
      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate;
      });

      return { totalVotes, candidates };

      case 'RESET':
        console.log('_RESET_', initialState);
        return initialState

      default:
        return state;
  }
}

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}