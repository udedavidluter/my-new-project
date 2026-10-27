
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/" @click="goToSection('home')">
        Ude David <span class="text-success">Luter</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#portfolioNavbar"
        aria-controls="portfolioNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="portfolioNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="goToSection('home')">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" @click="goToSection('about')">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/skills" @click="goToSection('skills')">Skills</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/projects" @click="goToSection('projects')">Projects</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" @click="goToSection('contact')">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
function goToSection(section) {
  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth"
  });
}
</script>

