import React from 'react';

import Header from '../header/';
import Footer from '../footer/';
import Changer from '../changer/';
import Name from '../name/';

export default props => {
  return (
    <>
      <Header title="Redux Rocks" />
      <Name />
      <Changer />
      <Footer>
        <span>&copy; 2018 Code Fellows 401JS</span>
      </Footer>
    </>
  );
};
