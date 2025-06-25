function TabChip({selected, setSelectedTab, name}) {
    return (
        <div className={`p-3 py-2 rounded-full w-fit ${selected ? 'bg-secondary-color' : 'outline outline-2 outline-secondary-color text-secondary-color'}`} 
            onClick={() => setSelectedTab(name)} style={{userSelect: 'none'}}>
            <span>{name}</span>
        </div>
    )
}

function Tabs({selectedTab, setSelectedTab}) {
    return (
        <div className="flex flex-row justify-center items-center gap-5 my-5">
            <TabChip selected={selectedTab === 'Discover'} setSelectedTab={setSelectedTab} name="Discover" />
            <TabChip selected={selectedTab === 'My Files'} setSelectedTab={setSelectedTab} name="My Files" />
            <TabChip selected={selectedTab === 'Share Files'} setSelectedTab={setSelectedTab} name="Share Files" />
        </div>
    )
}

export default Tabs;