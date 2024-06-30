import styles from './project.module.css';
import { projectdata } from '../../lib/project.js';

export const Project = () => {

  const pdata = projectdata;
 

  return (
    <div className={styles.container} id='Project'>
      <h2 className={styles.title}> Project</h2>
      <div className={styles.projects} >
        {pdata.map((data) => {
          return (
            <div className={styles.project} key={data.id}>
              <h3>{data.Title}</h3>
              <img src={data.img} alt="hello" />
              <div className={styles.lan}>
                {data.Language.map((lang) => {
                  return (
                    <p key={lang.id}>{lang}</p>
                  )
                })}
              </div>
              <div className={styles.links}>
                <a target='__blank' href={data.code}>Code</a>
                <a target='__blank' href={data.live}>Live</a>
              </div>


            </div>)

        })}
        
      </div>
    </div>
  )
}
