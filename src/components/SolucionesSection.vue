<script setup lang="ts">
const soluciones = [
  {
    titulo: 'Sitios Web Profesionales',
    descripcion:
      'Mostrá tu negocio en internet con un sitio moderno, rápido y optimizado para móviles. Ideal para empresas, comercios y profesionales que quieren presencia digital de calidad.',
    icono: 'web',
    items: ['Landing pages', 'Sitios corporativos', 'Portafolios', 'Blogs'],
  },
  {
    titulo: 'Tiendas Online',
    descripcion:
      'Vendé tus productos o servicios con una tienda e-commerce completa: catálogo, carrito, pagos integrados y gestión de pedidos.',
    icono: 'cart',
    items: [
      'Catálogo de productos',
      'Checkout con Stripe',
      'Panel de administración',
      'Envíos y stock',
    ],
  },
  {
    titulo: 'Software de Gestión Interna',
    descripcion:
      'Sistemas a medida para organizar y automatizar procesos internos de tu negocio: inventario, clientes, facturación, reportes y más.',
    icono: 'cog',
    items: [
      'CRM y gestión de clientes',
      'Control de inventario',
      'Facturación y reportes',
      'Roles y permisos',
    ],
  },
  {
    titulo: 'Aplicaciones Web a Medida',
    descripcion:
      'Plataformas personalizadas con la lógica exacta que tu negocio necesita. Desde paneles de control hasta sistemas completos con múltiples usuarios.',
    icono: 'puzzle',
    items: [
      'Dashboards interactivos',
      'Integraciones con APIs',
      'Automatización de procesos',
      'Sistemas multiusuario',
    ],
  },
]
</script>

<template>
  <section
    id="soluciones"
    data-scroll
    class="relative bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/40 py-20 sm:py-28"
  >
    <div class="mx-auto max-w-6xl px-6">
      <p class="text-center text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
        Soluciones
      </p>
      <h2 class="text-center text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
        ¿Qué podemos construir para vos?
      </h2>
      <p class="text-center text-slate-600 max-w-2xl mx-auto mb-16">
        Desde un sitio web que muestre tu negocio al mundo hasta software interno que optimice tu
        operación diaria — creamos la solución digital que se adapta a tu necesidad.
      </p>

      <div class="grid gap-8 sm:grid-cols-2">
        <div
          v-for="(s, i) in soluciones"
          :key="i"
          data-stagger
          class="group rounded-2xl border border-blue-100/80 bg-white/70 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-300/80 hover:shadow-lg hover:shadow-blue-400/10 hover:-translate-y-1"
        >
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
          >
            <!-- Web -->
            <svg
              v-if="s.icono === 'web'"
              class="h-6 w-6 text-blue-500"
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
            <!-- Cart -->
            <svg
              v-else-if="s.icono === 'cart'"
              class="h-6 w-6 text-cyan-500"
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
            <!-- Cog -->
            <svg
              v-else-if="s.icono === 'cog'"
              class="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <!-- Puzzle -->
            <svg
              v-else-if="s.icono === 'puzzle'"
              class="h-6 w-6 text-cyan-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.09 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.07c-.865-.065-1.658.577-1.658 1.446v0c0 .628.336 1.19.856 1.502.526.315.856.889.856 1.502s-.33 1.187-.856 1.502a1.67 1.67 0 00-.856 1.502v0c0 .869.793 1.511 1.658 1.446a48.394 48.394 0 014.185-.07.64.64 0 01.657.643v0c0 .355-.186.676-.401.959a1.647 1.647 0 00-.349 1.003c0 1.035 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003a1.746 1.746 0 01-.401-.959v0c0-.374.312-.666.657-.643a48.42 48.42 0 014.185.07c.865.065 1.658-.577 1.658-1.446v0a1.67 1.67 0 00-.856-1.502c-.526-.315-.856-.889-.856-1.502s.33-1.187.856-1.502A1.67 1.67 0 0020.25 7.2v0c0-.869-.793-1.511-1.658-1.446a48.474 48.474 0 01-4.185.07.64.64 0 01-.657-.643v0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-navy-900 mb-2">{{ s.titulo }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-4">{{ s.descripcion }}</p>
          <ul class="grid grid-cols-2 gap-x-4 gap-y-1.5">
            <li
              v-for="item in s.items"
              :key="item"
              class="flex items-center gap-2 text-sm text-slate-600"
            >
              <svg
                class="h-4 w-4 text-cyan-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
