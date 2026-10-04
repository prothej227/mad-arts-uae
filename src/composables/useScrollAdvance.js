import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const ROUTE_ORDER = ['home', 'about', 'services', 'portfolio', 'team', 'contact']

export function useScrollAdvance() {
  const router = useRouter()
  const route = useRoute()
  const progress = ref(0)
  const nearBottom = ref(false)

  let fillTimer = null
  let fillStart = null
  const FILL_DURATION = 1400

  function nextRoute() {
    const idx = ROUTE_ORDER.indexOf(route.name)
    if (idx === -1 || idx >= ROUTE_ORDER.length - 1) return null
    return ROUTE_ORDER[idx + 1]
  }

  function isPageScrollable() {
    return document.documentElement.scrollHeight > window.innerHeight + 120
  }

  function startFill() {
    if (fillTimer) return
    fillStart = performance.now()
    function tick() {
      const elapsed = performance.now() - fillStart
      progress.value = Math.min((elapsed / FILL_DURATION) * 100, 100)
      if (progress.value < 100) {
        fillTimer = requestAnimationFrame(tick)
      } else {
        fillTimer = null
        const next = nextRoute()
        if (next) router.push({ name: next })
      }
    }
    fillTimer = requestAnimationFrame(tick)
  }

  function cancelFill() {
    if (fillTimer) {
      cancelAnimationFrame(fillTimer)
      fillTimer = null
    }
    progress.value = 0
    nearBottom.value = false
  }

  function onScroll() {
    // Only activate when the user has actually scrolled down
    // and the page is tall enough to require scrolling
    if (window.scrollY < 80 || !isPageScrollable()) {
      cancelFill()
      return
    }

    const scrollBottom = window.scrollY + window.innerHeight
    const docHeight = document.documentElement.scrollHeight
    const atBottom = docHeight - scrollBottom < 48

    nearBottom.value = atBottom

    if (atBottom && nextRoute()) {
      startFill()
    } else {
      cancelFill()
    }
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    cancelFill()
  })

  return { progress, nearBottom }
}
