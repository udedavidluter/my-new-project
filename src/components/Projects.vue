<script setup>
const projects = [
  {
    name: "Portifolio Website",
    description: "A Portifolio website showing detail information .",
    icon: "bi-water",
    category: "Portifolio Website",
    technologies: ["Vue.js", "Bootstrap"],
    color: "bg-primary",
    link: "",
  },
  {
    name: "MDB FITS",
    description:
      "A modern business website featuring filling Hoes,clothes and baga services and responsive navigation.",
    icon: "bi-fuel-pump-fill",
    category: "Business Website",
    technologies: ["Vue.js", "Bootstrap"],
    color: "bg-danger",
    link: "",
  },
  {
    name: "SimpleStore E-commerce",
    description:
      "An online store concept with products, shopping cart, authentication, and Firebase.",
    icon: "bi-bag-check-fill",
    category: "E-commerce",
    technologies: ["Vue.js", "Firebase"],
    color: "bg-success",
    link: "",
  },
];
</script>

<template>
  <section class="container-fluid bg-black py-5">
    <div class="container">
      <div class="mb-5">
        <h2 class="fw-bold">My <span class="text-success">Projects</span></h2>
        <p class="text-secondary">
          Some of the websites and applications I have been building.
        </p>
        <hr class="border-success border-3 w-25" />
      </div>

      <div class="row g-4">
        <div
          v-for="project in projects"
          :key="project.name"
          class="col-md-6 col-lg-4"
        >
          <div class="card bg-dark text-light border-secondary h-100">
            <div :class="['card-body', project.color, 'text-center', 'py-5']">
              <i :class="['bi', project.icon, 'display-1']"></i>
              <h3 class="mt-3 fw-bold">{{ project.category }}</h3>
            </div>

            <div class="card-body d-flex flex-column">
              <h4 class="card-title">{{ project.name }}</h4>
              <p class="card-text text-secondary">{{ project.description }}</p>

              <div class="mb-3">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="badge bg-success me-2"
                >
                  {{ technology }}
                </span>
              </div>

              <div class="mt-auto">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline-success rounded-pill"
                >
                  View Project <i class="bi bi-box-arrow-up-right ms-2"></i>
                </a>

                <span v-else class="text-secondary small">
                  Project link coming soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
