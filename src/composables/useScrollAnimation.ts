import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('scroll-visible')

            el.querySelectorAll('[data-stagger]').forEach((child, i) => {
              ;(child as HTMLElement).style.transitionDelay = `${i * 0.08}s`
              child.classList.add('scroll-visible')
            })

            observer?.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    if (!prefersReduced) {
      document.querySelectorAll('[data-scroll]').forEach((el) => observer!.observe(el))
    } else {
      document.querySelectorAll('[data-scroll]').forEach((el) => el.classList.add('scroll-visible'))
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
