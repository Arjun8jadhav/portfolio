import styles from './navbar.css';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <ul className={styles.memu.item}>
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

