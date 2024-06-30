import './navbar.css';
import { assets } from '../../asset/asset';
import { useState } from 'react';
import { prof } from '../../asset/profile/profile';
const Navbar = () => {
    const [menuopen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <img className="title" src={prof.fin1} alt="" />
            <div className="menu">
                <img className='menuBtn' src={menuopen ? (assets.menu_icon) : (assets.cross)} alt='menu' onClick={() => setMenuOpen(!menuopen)} />
                <ul className={`${'menu-item'} ${!menuopen && 'menu-open'}`} onClick={() => setMenuOpen(!menuopen)}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#Project'>Project</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar

