<template>
  <section class="contact section" id="contact">
    <div class="container">
      <div class="contact__layout">
        <!-- Left: Info -->
        <div class="contact__info">
          <p class="section-label">Get In Touch</p>
          <h2 class="section-title">Build Your World<br />With Us</h2>
          <p class="contact__desc">
            Have a themed environment, sculpture, or scenic art project in mind?
            Tell us your vision — our team is ready to bring it to life.
          </p>

          <div class="contact__details">
            <a href="mailto:hello@madarts.ae" class="contact__detail">
              <span class="contact__detail-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span>hello@madarts.ae</span>
            </a>
            <a href="tel:+97142000000" class="contact__detail">
              <span class="contact__detail-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span>+971 4 200 0000</span>
            </a>
            <div class="contact__detail">
              <span class="contact__detail-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span>Ash Shallal 1 Street, Musaffah, 51<br />Abu Dhabi 20307, United Arab Emirates</span>
            </div>
          </div>

          <div class="contact__social">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              class="contact__social-link"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              v-html="social.icon"
            ></a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact__form-wrap">
          <form class="contact__form" @submit.prevent="handleSubmit" novalidate>
            <div class="contact__form-row">
              <div class="contact__field">
                <label class="contact__label" for="c-name">Name</label>
                <input
                  id="c-name"
                  v-model="form.name"
                  class="contact__input"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div class="contact__field">
                <label class="contact__label" for="c-email">Email</label>
                <input
                  id="c-email"
                  v-model="form.email"
                  class="contact__input"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div class="contact__field">
              <label class="contact__label" for="c-service">Service</label>
              <select id="c-service" v-model="form.service" class="contact__input contact__select">
                <option value="" disabled>Select a service</option>
                <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <div class="contact__field">
              <label class="contact__label" for="c-message">Message</label>
              <textarea
                id="c-message"
                v-model="form.message"
                class="contact__input contact__textarea"
                placeholder="Tell us about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="contact__submit" :disabled="submitted">
              <span v-if="!submitted">Send Message</span>
              <span v-else class="contact__sent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Sent — We'll be in touch!
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', service: '', message: '' })
const submitted = ref(false)

const serviceOptions = [
  'Themed Environment Design',
  'Sculpture & Fabrication',
  'Scenic Painting & Artistry',
  'Theme Park Attraction Theming',
  'Decorative & Ornamental Works',
  'Experiential Retail & Hospitality',
  'Other / Consultation',
]

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/madarts.ae',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/mad-arts',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/madarts_ae',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>',
  },
  {
    name: 'Behance',
    href: 'https://behance.net/madarts',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h8a3 3 0 1 1 0 6H3V6h7a3 3 0 1 1 0 6"/><line x1="14" y1="9" x2="22" y2="9"/><path d="M14 14h8"/></svg>',
  },
]

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  submitted.value = true
  setTimeout(() => {
    form.value = { name: '', email: '', service: '', message: '' }
    submitted.value = false
  }, 4000)
}
</script>

<style scoped>
.contact__layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: start;
}

.contact__desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 400px;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
}

.contact__detail {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
  text-decoration: none;
}

a.contact__detail:hover {
  color: var(--accent);
}

.contact__detail-icon {
  color: var(--accent);
  margin-top: 1px;
  flex-shrink: 0;
}

.contact__social {
  display: flex;
  gap: 12px;
}

.contact__social-link {
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition:
    border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact__social-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: scale(1.12);
  background: rgba(200, 169, 110, 0.08);
}

.contact__form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 40px;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact__form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact__label {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-subtle);
}

.contact__input {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 14px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.2s ease;
  width: 100%;
  -webkit-appearance: none;
}

.contact__input::placeholder {
  color: var(--text-subtle);
}

.contact__input:focus {
  border-color: var(--accent);
}

.contact__select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
}

.contact__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact__submit {
  background: var(--accent);
  color: #0a0a0a;
  border: none;
  border-radius: 2px;
  padding: 14px 28px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition:
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact__submit:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 169, 110, 0.3);
}

.contact__submit:disabled {
  background: var(--bg-card);
  border: 1px solid var(--accent);
  color: var(--accent);
  cursor: not-allowed;
}

.contact__sent {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 1024px) {
  .contact__layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 580px) {
  .contact__form-wrap {
    padding: 24px 20px;
  }

  .contact__form-row {
    grid-template-columns: 1fr;
  }
}
</style>
