import './header.css';
import rightArrow from './assets/right-arrow.svg';
import settings from './assets/settings.svg';

function Header() {
    return (
        <>
            <div id="logo">
                <div className="circle"></div>
                <h1 className="logo-text"><span style={{color: 'var(--primary-color)'}}>LAN</span>Share</h1>
            </div>
            <div className="nav-bar flex justify-between items-center">
                <div className="nav-bar-left ml-10 mt-5 flex flex-col gap-3">
                    <div id="network-settings" className="flex flex-col justify-between items-start bg-secondary-color p-3 rounded-md w-fit">
                        <span>Network: NITC-Wifi-Academic</span>
                        <span>Group: General</span>
                    </div>
                    <div id="change-group-button" className="bg-secondary-color p-3 rounded-md w-fit flex items-center gap-2">
                        <span>Change Group</span>
                        <img src={rightArrow} alt="right-arrow" />
                    </div>
                </div>
                <div className="nav-bar-right mr-10 mt-5 flex flex-col items-end gap-3">
                <div id="network-settings" className="flex flex-col justify-between items-start bg-secondary-color p-3 rounded-md w-fit">
                        <span>User: Ibilees</span>
                        <span>IP-Address: 172.18.38.41</span>
                    </div>
                    <div id="settings-button" className="bg-secondary-color p-3 rounded-md w-fit flex items-center gap-2">
                        <span>Settings</span>
                        <img src={settings} alt="settings" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;