// src/pages/Projects.js

import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Health and Fitness Club Management System',
    description: 'This project is a management system that allows three users: Members, Trainers, and Admins to access their respective dashboard, and manage their functionalities such as registering, booking classes, PT sessions, etc.',
    link: 'https://github.com/WillMarcuss/Health-and-Fitness-Club-Management-System'
  },
  {
    title: 'Recipe Search',
    description: 'This project is a tool that allows users to search for recipes based on various parameters such as ingredients, type of meal, calories, etc, using the Edamam API.',
    link: 'https://github.com/WillMarcuss/RecipeSearch'
  },
  {
    title: 'Translator Chrome Extension',
    description: 'This project is a simple implementation of a google translator chrome extension that allows you to use google translate as a chrome extension.',
    link: 'https://github.com/WillMarcuss/Translator-Chrome-Extension'
  }
];

const Projects = () => {
  return (
    <div className={styles['projects-container']}>
      <h2 className={styles['projects-heading']}>My Projects</h2>
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
