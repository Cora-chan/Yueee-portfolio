import './App.css'
import Spotlight from './common/Spotlight'
import Sidebar from './sections/Sidebar/Sidebar'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {

  return (
    <div className="page">
      <Spotlight />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Hero />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )


}

export default App
