// src/pages/Projects.js

import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Pac-Man Reinforcement Learning Project',
    description: 'This project implements multiple different reinforcement learning agents to play Pac-Man. The agents include Dyna-Q, Deep Q-Networks (DQN), and Policy Gradient methods. The project demonstrates the application of reinforcement learning techniques in a classic arcade game environment, showcasing the agents\' ability to learn and improve their performance over time.',
    link: 'https://github.com/WillMarcuss/Pac-Man-RL-Project'
  },
  {
    title: 'Finance Tracker',
    description: 'Finance Tracker is a modern financial management application that helps users track their expenses, manage budgets, and analyze spending habits with visual reports and statistical insights.',
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
