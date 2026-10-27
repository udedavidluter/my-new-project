
import { createRouter, createWebHistory } from "vue-router";

import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Hero",
    component: Hero
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
