import './navbar.css';
import { assets } from '../../asset/asset';
import { useState } from 'react';

const Navbar = () => {
    const [menuopen, setMenuOpen] = useState(true);

    return (
        <nav className="navbar">
            <h2 className='title'>Portfolio</h2>
            <div className="menu">
                <img className='menuBtn' src={menuopen ? (assets.menu_icon) : (assets.cross)} alt='menu' onClick={() => setMenuOpen(!menuopen)} />
                <ul className={`${'menu-item'} ${!menuopen && 'menu-open'}`} onClick={() => setMenuOpen(!menuopen)}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#Project'>Project</a>
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

