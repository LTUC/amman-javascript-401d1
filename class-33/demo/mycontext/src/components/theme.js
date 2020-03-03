import React from 'react';
import {ThemeContext} from '../context/theme.js'

class Content extends React.Component  {
static contextType = ThemeContext;
render() {
    return (
    <button onClick={this.context.toggleMode}>{this.context.mode === 'dark'?'light':'dark'}</button>
    )
}
}

export default Content;