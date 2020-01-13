import React from 'react';
import styles from './header.module.scss';

let customFontSize = '1.5em';
const customStyles = {
  h1: {
    fontSize: customFontSize,
  },
};

class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <h1 style={customStyles.h1}>{this.props.title}</h1>
        {this.props.children}
      </header>
    );
  }

}

export default Header;