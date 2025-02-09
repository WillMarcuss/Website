// src/pages/Projects.js

import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI Maze Runner Project',
    description: 'The Maze Runner project is a Python-based application to solve dynamic mazes using artificial intelligence techniques. It employs Q-learning, artificial life for dynamic wall updates, and rule-based systems for moving obstacles (grievers) to challenge the maze-solving capabilities of an agent.',
    link: 'https://github.com/WillMarcuss/mazeRunner'
  },
  {
    title: 'Finance Tracker',
    description: 'This project is an all in one tool that allows users to manage their finances by adding transactions, setting budgets, viewing spending trends, generating financial reports, and much more. ',
    link: 'https://github.com/WillMarcuss/FinanceTracker'
  },
  {
    title: 'AI Facial Recognition',
    description: 'This project is a Facial Emotion Recognition System that uses Deep Learning and Computer Vision techniques to detect emotions from images or real-time video streams. The system classifies faces into one of seven emotions: angry, disgust, fear, happy, sad, surprise, and neutral.',
    link: 'https://github.com/WillMarcuss/AIFacialRecognition'
  }
];

const Projects = () => {
  return (
    <div className={styles['projects-container']}>
      <h2 className={styles['projects-heading']}>Highlighted Projects</h2>
      <div className={styles['projects-grid']}>
        {projects.map((project, index) => (
          <div key={index} className={styles['project-card']}>
            <h3 className={styles['project-title']}>{project.title}</h3>
            <p className={styles['project-description']}>{project.description}</p>
            <a href={project.link} className={styles['project-link']} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className={styles['github-link-container']}>
        <p>If you would like to see more of my work, please visit my GitHub profile:</p>
        <a href="https://github.com/WillMarcuss" className={styles['github-link']} target="_blank" rel="noopener noreferrer">
          Visit My GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Projects;
