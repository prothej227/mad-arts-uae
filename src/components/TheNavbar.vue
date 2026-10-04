<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar__inner">
      <RouterLink :to="{ name: 'home' }" class="navbar__logo" aria-label="MAD Arts home">
        <img src="/src/assets/logo.avif" alt="MAD Arts" class="navbar__logo-img" />
      </RouterLink>

      <nav class="navbar__links" aria-label="Main navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="navbar__link"
          active-class="navbar__link--active"
        >{{ item.label }}</RouterLink>
      </nav>

      <div class="navbar__controls">
        <button
          class="navbar__theme-btn"
          @click="$emit('toggle-theme')"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span v-if="isDark" class="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </span>
          <span v-else class="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </span>
        </button>

        <RouterLink :to="{ name: 'contact' }" class="navbar__cta">Get in Touch</RouterLink>

        <button
          class="navbar__hamburger"
          @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
        >
          <span :class="{ open: mobileOpen }"></span>
          <span :class="{ open: mobileOpen }"></span>
          <span :class="{ open: mobileOpen }"></span>
        </button>
      </div>
    </div>

    <div class="navbar__mobile" :class="{ active: mobileOpen }">
      <nav>
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="navbar__mobile-link"
          active-class="navbar__mobile-link--active"
          @click="mobileOpen = false"
        >{{ item.label }}</RouterLink>
        <RouterLink
          :to="{ name: 'contact' }"
          class="navbar__mobile-cta"
          @click="mobileOpen = false"
        >Get in Touch</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  isDark: { type: Boolean, default: true },
})
defineEmits(['toggle-theme'])

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { label: 'About', name: 'about' },
  { label: 'Services', name: 'services' },
  { label: 'Work', name: 'portfolio' },
  { label: 'Team', name: 'team' },
  { label: 'Contact', name: 'contact' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  background: transparent;
  transition: background 0.3s ease, padding 0.3s ease, border-bottom 0.3s ease;
}

.navbar.scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 14px 0;
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar__logo {
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
  filter: brightness(1);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
}

.navbar__link {
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  position: relative;
  padding-bottom: 2px;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.25s ease;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--text);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 100%;
}

.navbar__controls {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 32px;
}

.navbar__theme-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar__theme-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(200, 169, 110, 0.08);
  transform: rotate(20deg) scale(1.08);
}

.navbar__theme-btn:active {
  transform: rotate(180deg) scale(0.92);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  padding: 9px 20px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 2px;
  transition:
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar__cta:hover {
  background: var(--accent);
  color: #0a0a0a;
  transform: translateY(-1px);
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.navbar__hamburger span.open:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.navbar__hamburger span.open:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger span.open:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.navbar__mobile {
  display: none;
  flex-direction: column;
  padding: 0 20px 20px;
  background: var(--bg-surface);
  border-top: 1px solid var(--border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

.navbar__mobile.active {
  max-height: 400px;
}

.navbar__mobile-link,
.navbar__mobile-cta {
  display: block;
  padding: 14px 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
}

.navbar__mobile-link:hover,
.navbar__mobile-cta:hover {
  color: var(--accent);
}

.navbar__mobile-cta {
  border-bottom: none;
  color: var(--accent);
  margin-top: 8px;
}

@media (max-width: 900px) {
  .navbar__links {
    display: none;
  }
  .navbar__cta {
    display: none;
  }
  .navbar__hamburger {
    display: flex;
  }
  .navbar__mobile {
    display: flex;
  }
  .navbar__controls {
    margin-left: auto;
  }
}
</style>
