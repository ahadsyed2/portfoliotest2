import React from 'react';

export default function Page() {
  return (
    <div>
      <section style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Ahad Syed
        </h1>
        <p className="mb-4">
          As a recent computer science graduate, I bring a solid foundation in coding with Java and C, alongside proficiency in web development and database languages such as MongoDB and SQL. 
          My previous roles involved SSD and GPU testing for industry giants like Intel and Nvidia. 
          With a keen interest in software engineering and information technology, I'm eager to leverage my skills and experience in dynamic professional environments.
        </p>
        
      </section>
      <section style={{ textAlign: 'center' }}>
      <p className="mb-4">
          Download my resume <a href="URL-of-your-pdf" download>here</a>.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="box" style={{ width: '45%' }}>
            <h2>Relevant Courses</h2>
            <ul>
              <li>Operating System Principles and Programming (Linux)</li>
              <li>Object Oriented Programming in Java</li>
              <li>Advanced Database Management</li>
              <li>Computer Networking</li>
              {/* Add more relevant courses */}
            </ul>
          </div>
          <div className="box" style={{ width: '45%' }}>
            <h2>Notable Skills</h2>
            <ul>
              <li>Proficient in Java and C programming</li>
              <li>SQL and MongoDB</li>
              <li>web development using MERN stack</li>
              <li>Thorough Linux/Windows experience</li>
              <li>AWS S3 buckets</li>
              <li>Computer Hardware setup/drive testing</li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
