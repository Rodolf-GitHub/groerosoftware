<script setup lang="ts">
const proyectos = [
  {
    nombre: 'BB Tito',
    url: 'https://bbtito.com/',
    favicon: 'https://bbtito.com/favicon.ico',
    descripcion:
      'Tienda de moda online con experiencia e-commerce fluida, catálogo y checkout optimizado.',
    tags: ['E-commerce', 'Catálogo', 'Moda'],
  },
  {
    nombre: 'Refrigeración Roberto',
    url: 'https://refrigeracionroberto.com/',
    favicon: 'https://refrigeracionroberto.com/favicon.ico',
    descripcion:
      'Sitio web comercial para taller de refrigeración con enfoque SEO local y diseño profesional.',
    tags: ['SEO', 'Landing', 'Negocio local'],
  },
  {
    nombre: 'Pin-Tin-Tin',
    url: 'https://pin-tin-tin.com/',
    favicon: 'https://pin-tin-tin.com/favicon.ico',
    descripcion:
      'Juego de dominó online multijugador con sistema de pagos y autenticación completa.',
    tags: ['Vue.js', 'Stripe', 'Multijugador'],
  },
]
</script>

<template>
  <section
    id="proyectos"
    data-scroll
    class="relative bg-gradient-to-b from-white via-blue-50/40 to-cyan-50/30 py-20 sm:py-28"
  >
    <div class="mx-auto max-w-6xl px-6">
      <p class="text-center text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
        Portfolio
      </p>
      <h2 class="text-center text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
        Proyectos destacados
      </h2>
      <p class="text-center text-slate-600 max-w-xl mx-auto mb-16">
        Sistemas activos en producción, usados por clientes reales.
      </p>

      <div class="grid gap-8 md:grid-cols-3">
        <a
          v-for="(p, i) in proyectos"
          :key="i"
          data-stagger
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col rounded-2xl border border-blue-100/80 bg-white/70 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-300/80 hover:shadow-lg hover:shadow-blue-400/10 hover:-translate-y-1"
        >
          <div
            class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-slate-200 overflow-hidden"
          >
            <img
              :src="p.favicon"
              :alt="p.nombre"
              class="h-8 w-8 object-contain"
              width="32"
              height="32"
              loading="lazy"
            />
          </div>

          <h3 class="text-lg font-semibold text-navy-900 mb-2 group-hover:text-blue-600 transition">
            {{ p.nombre }}
            <svg
              class="inline h-4 w-4 ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{{ p.descripcion }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in p.tags"
              :key="tag"
              class="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {{ tag }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
