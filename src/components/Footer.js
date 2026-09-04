import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>© {new Date().getFullYear()} William Marcus</p>
                <div className={styles.links}>
                    <a href="https://github.com/WillMarcuss" target="_blank" rel="noopener noreferrer" className="btn ghost">GitHub</a>
                    <a href="https://www.linkedin.com/in/wmarcus1/" target="_blank" rel="noopener noreferrer" className="btn ghost">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;