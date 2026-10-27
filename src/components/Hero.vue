<template>
  <section class="bg-white text-dark min-vh-100 d-flex align-items-center py-5">
    <div class="container">
      <div class="row align-items-center gy-5">
        <!-- Hero text -->
        <div class="col-md-7">
          <p class="text-success fw-bold text-uppercase mb-3">Hello, I'm</p>

          <h1 class="display-3 fw-bold mb-3">
            Ude David
            <span class="text-success">Luter</span>
          </h1>

          <h2 class="h3 fw-semibold mb-4">Frontend Web Developer</h2>

          <p class="lead text-secondary mb-4">
            I am a Computer Science student and aspiring web developer
            passionate about building modern, responsive, and user-friendly
            websites using Vue.js, JavaScript, Bootstrap, and Firebase.
          </p>

          <div class="d-flex flex-wrap gap-3">
            <button
              class="btn btn-primary btn-lg"
              @click="goToSection('projects')"
            >
              View My Projects
            </button>

            <button
              class="btn btn-success btn-lg"
              @click="goToSection('contact')"
            >
              Contact Me
            </button>
          </div>
        </div>

        <!-- Profile picture -->
        <div class="col-md-5 text-center">
          <img
            src="/images/david.jpg"
            alt="Ude David Luter profile picture"
            class="img-fluid rounded-circle border border-success border-4 shadow"
            style="width: 280px; height: 280px; object-fit: cover"
          />
        </div>
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
