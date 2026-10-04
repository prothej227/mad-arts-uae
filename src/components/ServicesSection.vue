<template>
  <section class="services section" id="services">
    <div class="container">
      <div class="services__header">
        <div>
          <p class="section-label">What We Do</p>
          <h2 class="section-title">Immersive Worlds,<br />Built to Last</h2>
        </div>
        <p class="section-desc">
          From concept to construction, we design and fabricate themed environments
          that transport visitors into extraordinary, unforgettable worlds.
        </p>
      </div>

      <div class="services__grid">
        <div
          class="services__card"
          v-for="(service, i) in services"
          :key="service.title"
        >
          <div class="services__card-top">
            <span class="services__card-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="services__card-icon mat-icon" aria-hidden="true">{{ service.icon }}</span>
          </div>
          <h3 class="services__card-title">{{ service.title }}</h3>
          <p class="services__card-desc">{{ service.desc }}</p>
          <ul class="services__card-list">
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Themed Environment Design',
    icon: 'holiday_village',
    desc: 'We design immersive themed spaces that transport visitors into entirely new worlds — from fantasy realms to cultural landscapes.',
    items: ['Concept & Narrative Development', 'Architectural Theming', 'Scenic Layout Planning', '3D Visualisation'],
  },
  {
    title: 'Sculpture & Fabrication',
    icon: 'emoji_nature',
    desc: 'Our in-house fabrication team sculpts and builds custom props, statues, and large-format scenic elements with expert craftsmanship.',
    items: ['Custom Sculptures', 'Fibreglass & Foam Structures', 'Large-Format Props', 'Armature & Steel Frameworks'],
  },
  {
    title: 'Scenic Painting & Artistry',
    icon: 'brush',
    desc: 'Hand-crafted scenic painting transforms surfaces and structures into living stories — from rock faces to ancient ruins and lush forests.',
    items: ['Faux Finish Techniques', 'Mural & Backdrop Painting', 'Texture & Ageing Effects', 'Trompe-l\'oeil Artistry'],
  },
  {
    title: 'Theme Park Attractions',
    icon: 'attractions',
    desc: 'We design and theme complete ride environments, dark rides, and attraction interiors that captivate guests from queue to exit.',
    items: ['Ride Environment Theming', 'Queue Line Design', 'Dark Ride Scenery', 'Interactive Show Sets'],
  },
  {
    title: 'Decorative & Ornamental Works',
    icon: 'local_florist',
    desc: 'From ornate architectural details to decorative installations, we craft bespoke elements that enrich any space with artistry and character.',
    items: ['Ornamental Metalwork', 'Decorative Plasterwork', 'Custom Furniture & Fixtures', 'Feature Walls & Ceilings'],
  },
  {
    title: 'Experiential Retail & Hospitality',
    icon: 'store',
    desc: 'We transform retail and hospitality spaces into destination experiences, embedding storytelling into every surface, fixture, and flow.',
    items: ['Concept Retail Environments', 'Restaurant & Hotel Theming', 'Pop-Up Installations', 'Brand Experience Spaces'],
  },
]
</script>

<style scoped>
.services__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 64px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.services__card {
  background: var(--bg);
  padding: 36px 32px;
  position: relative;
  cursor: default;
  transition:
    background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.services__card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 32px;
  right: 32px;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.services__card:hover {
  background: var(--bg-card);
}

.services__card:hover::after {
  transform: scaleX(1);
}

.services__card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.services__card-num {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-subtle);
}

.services__card-icon {
  font-size: 26px !important;
  color: var(--accent);
  opacity: 0.8;
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.services__card:hover .services__card-icon {
  opacity: 1;
  transform: scale(1.15) rotate(-6deg);
}

.services__card-title {
  font-size: 1.1rem;
  font-weight: 700;
  font-family: var(--font-display);
  color: var(--text);
  margin-bottom: 12px;
  transition: color 0.2s ease;
}

.services__card:hover .services__card-title {
  color: var(--accent);
}

.services__card-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 20px;
}

.services__card-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.services__card-list li {
  font-size: 12.5px;
  color: var(--text-subtle);
  padding-left: 16px;
  position: relative;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.services__card-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 10px;
  transition: left 0.2s ease;
}

.services__card:hover .services__card-list li {
  color: var(--text-muted);
  padding-left: 20px;
}

.services__card:hover .services__card-list li::before {
  left: 2px;
}

@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services__header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .services__grid {
    grid-template-columns: 1fr;
  }

  .services__card {
    padding: 28px 20px;
  }

  .services__card::after {
    left: 20px;
    right: 20px;
  }
}
</style>
