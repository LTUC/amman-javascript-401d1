import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-jsonschema-form';
import schema from '../schema.json';

import * as actions from '../store/players-actions.js';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = { schema: schema };
  }

  handleSubmit = (form) => {
    if ( parseInt(this.props.id) >= 0 ) { 
      this.props.handlePut({id:this.props.id, record:form.formData});  
    }
    else {
      this.props.handlePost(form.formData);
    }
  }

  render() {
    return (
      <div>
        <h3>Edit Player {this.props.id}</h3>
        <Form
          schema={this.state.schema}
          uiSchema={uiSchema}
          formData={this.props.players[this.props.id]}
          onSubmit={this.handleSubmit}
        />
    
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handlePost: payload => dispatch(actions.post(payload)),
  handlePut: payload => dispatch(actions.put(payload)),

});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
