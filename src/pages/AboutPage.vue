<template>
  <div class="about-page">
    <div class="container">
      <h1>About Us</h1>

      <!-- Development Team Section -->
      <section class="team-section">
        <h2>Development Team</h2>

        <!-- Netta's Information -->
        <div class="team-member">
          <h3>Netta Meiri</h3>
          <p class="member-description">
            Third-year student in Software and Information Systems Engineering at Ben-Gurion University (BGU).
            Backend development enthusiast with skills in Node.js, Express, and MongoDB. Passionate about building
            scalable and data-driven applications.
          </p>
        </div>

        <!-- Gil's Information -->
        <div class="team-member">
          <h3>Gil Agmon</h3>
          <p class="member-description">
            Third-year student in Software and Information Systems Engineering at Ben-Gurion University (BGU).
            Specializes in frontend development with Vue.js, Bootstrap-Vue, and SCSS. Interested in UI/UX design and
            creating responsive web applications.
          </p>
        </div>
      </section>

      <!-- Project Overview Section -->
      <section class="project-section">
        <h2>Project Overview</h2>

        <p class="section-description">
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

        <p class="section-description">
          Our mission is to simplify recipe management for users by providing an intuitive and efficient platform. We
          aim to foster a community where users can discover new recipes, save their favorites, and connect with others
          who share their culinary interests.
        </p>
      </section>

      <!-- Technologies Used Section -->
      <section class="technologies-section">
        <h2>Technologies Used</h2>

        <ul class="tech-list">
          <li>Frontend: Vue.js, Bootstrap-Vue, SCSS</li>
          <li>Backend: Node.js, Express, MongoDB</li>
          <li>Other: Axios for API calls, Bootstrap for responsive design, Git for version control</li>
        </ul>
      </section>

      <!-- Technologies Used Section -->
      <section class="previous-projects-section">
        <h2>Previous Projects</h2>

        <ul class="tech-list">
          <li>Netta: <a href="https://wed-2023.github.io/318305570/" target="_blank">https://wed-2023.github.io/318305570/</a></li>
          <li>Gil: <a href="https://github.com/WED-2023/207234428.git" target="_blank">https://github.com/WED-2023/207234428.git</a></li>
        </ul>
      </section>

      <!-- Contact Us Section -->
      <section class="contact-section">
        <h2>Contact Us</h2>

        <ul class="contact-list">
          <li>
            <b-icon icon="envelope" scale="1.2"></b-icon> <a href="mailto:nettamei@post.bgu.ac.il">nettamei@post.bgu.ac.il</a> 
            <br>
            <b-icon icon="envelope" scale="1.2"></b-icon> <a href="mailto:gilagm@post.bgu.ac.il">gilagm@post.bgu.ac.il</a>
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
  max-width: 700px;
  margin: 20px auto;
  padding: 2rem;
  background-color: rgba(44, 44, 46, 0.8); /* Transparent background */
  color: #fff;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.about-page {
  padding-top: 3px; 
  padding-bottom: 3px;
  min-height: calc(100vh - 80px); 
}

.team-section,
.project-section,
.mission-section,
.technologies-section,
.contact-section {
  margin-bottom: 40px;
}

.team-member h3 {
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 10px;
}

.member-description {
  color: #fff;
  line-height: 1.6;
}

.section-description {
  color: #fff;
  line-height: 1.6;
}

.tech-list {
  list-style-type: disc;
  margin-left: 20px;
  color: #fff;
}

.contact-list {
  list-style-type: none;
  padding-left: 0;
  color: #007bff;
}

.contact-list a {
  color: #007bff;
  text-decoration: none;
}

.contact-list a:hover {
  text-decoration: underline;
}

</style>
