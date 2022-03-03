import './SystemPreference.scss'
import Draggable from "react-draggable";

import close from "../../assets/system_icons/close.svg";
import maximize from "../../assets/system_icons/maximize.svg";
import minimize from "../../assets/system_icons/minimize.svg";

import chevron_left from "../../assets/finder_icons/chevron_left.svg";
import chevron_right from "../../assets/finder_icons/chevron_right.svg";
import show_all from "../../assets/finder_icons/show_all.svg";
import search from "../../assets/finder_icons/search.svg";

import { useState } from 'react';
import { DesktopAndScreenSaver, SystemPreferenceMenu } from './SystemPreferenceItems';


function SystemPreference({ isAppOpen, changeAppsStatus, wallpapers, changeWallpaper, activeWallpaper }) {    

    const [activeItem, setActiveItem] = useState('main_menu')

    let active_item_component
    let active_item_text
    if(activeItem === 'Desktop & Screen Saver') {
        active_item_component = <DesktopAndScreenSaver wallpapers={wallpapers} changeWallpaper={changeWallpaper} activeWallpaper={activeWallpaper}/>
        active_item_text = 'Desktop & Screen Saver'
    }    
    else {
        active_item_component = <SystemPreferenceMenu changeActiveItem={setActiveItem}/>
        active_item_text = 'System Preference'
    } 

    return (
        <Draggable handle=".draggable-handle" defaultPosition={{ x: 100, y: 100 }}>
            <div tabIndex="12" className={`system-container ${!isAppOpen ? 'close-animation' : ''}`}>
                <div className='system-navigation draggable-handle'>
                    <div className="control-buttons">
                        <div className="control-button control-close" onClick={(e) => changeAppsStatus('systemPreference', false)}>
                            <img src={close} alt="Close" />
                        </div>
                        <div className="control-button control-minimize">
                            <img src={minimize} alt="Minimaize" />
                        </div>
                        <div className="control-button control-maximize">
                            <img src={maximize} alt="Maximixe" />
                        </div>
                    </div>

                    <div className='system-appbar'>
                        <img className='system-appbar-icon' src={chevron_left} alt="" />
                        <img className='system-appbar-icon' style={{ marginLeft: '10px' }} src={chevron_right} alt="" />
                        <img onClick={() => setActiveItem('main_menu')} className='system-appbar-icon' style={{ marginLeft: '10px' }} src={show_all} alt="" />
                        <span className='app-name'>{active_item_text}</span>
                        <div className='system-appbar-search right-align'>
                            <img src={search} alt="" />
                            <input placeholder='Search' />
                        </div>
                    </div>
                </div>
                {
                    active_item_component
                }
            </div>
        </Draggable>
    )
}

export default SystemPreference;