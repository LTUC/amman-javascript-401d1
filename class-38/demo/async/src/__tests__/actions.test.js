import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import * as actions from '../store/actions.js';

const mockStore = configMockStore([thunk]);

describe('Normal Action Creators', () => {
  it('should create a FAKE action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'FAKE',
      payload: 'foo',
    };

    store.dispatch(actions.fakeAction('foo'));
    let dispatchedActions = store.getActions();
    expect(dispatchedActions[0]).toEqual(expectedAction);
  });
});

describe('async Action Creator', () => {
  it('should create a GET action', () => {
    const store = mockStore({ results: [] });
    return store.dispatch(actions.getRemoteData()).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('GET');
    });
  });
});
