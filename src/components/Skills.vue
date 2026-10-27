
<script setup>
const skills = [
  { name: "HTML", icon: "bi-filetype-html", color: "text-danger" },
  { name: "CSS", icon: "bi-filetype-css", color: "text-primary" },
  { name: "JavaScript", icon: "bi-filetype-js", color: "text-warning" },
  { name: "Vue.js", icon: "bi-code-slash", color: "text-success" },
  { name: "Bootstrap", icon: "bi-bootstrap-fill", color: "text-info" },
  { name: "Firebase", icon: "bi-fire", color: "text-warning" },
  { name: "GitHub", icon: "bi-github", color: "text-light" },
  { name: "VS Code", icon: "bi-code-square", color: "text-primary" }
];
</script>

<template>
  <section class="bg-white text-dark py-5">
    <div class="container">

      <!-- Section heading -->
      <div class="mb-5">
        <h2 class="fw-bold display-6">
          My <span class="text-success">Skills</span>
        </h2>

        <p class="text-secondary">
          Technologies I use and continue to improve on.
        </p>

        <hr class="border-success border-3 w-25 opacity-100">
      </div>

      <!-- Skills cards -->
      <div class="row g-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="col-6 col-md-4 col-lg-3"
        >
          <div
            class="card bg-black text-light text-center h-100 border-secondary rounded-3 shadow-sm"
          >
            <div class="card-body py-4">
              <i
                :class="['bi', skill.icon, skill.color, 'display-4']"
              ></i>

              <h5 class="fw-bold mt-3">{{ skill.name }}</h5>

              <p class="text-secondary small mb-0">
                {{ skill.name }} development
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

 
