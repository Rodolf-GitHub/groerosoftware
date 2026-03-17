import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-scroll]').forEach((el) => el.classList.add('scroll-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('scroll-visible')

            el.querySelectorAll('[data-stagger]').forEach((child, i) => {
              ;(child as HTMLElement).style.transitionDelay = `${i * 0.06}s`
              child.classList.add('scroll-visible')
            })

            observer?.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    )

    document.querySelectorAll('[data-scroll]').forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
