import React from 'react';
import styles from './Contact.module.css';
import { FiMail, FiPhone } from 'react-icons/fi'; // Feather icons

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> Williammarcus@cmail.carleton.ca
            <a href="mailto:Williammarcus@cmail.carleton.ca" className={styles.iconButton}>
              <FiMail />
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 613-220-4407
            <a href="tel:6132204407" className={styles.iconButton}>
              <FiPhone />
            </a>
          </p>
          <p><strong>Location:</strong> Ottawa, Ontario</p>
        </div>
        <div className={styles.links}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            View My Resume
          </a>
          <a
            href="https://www.linkedin.com/in/wmarcus1/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            Visit My LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
