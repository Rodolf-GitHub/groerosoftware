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
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <nav class="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3">
        <img src="/groerosoftwareminilogo.png" alt="Groero Software" class="h-9" />
        <span class="text-lg font-bold text-navy-900 hidden sm:inline">Groero Software</span>
      </a>

      <!-- Links desktop -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <li><a href="#servicios" class="transition hover:text-blue-600">Servicios</a></li>
        <li><a href="#nosotros" class="transition hover:text-blue-600">Nosotros</a></li>
        <li><a href="#proyectos" class="transition hover:text-blue-600">Proyectos</a></li>
        <li><a href="#contacto" class="transition hover:text-blue-600">Contacto</a></li>
      </ul>

      <!-- CTA desktop -->
      <a
        href="https://wa.me/59891854199?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-navy-800 to-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
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
          class="block h-0.5 w-6 bg-navy-900 transition-all duration-300"
          :class="isOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-navy-900 transition-all duration-300"
          :class="isOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-navy-900 transition-all duration-300"
          :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </nav>

    <!-- Menu mobile -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg"
      >
        <ul class="flex flex-col px-6 py-4 gap-1 text-sm font-medium text-slate-700">
          <li>
            <a
              href="#servicios"
              class="block py-3 transition hover:text-blue-600"
              @click="isOpen = false"
              >Servicios</a
            >
          </li>
          <li>
            <a
              href="#nosotros"
              class="block py-3 transition hover:text-blue-600"
              @click="isOpen = false"
              >Nosotros</a
            >
          </li>
          <li>
            <a
              href="#proyectos"
              class="block py-3 transition hover:text-blue-600"
              @click="isOpen = false"
              >Proyectos</a
            >
          </li>
          <li>
            <a
              href="#contacto"
              class="block py-3 transition hover:text-blue-600"
              @click="isOpen = false"
              >Contacto</a
            >
          </li>
          <li class="pt-2 pb-1">
            <a
              href="https://wa.me/59891854199?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center rounded-lg bg-gradient-to-r from-navy-800 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
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
