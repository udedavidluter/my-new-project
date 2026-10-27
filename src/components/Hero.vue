<template>
  <section class="container py-5 min-vh-100 d-flex align-items-center">
    <div class="row align-items-center w-100">
      <div class="col-md-7">
        <p class="text-success fw-bold mb-2">Hello, I'm</p>

        <h1 class="display-4 fw-bold">
          Ude David <span class="text-success">Luter</span>
        </h1>

        <h2 class="h3 mb-3">Frontend Web Developer</h2>

        <p class="lead text-secondary">
          I am a Computer Science student and aspiring web developer passionate
          about building modern, responsive, and user-friendly websites using
          Vue.js, JavaScript, Bootstrap and firebase.
        </p>

        <button class="btn btn-success me-2" @click="goToSection('projects')">
          View My Projects
        </button>

        <button class="btn btn-outline-light" @click="goToSection('contact')">
          Contact Me
        </button>
      </div>

      <div class="col-md-5 text-center mt-4 mt-md-0">
        <img
          src="/images/david.jpg"
          alt="Ude David Luter profile picture"
          class="img-fluid rounded-circle border border-success border-4 shadow"
          style="width: 250px; height: 250px; object-fit: cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
function goToSection(section) {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
  });
}
</script>
