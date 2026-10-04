<template>
  <section class="hero" id="home">
    <!-- Background grid -->
    <div class="hero__grid" aria-hidden="true">
      <div v-for="n in 20" :key="n" class="hero__grid-cell"></div>
    </div>

    <!-- Noise overlay -->
    <div class="hero__noise" aria-hidden="true"></div>

    <div class="container hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">Themed Environments & Scenic Artistry · Dubai, UAE</p>

        <h1 class="hero__title">
          We Build<br />
          Worlds That <span class="hero__title-accent">Inspire</span><br />
          Wonder
        </h1>

        <p class="hero__desc">
          MAD Arts designs and constructs immersive themed environments that transport
          visitors into unforgettable worlds — blending storytelling, architecture,
          scenic artistry, and engineering.
        </p>

        <div class="hero__actions">
          <a href="#portfolio" class="hero__btn hero__btn--primary">Explore Our Work</a>
          <a href="#about" class="hero__btn hero__btn--ghost">Our Story</a>
        </div>

        <div class="hero__stats">
          <div class="hero__stat" v-for="stat in stats" :key="stat.label">
            <span class="hero__stat-value">{{ stat.value }}</span>
            <span class="hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero__visual" aria-hidden="true">
        <div class="hero__visual-box hero__visual-box--1">
          <div class="hero__placeholder-img">
            <span>Themed Environments</span>
          </div>
        </div>
        <div class="hero__visual-box hero__visual-box--2">
          <div class="hero__placeholder-img">
            <span>Scenic Fabrication</span>
          </div>
        </div>
        <div class="hero__visual-box hero__visual-box--3">
          <div class="hero__placeholder-img hero__placeholder-img--accent">
            <span>Sculptural Art</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="hero__scroll" aria-hidden="true">
      <span class="hero__scroll-line"></span>
      <span class="hero__scroll-text">Scroll</span>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '15+', label: 'Years of Craft' },
  { value: '200+', label: 'Themed Worlds Built' },
  { value: '30+', label: 'Countries Reached' },
  { value: '50+', label: 'Industry Awards' },
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--bg);
}

.hero__grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  pointer-events: none;
  opacity: 0.4;
}

.hero__grid-cell {
  border: 1px solid var(--border);
}

.hero__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
  opacity: 0.35;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
  position: relative;
  z-index: 1;
}

.hero__eyebrow {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
}

.hero__title {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
}

.hero__title-accent {
  color: var(--accent);
  font-style: italic;
}

.hero__desc {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 440px;
  margin-bottom: 40px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  padding: 13px 28px;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 2px;
  transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
              color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero__btn--primary {
  background: var(--accent);
  color: #0a0a0a;
}

.hero__btn--primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 169, 110, 0.3);
}

.hero__btn--ghost {
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.hero__btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.hero__stats {
  display: flex;
  gap: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero__stat-value {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
}

.hero__stat-label {
  font-size: 11.5px;
  color: var(--text-subtle);
  letter-spacing: 0.06em;
}

.hero__visual {
  position: relative;
  height: 520px;
}

.hero__visual-box {
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
}

.hero__visual-box--1 {
  top: 0;
  left: 0;
  width: 58%;
  height: 55%;
}

.hero__visual-box--2 {
  bottom: 0;
  right: 0;
  width: 58%;
  height: 55%;
}

.hero__visual-box--3 {
  top: 38%;
  left: 30%;
  width: 42%;
  height: 32%;
  z-index: 2;
  transform: rotate(-1.5deg);
}

.hero__placeholder-img {
  width: 100%;
  height: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: flex-end;
  padding: 16px;
  position: relative;
  overflow: hidden;
}

.hero__placeholder-img::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%);
}

.hero__placeholder-img--accent::before {
  background: linear-gradient(135deg, #1a1200 0%, #3a2800 100%);
  opacity: 0.9;
}

html:not(.dark) .hero__placeholder-img--accent::before {
  background: linear-gradient(135deg, #f5e8c8 0%, #e8d4a0 100%);
}

.hero__placeholder-img span {
  position: relative;
  z-index: 1;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-subtle);
}

.hero__placeholder-img--accent span {
  color: var(--accent);
}

.hero__scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--accent));
  animation: scrollPulse 2s ease-in-out infinite;
}

.hero__scroll-text {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-subtle);
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
    padding-top: 140px;
  }

  .hero__visual {
    height: 300px;
  }

  .hero__stats {
    gap: 24px;
  }

  .hero__scroll {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero__stats {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
