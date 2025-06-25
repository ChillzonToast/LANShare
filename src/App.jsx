import './App.css'
import Header from './header.jsx'
import Tabs from './components/tabs.jsx'
import SearchSection from './components/searchSection.jsx'
import { useState } from 'react'
import FileList from './components/fileList.jsx'
import PageNavigator from './components/pageNavigator.jsx'

function App() {
  const [selectedTab, setSelectedTab] = useState('Discover')
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      <Header />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <SearchSection selectedTab={selectedTab} />
      <FileList selectedTab={selectedTab}/>
      <PageNavigator numPages={27} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App
