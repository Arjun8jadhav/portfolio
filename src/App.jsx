import styles from './App.module.css'
import { About } from './components/About/about.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import { Experience } from './components/experience/experience.jsx'
import { Projects } from './components/projects/projects.jsx'
function App() {
 

  return (
    <div className={styles.App}>
       <Navbar/>
       <Hero/>
       <About/>
       <Experience/>
       <Projects/>
      
       
    </div>
  )
}

export default App
