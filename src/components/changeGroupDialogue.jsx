import { useState } from "react";
import './changeGroupDialogue.css';
import closeButton from '../assets/cross.svg';
import deleteIcon from '../assets/delete-icon.svg';
import plusIcon from '../assets/plus.svg';
import tickIcon from '../assets/tick.svg';

const groups = [
  {
    name: "General",
    files: 37,
    members: 12
  },
  {
    name: "MCU",
    files: 37,
    members: 12
  },
  {
    name: "MBH II",
    files: 37,
    members: 12
  },
  {
    name: "MBH I",
    files: 37,
    members: 12
  },
  {
    name: "MBH III",
    files: 37,
    members: 12
  },
  {
    name: "F Block",
    files: 37,
    members: 12
  },
  {
    name: "E Block",
    files: 37,
    members: 12
  },
  {
    name: "ELHC",
    files: 37,
    members: 12
  },
  {
    name: "NLHC",
    files: 37,
    members: 12
  },
  

]

function GroupCard({selectedGroup, setSelectedGroup, group, deleteMode}) {
  return (
    <div className={`relative p-3 rounded-md w-full flex flex-col items-start ${selectedGroup.name === group.name ? "bg-secondary-color text-primary-color" : "bg-primary-color outline outline-2 outline-secondary-color"}`} onClick={() => setSelectedGroup(group)}>
        {deleteMode && <img src={closeButton} alt="close"  className="close-button rounded-md" />}
        <span><span className="font-bold">Group:</span> {group.name}</span>
        <span><span className="font-bold">Files:</span> {group.files}</span>
        <span><span className="font-bold">Members:</span> {group.members}</span>
    </div>
  );
}

function ChangeGroupDialogue({setChangeGroupIsOpen}) {
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [createGroupMode, setCreateGroupMode] = useState(false);
    if(createGroupMode) {
      return (
        <div onClick={() => setChangeGroupIsOpen(false)}>
        <div className="modal-overlay" onClick={() => setChangeGroupIsOpen(false)}>
            <div className="modal-content bg-primary-color outline outline-10 outline-secondary-color rounded-md" onClick={e => e.stopPropagation()}>
              <h1 className="text-xl font-bold text-center w-full py-5 px-20 bg-secondary-color">Create/Join a Network Group</h1>
              <div className="flex flex-col items-start gap-1 m-5 text-secondary-color">
                <h2 className="font-medium">Group Name</h2>
                <input className="w-full outline outline-2 outline-secondary-color p-2" type="text" placeholder="Eg: Marvel-Cinematic-Universe" />
              </div>
              <div className="flex flex-col items-start gap-1 m-5 text-secondary-color">
                <h2 className="font-medium">Password</h2>
                <input className="w-full outline outline-2 outline-secondary-color p-2" type="password" placeholder="Enter Password" />
              </div>
              <div className="flex flex-col items-center gap-2 my-7">
                <div className="flex flex-row justify-center items-center outline outline-2 outline-accent-color bg-accent-color rounded-full w-fit p-4 py-2 gap-2"
                  onClick={() => setCreateGroupMode(false)}>
                    <span className="text-secondary-color font-bold">Create/Join a group</span>
                    <img src={plusIcon} alt="plus" style={{width: '20px', height: '20px'}}/>
                </div>
              </div>
            </div>
          </div>
      </div>
      )
    }
    return (
      <div onClick={() => setChangeGroupIsOpen(false)}>
        <div className="modal-overlay" onClick={() => setChangeGroupIsOpen(false)}>
            <div className="modal-content bg-primary-color outline outline-10 outline-secondary-color rounded-md" onClick={e => e.stopPropagation()}>
              <h1 className="text-xl font-bold text-center w-full py-5 px-20 bg-secondary-color">Select a Network Group</h1>
              <div className="flex justify-center items-center m-5 gap-5">
                <div className="flex flex-row justify-center items-center outline outline-2 outline-secondary-color rounded-full w-fit p-4 py-2 gap-2"
                  onClick={() => setDeleteMode(!deleteMode)}>
                    <span className="text-secondary-color">{deleteMode ? "Confirm" : "Delete a group"}</span>
                    <img src={deleteMode ? tickIcon : deleteIcon} alt="delete" style={{width: '20px', height: '20px'}}/>
                </div>
                <div className="flex flex-row justify-center items-center outline outline-2 outline-accent-color bg-accent-color rounded-full w-fit p-4 py-2 gap-2"
                  onClick={() => setCreateGroupMode(true)}>
                    <span className="text-secondary-color font-bold">Create/Join a group</span>
                    <img src={plusIcon} alt="plus" style={{width: '20px', height: '20px'}}/>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-secondary-color m-5">
                {groups.map((group) => (
                  <GroupCard key={group.name} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} group={group} deleteMode={deleteMode} />
                ))}
              </div>
            </div>
          </div>
      </div>
    );
  }

export default ChangeGroupDialogue;