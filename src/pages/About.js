import React from "react";
import styles from './About.module.css';
import { motion } from 'framer-motion';

// Import the logos
import htmlLogo from './images/sql.jpeg';
import cssLogo from './images/React.png';
import jsLogo from './images/JS.webp';
import reactLogo from './images/cplus.png';

const About = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.aboutMe}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
      </motion.div>

      <div className={styles.sectionsContainer}>
        <div className={styles.section}>
          <h2>Who Am I</h2>
          <p>
            My name is William Marcus, I am 20 years old, and live in Ottawa, Ontario. I have a passion for coding and development.
          </p>
          <div className={styles.logos}>
            <img src={htmlLogo} alt="HTML Logo" className={`${styles.logo} ${styles.htmlLogo}`} />
            <img src={cssLogo} alt="CSS Logo" className={`${styles.logo} ${styles.cssLogo}`} />
            <img src={jsLogo} alt="JavaScript Logo" className={`${styles.logo} ${styles.jsLogo}`} />
            <img src={reactLogo} alt="React Logo" className={`${styles.logo} ${styles.reactLogo}`} />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Education</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2021</h3>
                <p>High School Diploma</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.current}`}>
              <div className={styles.timelineContent}>
                <h3>2021-Present</h3>
                <p>Computer Science (Honours) Student at Carleton University</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Expected 2026</h3>
                <p>Graduation</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Professional Life</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2022</h3>
                <p>Project Management Service Student at Canada Revenue Agency</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2023</h3>
                <p>Application Developer at Bank of Canada (Co-op)</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.current}`}>
              <div className={styles.timelineContent}>
                <h3>2024</h3>
                <p>Full-Stack Developer at Bank of Canada (Co-op)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
