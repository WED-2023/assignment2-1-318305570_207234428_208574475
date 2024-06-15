<template>
    <div class="about-page">
      <div class="container">
        <h1>About Us</h1>
  
        <!-- Development Team Section -->
        <section class="team-section">
          <h2>Development Team</h2>
  
          <!-- Neta's Information -->
          <div class="team-member">
            <h3>Neta Meiri</h3>
            <p>
              Third-year student in Software and Information Systems Engineering at Ben-Gurion University (BGU).
              Backend development enthusiast with skills in Node.js, Express, and MongoDB. Passionate about building
              scalable and data-driven applications.
            </p>
          </div>
  
          <!-- Gil's Information -->
          <div class="team-member">
            <h3>Gil Agmon</h3>
            <p>
              Third-year student in Software and Information Systems Engineering at Ben-Gurion University (BGU).
              Specializes in frontend development with Vue.js, Bootstrap-Vue, and SCSS. Interested in UI/UX design and
              creating responsive web applications.
            </p>
          </div>
        </section>
  
        <!-- Project Overview Section -->
        <section class="project-section">
          <h2>Project Overview</h2>
  
          <p>
            <strong>Project Name:</strong> Recipe Management System
            <br />
            <strong>Description:</strong> Our project aims to provide a platform for users to manage and share recipes.
            It includes features such as recipe creation, search functionality, and user authentication.
            <br />
            <strong>Challenges:</strong> Integrating frontend and backend components seamlessly. Ensuring data security
            and optimizing performance for a smooth user experience.
          </p>
        </section>
  
        <!-- Mission Section -->
        <section class="mission-section">
          <h2>Our Mission</h2>
  
          <p>
            Our mission is to simplify recipe management for users by providing an intuitive and efficient platform. We
            aim to foster a community where users can discover new recipes, save their favorites, and connect with others
            who share their culinary interests.
          </p>
        </section>
  
        <!-- Technologies Used Section -->
        <section class="technologies-section">
          <h2>Technologies Used</h2>
  
          <ul>
            <li>Frontend: Vue.js, Bootstrap-Vue, SCSS</li>
            <li>Backend: Node.js, Express, MongoDB</li>
            <li>Other: Axios for API calls, Bootstrap for responsive design, Git for version control</li>
          </ul>
        </section>
  
        <!-- Contact Us Section -->
        <section class="contact-section">
          <h2>Contact Us</h2>
  
          <ul>
            <li>Email: neta.meiri@example.com, gil.agmon@example.com</li>
            <li>
              GitHub:
              <a href="https://github.com/netameiri" target="_blank">Neta's GitHub</a>,
              <a href="https://github.com/gilagmon" target="_blank">Gil's GitHub</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .team-member {
    margin-bottom: 20px;
  }
  
  .team-member h3 {
    margin-bottom: 10px;
  }
  
  .project-section,
  .mission-section,
  .technologies-section,
  .contact-section {
    margin-bottom: 40px;
  }
  
  .contact-section ul {
    list-style: none;
    padding-left: 0;
  }
  
  .contact-section ul li {
    margin-bottom: 10px;
  }
  
  .contact-section ul li a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  