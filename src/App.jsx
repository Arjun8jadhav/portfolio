import styles from './App.module.css'
import { About } from './components/About/about.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import { Experience } from './components/experience/experience.jsx'
import { Project } from './components/project/project.jsx'
import { Email } from './components/email/email.jsx'

function App() {
 

  return (
    <div className={styles.App}>
       <Navbar/>
       <Hero/>
       <About/>
       <Experience/>
       <Project />
       <Email/>
       
      
       
    </div>
  )
}

export default App
