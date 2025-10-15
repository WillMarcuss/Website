// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import profilePic from './images/profile.jpg';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'A Former Software Developer Intern At Dayforce',
      'A Fourth Year Computer Science Student at Carleton University',
      'A Passionate Coder'
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  return (
    <motion.div
      className={styles.container}
    >
      <div className={styles.profileContainer}>
  <img
    src={profilePic}
    alt="Profile"
    className={styles['profile-pic']}
  />
  <img
    src="/logo.ico" // replace with your actual logo path
    alt="Logo"
    className={styles.logo}
  />
</div>
      <h1 className={styles.heading}>Hi, I'm William Marcus</h1>
      <div className={styles.terminal}>
        <pre>
          <code>
            wmsh ~ % Initializing Portfolio... <br />
            wmsh ~ % Loading Information About William Marcus... <br />
            wmsh ~ % Status: {text}<span className={styles.blink}>█</span>
          </code>
        </pre>
      </div>

    </motion.div>

  );
};

export default Home;
