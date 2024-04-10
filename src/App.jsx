import styles from './App.module.css'
import { About } from './components/About/about.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
function App() {
 

  return (
    <div className={styles.App}>
       <Navbar/>
       <Hero/>
       <About/>
    </div>
  )
}

export default App
