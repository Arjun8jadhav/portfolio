import styles from './projects.module.css'
import { photos } from '../../asset/project/project'
export const Projects = () => {
    return (
        <section id="Project" className={styles.sec}>
            <h2 className={styles.head}>Projects</h2>
            <div className={styles.project}>

                <div className={styles.container}>
                    <img
                        src={photos.pro}
                        alt='project'
                        className={styles.image}
                    />
                    <h3 className={styles.title}>Gemini Clone</h3>
                    <p className={styles.description}>Google gemini clone with Gemini API integration</p>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>React</li>
                        <li className={styles.skill}>Gemini API</li>
                        <li className={styles.skill}>Context</li>
                    </ul>
                    <div className={styles.links}>
                        <a href='https://github.com/Arjun8jadhav/Gemini_clone' className={styles.link}>
                            Live
                        </a>
                        <a href='https://gemini-clone-jade.vercel.app/' className={styles.link}>
                            Code
                        </a>
                    </div>

                </div>

                <div className={styles.container}>
                    <img
                        src={photos.pro}
                        alt='project'
                        className={styles.image}
                    />
                    <h3 className={styles.title}>E-commerce Platform</h3>
                    <p className={styles.description}>Front-end clothing E-commerce Platform</p>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>HTML</li>
                        <li className={styles.skill}>CSS</li>
                        <li className={styles.skill}>Javascript</li>
                    </ul>
                    <div className={styles.links}>
                        <a href='#' className={styles.link}>
                            Live
                        </a>
                        <a href='# ' className={styles.link}>
                            Code
                        </a>
                    </div>
                </div>


                <div className={styles.container}>
                    <img
                        src={photos.pro}
                        alt='project'
                        className={styles.image}
                    />
                    <h3 className={styles.title}>Django Authentication</h3>
                    <p className={styles.description}>Creating authentication using MySQl Database</p>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>Django</li>
                        <li className={styles.skill}>HTML</li>
                        <li className={styles.skill}>CSS</li>
                    </ul>
                    <div className={styles.links}>
                        
                        <a href='# ' className={styles.link}>
                            Code
                        </a>
                    </div>
                </div>


                

            </div>
        </section>
    )
}
