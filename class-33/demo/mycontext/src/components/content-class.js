import React from 'react';
import { SettingsContext } from '../context/site.js'
import {ThemeContext} from '../context/theme.js'
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <SettingsContext.Consumer>
                    {
                        settingsContext => {

                            return (<>
                                <h1>  {settingsContext.title} </h1>
                                <a href={`https://www.twitter.com/${settingsContext.twitter}`}>{settingsContext.twitter}</a>
                            </>
                            )
                        }
                    }

                </SettingsContext.Consumer>

                <ThemeContext.Consumer>
                    {
                        themeContext => (
                            <h2>{themeContext.mode}</h2>
                        )
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Content;