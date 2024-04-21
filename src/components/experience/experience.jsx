
import { Skill } from '../../asset/skills/skills';

import Style from './experience.module.css';

export const Experience = () => {
   
    return (
        <section className={Style.container} id='experience'>
            <h2 className={Style.title}>Experience</h2>
            <div className={Style.content}>
                <div className={Style.skillImg}>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.cpp_icon} alt='css' />
                        <p>CPP</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.html_icon} alt='css' />
                        <p>HTML</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.css_icon} alt='css' />
                        <p>CSS</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.node_icon} alt='css' />
                        <p>NodeJS</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.react_icon} alt='css' />
                        <p>React</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.postgres_icon} alt='css' />
                        <p>Postgres</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.cpp_icon} alt='css' />
                        <p>CPP</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.html_icon} alt='css' />
                        <p>HTML</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.css_icon} alt='css' />
                        <p>CSS</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.node_icon} alt='css' />
                        <p>NodeJS</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.react_icon} alt='css' />
                        <p>React</p>
                    </div>
                    <div className={Style.skills}>
                        <img className={Style.imgcontainer} src={Skill.postgres_icon} alt='css' />
                        <p>Postgres</p>
                    </div>
                </div>
                <ul className={Style.profiles}>
                    <li className={Style.account}>
                        <img src={Skill.leetcode_icon} />
                        <p>Top 8% Rating (1790+ max)</p>
                        <a href='https://leetcode.com/arjun_jadhav/'>View</a>
                    </li>
                    <li className={Style.account}>
                        <img src={Skill.cf_icon} />
                        <p>3 STAR CodeChef Rating(1650+ max)</p>
                        <a href='https://www.codechef.com/users/arjun_jadhav'>View</a>
                        
                    </li>
                    <li className={Style.account} >
                        <img src={Skill.cn_icon} />
                        <p>Top 2% Problem solver </p>
                        <a href='https://www.naukri.com/code360/profile/arjun_jadhav'>View</a>
                    </li>

                </ul>
            </div>
        </section>
    )
}
