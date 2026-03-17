<script setup lang="ts">
const tecnologias = [
  {
    nombre: 'Vue.js',
    url: 'https://vuejs.org/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  },
  {
    nombre: 'Nuxt',
    url: 'https://nuxt.com/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
  },
  {
    nombre: 'React',
    url: 'https://react.dev/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    nombre: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icono:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    nombre: 'FastAPI',
    url: 'https://fastapi.tiangolo.com/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  },
  {
    nombre: 'Django',
    url: 'https://www.djangoproject.com/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  },
  {
    nombre: 'Node.js',
    url: 'https://nodejs.org/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    nombre: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icono:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    nombre: 'Linux',
    url: 'https://kernel.org/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
  {
    nombre: 'Nginx',
    url: 'https://nginx.org/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
  },
  {
    nombre: 'Stripe',
    url: 'https://stripe.com/',
    icono: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
  },
  {
    nombre: 'Git',
    url: 'https://git-scm.com/',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
]
</script>

<template>
  <section
    id="tecnologias"
    class="relative bg-gradient-to-br from-blue-50/40 via-cyan-50/30 to-slate-50 py-20 sm:py-28"
  >
    <div class="mx-auto max-w-6xl px-6">
      <p class="text-center text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
        Stack tecnológico
      </p>
      <h2 class="text-center text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
        Tecnologías que usamos
      </h2>
      <p class="text-center text-slate-600 max-w-xl mx-auto mb-16">
        Herramientas modernas y probadas para construir productos sólidos y escalables.
      </p>

      <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <a
          v-for="(t, i) in tecnologias"
          :key="i"
          :href="t.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-3 rounded-xl border border-blue-100/80 bg-white/70 backdrop-blur-sm p-5 transition-all duration-300 hover:border-blue-300/80 hover:shadow-md hover:shadow-blue-400/10 hover:-translate-y-1"
        >
          <img :src="t.icono" :alt="t.nombre" class="h-10 w-10" />
          <span
            class="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition text-center"
          >
            {{ t.nombre }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
