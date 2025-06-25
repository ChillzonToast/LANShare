import './pageNavigator.css'
function pageButton(text, isActive, setCurrentPage) {
    return (
        <div className={`page-button flex flex-row justify-center items-center p-4 outline outline-2 ${isActive ? 'bg-accent-color outline-accent-color mb-2 page-shadow' : 'outline-secondary-color text-secondary-color'}`} 
        onClick={() => setCurrentPage(parseInt(text))}  >
            <span className="font-medium" >{text}</span>
        </div>
    )
}

function PageNavigator({numPages, currentPage, setCurrentPage}) {
    return (
        <div className="flex flex-row justify-end items-center mx-20 mt-10 mb-20 gap-2" style={{height: '48px', userSelect: 'none'}}>
            {currentPage > 1 && pageButton('1', false, setCurrentPage)}
            {currentPage > 3 && <span className="font-bold text-secondary-color h-full flex items-end"><div>..</div></span>}
            {currentPage > 2 && pageButton(`${currentPage - 1}`, false, setCurrentPage)}
            {pageButton(`${currentPage}`, true, setCurrentPage)}
            {currentPage < numPages - 1 && pageButton(`${currentPage + 1}`, false, setCurrentPage)}
            {currentPage < numPages - 2 && <span className="font-bold text-secondary-color h-full flex items-end"><div>..</div></span>}
            {currentPage < numPages && pageButton(`${numPages}`, false, setCurrentPage)}
        </div>
    )
}

export default PageNavigator