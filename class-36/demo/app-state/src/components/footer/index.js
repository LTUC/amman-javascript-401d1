import React from 'react';
import styles from './footer.module.scss';

class Footer extends React.Component {

  render() {
    return (
      <footer className={styles.footer}>
        {this.props.children}
      </footer>
    );
  }

}

export default Footer;