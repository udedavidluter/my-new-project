
<template>
  <div class="bg-dark text-light min-vh-100">
    <NavBar />

    <section id="home">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <Contact />
    </section>

    <section id="footer">
      <Footer />
    </section>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>




