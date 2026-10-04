<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container footer__top-inner">
        <div class="footer__brand">
          <a href="#" class="footer__logo-link" aria-label="MAD Arts">
            <img src="/src/assets/logo.avif" alt="MAD Arts" class="footer__logo" />
          </a>
          <p class="footer__tagline">
            Making art that moves people.<br />
            Dubai, UAE — Global reach.
          </p>
        </div>

        <div class="footer__nav-group" v-for="group in footerNav" :key="group.heading">
          <h4 class="footer__nav-heading">{{ group.heading }}</h4>
          <ul class="footer__nav-list">
            <li v-for="item in group.links" :key="item.label">
              <a :href="item.href" class="footer__nav-link">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">© {{ currentYear }} MAD Arts LLC. All rights reserved.</p>
        <div class="footer__legal">
          <a href="#" class="footer__legal-link">Privacy Policy</a>
          <span class="footer__legal-sep">·</span>
          <a href="#" class="footer__legal-link">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const footerNav = [
  {
    heading: 'Services',
    links: [
      { label: 'Themed Environments', href: '#services' },
      { label: 'Sculpture & Fabrication', href: '#services' },
      { label: 'Scenic Painting', href: '#services' },
      { label: 'Theme Park Theming', href: '#services' },
      { label: 'Decorative Works', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About MAD Arts', href: '#about' },
      { label: 'Our Projects', href: '#portfolio' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'hello@madarts.ae', href: 'mailto:hello@madarts.ae' },
      { label: '+971 4 200 0000', href: 'tel:+97142000000' },
      { label: 'Musaffah, Abu Dhabi, UAE', href: '#contact' },
      { label: 'Instagram', href: 'https://instagram.com/madarts.ae' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/mad-arts' },
    ],
  },
]
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
}

.footer__top {
  padding: 72px 0 56px;
}

.footer__top-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer__logo {
  height: 30px;
  width: auto;
  object-fit: contain;
  margin-bottom: 16px;
}

.footer__tagline {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.75;
}

.footer__nav-heading {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-bottom: 16px;
  font-family: var(--font-sans);
}

.footer__nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__nav-link {
  font-size: 13.5px;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.footer__nav-link:hover {
  color: var(--accent);
}

.footer__bottom {
  border-top: 1px solid var(--border);
  padding: 20px 0;
}

.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__copy {
  font-size: 12.5px;
  color: var(--text-subtle);
}

.footer__legal {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer__legal-link {
  font-size: 12.5px;
  color: var(--text-subtle);
  transition: color 0.2s ease;
}

.footer__legal-link:hover {
  color: var(--accent);
}

.footer__legal-sep {
  color: var(--text-subtle);
  font-size: 12px;
}

@media (max-width: 1024px) {
  .footer__top-inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .footer__top-inner {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer__brand {
    grid-column: span 2;
  }

  .footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
