import { Routes, Route } from 'react-router-dom'
import './App.css'
import Spotlight from './common/Spotlight'
import Sidebar from './sections/Sidebar/Sidebar'
import HomePage from './pages/HomePage'
import Archive from './pages/Archive'

function App() {

  return (
    <div className="page">
      <Spotlight />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>
      </div>
    </div>
  )


}

export default App
