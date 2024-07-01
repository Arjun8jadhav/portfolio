import  './hero.css'
import { assets } from '../../asset/asset';
const Hero=()=>{
    return (
        <section className='container'>
            <div className='content'>
                <h1 className='title-head'>Hi, I'm Arjun Jadhav </h1>
                <p className='description'>I'm Full-stack developer and Competitive Programmer.
                </p>
                <a className='contactBtn' target='_blank' href='https://drive.google.com/file/d/1Trzv-6CH-QS-cag4cv9aLlRcqQJ0CvBX/view?usp=sharing'  >Resume</a>
            </div>
            <img className='heroImg' src={assets.hero_icon}/>
            <div className='topBlur'/>
            <div className='bottomBlur'/>
        </section>
    );
}
export default Hero;