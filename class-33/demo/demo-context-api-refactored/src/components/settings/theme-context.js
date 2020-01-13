import React from 'react';

export const ThemeContext = React.createContext();

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '#fff',
      changeBackgroundTo: this.changeBackgroundTo,
      fontSize: '1.1em',
      changeFontSizeTo: this.changeFontSizeTo,
    };
  }

  changeFontSizeTo = fontSize => this.setState({ fontSize });
  changeBackgroundTo = background => this.setState({ background });

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default Theme;
