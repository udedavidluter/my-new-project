
<script setup>
import { ref } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const successMessage = ref("");
const errorMessage = ref("");
const sending = ref(false);

async function sendMessage() {
  successMessage.value = "";
  errorMessage.value = "";

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !phone.value.trim() ||
    !message.value.trim()
  ) {
    errorMessage.value = "Please complete all the fields.";
    return;
  }

  sending.value = true;

  try {
    await addDoc(collection(db, "messages"), {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      message: message.value.trim(),
      createdAt: serverTimestamp(),
    });

    successMessage.value = "Thank you! Your message has been sent.";

    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  } catch (error) {
    console.error("Could not save contact message:", error);
    errorMessage.value = "Your message could not be sent. Please try again.";
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <section class="bg-white text-dark py-5">
    <div class="container">

      <!-- Section heading -->
      <div class="mb-5">
        <h2 class="fw-bold display-6">
          Get In <span class="text-success">Touch</span>
        </h2>

        <p class="text-secondary">
          Have a project, question, or opportunity? Feel free to contact me.
        </p>

        <hr class="border-success border-3 w-25 opacity-100" />
      </div>

      <div class="row g-4 g-lg-5">

        <!-- Contact information -->
        <div class="col-lg-5">
          <div class="card bg-black text-light border-secondary rounded-3 shadow-sm h-100">
            <div class="card-body p-4 p-lg-5">
              <h4 class="fw-bold mb-4">Contact Information</h4>

              <div class="d-flex gap-3 mb-4">
                <i class="bi bi-envelope-fill text-success fs-3"></i>
                <div>
                  <h6 class="fw-bold">Email</h6>
                  <p class="text-secondary mb-0 text-break">
                    davidudelife@gmail.com
                  </p>
                </div>
              </div>

              <div class="d-flex gap-3 mb-4">
                <i class="bi bi-geo-alt-fill text-success fs-3"></i>
                <div>
                  <h6 class="fw-bold">Location</h6>
                  <p class="text-secondary mb-0">
                    Makurdi, Benue State, Nigeria
                  </p>
                </div>
              </div>

              <div class="d-flex gap-3">
                <i class="bi bi-code-slash text-success fs-3"></i>
                <div>
                  <h6 class="fw-bold">Availability</h6>
                  <p class="text-secondary mb-0">
                    Open to projects and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="col-lg-7">
          <form
            @submit.prevent="sendMessage"
            class="card bg-black text-light border-secondary rounded-3 shadow-sm h-100"
          >
            <div class="card-body p-4 p-lg-5">

              <h4 class="fw-bold mb-4">Send Me a Message</h4>

              <div class="mb-3">
                <label for="customerName" class="form-label">Your Name</label>
                <input
                  id="customerName"
                  v-model="name"
                  type="text"
                  class="form-control bg-dark text-light border-secondary"
                  placeholder="Enter your name"
                  maxlength="100"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="customerEmail" class="form-label">Your Email</label>
                <input
                  id="customerEmail"
                  v-model="email"
                  type="email"
                  class="form-control bg-dark text-light border-secondary"
                  placeholder="Enter your email"
                  maxlength="254"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="customerPhone" class="form-label">
                  Phone / Contact Number
                </label>
                <input
                  id="customerPhone"
                  v-model="phone"
                  type="tel"
                  class="form-control bg-dark text-light border-secondary"
                  placeholder="Enter your contact number"
                  maxlength="30"
                  required
                />
              </div>

              <div class="mb-4">
                <label for="customerMessage" class="form-label">
                  Your Message
                </label>
                <textarea
                  id="customerMessage"
                  v-model="message"
                  class="form-control bg-dark text-light border-secondary"
                  rows="5"
                  placeholder="Write your message"
                  maxlength="3000"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn btn-success rounded-pill w-100 py-2 fw-semibold"
                :disabled="sending"
              >
                <span v-if="sending">Sending...</span>
                <span v-else>
                  Send Message <i class="bi bi-send-fill ms-2"></i>
                </span>
              </button>

              <p v-if="successMessage" class="text-success mt-3 mb-0">
                {{ successMessage }}
              </p>

              <p v-if="errorMessage" class="text-danger mt-3 mb-0">
                {{ errorMessage }}
              </p>

            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
