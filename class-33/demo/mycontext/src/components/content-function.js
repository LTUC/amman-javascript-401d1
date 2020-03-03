import React, { useContext } from 'react';
import { SettingsContext } from '../context/site.js';
import { ThemeContext} from '../context/theme.js';
function Content(props) {
    const settingsContext = useContext(SettingsContext)
    const themeContext = useContext(ThemeContext);
    return (
        <div>
            <h2>function Component</h2>
            <h1>  {settingsContext.title} </h1>
            <a href={`https://www.twitter.com/${settingsContext.twitter}`}>{settingsContext.twitter}</a>
            <h2>{themeContext.mode}</h2>
        </div >
    )

}

export default Content;