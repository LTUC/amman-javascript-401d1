import React, { useContext } from 'react';
import {SettingsContext} from '../context/site.js';


function SettingsEditor(props) {
    const context = useContext(SettingsContext);
    return(
        <div>
            <h2>Settings</h2>
            <label>
                title
                <input placeholder="title" name="title"onChange={e => context.changeTitle(e.target.value)}/>
            </label>
            <label>
                twitter
                <input placeholder="twitter" name="twitter"onChange={e => context.changeTwitter(e.target.value)}/>
            </label>
        </div>
    )
}

export default SettingsEditor; 