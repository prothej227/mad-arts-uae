<template>
  <section class="about section" id="about">
    <div class="container">
      <div class="about__layout">
        <!-- Left: Image collage -->
        <div class="about__visuals">
          <div class="about__img about__img--main">
            <div class="about__img-inner">
              <span class="about__img-label">Est. 2009 · Dubai</span>
            </div>
          </div>
          <div class="about__img about__img--small">
            <div class="about__img-inner about__img-inner--accent">
              <span class="about__img-label">Fabrication Workshop</span>
            </div>
          </div>
          <div class="about__badge">
            <span class="about__badge-value">300+</span>
            <span class="about__badge-label">Projects</span>
          </div>
        </div>

        <!-- Right: Text -->
        <div class="about__text">
          <p class="section-label">Who We Are</p>
          <h2 class="section-title">Crafting Worlds<br />Filled With Wonder</h2>
          <p class="about__body">
            MAD Arts is a Dubai-based studio specialising in the design and construction of
            immersive themed environments. From concept development to fabrication and
            installation, we create destinations that captivate the senses and ignite
            the imagination.
          </p>
          <p class="about__body">
            Our bespoke theming solutions blend storytelling, architecture, scenic artistry,
            and precision engineering — delivering fantasy landscapes, cultural experiences,
            entertainment venues, and experiential retail spaces for clients across the
            UAE and beyond.
          </p>

          <div class="about__pillars">
            <div class="about__pillar" v-for="pillar in pillars" :key="pillar.title">
              <span class="about__pillar-icon mat-icon" aria-hidden="true">{{ pillar.icon }}</span>
              <div>
                <h4 class="about__pillar-title">{{ pillar.title }}</h4>
                <p class="about__pillar-desc">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>

          <RouterLink :to="{ name: 'services' }" class="about__cta">
            Explore What We Do
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const pillars = [
  {
    icon: 'architecture',
    title: 'Concept to Construction',
    desc: 'We own every phase — from narrative concept and 3D design through to physical fabrication and on-site installation.',
  },
  {
    icon: 'palette',
    title: 'Scenic Artistry',
    desc: 'Our artisans craft hand-painted backdrops, custom sculptures, and bespoke decorative elements that bring stories to life.',
  },
  {
    icon: 'park',
    title: 'Destination Experiences',
    desc: 'Whether theme parks, cultural attractions, or retail worlds — every space is uniquely crafted to inspire and delight.',
  },
]
</script>

<style scoped>
.about__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about__visuals {
  position: relative;
  height: 500px;
}

.about__img {
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
}

.about__img--main {
  top: 0;
  left: 0;
  width: 75%;
  height: 70%;
}

.about__img--small {
  bottom: 0;
  right: 0;
  width: 55%;
  height: 45%;
}

.about__img-inner {
  width: 100%;
  height: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: flex-end;
  padding: 16px;
  position: relative;
}

.about__img-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, var(--bg-surface) 0%, var(--bg-card) 100%);
}

.about__img-inner--accent::before {
  background: linear-gradient(160deg, #1c1400 0%, #2e2100 100%);
}

html:not(.dark) .about__img-inner--accent::before {
  background: linear-gradient(160deg, #f0e4c0 0%, #e0cc96 100%);
}

.about__img-label {
  position: relative;
  z-index: 1;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-subtle);
}

.about__img-inner--accent .about__img-label {
  color: var(--accent);
}

.about__badge {
  position: absolute;
  top: 62%;
  left: 60%;
  background: var(--accent);
  color: #0a0a0a;
  border-radius: 4px;
  padding: 16px 20px;
  text-align: center;
  z-index: 2;
  transform: rotate(3deg);
  box-shadow: 0 8px 32px rgba(200, 169, 110, 0.25);
}

.about__badge-value {
  display: block;
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1;
}

.about__badge-label {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 4px;
}

.about__body {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.about__pillars {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 36px 0;
  padding: 28px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.about__pillar {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.about__pillar:hover {
  transform: translateX(4px);
}

.about__pillar-icon {
  font-size: 22px;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 1px;
}

.about__pillar-title {
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-sans);
  color: var(--text);
  margin-bottom: 3px;
}

.about__pillar-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.6;
}

.about__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.04em;
  transition: gap 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.25s ease;
}

.about__cta:hover {
  gap: 14px;
  opacity: 0.85;
}

@media (max-width: 900px) {
  .about__layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about__visuals {
    height: 320px;
  }
}
</style>
