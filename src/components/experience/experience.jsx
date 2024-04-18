import React from 'react'
import { Skill } from '../../asset/skills/skills';
import skills from '../../data/skills.json';
import Style from './experience.module.css';
import { assets } from '../../asset/asset';
export const Experience = () => {
    return (
        <section className={Style.container} id='experience'>
            <h2 className={Style.title}>Experience</h2>
            <div className={Style.content}>
                <div className={Style.skillImg}>
                    <div className={Style.skills}>
                        <img src={Skill.cpp_icon} alt='css'/>
                        <p>CPP</p>
                    </div>
                    <div className={Style.skills}>
                        <img src={Skill.html_icon} alt='css'/>
                        <p>HTML</p>
                    </div>
                    <div className={Style.skills}>
                        <img src={Skill.css_icon} alt='css'/>
                        <p>CSS</p>
                    </div>
                    <div className={Style.skills}>
                        <img src={Skill.node_icon} alt='css'/>
                        <p>NodeJS</p>
                    </div>
                    <div className={Style.skills}>
                        <img src={Skill.react_icon} alt='css'/>
                        <p>React</p>
                    </div>
                    <div className={Style.skills}>
                        <img src={Skill.postgres_icon} alt='css'/>
                        <p>Postgres</p>
                    </div>
                </div>
                <ul className={Style.profiles}>
                    <li className={Style.account}>
                    <img src={Skill.leetcode_icon}/>
                    </li>
                    <li className={Style.account}>
                    <img src={Skill.cf_icon}/>
                    </li>
                    <li className={Style.account}>
                    <img src={Skill.cn_icon}/>
                    </li>

                </ul>
            </div>
        </section>
    )
}
