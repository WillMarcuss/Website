import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FiMail, FiPhone, FiShare2, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyWebsite = async () => {
    const websiteUrl = window.location.origin;

    try {
      await navigator.clipboard.writeText(websiteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error('Failed to copy website link:', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <button
          className={styles.peelShare}
          onClick={handleCopyWebsite}
          aria-label="Copy website link"
          title="Copy website link"
        >
          <span className={styles.peelUnder}></span>

          <span className={styles.peelTop}>
            <span className={styles.peelIcon}>
              {copied ? <FiCheck /> : <FiShare2 />}
            </span>
          </span>
        </button>

        <div className={`${styles.copyToast} ${copied ? styles.showToast : ''}`}>
          Website link copied
        </div>

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

          <p>
            <strong>Location:</strong> Ottawa, Ontario
          </p>
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