import React from 'react';
import ContentClass from './components/content-class.js'
import ContentFunction from './components/content-function.js'
import SettingsEditor from './components/site.js'
import ThemeEditor from './components/theme.js'
import {ThemeContext} from './context/theme.js';
class Main extends React.Component {
    static contextType = ThemeContext;
     styles = {
        dark:{
            background:'#111',
            color:'ivory',
        },
        light:{
            background:'#f5f5f5',
            color:'#525252',
        }
    }
    render() {
        return(
            <main style={this.styles[this.context.mode]}>
                <section>
                <ContentClass/>
                <ContentFunction/>
                <aside>
                    <SettingsEditor/>
                    <ThemeEditor/>
                </aside>
                </section>
            </main>
        )
    }
}

export default Main;