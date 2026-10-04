<template>
  <div id="app-root">
    <TheNavbar :isDark="isDark" @toggle-theme="toggleTheme" />

    <main>
      <RouterView v-slot="{ Component, route: r }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="r.name" />
        </Transition>
      </RouterView>
    </main>

    <TheFooter />

    <!-- Scroll-advance indicator -->
    <Transition name="hint-fade">
      <div v-if="nearBottom && hasNext" class="scroll-hint">
        <div class="scroll-hint__track">
          <div class="scroll-hint__bar" :style="{ width: progress + '%' }"></div>
        </div>
        <span class="scroll-hint__label">Next: {{ nextLabel }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import { useScrollAdvance } from './composables/useScrollAdvance.js'

const route = useRoute()
const router = useRouter()

const ROUTE_ORDER = ['home', 'about', 'services', 'portfolio', 'team', 'contact']
const ROUTE_LABELS = {
  home: 'Home', about: 'About', services: 'Services',
  portfolio: 'Portfolio', team: 'Team', contact: 'Contact',
}

// ── Direction-aware transition ──
const transitionName = ref('slide-left')
let prevOrder = 0

router.beforeEach((to, from) => {
  const toOrder = to.meta?.order ?? 0
  const fromOrder = from.meta?.order ?? 0
  transitionName.value = toOrder >= fromOrder ? 'slide-left' : 'slide-right'
  prevOrder = toOrder
})

// ── Scroll-advance ──
const { progress, nearBottom } = useScrollAdvance()

const hasNext = computed(() => {
  const idx = ROUTE_ORDER.indexOf(route.name)
  return idx !== -1 && idx < ROUTE_ORDER.length - 1
})

const nextLabel = computed(() => {
  const idx = ROUTE_ORDER.indexOf(route.name)
  if (idx === -1 || idx >= ROUTE_ORDER.length - 1) return ''
  return ROUTE_LABELS[ROUTE_ORDER[idx + 1]]
})

// ── Theme ──
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
  setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 450)
}

onMounted(() => {
  isDark.value = localStorage.getItem('mad-theme') !== 'light'
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
  overflow: hidden;
}

/* ── Page slide transitions ── */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
              opacity   0.42s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

main {
  position: relative;
}

.slide-left-enter-from  { transform: translateX(60px);  opacity: 0; }
.slide-left-leave-to    { transform: translateX(-60px); opacity: 0; }

.slide-right-enter-from { transform: translateX(-60px); opacity: 0; }
.slide-right-leave-to   { transform: translateX(60px);  opacity: 0; }

/* ── Scroll-advance hint ── */
.scroll-hint {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 32px 10px 0;
  background: var(--bg-surface);
  border-top: 1px solid var(--border);
}

.scroll-hint__track {
  flex: 1;
  height: 2px;
  background: var(--border);
}

.scroll-hint__bar {
  height: 100%;
  background: var(--accent);
  transition: width 0.05s linear;
  border-radius: 2px;
}

.scroll-hint__label {
  flex-shrink: 0;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-subtle);
  white-space: nowrap;
}

.hint-fade-enter-active,
.hint-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.hint-fade-enter-from,
.hint-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
