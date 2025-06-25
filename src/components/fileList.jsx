import './fileList.css'
import downloadBtn from '../assets/download.svg'
import pauseBtn from '../assets/pause.svg'
import playBtn from '../assets/play.svg'
import deleteBtn from '../assets/delete.svg'
import crossBtn from '../assets/cross.svg'

function progressBar(percentage) {
    return (
        <div className='w-full flex flex-row justify-between gap-1 my-2'>
            <div style={{width: `${percentage}%`}} className='downloaded-progress'></div>
            <div style={{width: `${100 - percentage}%`}} className='remaining-progress'></div>
        </div>
    )
}

function Card({selectedTab, paused, progress, size, downloaded, uploaded, seeders, location, name}) {
    return (
        <div className="card">
            <h1 className='text-center'>{name}</h1>
            {selectedTab === 'My Files' && progressBar(progress)}
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col w-full'>
                    <div className='firstLine flex flex-row justify-between'>
                        <div className='firstLine-left'>
                            <span className='font-bold'>Size: </span>
                            <span>{size}</span>
                        </div>
                        <div className={`firstLine-right ${selectedTab === 'My Files' ? '' : 'hidden'}`}>
                            <span className='font-bold'>Downloaded: </span>
                            <span>{downloaded}</span>
                        </div>
                    </div>
                    <div className={`secondLine flex flex-row justify-between ${selectedTab === 'Share Files' ? 'hidden' : ''}`}>
                        <div className='secondLine-left'>
                            <span className='font-bold'>Seeders: </span>
                            <span>{seeders}</span>
                        </div>
                        <div className={`secondLine-right ${selectedTab === 'My Files' ? '' : 'hidden'}`}>
                            <span className='font-bold'>Uploaded: </span>
                            <span>{uploaded}</span>
                        </div>
                    </div>
                    <div className={`uploadedLine ${selectedTab === 'Share Files' ? '' : 'hidden'}`}>
                        <span className='font-bold'>Uploaded: </span>
                        <span>{uploaded}</span>
                    </div>
                    <div className={`locationLine ${selectedTab === 'Share Files' ? '' : 'hidden'}`}>
                        <span className='font-bold'>Location: </span>
                        <span>{location}</span>
                    </div>
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <img className={`card-button ${selectedTab === 'Discover' ? '' : 'hidden'}`} src={downloadBtn} alt="download" />
                    <img className={`card-button ${selectedTab === 'My Files' ? '' : 'hidden'}`} src={deleteBtn} alt="delete" />
                    <div className={`${selectedTab === 'My Files' ? '' : 'hidden'}`}>
                        <img className={`card-button ${paused === true ? '' : 'hidden'}`} src={pauseBtn} alt="pause" />
                        <img className={`card-button ${paused === false ? '' : 'hidden'}`} src={playBtn} alt="play" />
                    </div>
                    <img className={`card-button ${selectedTab === 'Share Files' ? '' : 'hidden'}`} src={crossBtn} alt="cross" />
                </div>
            </div>
        </div>
    )
}
function FileList({selectedTab}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-20 mt-5">
            <Card selectedTab={selectedTab} paused={true} progress={70} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={true} progress={30} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={true} progress={85} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={false} progress={75} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={true} progress={68} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={false} progress={33} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={false} progress={23} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
            <Card selectedTab={selectedTab} paused={false} progress={43} size="1.2GB" downloaded="23.4GB" uploaded="23" seeders="23" location="/home/ibilees/Desktop/Movies/Spiderman.across.the.spider.verse/" name="Spider-man: Beyond the Spider-verse 2160p Bluray REMUX.mkv" />
        </div>
    )
}

export default FileList