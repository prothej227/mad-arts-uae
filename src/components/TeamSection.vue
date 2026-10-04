<template>
  <section class="team section" id="team">
    <!-- Full-bleed tinted band -->
    <div class="team__band" aria-hidden="true"></div>

    <div class="container">
      <div class="team__header">
        <p class="section-label">The People</p>
        <h2 class="section-title">Artisans &amp;<br />Builders Behind the Magic</h2>
        <p class="section-desc">
          A collective of designers, fabricators, scenic artists, and engineers united
          by an obsession with building extraordinary worlds.
        </p>
      </div>

      <div class="team__grid">
        <div class="team__card" v-for="member in team" :key="member.name">
          <div class="team__avatar" :style="{ '--initials-bg': member.color }">
            <span class="team__initials">{{ initials(member.name) }}</span>
            <div class="team__avatar-noise"></div>
          </div>
          <div class="team__card-body">
            <h3 class="team__name">{{ member.name }}</h3>
            <p class="team__role">{{ member.role }}</p>
            <p class="team__bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>

      <div class="team__join">
        <div class="team__join-inner">
          <div>
            <h3 class="team__join-title">Join Our Workshop</h3>
            <p class="team__join-desc">
              We're always looking for skilled fabricators, scenic artists, designers,
              and engineers. If building extraordinary worlds is your calling, we want
              to hear from you.
            </p>
          </div>
          <a href="mailto:careers@madarts.ae" class="team__join-btn">View Open Roles</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: 'Ahmad Al Rashid',
    role: 'Founder & Executive Director',
    bio: 'Ahmad leads MAD Arts with 20+ years in themed entertainment, having overseen landmark projects across the Gulf and South-East Asia.',
    color: '#7a4e28',
  },
  {
    name: 'Nadia Farouq',
    role: 'Head of Concept & Narrative',
    bio: 'Nadia architects the storytelling frameworks behind every environment — translating client visions into detailed world-building briefs.',
    color: '#2d5a4f',
  },
  {
    name: 'Yusuf Al Mansoori',
    role: 'Lead Scenic Artist',
    bio: 'With a background in theatrical set design, Yusuf leads scenic painting and faux-finish work across our most ambitious installations.',
    color: '#4a3d6b',
  },
  {
    name: 'Chen Wei',
    role: 'Head of Fabrication',
    bio: 'Chen oversees our in-house fabrication workshop, leading teams of sculptors and craftspeople to produce world-class scenic structures.',
    color: '#2b4f5e',
  },
  {
    name: 'Reem Al Hamdan',
    role: 'Principal 3D Designer',
    bio: 'Reem converts narrative concepts into detailed 3D environments and technical drawings that guide fabrication and installation.',
    color: '#6b4a3d',
  },
  {
    name: 'Marco Bianchi',
    role: 'Structural & Systems Engineer',
    bio: 'Marco ensures every large-scale structure and animated feature is built safely, precisely, and to the highest engineering standards.',
    color: '#3d6b55',
  },
]

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}
</script>

<style scoped>
.team {
  position: relative;
}

.team__band {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: var(--bg-surface);
  z-index: 0;
}

.team .container {
  position: relative;
  z-index: 1;
}

.team__header {
  max-width: 560px;
  margin-bottom: 64px;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.team__card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.team__card:hover {
  border-color: var(--accent);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.team__avatar {
  width: 100%;
  height: 200px;
  background: var(--initials-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.team__avatar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%);
}

.team__avatar-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E");
  background-size: 150px;
  mix-blend-mode: overlay;
}

.team__initials {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;
}

.team__card-body {
  padding: 24px;
}

.team__name {
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-display);
  color: var(--text);
  margin-bottom: 4px;
}

.team__role {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.team__bio {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

.team__join {
  margin-top: 48px;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 40px 48px;
  background: var(--bg-card);
}

.team__join-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.team__join-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.team__join-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 480px;
}

.team__join-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  background: var(--accent);
  color: #0a0a0a;
  font-size: 13.5px;
  font-weight: 500;
  border-radius: 2px;
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.team__join-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 169, 110, 0.3);
}

@media (max-width: 1024px) {
  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .team__grid {
    grid-template-columns: 1fr;
  }

  .team__join {
    padding: 28px 24px;
  }
}
</style>
