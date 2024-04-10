import Style from './about.module.css';
import { assets } from '../../asset/asset';
export const About = () => {
  return (
    <section className={Style.container} id='about'>
        <h2 className={Style.title}>About</h2>
        <div className={Style.content}>
            <img src={assets.seating_icon} className={Style.aboutimg} alt='me seating with laptop' />
        
        <ul className={Style.aboutitems}>
            <li className={Style.aboutitem}>
                <img src={assets.arrow_icon} alt='arrow'/>
                <div className={Style.aboutitemtext}>
                    <h3>Frontend Developer</h3>
                    <p>I'am frontend Developer with experience in Optimization of website</p>
                </div>
            </li>
            <li className={Style.aboutitem}>
                <img src={assets.cpu_icon} alt='arrow'/>
                <div className={Style.aboutitemtext}>
                    <h3>Backend Developer</h3>
                    <p>I have Experience in building optimized backend using NodeJS</p>
                </div>
            </li>
            <li className={Style.aboutitem}>
                <img src={assets.dr_icon} alt='arrow'/>
                <div className={Style.aboutitemtext}>
                    <h3>Database</h3>
                    <p>Worked on multiple technology like Postgres,MySQL</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
