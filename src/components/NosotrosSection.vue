<template>
  <section id="nosotros" class="bg-slate-50 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <!-- Texto -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Sobre nosotros
          </p>
          <h2 class="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
            Tu socio tecnológico de confianza
          </h2>
          <p class="text-slate-600 leading-relaxed mb-6">
            Groero Software es una empresa de desarrollo fundada por
            <a
              href="https://rodolfogroero.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-navy-800 font-bold underline decoration-blue-400/40 underline-offset-2 transition hover:text-blue-600"
              >Rodolfo Groero</a
            >, Ingeniero Informático y Desarrollador Full Stack Senior con más de 4 años de
            experiencia construyendo plataformas web completas en producción.
          </p>
          <p class="text-slate-600 leading-relaxed mb-8">
            Nos especializamos en convertir ideas en productos digitales reales: desde la captura de
            requerimientos hasta el despliegue, configuración de dominios y optimización SEO.
            Entrega rápida sin comprometer calidad.
          </p>

          <div class="grid grid-cols-3 gap-6">
            <div class="text-center">
              <p
                class="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
              >
                +4
              </p>
              <p class="text-xs text-slate-500 mt-1">Años de experiencia</p>
            </div>
            <div class="text-center">
              <p
                class="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
              >
                100%
              </p>
              <p class="text-xs text-slate-500 mt-1">Proyectos entregados</p>
            </div>
            <div class="text-center">
              <p
                class="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
              >
                1‑3
              </p>
              <p class="text-xs text-slate-500 mt-1">Semanas de entrega</p>
            </div>
          </div>
        </div>

        <!-- Visual -->
        <div class="relative flex justify-center">
          <div class="relative w-full max-w-md">
            <div
              class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-200/30 to-blue-300/20 blur-2xl"
            ></div>
            <div class="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div class="flex items-center gap-4 mb-6">
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-blue-700"
                >
                  <img src="/groerosoftwareminilogo.png" alt="GS" class="h-8" />
                </div>
                <div>
                  <p class="font-bold text-navy-900">Groero Software</p>
                  <p class="text-sm text-slate-500">Montevideo, Uruguay · Remoto</p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg
                    class="h-5 w-5 text-cyan-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-sm text-slate-700">Arquitectura frontend y backend</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg
                    class="h-5 w-5 text-cyan-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-sm text-slate-700">Autenticación, roles y permisos</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg
                    class="h-5 w-5 text-cyan-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-sm text-slate-700">Integración de pagos con Stripe</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg
                    class="h-5 w-5 text-cyan-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-sm text-slate-700">Despliegue en Linux VPS</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg
                    class="h-5 w-5 text-cyan-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-sm text-slate-700">IA aplicada a productos reales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
