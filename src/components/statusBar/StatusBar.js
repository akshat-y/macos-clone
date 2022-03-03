import "./StatusBar.scss";
import { useState, useEffect } from "react";
import { appleLogoSvg } from "../../Constants";
import wifi from "../../assets/icons/wifi.svg"
import battery from "../../assets/icons/battery.svg"
import search from "../../assets/icons/search.svg"
import controlCenter from "../../assets/icons/control_center.svg"
import siri from "../../assets/system_preference_icons/siri.png"

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function StatusBar({changeAppsStatus}) {

  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    let secTimer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(secTimer);
  }, []);

  function getCurrentDate() {

    let dayOfWeek = weekday[currentDate.getDay()];
    let day = currentDate.getDate();
    let month = months[currentDate.getMonth()];

    return dayOfWeek + " " + day + " " + month

  }

  function getCurrentTime() {
    let hour = currentDate.getHours()
    let period = 'AM'
    if (hour === 0) {
      hour = 12
      period = 'AM'
    }
    else if (hour > 12) {
      hour %= 12
      period = 'PM'
    }

    let minute = currentDate.getMinutes()
    minute = minute < 10 ? '0' + minute : minute

    return hour + ":" + minute + " " + period
  }

  return (
    <div className="statusBar">
      <svg id="appleIcon" width="14px" height="24px" viewBox="0 0 814 1000">
        <path fill="#fff" d={appleLogoSvg} />
      </svg>
      <div className="appleOptions">
        <span className="item" onClick={(e) => changeAppsStatus('aboutMac', true)}>
          About this mac
        </span>
        <div className="divider" />

        <span className="item">System Preferences</span>
        <span className="item">App Store</span>
        <div className="divider" />

        <span className="item">Recent Items</span>
        <div className="divider" />

        <span className="item">Force Quit</span>
        <div className="divider" />

        <span className="item">Sleep</span>
        <span className="item">Restart</span>
        <span className="item">Shut Down</span>
        <div className="divider" />

        <span className="item">Lock Screen</span>
        <span className="item">Log Out</span>

      </div>
      <ul id="menu">
        <li className="boldMenu">Finder</li>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Go</li>
        <li>Window</li>
        <li>Help</li>
      </ul>
      <ul id="menu-icons">
        <li><span className="small">83% </span><img src={battery} height="12" alt="wifi" /></li>
        <li><img src={wifi} height="13" alt="wifi" /></li>
        <li><img src={search} height="14" alt="wifi" /></li>
        <li><img src={controlCenter} height="14" alt="wifi" /></li>
        <li><img src={siri} height="14" alt="wifi" /></li>
        <li><span>{getCurrentDate()} &nbsp;&nbsp; {getCurrentTime()}</span></li>
      </ul>
    </div>
  );
}

export default StatusBar;
