import { useState } from "react";
import './settingsDialogue.css';
import folderIcon from '../assets/folder-icon.svg';
import saveIcon from '../assets/save.svg';
function SettingsDialogue({setSettingsIsOpen}) {
  
    return (
      <div onClick={() => setSettingsIsOpen(false)}>
        <div className="modal-overlay" onClick={() => setSettingsIsOpen(false)}>
            <div className="modal-content bg-primary-color outline outline-10 outline-secondary-color rounded-md" onClick={e => e.stopPropagation()}>
              <h1 className="text-xl font-bold text-center w-full py-5 px-20 bg-secondary-color">Settings</h1>
              <div className="flex flex-col items-start gap-1 m-3 text-secondary-color">
                <h2 className="font-medium">Username</h2>
                <input className="w-full outline outline-2 outline-secondary-color p-2" type="text" value="Ibilees" />
              </div>
              <div className="flex flex-col items-start gap-1 m-3 text-secondary-color">
                <h2 className="font-medium">Download Path</h2>
                <div className="flex flex-row items-center gap-2 outline outline-2 outline-secondary-color w-full px-2">
                  <input className="w-full py-2 focus:outline-none" type="text" value="/Users/ibilees/Downloads" />
                  <img src={folderIcon} alt="folder" style={{width: '20px', height: '20px'}}/>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 m-3 text-secondary-color">
                <h2 className="font-medium">mDNS</h2>
                <input className="w-full outline outline-2 outline-secondary-color p-2" type="text" value="ibilees-LANShare._tcp.local" disabled />
              </div>
              <div className="flex flex-col items-center gap-2 my-7">
                <div className="flex flex-row justify-center items-center outline outline-2 outline-accent-color bg-accent-color rounded-full w-fit p-4 py-2 gap-2"
                  onClick={() => setSettingsIsOpen(false)}>
                    <span className="text-secondary-color font-bold">Save</span>
                    <img src={saveIcon} alt="save" style={{width: '20px', height: '20px'}}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }

export default SettingsDialogue;