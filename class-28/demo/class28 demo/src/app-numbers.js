import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 33
    };
  }
  handleNumber = e => {
    this.setState({ number: e.target.value, mahmoud: true });
  };
  render() {
    console.log(this.state.mahmoud);
    return (
      <>
        <Number num={this.state.number} />
        <Form handler={this.handleNumber} />
      </>
    );
  }
}
function Number({ num }) {
  return <h1>{num}</h1>;
}

function Form(props) {
  return (
    <form>
      <input type="number" onChange={props.handler} />
    </form>
  );
}

export default App;
