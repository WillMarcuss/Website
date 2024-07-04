// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profilePic from './images/profile.jpg';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'A Full-Stack Developer at the Bank of Canada',
      'A Computer Science Student at Carleton University',
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={profilePic} // Replace with your profile picture URL
        alt="Profile"
        className={styles['profile-pic']}
      />
      <h1 className={styles.heading}>Hi, I'm William Marcus</h1>
      <p className={styles.subheading}>
        {text}
        <Cursor />
      </p>
    </motion.div>
  );
};

export default Home;
