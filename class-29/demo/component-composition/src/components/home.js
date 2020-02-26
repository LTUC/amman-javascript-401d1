import React from 'react';
import Modal from './modal/index.js';
import { If, Then, Else } from './if/index.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
    console.log('__STATE__', this.state)
  }

  render() {
    return (
      <section>
        <If condition={this.state.open}>
          <Then>
            <Modal title="cool modal" close={this.toggleModal}>
              <h1>My modal content</h1>
              <p>Here is the cool modal.</p>
            </Modal>
          </Then>
        </If>
        <Else>
          <button onClick={this.toggleModal}>Open the modal</button>
        </Else>
      </section>
    )
  }
}

export default Home;
