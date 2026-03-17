<template>
  <section class="relative overflow-hidden">
    <!-- Fondo con degradados azules claros -->
    <div class="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/40"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,180,220,0.12),_transparent_55%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06),_transparent_60%)]"
    ></div>

    <div class="relative mx-auto max-w-6xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-36 text-center">
      <img
        src="/groerosoftwarelogo.png"
        alt="Groero Software"
        class="mx-auto h-28 sm:h-36 mb-10 drop-shadow-lg"
      />

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        <span class="text-navy-900">Creamos el </span>
        <span class="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          software que tu negocio necesita
        </span>
      </h1>

      <p class="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
        Desarrollo web, aplicaciones a medida, e-commerce y soluciones digitales. De la idea al
        producto en producción.
      </p>

      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://wa.me/59891854199?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-navy-800 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]"
        >
          Contactar
        </a>
        <a
          href="#servicios"
          class="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white/60 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-navy-800 transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50"
        >
          Ver servicios
        </a>
      </div>
    </div>
  </section>
</template>
