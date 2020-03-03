import React,{useState} from 'react';
export const SettingsContext = React.createContext();

function SettingProvider(props) {
const [title, setTitle] = useState('My cool site');
const [twitter, setTwitter] = useState('MyCoolSite')
const state = {
    title,
    twitter,
    changeTitle:setTitle,
    changeTwitter:setTwitter
}
return(
    <SettingsContext.Provider value={state}>
        {props.children}
    </SettingsContext.Provider>
)
}

export default SettingProvider;