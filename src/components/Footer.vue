<template>
  <footer class="container-fluid bg-black border-top border-secondary py-4">
    <div class="container">
      <div class="row align-items-center gy-3">
        <div class="col-md-6 text-center text-md-start">
          <p class="text-secondary mb-0">
            &copy; {{ new Date().getFullYear() }}
            Ude David Luter. All rights reserved.
          </p>
        </div>

        <div class="col-md-6 text-center text-md-end">
          <RouterLink to="/" class="text-success text-decoration-none">
            Home <i class="bi bi-house-fill ms-1"></i>
          </RouterLink>

          <span class="text-secondary ms-3">Built with Vue.js</span>
        </div>
      </div>
    </div>
  </footer>
</template>
