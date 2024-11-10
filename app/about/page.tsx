import React from 'react';
import styles from './About.module.css'; // Importing the CSS module
import Header from "@/components/Header/Header"
import NavBar from "@/components/NavBAr/navBAr"


const About = () => {
  return (
    <div> <Header></Header>
      <NavBar></NavBar>
    
    <div className={styles.container}>
     
      <p className={styles.introduction}>I am a Full Stack Developer and AI Specialist.</p>

      <section className={styles.section}>
        <h1 className={styles.title}>My HTML/CSS Assignments</h1>
        <p className={styles.description}>Complete the HTML/CSS assignments of Quarter 2 Launchpad:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Periodic Table</li>
       
          <li className={styles.listItem}>Product Cards</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h1 className={styles.title}>TypeScript Assignments</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>Number Guessing Game</li>
          <li className={styles.listItem}>BMI Calculator</li>
          <li className={styles.listItem}>Simple Calculator</li>
          <li className={styles.listItem}>Currency Converter</li>
          <li className={styles.listItem}>TODO List</li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default About;
