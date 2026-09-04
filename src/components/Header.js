import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header className={styles.header}>
            <div className={styles['logo-left']}>
                <img src="/logo.ico" alt="Logo" className={styles.logoImg} />
                <h1>William Marcus</h1>
            </div>

            <nav className={styles.navWrap}>
                <button
                    className={styles.hamburger}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(prev => !prev)}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <ul className={`${styles.nav} ${open ? styles.open : ''}`}>
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