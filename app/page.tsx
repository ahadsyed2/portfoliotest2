import { BlogPosts } from 'app/components/posts'
import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file where you define background animation styles

export default function Page() {
  const [backgroundColor, setBackgroundColor] = useState('#ff0000'); // Initial background color
  
  // Function to generate a random hex color
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  
  // Update background color every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
    }, 5000); // Change color every 5 seconds
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ backgroundColor: backgroundColor }}>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        As a recent computer science graduate, I bring a solid foundation in coding with Java and C, alongside proficiency in web development and database languages such as MongoDB and SQL. 
        My previous roles involved rigorous SSD and GPU testing for industry giants like Intel and Nvidia. 
        With a keen interest in software engineering and information technology, I'm eager to leverage my skills and experience in dynamic professional environments.
      </p>
      <p className="mb-4">
        Download my resume <a href="URL-of-your-pdf" download>here</a>.
      </p>
      <div className="skills-container">
        <div className="box">
          <h2>Relevant Courses</h2>
          <ul>
            <li>Operating System Principles and Programming (Linux)</li>
            <li>Object Oriented Programming in Jaa</li>
            <li>Adanced Database Management </li>
            <li>Computer Networking</li>
            {/* Add more relevant courses */}
          </ul>
        </div>
        <div className="box">
          <h2>Notable Skills</h2>
          <ul>
            <li>Proficient in Java and C programming </li>
            <li>SQL and MongoDB</li>
            <li>Web Development using MERN stack</li>
            <li>Thorough Linux/Windows experience</li>
            <li>AWS S3 buckets</li>
            <li>Computer Hardware setup/drie testing</li>
            {/* Add more skills */}
          </ul>
        </div>
      </div>
    </section>
  )
}