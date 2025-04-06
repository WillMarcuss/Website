// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profilePic from './images/profile.jpg';

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'A Software Developer At Dayforce',
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
