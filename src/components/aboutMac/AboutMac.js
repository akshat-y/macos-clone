import './AboutMac.scss'
import Draggable from "react-draggable";
import close from "../../assets/system_icons/close.svg";
import maximize from "../../assets/system_icons/maximize.svg";
import minimize from "../../assets/system_icons/minimize.svg";

import mac_os_icon from "../../assets/wallpapers/bg3.jpg"

function AboutMac({ isAppOpen, changeAppsStatus}){
    return(        
        <Draggable handle=".draggable-handle" defaultPosition={{ x: -400, y: -200 }}>
            <div tabIndex="16" className={`about-container ${!isAppOpen ? 'close-animation' : ''}`}>
                <div className='about-navigation draggable-handle'>
                    <div className="control-buttons">
                        <div className="control-button control-close" onClick={(e) => changeAppsStatus('aboutMac', false)}>
                            <img src={close} alt="Close" />
                        </div>
                        <div className="control-button control-minimize">
                            <img src={minimize} alt="Minimaize" />
                        </div>
                        <div className="control-button control-maximize">
                            <img src={maximize} alt="Maximixe" />
                        </div>
                    </div>
                    
                    <div className='about-appbar'>   
                        <div className='tab'>
                            <span className='tab-item active'>Overview</span>
                            <span className='tab-item'>Display</span>
                            <span className='tab-item'>Storage</span>
                            <span className='tab-item'>Support</span>                            
                            <span className='tab-item'>Resources</span>
                        </div>                                             
                    </div>
                </div>      
                <div className='about-body'>
                    <div className='about-macos'>
                        <img src={mac_os_icon} alt="mac_icon" />                        
                        <div className='version-details'>
                            <div className='os-name'>macOS Akshat</div>                            
                            <div className='os-version'>Version 12.2</div>
                            <div className='extra-details'>MacBook Web (13-inch, M1, 2020)</div>
                            <div className='extra-details'>Chip Apple M1</div>
                            <div className='extra-details'>Memory 16GB</div>
                            <div className='extra-details'>Serial Number : ABJPERTY1234</div>
                            <div className='buttons'>
                                <span>System Report...</span>
                                <span>Software Update...</span>
                            </div>
                        </div>
                        <div className='copyright'>
                            <sup>TM</sup> and &copy; 2021-2022 Akshat Inc. No Rights Reserved. License and Warranty
                        </div>
                    </div>                    
                </div>          
            </div>
        </Draggable>        
    )
}
export default AboutMac;