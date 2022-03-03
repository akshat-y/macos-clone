import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import appleId from "../../assets/system_preference_icons/AppleID.png";

import iconGeneral from "../../assets/system_preference_icons/general.png"
import iconDesktop from "../../assets/system_preference_icons/desktop.png"
import iconMissionControl from "../../assets/system_preference_icons/mission_control.png"
import iconSiri from "../../assets/system_preference_icons/siri.png"
import iconSpotlight from "../../assets/system_preference_icons/spotlight.png"
import iconLanguage from "../../assets/system_preference_icons/language.png"
import iconNotification from "../../assets/system_preference_icons/notification.png"
import iconInternet from "../../assets/system_preference_icons/internet.png"
import iconPassword from "../../assets/system_preference_icons/password.png"
import iconUsers from "../../assets/system_preference_icons/users.png"
import iconAccessibility from "../../assets/system_preference_icons/accessibility.png"
import iconScreenTime from "../../assets/system_preference_icons/screen_time.png"
import iconExtension from "../../assets/system_preference_icons/extension.png"
import iconSecurity from "../../assets/system_preference_icons/security.png"

import iconSofwareUpdate from "../../assets/system_preference_icons/software_update.png"
import iconNetwork from "../../assets/system_preference_icons/network.png"
import iconBluetooth from "../../assets/system_preference_icons/bluetooth.png"
import iconSound from "../../assets/system_preference_icons/software_update.png"
import iconTouchId from "../../assets/system_preference_icons/touch_id.png"
import iconKeyboard from "../../assets/system_preference_icons/keyboard.png"
import iconTrackpad from "../../assets/system_preference_icons/trackpad.png"
import iconMouse from "../../assets/system_preference_icons/mouse.png"
import iconDisplay from "../../assets/system_preference_icons/display.png"
import iconPrinter from "../../assets/system_preference_icons/printer.png"
import iconBattery from "../../assets/system_preference_icons/battery.png"
import iconDateAndTime from "../../assets/system_preference_icons/date.png"
import iconSharing from "../../assets/system_preference_icons/sharing.png"
import iconTimeMachine from "../../assets/system_preference_icons/time_machine.png"
import iconStartupDisk from "../../assets/system_preference_icons/startup_disk.png"

import img1 from "../../assets/finder_icons/img1.jpeg";
import folder from "../../assets/finder_icons/folder.png";
import color_picker from "../../assets/system_preference_icons/color_picker.png"


const pane2Items = [
    { icon: iconSofwareUpdate, text: 'Software Update' },
    { icon: iconNetwork, text: 'Network' },
    { icon: iconBluetooth, text: 'Bluetooth' },
    { icon: iconSound, text: 'Sound' },
    { icon: iconTouchId, text: 'Touch ID' },
    { icon: iconKeyboard, text: 'Keyboard' },
    { icon: iconTrackpad, text: 'Trackpad' },
    { icon: iconMouse, text: 'Mouse' },
    { icon: iconDisplay, text: 'Displays' },
    { icon: iconPrinter, text: 'Printers & Scanners' },
    { icon: iconBattery, text: 'Battery' },
    { icon: iconDateAndTime, text: 'Date & Time' },
    { icon: iconSharing, text: 'Sharing' },
    { icon: iconTimeMachine, text: 'Time Machine' },
    { icon: iconStartupDisk, text: 'Startup Disk' }
]

const pane1Items = [
    { icon: iconGeneral, text: 'General' },
    { icon: iconDesktop, text: 'Desktop & Screen Saver' },
    { icon: iconMissionControl, text: 'Mission Control' },
    { icon: iconSiri, text: 'Siri' },
    { icon: iconSpotlight, text: 'Spotlight' },
    { icon: iconLanguage, text: 'Language & Region' },
    { icon: iconNotification, text: 'Notification & Focus' },
    { icon: iconInternet, text: 'Internet Accounts' },
    { icon: iconPassword, text: 'Passwords' },
    { icon: iconUsers, text: 'Users & Groups' },
    { icon: iconAccessibility, text: 'Accessibility' },
    { icon: iconScreenTime, text: 'Screen Time' },
    { icon: iconExtension, text: 'Extension' },
    { icon: iconSecurity, text: 'Security & Privacy' }
]

export function SystemPreferenceMenu({ changeActiveItem }) {
    return (
        <>
            <div className='user-information'>
                <img className='user-profile' src={img1} alt='' />
                <div className='user-details'>
                    <span className='user-name'>Akshat Yadav</span>
                    <br />
                    <span className='user-accounts'>Apple Id, Media & App Store</span>
                </div>
                <div className='apple-id'>
                    <img src={appleId} alt='apple id' />
                    <span>Apple ID</span>
                </div>
            </div>
            <div className='settings pane-1'>
                <Grid container spacing={{ xs: 1 }} columns={{ xs: 8 }}>
                    {pane1Items.map((item, index) => (
                        <Grid onClick={() => changeActiveItem(item.text)} style={{ textAlign: "center" }} item xs={1} key={index} className='item-container'>
                            <img className="settings-img" src={item.icon} alt="" />
                            <span className='settings-title'>{item.text}</span>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className='settings pane-2'>
                <Grid container spacing={{ xs: 1 }} columns={{ xs: 8 }}>
                    {pane2Items.map((item, index) => (
                        <Grid onClick={() => changeActiveItem(item.text)} style={{ textAlign: "center" }} item xs={1} key={index} className='item-container'>
                            <img className="settings-img" src={item.icon} alt="" />
                            <span className='settings-title'>{item.text}</span>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export function DesktopAndScreenSaver({ wallpapers, changeWallpaper, activeWallpaper }) {
    return (
        <div className='desktop-screen-saver'>
            <div className='container'>
                <div className='tab'>
                    <span className='tab-item active'>Dekstop</span>
                    <span className='tab-item'>Screen Saver</span>
                </div>
                <div className='current-wallpaper'>
                    <div className='wallpaper-preview'>
                        <img src={activeWallpaper} alt='wallpaper' />
                    </div>
                    <div className='wallpaper-options'>
                        <span className='title'>Desktop Wallpaper</span>
                        <br />
                        <select>
                            <option>Fill Screen</option>
                            <option>Fit to Screen</option>
                            <option>Stretch to Fill Screen</option>
                            <option>Center</option>
                        </select>
                    </div>
                </div>

                <div className='wallpaper-select'>

                    <div className='folders'>
                        <details>
                            <summary><span>Apple</span></summary>
                            <div>
                                <img src={folder} alt='folder' />
                                <span>Desktop Picture</span>
                            </div>
                            <div>
                                <img src={color_picker} alt='folder' />
                                <span>Colours</span>
                            </div>
                        </details>
                        <details>
                            <summary><span>Photos</span></summary>
                        </details>
                        <details>
                            <summary><span>Folder</span></summary>
                        </details>
                    </div>
                    <div className='wallpapers'>
                        <ImageList cols={4} gap={12}>
                            {wallpapers.map((item) => (
                                <ImageListItem key={item} onClick={() => changeWallpaper(item)}>
                                    <img
                                        className='wallpaper-images'
                                        src={item}
                                        alt='wallpaer'
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>

                <div className='more-options'>
                    <div className='add-remove'>
                        <span className='add'>+</span>
                        <span className='divider'>|</span>
                        <hr className='remove' />
                    </div>
                </div>
            </div>
        </div>
    )
}