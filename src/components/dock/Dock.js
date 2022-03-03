import "./Dock.scss";
import finder from '../../assets/dock_icons/finder.png'
import bin from '../../assets/dock_icons/bin.png'
import launchpad from '../../assets/dock_icons/launchpad.png'
import notes from '../../assets/dock_icons/notes.png'
import photos from '../../assets/dock_icons/photos.png'
import safari from '../../assets/dock_icons/safari.png'
import systemPreferences from '../../assets/dock_icons/systemPreferences.png'

function Dock({changeAppsStatus, appsStatus}) {


  return (
    <div className="dock" id="test">
      <li>
        <div className="name">Finder</div>
        <img className="ico" src={finder} alt="" onClick={() => changeAppsStatus('finder', true)}/>
        <span className={`${appsStatus.finder ? 'dot': ''}`} />
      </li>
      <li>
        <div className="name">Safari</div>
        <img className="ico" src={safari} alt=""/>
        <span className={`${appsStatus.safari ? 'dot': ''}`} />
      </li>
      <li>
        <div className="name">Notes</div>
        <img className="ico" src={notes} alt=""/>
        <span className={`${appsStatus.notes ? 'dot': ''}`} />
      </li>
      <li>
        <div className="name">Photos</div>
        <img className="ico" src={photos} alt=""/>
        <span className={`${appsStatus.photos ? 'dot': ''}`} />
      </li>
      <li>
        <div className="name">System Preferences</div>
        <img className="ico" src={systemPreferences} alt="" onClick={() => changeAppsStatus('systemPreference', true)}/>
        <span className={`${appsStatus.systemPreference ? 'dot': ''}`} />
      </li>
      <li>
        <div className="name">Launchpad</div>
        <img className="ico" src={launchpad} alt=""/>        
      </li>
      <li>
        <div className="name">Bin</div>
        <img className="ico" src={bin} alt=""/>        
      </li>
    </div>
  );
}

export default Dock;
