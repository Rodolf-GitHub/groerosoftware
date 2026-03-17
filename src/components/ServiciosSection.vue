<script setup lang="ts">
const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Sitios web modernos, rápidos y optimizados para SEO con las últimas tecnologías.',
    icono: 'globe',
    color: 'cyan',
  },
  {
    titulo: 'Software a Medida',
    descripcion:
      'Aplicaciones personalizadas con arquitectura escalable, roles, permisos y lógica de negocio.',
    icono: 'code',
    color: 'blue',
  },
  {
    titulo: 'Despliegue y Hosting',
    descripcion:
      'Configuración de servidores Linux, dominios y entornos productivos listos para escalar.',
    icono: 'server',
    color: 'blue',
  },
  {
    titulo: 'SEO y Rendimiento',
    descripcion:
      'Optimización para buscadores y velocidad de carga para maximizar tu presencia online.',
    icono: 'chart',
    color: 'cyan',
  },
  {
    titulo: 'IA Aplicada',
    descripcion: 'Integración de inteligencia artificial en tus procesos y productos digitales.',
    icono: 'sparkles',
    color: 'blue',
  },
]
</script>

<template>
  <section id="servicios" class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <p class="text-center text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
        Qué hacemos
      </p>
      <h2 class="text-center text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
        Nuestros servicios
      </h2>
      <p class="text-center text-slate-600 max-w-xl mx-auto mb-16">
        Soluciones completas de punta a punta para llevar tu proyecto del concepto a producción.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(s, i) in servicios"
          :key="i"
          class="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-400/10"
        >
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg"
            :class="s.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-blue-500/10'"
          >
            <!-- Globe -->
            <svg
              v-if="s.icono === 'globe'"
              :class="s.color === 'cyan' ? 'text-cyan-500' : 'text-blue-500'"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.794 1.706-5.279"
              />
            </svg>
            <!-- Code -->
            <svg
              v-else-if="s.icono === 'code'"
              :class="s.color === 'cyan' ? 'text-cyan-500' : 'text-blue-500'"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <!-- Cart -->
            <svg
              v-else-if="s.icono === 'cart'"
              :class="s.color === 'cyan' ? 'text-cyan-500' : 'text-blue-500'"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <!-- Server -->
            <svg
              v-else-if="s.icono === 'server'"
              :class="s.color === 'cyan' ? 'text-cyan-500' : 'text-blue-500'"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm-6.75 0h.008v.008h-.008V17.25z"
              />
            </svg>
            <!-- Chart -->
            <svg
              v-else-if="s.icono === 'chart'"
              :class="s.color === 'cyan' ? 'text-cyan-500' : 'text-blue-500'"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>
            <!-- Sparkles -->
            <svg
              v-else-if="s.icono === 'sparkles'"
              :class="s.color === 'cyan' ? 'text-cyan-500' : 'text-blue-500'"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-navy-900 mb-2">{{ s.titulo }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed">{{ s.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
