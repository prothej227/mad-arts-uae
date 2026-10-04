<template>
  <section class="portfolio section" id="portfolio">
    <div class="container">
      <div class="portfolio__header">
        <div>
          <p class="section-label">Selected Work</p>
          <h2 class="section-title">Worlds We've<br />Brought to Life</h2>
        </div>
        <div class="portfolio__filters">
          <button
            v-for="cat in categories"
            :key="cat"
            class="portfolio__filter"
            :class="{ active: activeFilter === cat }"
            @click="setFilter(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <TransitionGroup
        tag="div"
        class="portfolio__grid"
        name="card"
      >
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="portfolio__card"
          :class="`portfolio__card--${project.size}`"
        >
          <div class="portfolio__card-visual">
            <div class="portfolio__card-img" :style="{ '--hue': project.hue }">
              <div class="portfolio__card-overlay"></div>
              <div class="portfolio__card-info">
                <span class="portfolio__card-cat">{{ project.category }}</span>
                <h3 class="portfolio__card-title">{{ project.title }}</h3>
                <span class="portfolio__card-year">{{ project.year }}</span>
              </div>
            </div>
          </div>
        </article>
      </TransitionGroup>

      <div class="portfolio__footer">
        <RouterLink :to="{ name: 'contact' }" class="portfolio__cta">
          Start a Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const categories = ['All', 'Theme Parks', 'Sculpture', 'Scenic Art', 'Retail']
const activeFilter = ref('All')

function setFilter(cat) {
  activeFilter.value = cat
}

const projects = [
  { title: 'IMG Worlds of Adventure — Lost Valley Zone', category: 'Theme Parks', year: '2022', size: 'large', hue: '140' },
  { title: 'Legoland Dubai Themed Environments', category: 'Theme Parks', year: '2023', size: 'medium', hue: '210' },
  { title: 'Motiongate Dark Ride Scenery', category: 'Theme Parks', year: '2023', size: 'medium', hue: '265' },
  { title: 'Falcon Sculpture — Yas Island', category: 'Sculpture', year: '2023', size: 'large', hue: '38' },
  { title: 'Heritage Village Figures — Al Ain', category: 'Sculpture', year: '2022', size: 'medium', hue: '30' },
  { title: 'Dubai Mall Fantasy Forest Backdrop', category: 'Scenic Art', year: '2022', size: 'medium', hue: '160' },
  { title: 'Museum of the Future Interior Theming', category: 'Scenic Art', year: '2021', size: 'large', hue: '185' },
  { title: 'Bloomingdale\'s Experiential Retail Pop-Up', category: 'Retail', year: '2023', size: 'medium', hue: '55' },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value)
)
</script>

<style scoped>
.portfolio__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.portfolio__filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.portfolio__filter {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 7px 18px;
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 2px;
  cursor: pointer;
  font-family: var(--font-sans);
  transition:
    background 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio__filter:hover:not(.active) {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 169, 110, 0.18);
}

.portfolio__filter.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #0a0a0a;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(200, 169, 110, 0.28);
}

.portfolio__filter:active {
  transform: scale(0.95) translateY(0);
}

.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  position: relative;
}

.portfolio__card--large {
  grid-column: span 7;
  height: 260px;
}

.portfolio__card--medium {
  grid-column: span 5;
  height: 220px;
}

.portfolio__card:nth-child(3n+1).portfolio__card--large {
  grid-column: span 7;
}
.portfolio__card:nth-child(3n+2).portfolio__card--medium {
  grid-column: span 5;
}
.portfolio__card:nth-child(3n+3) {
  grid-column: span 6;
  height: 220px;
}

.portfolio__card-visual {
  height: 100%;
}

.portfolio__card-img {
  height: 100%;
  background: hsl(var(--hue), 22%, 13%);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

html:not(.dark) .portfolio__card-img {
  background: hsl(var(--hue), 22%, 84%);
}

.portfolio__card-img:hover {
  transform: scale(0.975);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.portfolio__card-img:hover .portfolio__card-overlay {
  opacity: 1;
}

.portfolio__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    transparent 100%
  );
  opacity: 0.55;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

html:not(.dark) .portfolio__card-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.05) 50%,
    transparent 100%
  );
}

.portfolio__card-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 20px 18px;
  z-index: 1;
}

.portfolio__card-cat {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}

.portfolio__card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #f0ede8;
  font-family: var(--font-display);
  line-height: 1.25;
}

.portfolio__card-year {
  display: block;
  font-size: 11px;
  color: rgba(240, 237, 232, 0.5);
  margin-top: 6px;
}

.portfolio__footer {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

.portfolio__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 32px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 2px;
  transition:
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    gap 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio__cta:hover {
  background: var(--accent);
  color: #0a0a0a;
  gap: 14px;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 169, 110, 0.3);
}

@media (max-width: 1024px) {
  .portfolio__card--large,
  .portfolio__card--medium,
  .portfolio__card:nth-child(3n+3) {
    grid-column: span 6;
  }
}

@media (max-width: 700px) {
  .portfolio__grid {
    grid-template-columns: 1fr;
  }

  .portfolio__card--large,
  .portfolio__card--medium,
  .portfolio__card:nth-child(3n+3) {
    grid-column: span 1;
    height: 200px;
  }

  .portfolio__header {
    flex-direction: column;
    align-items: flex-start;
  }
}

.card-enter-active {
  transition:
    opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-leave-active {
  transition:
    opacity 0.18s cubic-bezier(0.4, 0, 1, 1),
    transform 0.18s cubic-bezier(0.4, 0, 1, 1);
  pointer-events: none;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(14px) scale(0.97);
}

.card-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.card-enter-active:nth-child(1)  { transition-delay: 0ms; }
.card-enter-active:nth-child(2)  { transition-delay: 40ms; }
.card-enter-active:nth-child(3)  { transition-delay: 80ms; }
.card-enter-active:nth-child(4)  { transition-delay: 120ms; }
.card-enter-active:nth-child(5)  { transition-delay: 160ms; }
.card-enter-active:nth-child(6)  { transition-delay: 200ms; }
.card-enter-active:nth-child(7)  { transition-delay: 240ms; }
.card-enter-active:nth-child(8)  { transition-delay: 280ms; }
</style>
