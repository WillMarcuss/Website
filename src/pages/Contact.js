// src/pages/Contact.js

import React from 'react';
import styles from './Contact.module.css'; // Adjust the import path according to your project structure

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> Williammarcus@cmail.carleton.ca</p>
        <p><strong>Phone:</strong> 613-220-4407</p>
        <p><strong>Location:</strong> Ottawa, Ontario</p>
      </div>
      <p>If you would like to view my resume, please view it below:</p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
        View My Resume
      </a>
    </div>
  );
};

export default Contact;
