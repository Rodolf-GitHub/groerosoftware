<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="
      scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-md shadow-blue-400/5'
        : 'bg-gradient-to-r from-white/60 via-blue-50/40 to-cyan-50/40 backdrop-blur-sm'
    "
  >
    <nav class="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2.5 group">
        <img
          src="/groerosoftwareminilogo.png"
          alt="Groero Software"
          class="h-9 transition-transform duration-300 group-hover:scale-105"
        />
        <span
          class="text-lg font-bold bg-gradient-to-r from-navy-900 to-blue-700 bg-clip-text text-transparent"
          >Groero Software</span
        >
      </a>

      <!-- Links desktop -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <li>
          <a
            href="#servicios"
            class="relative py-1 transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >Servicios</a
          >
        </li>
        <li>
          <a
            href="#nosotros"
            class="relative py-1 transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >Nosotros</a
          >
        </li>
        <li>
          <a
            href="#proyectos"
            class="relative py-1 transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >Proyectos</a
          >
        </li>
        <li>
          <a
            href="#contacto"
            class="relative py-1 transition-colors duration-300 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >Contacto</a
          >
        </li>
      </ul>

      <!-- CTA desktop -->
      <a
        href="https://wa.me/59891854199?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-navy-800 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03]"
      >
        Hablemos
      </a>

      <!-- Hamburger mobile -->
      <button
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        @click="isOpen = !isOpen"
        aria-label="Menú"
      >
        <span
          class="block h-0.5 w-6 rounded-full bg-navy-900 transition-all duration-300 origin-center"
          :class="isOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 rounded-full bg-navy-900 transition-all duration-300"
          :class="isOpen ? 'opacity-0 scale-0' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 rounded-full bg-navy-900 transition-all duration-300 origin-center"
          :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </nav>

    <!-- Menu mobile -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3 scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-3 scale-[0.98]"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-gradient-to-b from-white/95 to-blue-50/90 backdrop-blur-xl border-t border-blue-100/60 shadow-xl shadow-blue-400/5"
      >
        <ul class="flex flex-col px-6 py-4 gap-1 text-sm font-medium text-slate-700">
          <li>
            <a
              href="#servicios"
              class="block py-3 px-3 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50/60"
              @click="isOpen = false"
              >Servicios</a
            >
          </li>
          <li>
            <a
              href="#nosotros"
              class="block py-3 px-3 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50/60"
              @click="isOpen = false"
              >Nosotros</a
            >
          </li>
          <li>
            <a
              href="#proyectos"
              class="block py-3 px-3 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50/60"
              @click="isOpen = false"
              >Proyectos</a
            >
          </li>
          <li>
            <a
              href="#contacto"
              class="block py-3 px-3 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50/60"
              @click="isOpen = false"
              >Contacto</a
            >
          </li>
          <li class="pt-2 pb-1">
            <a
              href="https://wa.me/59891854199?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center rounded-xl bg-gradient-to-r from-navy-800 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:brightness-110"
              @click="isOpen = false"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
