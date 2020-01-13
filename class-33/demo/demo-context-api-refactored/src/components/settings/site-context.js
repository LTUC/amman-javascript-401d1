import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Daily Dose of Code',
      changeTitleTo: this.changeTitleTo,
      twitter: 'DailyDoseOfCode',
      changeTwitterTo: this.changeTwitterTo,
      email: 'dailydoseofcode@gmail.com',
      changeEmailTo: this.changeEmailTo,
    };
  }

  changeTitleTo = title => this.setState({ title });
  changeTwitterTo = twitter => this.setState({ twitter });
  changeEmailTo = email => this.setState({ email });

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
