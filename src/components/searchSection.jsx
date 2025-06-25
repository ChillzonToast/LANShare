import searchIcon from '../assets/search.svg'
import sortIcon from '../assets/sort.svg'
import plusIcon from '../assets/plus.svg'
function SearchSection({selectedTab}) {
    return (
        <div className="flex flex-row justify-center items-center gap-5 h-12">
            <div className={`flex flex-row justify-center items-center gap-2 px-5 h-full rounded-full w-fit bg-accent-color ${selectedTab === 'Share Files' ? '' : 'opacity-0'}`}>
                <span style={{userSelect: 'none'}} className="text-secondary-color font-medium">Share a file</span>
                <img src={plusIcon} alt="plus" />
            </div>
            <div className="flex flex-row justify-center items-center outline outline-2 outline-secondary-color rounded-full w-1/2 px-5">
                <input id="search-input"
                className="py-2 w-full text-secondary-color text-left focus:outline-none" 
                type="text" placeholder="Search a file"
                />
                <img src={searchIcon} alt="search" />
            </div>
            <div className="flex flex-row justify-center items-center gap-2 px-5 h-full rounded-full w-fit bg-secondary-color">
                <span style={{userSelect: 'none'}}>Sort By</span>
                <img src={sortIcon} alt="sort" />
            </div>
        </div>
    )
}

export default SearchSection;