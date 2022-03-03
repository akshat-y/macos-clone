import './App.scss'
import { useState } from 'react';
import Dock from './components/dock/Dock';
import Finder from './components/finder/Finder';
import StatusBar from './components/statusBar/StatusBar';
import SystemPreference from './components/systemPreference/SystemPreference'

import { wallpapers } from './Constants';
import AboutMac from './components/aboutMac/AboutMac';


function App() {

  const appsStatus = {
    finder: false,
    safari: false,
    notes: false,
    photos: false,
    systemPreference: false,
    aboutMac: false,
  }

  const [appsOpen, setAppsOpen] = useState(appsStatus)
  const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[0])

  function changeAppsStatus(app, status){    
    setAppsOpen({...appsOpen, [app]: status})
  }

  return (
    <div className="App" style={{backgroundImage: "url("+ activeWallpaper +")"}}>
      <StatusBar changeAppsStatus={changeAppsStatus}/>
      <Dock appsStatus={appsOpen} changeAppsStatus={changeAppsStatus}/>      
      <Finder isAppOpen={appsOpen.finder} changeAppsStatus={changeAppsStatus}/>
      <AboutMac isAppOpen={appsOpen.aboutMac} changeAppsStatus={changeAppsStatus}/>          
      <SystemPreference isAppOpen={appsOpen.systemPreference} changeAppsStatus={changeAppsStatus}
        wallpapers={wallpapers} changeWallpaper={setActiveWallpaper} activeWallpaper={activeWallpaper}
      />  
      
    </div>
  );
}

export default App;
