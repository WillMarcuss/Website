import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1> William Marcus</h1>
            <nav>
                <ul className={styles.nav}>
                    <li><a href='/' className="btn ghost">Home</a></li>
                    <li><a href='/about' className="btn ghost">About</a></li>
                    <li><a href='/projects' className="btn ghost">Projects</a></li>
                    <li><a href='/contact' className="btn ghost">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;