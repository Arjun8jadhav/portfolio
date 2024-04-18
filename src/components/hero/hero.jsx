import  './hero.css'
import { assets } from '../../asset/asset';
const Hero=()=>{
    return (
        <section className='container'>
            <div className='content'>
                <h1 className='title-head'>Hi, I'm Arjun Jadhav </h1>
                <p className='description'>I'm Full-stack developer and Competitive Programmer.
                </p>
                <a className='contactBtn' href='mailto:jadhav8arjun@gmail.com'>Contact Me</a>
            </div>
            <img className='heroImg' src={assets.hero_icon}/>
            <div className='topBlur'/>
            <div className='bottomBlur'/>
        </section>
    );
}
export default Hero;