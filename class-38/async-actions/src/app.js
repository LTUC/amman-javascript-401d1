import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions.js';

const App = (props) => {
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  const updateTeam = (e, team) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let name = formData.get('name');
    let id = formData.get('id');
    props.put(id, { name })
  }

  useEffect(() => {
    fetchData();
    console.log('__API_RESULTS__:', props.data.results);
  }, []);

  useEffect(() => {
    // fetchData();
    console.log('__API_RESULTS__:', props.data.results);
  }, [props.data]);

  return (
    <section>
      <button onClick={fetchData}>Get Teams</button>

      {/* {props.data.results.map((record, idx) => (
        <div key={idx}>
          {record.name}
        </div>
      ))} */}

      {props.data.results.map((record, idx) => (
        <form key={idx} onSubmit={(e) => updateTeam(e, record)}>
          <input name="name" defaultValue={record.name} />
          <input type="hidden" name="id" defaultValue={record._id} />
          {/* <button>Update Team</button> */}
        </form>
      ))}
    </section>
  )
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  put: (id, data) => dispatch(actions.putRemoteData(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);