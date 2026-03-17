import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        strategies: 'generateSW',
        devOptions: {
          enabled: isDev,
          type: 'module',
        },
        includeAssets: [
          'favicon.ico',
          'groerosoftwarelogo.png',
          'groerosoftwareminilogo.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'wide-1280x720.png',
          'narrow-540x720.png',
        ],
        manifest: {
          id: '/',
          name: 'Groero Software',
          short_name: 'Groero',
          description: 'Desarrollo web, software a medida y soluciones digitales para tu negocio.',
          start_url: '/?source=pwa',
          scope: '/',
          display: 'standalone',
          theme_color: '#0a1628',
          background_color: '#ffffff',
          lang: 'es',
          screenshots: [
            {
              src: '/wide-1280x720.png',
              sizes: '1280x720',
              type: 'image/png',
              form_factor: 'wide',
              label: 'Groero Software - Inicio',
            },
            {
              src: '/narrow-540x720.png',
              sizes: '540x720',
              type: 'image/png',
              form_factor: 'narrow',
              label: 'Vista móvil',
            },
          ],
          icons: [
            { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
            { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
            { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico,json}'],
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
