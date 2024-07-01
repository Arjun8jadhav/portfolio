import './hero.css'
import { assets } from '../../asset/asset';
import { ids } from '../../asset/ids/ids';
import { prof } from '../../asset/profile/profile';
const Hero = () => {
    return (
        <section className='container'>
            <div className='content'>
                <h1 className='title-head'>Hi, I'm Arjun Jadhav </h1>
                <p className='description'>I'm Full-stack developer and Competitive Programmer.
                </p>
                <div className="ids">
                    <a className='contactBtn' target='_blank' href='https://drive.google.com/file/d/1Trzv-6CH-QS-cag4cv9aLlRcqQJ0CvBX/view?usp=sharing'  >Resume</a>
                    <div className='social'>
                    <a href="https://www.linkedin.com/in/arjun-jadhav-661908244/"><img  src={ids.linkedin} alt="" /></a>
                    <a href="https://x.com/ARJUN_96K"><img  src={ids.x} alt="" /></a>
                    <a href="https://github.com/Arjun8jadhav"><img  src={ids.git} alt="" /></a>
                    </div>
                </div>
            </div>


            <img className='heroImg' src={assets.hero_icon} />

            <div className='topBlur' />
            <div className='bottomBlur' />
        </section>
    );
}
export default Hero;