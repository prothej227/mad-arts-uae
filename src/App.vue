<template>
  <div id="app-root">
    <TheNavbar :isDark="isDark" @toggle-theme="toggleTheme" />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TeamSection from './components/TeamSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'

// Dark mode — default: dark
const isDark = ref(true)

function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
  localStorage.setItem('mad-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.add('theme-transitioning')
  applyTheme(isDark.value)
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transitioning')
  }, 450)
}

onMounted(() => {
  const saved = localStorage.getItem('mad-theme')
  if (saved === 'light') {
    isDark.value = false
  } else {
    isDark.value = true
  }
  applyTheme(isDark.value)
})
</script>

<style>
#app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
